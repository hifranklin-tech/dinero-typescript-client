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
import type { ManuelVoucherLineCreateModel } from './manuel-voucher-line-create-model';

/**
 * Model used to update a manuel voucher
 * @export
 * @interface ManuelVoucherUpdateModel
 */
export interface ManuelVoucherUpdateModel {
    /**
     * Timestamp to verify version before editing, use the timestamp value from last time get
     * @type {string}
     * @memberof ManuelVoucherUpdateModel
     */
    'timestamp': string;
    /**
     * The date of the voucher, uses yyyy-MM-dd format
     * @type {string}
     * @memberof ManuelVoucherUpdateModel
     */
    'voucherDate'?: string | null;
    /**
     * The lines of the voucher
     * @type {Array<ManuelVoucherLineCreateModel>}
     * @memberof ManuelVoucherUpdateModel
     */
    'lines'?: Array<ManuelVoucherLineCreateModel> | null;
    /**
     * Guid of the file associated with the voucher, optional value
     * @type {string}
     * @memberof ManuelVoucherUpdateModel
     */
    'fileGuid'?: string | null;
    /**
     * Your external id  This can be used for ID\'ing in external apps/services e.g. a web shop.  The maximum length is 128 characters
     * @type {string}
     * @memberof ManuelVoucherUpdateModel
     */
    'externalReference'?: string | null;
}

