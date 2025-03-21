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
import type { BookModel } from '../model';
// @ts-ignore
import type { CreatedResponseModel } from '../model';
// @ts-ignore
import type { PurchaseCreditNoteCreateModel } from '../model';
// @ts-ignore
import type { PurchaseCreditNoteReadModel } from '../model';
// @ts-ignore
import type { PurchaseCreditNoteUpdateModel } from '../model';
// @ts-ignore
import type { TimestampObject } from '../model';
/**
 * PurchaseCreditNoteApi - axios parameter creator
 * @export
 */
export const PurchaseCreditNoteApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Book purchase credit note.
         * @summary Book purchase credit note
         * @param {number} organizationId 
         * @param {string} guid Guid of the credit note to book
         * @param {BookModel} [bookModel] Data used for the booking transaction
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1OrganizationIdVouchersPurchaseCreditnotesGuidBookPost: async (organizationId: number, guid: string, bookModel?: BookModel, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'organizationId' is not null or undefined
            assertParamExists('v1OrganizationIdVouchersPurchaseCreditnotesGuidBookPost', 'organizationId', organizationId)
            // verify required parameter 'guid' is not null or undefined
            assertParamExists('v1OrganizationIdVouchersPurchaseCreditnotesGuidBookPost', 'guid', guid)
            const localVarPath = `/v1/{organizationId}/vouchers/purchase/creditnotes/{guid}/book`
                .replace(`{${"organizationId"}}`, encodeURIComponent(String(organizationId)))
                .replace(`{${"guid"}}`, encodeURIComponent(String(guid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(bookModel, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete a purchase credit note.
         * @summary Delete purchase credit note
         * @param {string} guid Guid of the credit note to delete
         * @param {string} organizationId 
         * @param {TimestampObject} [timestampObject] Timestamp used for version validation
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1OrganizationIdVouchersPurchaseCreditnotesGuidDelete: async (guid: string, organizationId: string, timestampObject?: TimestampObject, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'guid' is not null or undefined
            assertParamExists('v1OrganizationIdVouchersPurchaseCreditnotesGuidDelete', 'guid', guid)
            // verify required parameter 'organizationId' is not null or undefined
            assertParamExists('v1OrganizationIdVouchersPurchaseCreditnotesGuidDelete', 'organizationId', organizationId)
            const localVarPath = `/v1/{organizationId}/vouchers/purchase/creditnotes/{guid}`
                .replace(`{${"guid"}}`, encodeURIComponent(String(guid)))
                .replace(`{${"organizationId"}}`, encodeURIComponent(String(organizationId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(timestampObject, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Gets a purchase credit note by its guid.
         * @summary Get purchase credit note
         * @param {string} guid Guid of the purchase credit note to get
         * @param {string} organizationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1OrganizationIdVouchersPurchaseCreditnotesGuidGet: async (guid: string, organizationId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'guid' is not null or undefined
            assertParamExists('v1OrganizationIdVouchersPurchaseCreditnotesGuidGet', 'guid', guid)
            // verify required parameter 'organizationId' is not null or undefined
            assertParamExists('v1OrganizationIdVouchersPurchaseCreditnotesGuidGet', 'organizationId', organizationId)
            const localVarPath = `/v1/{organizationId}/vouchers/purchase/creditnotes/{guid}`
                .replace(`{${"guid"}}`, encodeURIComponent(String(guid)))
                .replace(`{${"organizationId"}}`, encodeURIComponent(String(organizationId)));
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
         * Update a purchase credit note draft.
         * @summary Update purchase credit note
         * @param {string} guid Guid of the purchase credit note to update
         * @param {string} organizationId 
         * @param {PurchaseCreditNoteUpdateModel} [purchaseCreditNoteUpdateModel] Data to update the credit note with
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1OrganizationIdVouchersPurchaseCreditnotesGuidPut: async (guid: string, organizationId: string, purchaseCreditNoteUpdateModel?: PurchaseCreditNoteUpdateModel, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'guid' is not null or undefined
            assertParamExists('v1OrganizationIdVouchersPurchaseCreditnotesGuidPut', 'guid', guid)
            // verify required parameter 'organizationId' is not null or undefined
            assertParamExists('v1OrganizationIdVouchersPurchaseCreditnotesGuidPut', 'organizationId', organizationId)
            const localVarPath = `/v1/{organizationId}/vouchers/purchase/creditnotes/{guid}`
                .replace(`{${"guid"}}`, encodeURIComponent(String(guid)))
                .replace(`{${"organizationId"}}`, encodeURIComponent(String(organizationId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(purchaseCreditNoteUpdateModel, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates a new purchase credit note draft. This will usually apply to a specific purchase voucher, in which case all potentiel payments are handle through the purchase itself where the credit note will be withdrawn from the amount due.
         * @summary Create purchase credit note
         * @param {string} organizationId 
         * @param {PurchaseCreditNoteCreateModel} [purchaseCreditNoteCreateModel] Data to create the credit note from
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1OrganizationIdVouchersPurchaseCreditnotesPost: async (organizationId: string, purchaseCreditNoteCreateModel?: PurchaseCreditNoteCreateModel, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'organizationId' is not null or undefined
            assertParamExists('v1OrganizationIdVouchersPurchaseCreditnotesPost', 'organizationId', organizationId)
            const localVarPath = `/v1/{organizationId}/vouchers/purchase/creditnotes`
                .replace(`{${"organizationId"}}`, encodeURIComponent(String(organizationId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(purchaseCreditNoteCreateModel, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PurchaseCreditNoteApi - functional programming interface
 * @export
 */
export const PurchaseCreditNoteApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PurchaseCreditNoteApiAxiosParamCreator(configuration)
    return {
        /**
         * Book purchase credit note.
         * @summary Book purchase credit note
         * @param {number} organizationId 
         * @param {string} guid Guid of the credit note to book
         * @param {BookModel} [bookModel] Data used for the booking transaction
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v1OrganizationIdVouchersPurchaseCreditnotesGuidBookPost(organizationId: number, guid: string, bookModel?: BookModel, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.v1OrganizationIdVouchersPurchaseCreditnotesGuidBookPost(organizationId, guid, bookModel, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PurchaseCreditNoteApi.v1OrganizationIdVouchersPurchaseCreditnotesGuidBookPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Delete a purchase credit note.
         * @summary Delete purchase credit note
         * @param {string} guid Guid of the credit note to delete
         * @param {string} organizationId 
         * @param {TimestampObject} [timestampObject] Timestamp used for version validation
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v1OrganizationIdVouchersPurchaseCreditnotesGuidDelete(guid: string, organizationId: string, timestampObject?: TimestampObject, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.v1OrganizationIdVouchersPurchaseCreditnotesGuidDelete(guid, organizationId, timestampObject, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PurchaseCreditNoteApi.v1OrganizationIdVouchersPurchaseCreditnotesGuidDelete']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Gets a purchase credit note by its guid.
         * @summary Get purchase credit note
         * @param {string} guid Guid of the purchase credit note to get
         * @param {string} organizationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v1OrganizationIdVouchersPurchaseCreditnotesGuidGet(guid: string, organizationId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PurchaseCreditNoteReadModel>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.v1OrganizationIdVouchersPurchaseCreditnotesGuidGet(guid, organizationId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PurchaseCreditNoteApi.v1OrganizationIdVouchersPurchaseCreditnotesGuidGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Update a purchase credit note draft.
         * @summary Update purchase credit note
         * @param {string} guid Guid of the purchase credit note to update
         * @param {string} organizationId 
         * @param {PurchaseCreditNoteUpdateModel} [purchaseCreditNoteUpdateModel] Data to update the credit note with
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v1OrganizationIdVouchersPurchaseCreditnotesGuidPut(guid: string, organizationId: string, purchaseCreditNoteUpdateModel?: PurchaseCreditNoteUpdateModel, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreatedResponseModel>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.v1OrganizationIdVouchersPurchaseCreditnotesGuidPut(guid, organizationId, purchaseCreditNoteUpdateModel, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PurchaseCreditNoteApi.v1OrganizationIdVouchersPurchaseCreditnotesGuidPut']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Creates a new purchase credit note draft. This will usually apply to a specific purchase voucher, in which case all potentiel payments are handle through the purchase itself where the credit note will be withdrawn from the amount due.
         * @summary Create purchase credit note
         * @param {string} organizationId 
         * @param {PurchaseCreditNoteCreateModel} [purchaseCreditNoteCreateModel] Data to create the credit note from
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v1OrganizationIdVouchersPurchaseCreditnotesPost(organizationId: string, purchaseCreditNoteCreateModel?: PurchaseCreditNoteCreateModel, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreatedResponseModel>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.v1OrganizationIdVouchersPurchaseCreditnotesPost(organizationId, purchaseCreditNoteCreateModel, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PurchaseCreditNoteApi.v1OrganizationIdVouchersPurchaseCreditnotesPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * PurchaseCreditNoteApi - factory interface
 * @export
 */
export const PurchaseCreditNoteApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PurchaseCreditNoteApiFp(configuration)
    return {
        /**
         * Book purchase credit note.
         * @summary Book purchase credit note
         * @param {PurchaseCreditNoteApiV1OrganizationIdVouchersPurchaseCreditnotesGuidBookPostRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1OrganizationIdVouchersPurchaseCreditnotesGuidBookPost(requestParameters: PurchaseCreditNoteApiV1OrganizationIdVouchersPurchaseCreditnotesGuidBookPostRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.v1OrganizationIdVouchersPurchaseCreditnotesGuidBookPost(requestParameters.organizationId, requestParameters.guid, requestParameters.bookModel, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete a purchase credit note.
         * @summary Delete purchase credit note
         * @param {PurchaseCreditNoteApiV1OrganizationIdVouchersPurchaseCreditnotesGuidDeleteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1OrganizationIdVouchersPurchaseCreditnotesGuidDelete(requestParameters: PurchaseCreditNoteApiV1OrganizationIdVouchersPurchaseCreditnotesGuidDeleteRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.v1OrganizationIdVouchersPurchaseCreditnotesGuidDelete(requestParameters.guid, requestParameters.organizationId, requestParameters.timestampObject, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets a purchase credit note by its guid.
         * @summary Get purchase credit note
         * @param {PurchaseCreditNoteApiV1OrganizationIdVouchersPurchaseCreditnotesGuidGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1OrganizationIdVouchersPurchaseCreditnotesGuidGet(requestParameters: PurchaseCreditNoteApiV1OrganizationIdVouchersPurchaseCreditnotesGuidGetRequest, options?: RawAxiosRequestConfig): AxiosPromise<PurchaseCreditNoteReadModel> {
            return localVarFp.v1OrganizationIdVouchersPurchaseCreditnotesGuidGet(requestParameters.guid, requestParameters.organizationId, options).then((request) => request(axios, basePath));
        },
        /**
         * Update a purchase credit note draft.
         * @summary Update purchase credit note
         * @param {PurchaseCreditNoteApiV1OrganizationIdVouchersPurchaseCreditnotesGuidPutRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1OrganizationIdVouchersPurchaseCreditnotesGuidPut(requestParameters: PurchaseCreditNoteApiV1OrganizationIdVouchersPurchaseCreditnotesGuidPutRequest, options?: RawAxiosRequestConfig): AxiosPromise<CreatedResponseModel> {
            return localVarFp.v1OrganizationIdVouchersPurchaseCreditnotesGuidPut(requestParameters.guid, requestParameters.organizationId, requestParameters.purchaseCreditNoteUpdateModel, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a new purchase credit note draft. This will usually apply to a specific purchase voucher, in which case all potentiel payments are handle through the purchase itself where the credit note will be withdrawn from the amount due.
         * @summary Create purchase credit note
         * @param {PurchaseCreditNoteApiV1OrganizationIdVouchersPurchaseCreditnotesPostRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1OrganizationIdVouchersPurchaseCreditnotesPost(requestParameters: PurchaseCreditNoteApiV1OrganizationIdVouchersPurchaseCreditnotesPostRequest, options?: RawAxiosRequestConfig): AxiosPromise<CreatedResponseModel> {
            return localVarFp.v1OrganizationIdVouchersPurchaseCreditnotesPost(requestParameters.organizationId, requestParameters.purchaseCreditNoteCreateModel, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for v1OrganizationIdVouchersPurchaseCreditnotesGuidBookPost operation in PurchaseCreditNoteApi.
 * @export
 * @interface PurchaseCreditNoteApiV1OrganizationIdVouchersPurchaseCreditnotesGuidBookPostRequest
 */
export interface PurchaseCreditNoteApiV1OrganizationIdVouchersPurchaseCreditnotesGuidBookPostRequest {
    /**
     * 
     * @type {number}
     * @memberof PurchaseCreditNoteApiV1OrganizationIdVouchersPurchaseCreditnotesGuidBookPost
     */
    readonly organizationId: number

    /**
     * Guid of the credit note to book
     * @type {string}
     * @memberof PurchaseCreditNoteApiV1OrganizationIdVouchersPurchaseCreditnotesGuidBookPost
     */
    readonly guid: string

    /**
     * Data used for the booking transaction
     * @type {BookModel}
     * @memberof PurchaseCreditNoteApiV1OrganizationIdVouchersPurchaseCreditnotesGuidBookPost
     */
    readonly bookModel?: BookModel
}

/**
 * Request parameters for v1OrganizationIdVouchersPurchaseCreditnotesGuidDelete operation in PurchaseCreditNoteApi.
 * @export
 * @interface PurchaseCreditNoteApiV1OrganizationIdVouchersPurchaseCreditnotesGuidDeleteRequest
 */
export interface PurchaseCreditNoteApiV1OrganizationIdVouchersPurchaseCreditnotesGuidDeleteRequest {
    /**
     * Guid of the credit note to delete
     * @type {string}
     * @memberof PurchaseCreditNoteApiV1OrganizationIdVouchersPurchaseCreditnotesGuidDelete
     */
    readonly guid: string

    /**
     * 
     * @type {string}
     * @memberof PurchaseCreditNoteApiV1OrganizationIdVouchersPurchaseCreditnotesGuidDelete
     */
    readonly organizationId: string

    /**
     * Timestamp used for version validation
     * @type {TimestampObject}
     * @memberof PurchaseCreditNoteApiV1OrganizationIdVouchersPurchaseCreditnotesGuidDelete
     */
    readonly timestampObject?: TimestampObject
}

/**
 * Request parameters for v1OrganizationIdVouchersPurchaseCreditnotesGuidGet operation in PurchaseCreditNoteApi.
 * @export
 * @interface PurchaseCreditNoteApiV1OrganizationIdVouchersPurchaseCreditnotesGuidGetRequest
 */
export interface PurchaseCreditNoteApiV1OrganizationIdVouchersPurchaseCreditnotesGuidGetRequest {
    /**
     * Guid of the purchase credit note to get
     * @type {string}
     * @memberof PurchaseCreditNoteApiV1OrganizationIdVouchersPurchaseCreditnotesGuidGet
     */
    readonly guid: string

    /**
     * 
     * @type {string}
     * @memberof PurchaseCreditNoteApiV1OrganizationIdVouchersPurchaseCreditnotesGuidGet
     */
    readonly organizationId: string
}

/**
 * Request parameters for v1OrganizationIdVouchersPurchaseCreditnotesGuidPut operation in PurchaseCreditNoteApi.
 * @export
 * @interface PurchaseCreditNoteApiV1OrganizationIdVouchersPurchaseCreditnotesGuidPutRequest
 */
export interface PurchaseCreditNoteApiV1OrganizationIdVouchersPurchaseCreditnotesGuidPutRequest {
    /**
     * Guid of the purchase credit note to update
     * @type {string}
     * @memberof PurchaseCreditNoteApiV1OrganizationIdVouchersPurchaseCreditnotesGuidPut
     */
    readonly guid: string

    /**
     * 
     * @type {string}
     * @memberof PurchaseCreditNoteApiV1OrganizationIdVouchersPurchaseCreditnotesGuidPut
     */
    readonly organizationId: string

    /**
     * Data to update the credit note with
     * @type {PurchaseCreditNoteUpdateModel}
     * @memberof PurchaseCreditNoteApiV1OrganizationIdVouchersPurchaseCreditnotesGuidPut
     */
    readonly purchaseCreditNoteUpdateModel?: PurchaseCreditNoteUpdateModel
}

/**
 * Request parameters for v1OrganizationIdVouchersPurchaseCreditnotesPost operation in PurchaseCreditNoteApi.
 * @export
 * @interface PurchaseCreditNoteApiV1OrganizationIdVouchersPurchaseCreditnotesPostRequest
 */
export interface PurchaseCreditNoteApiV1OrganizationIdVouchersPurchaseCreditnotesPostRequest {
    /**
     * 
     * @type {string}
     * @memberof PurchaseCreditNoteApiV1OrganizationIdVouchersPurchaseCreditnotesPost
     */
    readonly organizationId: string

    /**
     * Data to create the credit note from
     * @type {PurchaseCreditNoteCreateModel}
     * @memberof PurchaseCreditNoteApiV1OrganizationIdVouchersPurchaseCreditnotesPost
     */
    readonly purchaseCreditNoteCreateModel?: PurchaseCreditNoteCreateModel
}

/**
 * PurchaseCreditNoteApi - object-oriented interface
 * @export
 * @class PurchaseCreditNoteApi
 * @extends {BaseAPI}
 */
export class PurchaseCreditNoteApi extends BaseAPI {
    /**
     * Book purchase credit note.
     * @summary Book purchase credit note
     * @param {PurchaseCreditNoteApiV1OrganizationIdVouchersPurchaseCreditnotesGuidBookPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PurchaseCreditNoteApi
     */
    public v1OrganizationIdVouchersPurchaseCreditnotesGuidBookPost(requestParameters: PurchaseCreditNoteApiV1OrganizationIdVouchersPurchaseCreditnotesGuidBookPostRequest, options?: RawAxiosRequestConfig) {
        return PurchaseCreditNoteApiFp(this.configuration).v1OrganizationIdVouchersPurchaseCreditnotesGuidBookPost(requestParameters.organizationId, requestParameters.guid, requestParameters.bookModel, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete a purchase credit note.
     * @summary Delete purchase credit note
     * @param {PurchaseCreditNoteApiV1OrganizationIdVouchersPurchaseCreditnotesGuidDeleteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PurchaseCreditNoteApi
     */
    public v1OrganizationIdVouchersPurchaseCreditnotesGuidDelete(requestParameters: PurchaseCreditNoteApiV1OrganizationIdVouchersPurchaseCreditnotesGuidDeleteRequest, options?: RawAxiosRequestConfig) {
        return PurchaseCreditNoteApiFp(this.configuration).v1OrganizationIdVouchersPurchaseCreditnotesGuidDelete(requestParameters.guid, requestParameters.organizationId, requestParameters.timestampObject, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets a purchase credit note by its guid.
     * @summary Get purchase credit note
     * @param {PurchaseCreditNoteApiV1OrganizationIdVouchersPurchaseCreditnotesGuidGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PurchaseCreditNoteApi
     */
    public v1OrganizationIdVouchersPurchaseCreditnotesGuidGet(requestParameters: PurchaseCreditNoteApiV1OrganizationIdVouchersPurchaseCreditnotesGuidGetRequest, options?: RawAxiosRequestConfig) {
        return PurchaseCreditNoteApiFp(this.configuration).v1OrganizationIdVouchersPurchaseCreditnotesGuidGet(requestParameters.guid, requestParameters.organizationId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update a purchase credit note draft.
     * @summary Update purchase credit note
     * @param {PurchaseCreditNoteApiV1OrganizationIdVouchersPurchaseCreditnotesGuidPutRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PurchaseCreditNoteApi
     */
    public v1OrganizationIdVouchersPurchaseCreditnotesGuidPut(requestParameters: PurchaseCreditNoteApiV1OrganizationIdVouchersPurchaseCreditnotesGuidPutRequest, options?: RawAxiosRequestConfig) {
        return PurchaseCreditNoteApiFp(this.configuration).v1OrganizationIdVouchersPurchaseCreditnotesGuidPut(requestParameters.guid, requestParameters.organizationId, requestParameters.purchaseCreditNoteUpdateModel, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a new purchase credit note draft. This will usually apply to a specific purchase voucher, in which case all potentiel payments are handle through the purchase itself where the credit note will be withdrawn from the amount due.
     * @summary Create purchase credit note
     * @param {PurchaseCreditNoteApiV1OrganizationIdVouchersPurchaseCreditnotesPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PurchaseCreditNoteApi
     */
    public v1OrganizationIdVouchersPurchaseCreditnotesPost(requestParameters: PurchaseCreditNoteApiV1OrganizationIdVouchersPurchaseCreditnotesPostRequest, options?: RawAxiosRequestConfig) {
        return PurchaseCreditNoteApiFp(this.configuration).v1OrganizationIdVouchersPurchaseCreditnotesPost(requestParameters.organizationId, requestParameters.purchaseCreditNoteCreateModel, options).then((request) => request(this.axios, this.basePath));
    }
}

