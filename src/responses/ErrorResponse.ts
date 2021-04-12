import { Error } from './Error';

export interface ErrorResponse {
    /**
     * Error
     *
     * @type {Error[]}
     * @memberof ErrorResponse
     */
    errors?: Error[];

    /**
     * Error code
     *
     * @type {number}
     * @memberof ErrorResponse
     */
    statusCode: number;
}
