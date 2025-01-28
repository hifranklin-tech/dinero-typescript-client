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
 * Model for a line on a tradeoffer
 * @export
 * @interface TradeOfferLineCreateModel
 */
export interface TradeOfferLineCreateModel {
    /**
     * The guid of product. If product guid is set, description should be null.
     * @type {string}
     * @memberof TradeOfferLineCreateModel
     */
    'productGuid'?: string | null;
    /**
     * A description of the product. If no ProductGuid, this field is required.  This field will always have a value on the read model, even if a ProductGuid is set.
     * @type {string}
     * @memberof TradeOfferLineCreateModel
     */
    'description'?: string | null;
    /**
     * User supplied comment
     * @type {string}
     * @memberof TradeOfferLineCreateModel
     */
    'comments'?: string | null;
    /**
     * Quantity
     * @type {number}
     * @memberof TradeOfferLineCreateModel
     */
    'quantity': number;
    /**
     * Account number
     * @type {number}
     * @memberof TradeOfferLineCreateModel
     */
    'accountNumber': number;
    /**
     * Product unit. Required when LineType = Product. Available unit types: hours, parts, km, day, week, month, kilogram, cubicMetre, set, litre, box, case, carton, metre, package, shipment, squareMetre, session, tonne.
     * @type {string}
     * @memberof TradeOfferLineCreateModel
     */
    'unit'?: string | null;
    /**
     * Discount for the current line. Specified in percentage from 0 to 100.
     * @type {number}
     * @memberof TradeOfferLineCreateModel
     */
    'discount': number;
    /**
     * Type. Either Product or Text line.   Text is used for creating bold lines only with text displayed, these lines are purely visual and have no effect on the voucher.  Text lines should only contain a description.  Product lines are the actual lines of the invoice used for accounting and total calculations.
     * @type {string}
     * @memberof TradeOfferLineCreateModel
     */
    'lineType'?: string | null;
    /**
     * Base amount. As default without VAT. If you want to use amounts incl vat, the setting \'ShowLinesInclVat\' should be set to true on the voucher containing the lines.
     * @type {number}
     * @memberof TradeOfferLineCreateModel
     */
    'baseAmountValue': number;
}

