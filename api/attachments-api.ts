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
import type { DocumentAttachmentReadModel } from '../model';
/**
 * AttachmentsApi - axios parameter creator
 * @export
 */
export const AttachmentsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Binds the default documents (given by the organization and the document type) from settings to the document  given by the document Guid.
         * @param {number} organizationId ID of the organization performing the request
         * @param {string} documentGuid ID of the document that wants the default attachments bound to it
         * @param {string} documentType The document type (i.e. Invoice or TradeOffer)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1OrganizationIdAttachmentsBindDefaultDocumentGuidDocumentTypePost: async (organizationId: number, documentGuid: string, documentType: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'organizationId' is not null or undefined
            assertParamExists('v1OrganizationIdAttachmentsBindDefaultDocumentGuidDocumentTypePost', 'organizationId', organizationId)
            // verify required parameter 'documentGuid' is not null or undefined
            assertParamExists('v1OrganizationIdAttachmentsBindDefaultDocumentGuidDocumentTypePost', 'documentGuid', documentGuid)
            // verify required parameter 'documentType' is not null or undefined
            assertParamExists('v1OrganizationIdAttachmentsBindDefaultDocumentGuidDocumentTypePost', 'documentType', documentType)
            const localVarPath = `/v1/{organizationId}/attachments/bind/default/{documentGuid}/{documentType}`
                .replace(`{${"organizationId"}}`, encodeURIComponent(String(organizationId)))
                .replace(`{${"documentGuid"}}`, encodeURIComponent(String(documentGuid)))
                .replace(`{${"documentType"}}`, encodeURIComponent(String(documentType)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
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
         * You can unbind an already bound file to an invoice. It will no longer be sent with the invoice.
         * @summary Remove attachment from document
         * @param {number} organizationId The ID of the organization
         * @param {string} documentGuid Guid of invoice, trade-offer or credit-note
         * @param {string} fileGuid Attachment Guid
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1OrganizationIdAttachmentsDocumentGuidFileGuidDelete: async (organizationId: number, documentGuid: string, fileGuid: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'organizationId' is not null or undefined
            assertParamExists('v1OrganizationIdAttachmentsDocumentGuidFileGuidDelete', 'organizationId', organizationId)
            // verify required parameter 'documentGuid' is not null or undefined
            assertParamExists('v1OrganizationIdAttachmentsDocumentGuidFileGuidDelete', 'documentGuid', documentGuid)
            // verify required parameter 'fileGuid' is not null or undefined
            assertParamExists('v1OrganizationIdAttachmentsDocumentGuidFileGuidDelete', 'fileGuid', fileGuid)
            const localVarPath = `/v1/{organizationId}/attachments/{documentGuid}/{fileGuid}`
                .replace(`{${"organizationId"}}`, encodeURIComponent(String(organizationId)))
                .replace(`{${"documentGuid"}}`, encodeURIComponent(String(documentGuid)))
                .replace(`{${"fileGuid"}}`, encodeURIComponent(String(fileGuid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
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
         * You can bind a file with an invoice using this endpoint. The bound file will be sent with the invoice.
         * @summary Bind attachment with a document
         * @param {number} organizationId The ID of the organization
         * @param {string} documentGuid Guid of invoice, trade-offer or credit-note
         * @param {string} fileGuid Attachment Guid
         * @param {string} fileName Attachment name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1OrganizationIdAttachmentsDocumentGuidFileGuidFileNamePost: async (organizationId: number, documentGuid: string, fileGuid: string, fileName: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'organizationId' is not null or undefined
            assertParamExists('v1OrganizationIdAttachmentsDocumentGuidFileGuidFileNamePost', 'organizationId', organizationId)
            // verify required parameter 'documentGuid' is not null or undefined
            assertParamExists('v1OrganizationIdAttachmentsDocumentGuidFileGuidFileNamePost', 'documentGuid', documentGuid)
            // verify required parameter 'fileGuid' is not null or undefined
            assertParamExists('v1OrganizationIdAttachmentsDocumentGuidFileGuidFileNamePost', 'fileGuid', fileGuid)
            // verify required parameter 'fileName' is not null or undefined
            assertParamExists('v1OrganizationIdAttachmentsDocumentGuidFileGuidFileNamePost', 'fileName', fileName)
            const localVarPath = `/v1/{organizationId}/attachments/{documentGuid}/{fileGuid}/{fileName}`
                .replace(`{${"organizationId"}}`, encodeURIComponent(String(organizationId)))
                .replace(`{${"documentGuid"}}`, encodeURIComponent(String(documentGuid)))
                .replace(`{${"fileGuid"}}`, encodeURIComponent(String(fileGuid)))
                .replace(`{${"fileName"}}`, encodeURIComponent(String(fileName)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
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
         * Get a list of attachments bound to an invoice, trade-offer or credit-note.
         * @summary Get document attachments
         * @param {number} organizationId The ID of the organization
         * @param {string} documentGuid Guid of invoice, trade-offer or credit-note
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1OrganizationIdAttachmentsDocumentGuidGet: async (organizationId: number, documentGuid: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'organizationId' is not null or undefined
            assertParamExists('v1OrganizationIdAttachmentsDocumentGuidGet', 'organizationId', organizationId)
            // verify required parameter 'documentGuid' is not null or undefined
            assertParamExists('v1OrganizationIdAttachmentsDocumentGuidGet', 'documentGuid', documentGuid)
            const localVarPath = `/v1/{organizationId}/attachments/{documentGuid}`
                .replace(`{${"organizationId"}}`, encodeURIComponent(String(organizationId)))
                .replace(`{${"documentGuid"}}`, encodeURIComponent(String(documentGuid)));
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
    }
};

/**
 * AttachmentsApi - functional programming interface
 * @export
 */
export const AttachmentsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AttachmentsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Binds the default documents (given by the organization and the document type) from settings to the document  given by the document Guid.
         * @param {number} organizationId ID of the organization performing the request
         * @param {string} documentGuid ID of the document that wants the default attachments bound to it
         * @param {string} documentType The document type (i.e. Invoice or TradeOffer)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v1OrganizationIdAttachmentsBindDefaultDocumentGuidDocumentTypePost(organizationId: number, documentGuid: string, documentType: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.v1OrganizationIdAttachmentsBindDefaultDocumentGuidDocumentTypePost(organizationId, documentGuid, documentType, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AttachmentsApi.v1OrganizationIdAttachmentsBindDefaultDocumentGuidDocumentTypePost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * You can unbind an already bound file to an invoice. It will no longer be sent with the invoice.
         * @summary Remove attachment from document
         * @param {number} organizationId The ID of the organization
         * @param {string} documentGuid Guid of invoice, trade-offer or credit-note
         * @param {string} fileGuid Attachment Guid
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v1OrganizationIdAttachmentsDocumentGuidFileGuidDelete(organizationId: number, documentGuid: string, fileGuid: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.v1OrganizationIdAttachmentsDocumentGuidFileGuidDelete(organizationId, documentGuid, fileGuid, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AttachmentsApi.v1OrganizationIdAttachmentsDocumentGuidFileGuidDelete']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * You can bind a file with an invoice using this endpoint. The bound file will be sent with the invoice.
         * @summary Bind attachment with a document
         * @param {number} organizationId The ID of the organization
         * @param {string} documentGuid Guid of invoice, trade-offer or credit-note
         * @param {string} fileGuid Attachment Guid
         * @param {string} fileName Attachment name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v1OrganizationIdAttachmentsDocumentGuidFileGuidFileNamePost(organizationId: number, documentGuid: string, fileGuid: string, fileName: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.v1OrganizationIdAttachmentsDocumentGuidFileGuidFileNamePost(organizationId, documentGuid, fileGuid, fileName, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AttachmentsApi.v1OrganizationIdAttachmentsDocumentGuidFileGuidFileNamePost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get a list of attachments bound to an invoice, trade-offer or credit-note.
         * @summary Get document attachments
         * @param {number} organizationId The ID of the organization
         * @param {string} documentGuid Guid of invoice, trade-offer or credit-note
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v1OrganizationIdAttachmentsDocumentGuidGet(organizationId: number, documentGuid: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<DocumentAttachmentReadModel>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.v1OrganizationIdAttachmentsDocumentGuidGet(organizationId, documentGuid, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AttachmentsApi.v1OrganizationIdAttachmentsDocumentGuidGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * AttachmentsApi - factory interface
 * @export
 */
export const AttachmentsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AttachmentsApiFp(configuration)
    return {
        /**
         * 
         * @summary Binds the default documents (given by the organization and the document type) from settings to the document  given by the document Guid.
         * @param {AttachmentsApiV1OrganizationIdAttachmentsBindDefaultDocumentGuidDocumentTypePostRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1OrganizationIdAttachmentsBindDefaultDocumentGuidDocumentTypePost(requestParameters: AttachmentsApiV1OrganizationIdAttachmentsBindDefaultDocumentGuidDocumentTypePostRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.v1OrganizationIdAttachmentsBindDefaultDocumentGuidDocumentTypePost(requestParameters.organizationId, requestParameters.documentGuid, requestParameters.documentType, options).then((request) => request(axios, basePath));
        },
        /**
         * You can unbind an already bound file to an invoice. It will no longer be sent with the invoice.
         * @summary Remove attachment from document
         * @param {AttachmentsApiV1OrganizationIdAttachmentsDocumentGuidFileGuidDeleteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1OrganizationIdAttachmentsDocumentGuidFileGuidDelete(requestParameters: AttachmentsApiV1OrganizationIdAttachmentsDocumentGuidFileGuidDeleteRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.v1OrganizationIdAttachmentsDocumentGuidFileGuidDelete(requestParameters.organizationId, requestParameters.documentGuid, requestParameters.fileGuid, options).then((request) => request(axios, basePath));
        },
        /**
         * You can bind a file with an invoice using this endpoint. The bound file will be sent with the invoice.
         * @summary Bind attachment with a document
         * @param {AttachmentsApiV1OrganizationIdAttachmentsDocumentGuidFileGuidFileNamePostRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1OrganizationIdAttachmentsDocumentGuidFileGuidFileNamePost(requestParameters: AttachmentsApiV1OrganizationIdAttachmentsDocumentGuidFileGuidFileNamePostRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.v1OrganizationIdAttachmentsDocumentGuidFileGuidFileNamePost(requestParameters.organizationId, requestParameters.documentGuid, requestParameters.fileGuid, requestParameters.fileName, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a list of attachments bound to an invoice, trade-offer or credit-note.
         * @summary Get document attachments
         * @param {AttachmentsApiV1OrganizationIdAttachmentsDocumentGuidGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1OrganizationIdAttachmentsDocumentGuidGet(requestParameters: AttachmentsApiV1OrganizationIdAttachmentsDocumentGuidGetRequest, options?: RawAxiosRequestConfig): AxiosPromise<Array<DocumentAttachmentReadModel>> {
            return localVarFp.v1OrganizationIdAttachmentsDocumentGuidGet(requestParameters.organizationId, requestParameters.documentGuid, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for v1OrganizationIdAttachmentsBindDefaultDocumentGuidDocumentTypePost operation in AttachmentsApi.
 * @export
 * @interface AttachmentsApiV1OrganizationIdAttachmentsBindDefaultDocumentGuidDocumentTypePostRequest
 */
export interface AttachmentsApiV1OrganizationIdAttachmentsBindDefaultDocumentGuidDocumentTypePostRequest {
    /**
     * ID of the organization performing the request
     * @type {number}
     * @memberof AttachmentsApiV1OrganizationIdAttachmentsBindDefaultDocumentGuidDocumentTypePost
     */
    readonly organizationId: number

    /**
     * ID of the document that wants the default attachments bound to it
     * @type {string}
     * @memberof AttachmentsApiV1OrganizationIdAttachmentsBindDefaultDocumentGuidDocumentTypePost
     */
    readonly documentGuid: string

    /**
     * The document type (i.e. Invoice or TradeOffer)
     * @type {string}
     * @memberof AttachmentsApiV1OrganizationIdAttachmentsBindDefaultDocumentGuidDocumentTypePost
     */
    readonly documentType: string
}

/**
 * Request parameters for v1OrganizationIdAttachmentsDocumentGuidFileGuidDelete operation in AttachmentsApi.
 * @export
 * @interface AttachmentsApiV1OrganizationIdAttachmentsDocumentGuidFileGuidDeleteRequest
 */
export interface AttachmentsApiV1OrganizationIdAttachmentsDocumentGuidFileGuidDeleteRequest {
    /**
     * The ID of the organization
     * @type {number}
     * @memberof AttachmentsApiV1OrganizationIdAttachmentsDocumentGuidFileGuidDelete
     */
    readonly organizationId: number

    /**
     * Guid of invoice, trade-offer or credit-note
     * @type {string}
     * @memberof AttachmentsApiV1OrganizationIdAttachmentsDocumentGuidFileGuidDelete
     */
    readonly documentGuid: string

    /**
     * Attachment Guid
     * @type {string}
     * @memberof AttachmentsApiV1OrganizationIdAttachmentsDocumentGuidFileGuidDelete
     */
    readonly fileGuid: string
}

/**
 * Request parameters for v1OrganizationIdAttachmentsDocumentGuidFileGuidFileNamePost operation in AttachmentsApi.
 * @export
 * @interface AttachmentsApiV1OrganizationIdAttachmentsDocumentGuidFileGuidFileNamePostRequest
 */
export interface AttachmentsApiV1OrganizationIdAttachmentsDocumentGuidFileGuidFileNamePostRequest {
    /**
     * The ID of the organization
     * @type {number}
     * @memberof AttachmentsApiV1OrganizationIdAttachmentsDocumentGuidFileGuidFileNamePost
     */
    readonly organizationId: number

    /**
     * Guid of invoice, trade-offer or credit-note
     * @type {string}
     * @memberof AttachmentsApiV1OrganizationIdAttachmentsDocumentGuidFileGuidFileNamePost
     */
    readonly documentGuid: string

    /**
     * Attachment Guid
     * @type {string}
     * @memberof AttachmentsApiV1OrganizationIdAttachmentsDocumentGuidFileGuidFileNamePost
     */
    readonly fileGuid: string

    /**
     * Attachment name
     * @type {string}
     * @memberof AttachmentsApiV1OrganizationIdAttachmentsDocumentGuidFileGuidFileNamePost
     */
    readonly fileName: string
}

/**
 * Request parameters for v1OrganizationIdAttachmentsDocumentGuidGet operation in AttachmentsApi.
 * @export
 * @interface AttachmentsApiV1OrganizationIdAttachmentsDocumentGuidGetRequest
 */
export interface AttachmentsApiV1OrganizationIdAttachmentsDocumentGuidGetRequest {
    /**
     * The ID of the organization
     * @type {number}
     * @memberof AttachmentsApiV1OrganizationIdAttachmentsDocumentGuidGet
     */
    readonly organizationId: number

    /**
     * Guid of invoice, trade-offer or credit-note
     * @type {string}
     * @memberof AttachmentsApiV1OrganizationIdAttachmentsDocumentGuidGet
     */
    readonly documentGuid: string
}

/**
 * AttachmentsApi - object-oriented interface
 * @export
 * @class AttachmentsApi
 * @extends {BaseAPI}
 */
export class AttachmentsApi extends BaseAPI {
    /**
     * 
     * @summary Binds the default documents (given by the organization and the document type) from settings to the document  given by the document Guid.
     * @param {AttachmentsApiV1OrganizationIdAttachmentsBindDefaultDocumentGuidDocumentTypePostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AttachmentsApi
     */
    public v1OrganizationIdAttachmentsBindDefaultDocumentGuidDocumentTypePost(requestParameters: AttachmentsApiV1OrganizationIdAttachmentsBindDefaultDocumentGuidDocumentTypePostRequest, options?: RawAxiosRequestConfig) {
        return AttachmentsApiFp(this.configuration).v1OrganizationIdAttachmentsBindDefaultDocumentGuidDocumentTypePost(requestParameters.organizationId, requestParameters.documentGuid, requestParameters.documentType, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * You can unbind an already bound file to an invoice. It will no longer be sent with the invoice.
     * @summary Remove attachment from document
     * @param {AttachmentsApiV1OrganizationIdAttachmentsDocumentGuidFileGuidDeleteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AttachmentsApi
     */
    public v1OrganizationIdAttachmentsDocumentGuidFileGuidDelete(requestParameters: AttachmentsApiV1OrganizationIdAttachmentsDocumentGuidFileGuidDeleteRequest, options?: RawAxiosRequestConfig) {
        return AttachmentsApiFp(this.configuration).v1OrganizationIdAttachmentsDocumentGuidFileGuidDelete(requestParameters.organizationId, requestParameters.documentGuid, requestParameters.fileGuid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * You can bind a file with an invoice using this endpoint. The bound file will be sent with the invoice.
     * @summary Bind attachment with a document
     * @param {AttachmentsApiV1OrganizationIdAttachmentsDocumentGuidFileGuidFileNamePostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AttachmentsApi
     */
    public v1OrganizationIdAttachmentsDocumentGuidFileGuidFileNamePost(requestParameters: AttachmentsApiV1OrganizationIdAttachmentsDocumentGuidFileGuidFileNamePostRequest, options?: RawAxiosRequestConfig) {
        return AttachmentsApiFp(this.configuration).v1OrganizationIdAttachmentsDocumentGuidFileGuidFileNamePost(requestParameters.organizationId, requestParameters.documentGuid, requestParameters.fileGuid, requestParameters.fileName, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a list of attachments bound to an invoice, trade-offer or credit-note.
     * @summary Get document attachments
     * @param {AttachmentsApiV1OrganizationIdAttachmentsDocumentGuidGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AttachmentsApi
     */
    public v1OrganizationIdAttachmentsDocumentGuidGet(requestParameters: AttachmentsApiV1OrganizationIdAttachmentsDocumentGuidGetRequest, options?: RawAxiosRequestConfig) {
        return AttachmentsApiFp(this.configuration).v1OrganizationIdAttachmentsDocumentGuidGet(requestParameters.organizationId, requestParameters.documentGuid, options).then((request) => request(this.axios, this.basePath));
    }
}

