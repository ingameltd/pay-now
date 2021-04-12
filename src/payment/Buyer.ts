import { Phone } from './Phone';

export interface Buyer {
    /**
     * email of buyer
     *
     * @type {string}
     * @memberof Buyer
     */
    email: string;

    /**
     * firstname of buyer
     *
     * @type {string}
     * @memberof Buyer
     */
    firstName?: string;

    /**
     * lastname of buyer
     *
     * @type {string}
     * @memberof Buyer
     */
    lastName?: string;

    /**
     * phone of buyer
     *
     * @type {Phone}
     * @memberof Buyer
     */
    phone?: Phone;
}
