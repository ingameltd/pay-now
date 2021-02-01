export interface Phone {
    /**
     * Must consist of 2-4 digits preceded by a plus (+) character
     *
     * @type {string}
     * @memberof Phone
     */
    prefix: string;

    /**
     * rest of the number
     *
     * @type {number}
     * @memberof Phone
     */
    number: number;
}
