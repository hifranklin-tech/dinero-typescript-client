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
import type { ContactNoteReadModel } from './contact-note-read-model';
// May contain unused imports in some cases
// @ts-ignore
import type { PaginationDetails } from './pagination-details';

/**
 * 
 * @export
 * @interface ContactNoteReadModelDineroCollection
 */
export interface ContactNoteReadModelDineroCollection {
    /**
     * Collection containing the result of the request.
     * @type {Array<ContactNoteReadModel>}
     * @memberof ContactNoteReadModelDineroCollection
     */
    'collection'?: Array<ContactNoteReadModel> | null;
    /**
     * 
     * @type {PaginationDetails}
     * @memberof ContactNoteReadModelDineroCollection
     */
    'pagination': PaginationDetails;
}

