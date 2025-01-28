/* tslint:disable */
/* eslint-disable */
/**
 * Dinero API
 * Welcome to our endpoint documentation. Please try to carefully read our general documentation found on <a href=\"https://developer.dinero.dk/\">developer.dinero.dk</a> for information regarding the authorization proces, status and errorcodes, FAQ, Postman tutorial etc. <br><br>Once authorized, you simply add \'Authorization: Bearer <access-token>\' to the header of your requests. On the page below, you\'ll find all our endpoints documented as well as possible, but if you have any questions regarding an endpoint, or an error in the description, please contact us on <a href=\"mailto:api@dinero.dk\">api@dinero.dk.</a> 
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Model for creating a payment
 * @export
 * @interface PaymentCreateModel
 */
export interface PaymentCreateModel {
    /**
     * Your external id  This can be used for ID\'ing in external apps/services e.g. a web shop.  The maximum length is 128 characters
     * @type {string}
     * @memberof PaymentCreateModel
     */
    'externalReference'?: string | null;
    /**
     * The date of the payment. This should be in the format YYYY-MM-DD e.g. 2015-12-02. Defaults to today.
     * @type {string}
     * @memberof PaymentCreateModel
     */
    'paymentDate'?: string | null;
    /**
     * Description. Fx.: \'Payment of invoice\'.
     * @type {string}
     * @memberof PaymentCreateModel
     */
    'description': string;
    /**
     * Amount. Has to be different from 0.
     * @type {number}
     * @memberof PaymentCreateModel
     */
    'amount': number;
    /**
     * Version of the invoice
     * @type {string}
     * @memberof PaymentCreateModel
     */
    'timestamp': string;
    /**
     * Account number of an deposit account
     * @type {number}
     * @memberof PaymentCreateModel
     */
    'depositAccountNumber': number;
    /**
     * Whether the remaining amount of the voucher should be added as a fee.
     * @type {boolean}
     * @memberof PaymentCreateModel
     */
    'remainderIsFee': boolean;
    /**
     * When handling a payment for a voucher with a foreign currency, this property is required.  This property together with Amount will be used to calculate exchange rate.
     * @type {number}
     * @memberof PaymentCreateModel
     */
    'amountInForeignCurrency'?: number | null;
}

