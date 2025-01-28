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
 * View model for creating an organization.
 * @export
 * @interface OrganizationCreatedViewModel
 */
export interface OrganizationCreatedViewModel {
    /**
     * Unique identifier of an organization.
     * @type {number}
     * @memberof OrganizationCreatedViewModel
     */
    'organizationId': number;
    /**
     * Value indicating whether the first accounting year is created automatically.
     * @type {boolean}
     * @memberof OrganizationCreatedViewModel
     */
    'firstAccountingYearCreated': boolean;
    /**
     * Value indicating whether the user is the first user in the organization.
     * @type {boolean}
     * @memberof OrganizationCreatedViewModel
     */
    'isUsersFirstOrganization': boolean;
}

