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
 * 
 * @export
 * @interface DocumentAttachmentReadModel
 */
export interface DocumentAttachmentReadModel {
    /**
     * The ID of the organization
     * @type {number}
     * @memberof DocumentAttachmentReadModel
     */
    'organizationId': number;
    /**
     * Guid of invoice, trade-offer or credit-note
     * @type {string}
     * @memberof DocumentAttachmentReadModel
     */
    'documentId': string;
    /**
     * Attachment Guid
     * @type {string}
     * @memberof DocumentAttachmentReadModel
     */
    'fileGuid'?: string | null;
    /**
     * Attachment name
     * @type {string}
     * @memberof DocumentAttachmentReadModel
     */
    'fileName'?: string | null;
}

