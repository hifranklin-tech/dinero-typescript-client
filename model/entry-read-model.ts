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
 * Accounting Entry
 * @export
 * @interface EntryReadModel
 */
export interface EntryReadModel {
    /**
     * Account number
     * @type {number}
     * @memberof EntryReadModel
     */
    'accountNumber': number;
    /**
     * Account name
     * @type {string}
     * @memberof EntryReadModel
     */
    'accountName'?: string | null;
    /**
     * Date
     * @type {string}
     * @memberof EntryReadModel
     */
    'date'?: string | null;
    /**
     * Voucher number
     * @type {number}
     * @memberof EntryReadModel
     */
    'voucherNumber'?: number | null;
    /**
     * Voucher type
     * @type {string}
     * @memberof EntryReadModel
     */
    'voucherType'?: string | null;
    /**
     * Description
     * @type {string}
     * @memberof EntryReadModel
     */
    'description'?: string | null;
    /**
     * Vat type
     * @type {string}
     * @memberof EntryReadModel
     */
    'vatType'?: string | null;
    /**
     * Vat code
     * @type {string}
     * @memberof EntryReadModel
     */
    'vatCode'?: string | null;
    /**
     * Amount
     * @type {number}
     * @memberof EntryReadModel
     */
    'amount': number;
    /**
     * Amount
     * @type {string}
     * @memberof EntryReadModel
     */
    'entryGuid'?: string | null;
    /**
     * Guid of the contact
     * @type {string}
     * @memberof EntryReadModel
     */
    'contactGuid'?: string | null;
    /**
     * Type of entry, can be Normal, Primo, or Ultimo
     * @type {string}
     * @memberof EntryReadModel
     */
    'type'?: string | null;
}

