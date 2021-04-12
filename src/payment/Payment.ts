import { Currency } from '../enums';
import { Buyer } from './Buyer';

/**
 * Payment details
 *
 * @export
 * @interface Payment
 */
export interface Payment {
    /**
     * A positive integer in the smallest currency unit
     * 1256 = 12,56 PLN
     *
     * @type {number}
     * @memberof Payment
     */
    amount: number;

    /**
     * Currency code
     * defaults to "PLN"
     *
     * @type {Currency}
     * @memberof Payment
     */
    currency?: Currency;

    /**
     * Unique identifier given by Merchant to this payment request
     *
     * @type {string}
     * @memberof Payment
     */
    externalId: string;

    /**
     * Payment description displayed in the web interface
     *
     * @type {string}
     * @memberof Payment
     */
    description: string;

    /**
     * The URL that the buyer will be redirected to, after making payment.
     * This URL overrides `return_url` value from PoS configuration.
     *
     * @type {string}
     * @memberof Payment
     */
    continueUrl?: string;

    /**
     * Information about buyer
     *
     * @type {Buyer}
     * @memberof Payment
     */
    buyer: Buyer;
}
