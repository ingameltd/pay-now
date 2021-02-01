import Axios, { AxiosInstance } from 'axios';
import { PayNowOptions } from './PayNowOptions';
import { EndpointPayments, ProductionUrl, SandboxUrl } from './endpoints';
import { Payment } from '../payment';
import { v4 as uuidv4 } from 'uuid';
import { calculateHmac, jsonStringify } from '../utils/hash';
import { ErrorResponse, PaymentCreatedResponse } from '../responses';
import { PayNowError } from '../errors';

export class PayNow {
    private apiKey: string
    private signatureKey: string
    private baseUrl: string
    private client: AxiosInstance
    private options: PayNowOptions

    constructor(
        apiKey: string,
        signatureKey: string,
        options: PayNowOptions = { sandbox: false }
    ) {
        this.apiKey = apiKey
        this.signatureKey = signatureKey
        this.options = options
        this.baseUrl = !this.options.sandbox ? ProductionUrl : SandboxUrl;

        this.client = Axios.create({
            baseURL: this.baseUrl,
            headers: {
                'Api-Key': apiKey
            }
        })
    }

    public async createPayment (payment: Payment): Promise<PaymentCreatedResponse> {
        try {
            const paymentRequest = jsonStringify(payment)
            const sign = calculateHmac(this.signatureKey, paymentRequest)

            const { data } = await this.client.post(EndpointPayments, paymentRequest, {
                headers: {
                    'Content-Type': 'application/json',
                    'Signature': sign,
                    'Idempotency-Key': uuidv4()
                }
            })

            return <PaymentCreatedResponse>data
        } catch (error) {
            console.log(error.response)
            if (error.response && error.response.data) {
                const resp = <ErrorResponse>error.response.data
                throw new PayNowError(resp.statusCode, resp.errors)
            }
            // console.log(error)
            throw new PayNowError(-1)
        }
    }
}
