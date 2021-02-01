import { NewPaymentStatus } from "../enums";

export interface PaymentCreatedResponse {
    /**
     * Redirect url
     *
     * @type {string}
     * @memberof PaymentResponse
     */
    redirectUrl: string;

    /**
     * Payment ID
     *
     * @type {string}
     * @memberof PaymentResponse
     */
    paymentId: string;

    /**
     * Status of payment
     *
     * @type {NewPaymentStatus}
     * @memberof PaymentResponse
     */
    status: NewPaymentStatus;
}