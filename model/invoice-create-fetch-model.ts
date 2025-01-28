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
import type { InvoiceLinesCreateModel } from './invoice-lines-create-model';

/**
 * Model for fetching a sales voucher.
 * @export
 * @interface InvoiceCreateFetchModel
 */
export interface InvoiceCreateFetchModel {
    /**
     * The currency used on the voucher. Defaults to DKK if null. Dinero will assign days date currency rate for the given currency. Currencies are given in format: DKK, EUR, USD etc...
     * @type {string}
     * @memberof InvoiceCreateFetchModel
     */
    'currency'?: string | null;
    /**
     * The language to be used in the voucher. Available languages are \'da-DK\' and \'en-GB\'. Defaults to \'da-DK\'.
     * @type {string}
     * @memberof InvoiceCreateFetchModel
     */
    'language'?: string | null;
    /**
     * Your external id  This can be used for ID\'ing in external apps/services e.g. a web shop.  The maximum length is 128 characters
     * @type {string}
     * @memberof InvoiceCreateFetchModel
     */
    'externalReference'?: string | null;
    /**
     * User supplied description of the voucher e.g. \'Custom Invoice description\'. Defaults to document type e.g. \'Invoice\', \'Offer\', \'Creditnote\' using the selected language.
     * @type {string}
     * @memberof InvoiceCreateFetchModel
     */
    'description'?: string | null;
    /**
     * User supplied comment on the voucher
     * @type {string}
     * @memberof InvoiceCreateFetchModel
     */
    'comment'?: string | null;
    /**
     * The date of the creation/issuing. This should be in the format YYYY-MM-DD e.g. 2015-12-02. Defaults to today.
     * @type {string}
     * @memberof InvoiceCreateFetchModel
     */
    'date'?: string | null;
    /**
     * User supplied invoice lines. Minimum one.
     * @type {Array<InvoiceLinesCreateModel>}
     * @memberof InvoiceCreateFetchModel
     */
    'productLines': Array<InvoiceLinesCreateModel>;
    /**
     * Contact address (linebreaks are allowed \'\\n\'). When null is specified the address defaults to the contacts address.
     * @type {string}
     * @memberof InvoiceCreateFetchModel
     */
    'address'?: string | null;
    /**
     * Optional guid for the object. If not set the system will create a guid returned in the response.
     * @type {string}
     * @memberof InvoiceCreateFetchModel
     */
    'guid'?: string | null;
    /**
     * If your user (or your system) prefers to provide the line amounts incl. VAT, then this property should be set to true. All voucher lines will be assumed to have amounts incl VAT.  If your lines are excl VAT, you do not need to set this property. It will defaults to false.
     * @type {boolean}
     * @memberof InvoiceCreateFetchModel
     */
    'showLinesInclVat'?: boolean | null;
    /**
     * Template id to use for design. If null, the default one will be used.
     * @type {string}
     * @memberof InvoiceCreateFetchModel
     */
    'invoiceTemplateId'?: string | null;
    /**
     * Dinero contact guid. Optional for creating a draft, required for booking.
     * @type {string}
     * @memberof InvoiceCreateFetchModel
     */
    'contactGuid'?: string | null;
    /**
     * Number of days until payment deadline. If PaymentConditionNumberOfDays AND PaymentConditionType is left empty they will default to the contacts default payment conditions.
     * @type {number}
     * @memberof InvoiceCreateFetchModel
     */
    'paymentConditionNumberOfDays'?: number | null;
    /**
     * Type of payment condition. Valid types are: Netto, NettoCash, CurrentMonthOut, or Paid. Note that if you use NettoCash or Paid, PaymentConditionNumberOfDays should be null.
     * @type {string}
     * @memberof InvoiceCreateFetchModel
     */
    'paymentConditionType'?: string | null;
    /**
     * Reminder fee for any reminders created from the invoice. Should be nonnegative and at most 100. Will use default sales voucher setting if left empty.
     * @type {number}
     * @memberof InvoiceCreateFetchModel
     */
    'reminderFee'?: number | null;
    /**
     * Reminder interest rate for any reminders created from the invoice. Should be nonnegative and at most 100. Will use default sales voucher setting if left empty.
     * @type {number}
     * @memberof InvoiceCreateFetchModel
     */
    'reminderInterestRate'?: number | null;
    /**
     * Indicates whether MobilePay Invoice should be enabled for this invoice.
     * @type {boolean}
     * @memberof InvoiceCreateFetchModel
     */
    'isMobilePayInvoiceEnabled'?: boolean | null;
    /**
     * Indicates whether PensoPay should be enabled for this invoice.
     * @type {boolean}
     * @memberof InvoiceCreateFetchModel
     */
    'isPensoPayEnabled'?: boolean | null;
}

