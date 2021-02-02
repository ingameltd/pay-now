import { PaymentStatus } from "../enums";

/**
 * Payment status response
 *
 * @export
 * @interface PaymentStatusResponse
 */
export interface PaymentStatusResponse {
    /**
     * Unique ID of a payment generated by Paynow
     *
     * @type {string}
     * @memberof PaymentStatusResponse
     */
    paymentId: string;

    /**
     * Current status of the payment
     *
     * @type {PaymentStatus}
     * @memberof PaymentStatusResponse
     */
    status: PaymentStatus;
}