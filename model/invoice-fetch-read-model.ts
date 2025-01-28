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
import type { InvoiceLinesReadModel } from './invoice-lines-read-model';
// May contain unused imports in some cases
// @ts-ignore
import type { TotalLine } from './total-line';

/**
 * Represent a invoice
 * @export
 * @interface InvoiceFetchReadModel
 */
export interface InvoiceFetchReadModel {
    /**
     * The currency used on the voucher. Defaults to DKK if null. Dinero will assign days date currency rate for the given currency. Currencies are given in format: DKK, EUR, USD etc...
     * @type {string}
     * @memberof InvoiceFetchReadModel
     */
    'currency'?: string | null;
    /**
     * The language to be used in the voucher. Available languages are \'da-DK\' and \'en-GB\'. Defaults to \'da-DK\'.
     * @type {string}
     * @memberof InvoiceFetchReadModel
     */
    'language'?: string | null;
    /**
     * Your external id  This can be used for ID\'ing in external apps/services e.g. a web shop.  The maximum length is 128 characters
     * @type {string}
     * @memberof InvoiceFetchReadModel
     */
    'externalReference'?: string | null;
    /**
     * User supplied description of the voucher e.g. \'Custom Invoice description\'. Defaults to document type e.g. \'Invoice\', \'Offer\', \'Creditnote\' using the selected language.
     * @type {string}
     * @memberof InvoiceFetchReadModel
     */
    'description'?: string | null;
    /**
     * User supplied comment on the voucher
     * @type {string}
     * @memberof InvoiceFetchReadModel
     */
    'comment'?: string | null;
    /**
     * The date of the creation/issuing. This should be in the format YYYY-MM-DD e.g. 2015-12-02. Defaults to today.
     * @type {string}
     * @memberof InvoiceFetchReadModel
     */
    'date'?: string | null;
    /**
     * User supplied invoice lines. Minimum one.
     * @type {Array<InvoiceLinesReadModel>}
     * @memberof InvoiceFetchReadModel
     */
    'productLines': Array<InvoiceLinesReadModel>;
    /**
     * Contact address (linebreaks are allowed \'\\n\'). When null is specified the address defaults to the contacts address.
     * @type {string}
     * @memberof InvoiceFetchReadModel
     */
    'address'?: string | null;
    /**
     * The number of the voucher.
     * @type {number}
     * @memberof InvoiceFetchReadModel
     */
    'number': number;
    /**
     * Contact name
     * @type {string}
     * @memberof InvoiceFetchReadModel
     */
    'contactName'?: string | null;
    /**
     * If true, the user prefers the invoice to be displayed with lines incl vat.
     * @type {boolean}
     * @memberof InvoiceFetchReadModel
     */
    'showLinesInclVat': boolean;
    /**
     * Total amount without vat
     * @type {number}
     * @memberof InvoiceFetchReadModel
     */
    'totalExclVat': number;
    /**
     * Total amount to calculate the vat from
     * @type {number}
     * @memberof InvoiceFetchReadModel
     */
    'totalVatableAmount': number;
    /**
     * Total amount incl. vat
     * @type {number}
     * @memberof InvoiceFetchReadModel
     */
    'totalInclVat': number;
    /**
     * Total vat free amount
     * @type {number}
     * @memberof InvoiceFetchReadModel
     */
    'totalNonVatableAmount': number;
    /**
     * Total vat amount
     * @type {number}
     * @memberof InvoiceFetchReadModel
     */
    'totalVat': number;
    /**
     * Total lines. SubTotal, Vat and Total. Only lines valid for display in the current context are returned.
     * @type {Array<TotalLine>}
     * @memberof InvoiceFetchReadModel
     */
    'totalLines'?: Array<TotalLine> | null;
    /**
     * Template id to use for design.
     * @type {string}
     * @memberof InvoiceFetchReadModel
     */
    'invoiceTemplateId'?: string | null;
    /**
     * Dinero contact guid.
     * @type {string}
     * @memberof InvoiceFetchReadModel
     */
    'contactGuid'?: string | null;
    /**
     * The invoice\'s payment date. This should be in the format YYYY-MM-DD e.g. 2015-12-02
     * @type {string}
     * @memberof InvoiceFetchReadModel
     */
    'paymentDate'?: string | null;
    /**
     * Number of days until payment deadline.
     * @type {number}
     * @memberof InvoiceFetchReadModel
     */
    'paymentConditionNumberOfDays': number;
    /**
     * Type of payment condition. Valid types are: Netto, NettoCash, CurrentMonthOut.   Note that if you use NettoCash, PaymentConditionNumberOfDays should be zero.
     * @type {string}
     * @memberof InvoiceFetchReadModel
     */
    'paymentConditionType'?: string | null;
    /**
     * Whether MobilePay Invoice can be enabled for this invoice
     * @type {boolean}
     * @memberof InvoiceFetchReadModel
     */
    'canEnableMobilePayInvoice': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof InvoiceFetchReadModel
     */
    'canEnablePensoPay': boolean;
}

