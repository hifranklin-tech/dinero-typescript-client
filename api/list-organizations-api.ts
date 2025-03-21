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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// URLSearchParams not necessarily used
// @ts-ignore
import { URL, URLSearchParams } from 'url';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import type { OrganizationReadModel } from '../model';
// @ts-ignore
import type { OrganizationReadModelV2 } from '../model';
/**
 * ListOrganizationsApi - axios parameter creator
 * @export
 */
export const ListOrganizationsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * /// Gets a list of the user\'s organizations. It is also used to validate if the user has a Pro subscription or not, which is a prerequisite to interact with the API. In case a user does not have Pro, every other request will return a 403 error.
         * @summary List organization
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v11OrganizationsGet: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1.1/organizations`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Gets a list of the users\' organizations. It is also used to validate if the users has a Pro subscription or not, which is a prerequsite to interact with the API. Incase a user does not have Pro every other request will return a 403 error.
         * @summary List organization
         * @param {string} [fields] A comma separated list of fields to include in the response. Possible values are Name, Id, Type, IsPro, IsPayingPro, IsVatFree, Email, Phone, Street, City, ZipCode, AttPerson, IsTaxFreeUnion and VatNumber. Notice that it\&#39;s not case sensitive, the property name will be returned the way you request it. If left empty it defaults to name.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1OrganizationsGet: async (fields?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/organizations`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ListOrganizationsApi - functional programming interface
 * @export
 */
export const ListOrganizationsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ListOrganizationsApiAxiosParamCreator(configuration)
    return {
        /**
         * /// Gets a list of the user\'s organizations. It is also used to validate if the user has a Pro subscription or not, which is a prerequisite to interact with the API. In case a user does not have Pro, every other request will return a 403 error.
         * @summary List organization
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v11OrganizationsGet(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<OrganizationReadModelV2>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.v11OrganizationsGet(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ListOrganizationsApi.v11OrganizationsGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Gets a list of the users\' organizations. It is also used to validate if the users has a Pro subscription or not, which is a prerequsite to interact with the API. Incase a user does not have Pro every other request will return a 403 error.
         * @summary List organization
         * @param {string} [fields] A comma separated list of fields to include in the response. Possible values are Name, Id, Type, IsPro, IsPayingPro, IsVatFree, Email, Phone, Street, City, ZipCode, AttPerson, IsTaxFreeUnion and VatNumber. Notice that it\&#39;s not case sensitive, the property name will be returned the way you request it. If left empty it defaults to name.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v1OrganizationsGet(fields?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<OrganizationReadModel>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.v1OrganizationsGet(fields, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ListOrganizationsApi.v1OrganizationsGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ListOrganizationsApi - factory interface
 * @export
 */
export const ListOrganizationsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ListOrganizationsApiFp(configuration)
    return {
        /**
         * /// Gets a list of the user\'s organizations. It is also used to validate if the user has a Pro subscription or not, which is a prerequisite to interact with the API. In case a user does not have Pro, every other request will return a 403 error.
         * @summary List organization
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v11OrganizationsGet(options?: RawAxiosRequestConfig): AxiosPromise<Array<OrganizationReadModelV2>> {
            return localVarFp.v11OrganizationsGet(options).then((request) => request(axios, basePath));
        },
        /**
         * Gets a list of the users\' organizations. It is also used to validate if the users has a Pro subscription or not, which is a prerequsite to interact with the API. Incase a user does not have Pro every other request will return a 403 error.
         * @summary List organization
         * @param {ListOrganizationsApiV1OrganizationsGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1OrganizationsGet(requestParameters: ListOrganizationsApiV1OrganizationsGetRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<Array<OrganizationReadModel>> {
            return localVarFp.v1OrganizationsGet(requestParameters.fields, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for v1OrganizationsGet operation in ListOrganizationsApi.
 * @export
 * @interface ListOrganizationsApiV1OrganizationsGetRequest
 */
export interface ListOrganizationsApiV1OrganizationsGetRequest {
    /**
     * A comma separated list of fields to include in the response. Possible values are Name, Id, Type, IsPro, IsPayingPro, IsVatFree, Email, Phone, Street, City, ZipCode, AttPerson, IsTaxFreeUnion and VatNumber. Notice that it\&#39;s not case sensitive, the property name will be returned the way you request it. If left empty it defaults to name.
     * @type {string}
     * @memberof ListOrganizationsApiV1OrganizationsGet
     */
    readonly fields?: string
}

/**
 * ListOrganizationsApi - object-oriented interface
 * @export
 * @class ListOrganizationsApi
 * @extends {BaseAPI}
 */
export class ListOrganizationsApi extends BaseAPI {
    /**
     * /// Gets a list of the user\'s organizations. It is also used to validate if the user has a Pro subscription or not, which is a prerequisite to interact with the API. In case a user does not have Pro, every other request will return a 403 error.
     * @summary List organization
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListOrganizationsApi
     */
    public v11OrganizationsGet(options?: RawAxiosRequestConfig) {
        return ListOrganizationsApiFp(this.configuration).v11OrganizationsGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets a list of the users\' organizations. It is also used to validate if the users has a Pro subscription or not, which is a prerequsite to interact with the API. Incase a user does not have Pro every other request will return a 403 error.
     * @summary List organization
     * @param {ListOrganizationsApiV1OrganizationsGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListOrganizationsApi
     */
    public v1OrganizationsGet(requestParameters: ListOrganizationsApiV1OrganizationsGetRequest = {}, options?: RawAxiosRequestConfig) {
        return ListOrganizationsApiFp(this.configuration).v1OrganizationsGet(requestParameters.fields, options).then((request) => request(this.axios, this.basePath));
    }
}

