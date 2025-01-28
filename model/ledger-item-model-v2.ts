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


// May contain unused imports in some cases
// @ts-ignore
import type { LedgerItemLineModelV2 } from './ledger-item-line-model-v2';

/**
 * 
 * @export
 * @interface LedgerItemModelV2
 */
export interface LedgerItemModelV2 {
    /**
     * A optional unique identifier for the ledger item.  Required when updating an existing ledger item.
     * @type {string}
     * @memberof LedgerItemModelV2
     */
    'id'?: string | null;
    /**
     * A required version number to identify
     * @type {string}
     * @memberof LedgerItemModelV2
     */
    'version'?: string | null;
    /**
     * The number of the voucher that will be created or updated.
     * @type {number}
     * @memberof LedgerItemModelV2
     */
    'voucherNumber'?: number | null;
    /**
     * The date of the voucher. This should be in the format yyyy-mm-dd e.g. 2015-12-02
     * @type {string}
     * @memberof LedgerItemModelV2
     */
    'voucherDate'?: string | null;
    /**
     * The guid of an uploaded file to connect to the purchase voucher, this  will typically be an image of the voucher.
     * @type {string}
     * @memberof LedgerItemModelV2
     */
    'fileGuid'?: string | null;
    /**
     * 
     * @type {Array<LedgerItemLineModelV2>}
     * @memberof LedgerItemModelV2
     */
    'lines'?: Array<LedgerItemLineModelV2> | null;
}

