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
 * Model returned by the api as representation of voucherlines
 * @export
 * @interface PurchaseVoucherLineReadModel
 */
export interface PurchaseVoucherLineReadModel {
    /**
     * Description of the line
     * @type {string}
     * @memberof PurchaseVoucherLineReadModel
     */
    'description'?: string | null;
    /**
     * Vat code for the selected account number. Use Null to use the standard VAT for chosen account.
     * @type {string}
     * @memberof PurchaseVoucherLineReadModel
     */
    'vatCode'?: string | null;
    /**
     * The account number the line books on
     * @type {number}
     * @memberof PurchaseVoucherLineReadModel
     */
    'accountNumber'?: number | null;
    /**
     * Amount on the line excluding VAT
     * @type {number}
     * @memberof PurchaseVoucherLineReadModel
     */
    'amountExclVatValue': number;
    /**
     * Amount on the line including VAT
     * @type {number}
     * @memberof PurchaseVoucherLineReadModel
     */
    'amountInclVatValue': number;
    /**
     * Amount in VAT on the line
     * @type {number}
     * @memberof PurchaseVoucherLineReadModel
     */
    'vatAmountValue': number;
    /**
     * Tag used to suggest account to book on, without #
     * @type {string}
     * @memberof PurchaseVoucherLineReadModel
     */
    'accountTagName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PurchaseVoucherLineReadModel
     */
    'accountWeightTagId'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PurchaseVoucherLineReadModel
     */
    'accountWeightTagVersion'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof PurchaseVoucherLineReadModel
     */
    'accountTagSynonym'?: string | null;
}

