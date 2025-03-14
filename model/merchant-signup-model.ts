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
 * @interface MerchantSignupModel
 */
export interface MerchantSignupModel {
    /**
     * 
     * @type {string}
     * @memberof MerchantSignupModel
     */
    'attPerson'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MerchantSignupModel
     */
    'danishVatNumber'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MerchantSignupModel
     */
    'email'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MerchantSignupModel
     */
    'phone'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MerchantSignupModel
     */
    'website'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MerchantSignupModel
     */
    'businessModelDescription'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MerchantSignupModel
     */
    'iban'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof MerchantSignupModel
     */
    'bankDepositAccountNumber': number;
    /**
     * 
     * @type {string}
     * @memberof MerchantSignupModel
     */
    'street'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MerchantSignupModel
     */
    'city'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MerchantSignupModel
     */
    'zipCode'?: string | null;
}

