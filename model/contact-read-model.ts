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
 * Contact information for either a contact person or a company
 * @export
 * @interface ContactReadModel
 */
export interface ContactReadModel {
    /**
     * Your external id  This can be used for ID\'ing in external apps/services e.g. a web shop.  The maximum length is 128 characters
     * @type {string}
     * @memberof ContactReadModel
     */
    'externalReference'?: string | null;
    /**
     * Name of the contact person or the company name
     * @type {string}
     * @memberof ContactReadModel
     */
    'name': string;
    /**
     * Street name
     * @type {string}
     * @memberof ContactReadModel
     */
    'street'?: string | null;
    /**
     * Zip code
     * @type {string}
     * @memberof ContactReadModel
     */
    'zipCode'?: string | null;
    /**
     * City
     * @type {string}
     * @memberof ContactReadModel
     */
    'city'?: string | null;
    /**
     * Country key  Two character string e.g. DK for Denmark, DE for Germany or SE for Sweden
     * @type {string}
     * @memberof ContactReadModel
     */
    'countryKey': string;
    /**
     * Phone number
     * @type {string}
     * @memberof ContactReadModel
     */
    'phone'?: string | null;
    /**
     * Email address
     * @type {string}
     * @memberof ContactReadModel
     */
    'email'?: string | null;
    /**
     * Webpage address
     * @type {string}
     * @memberof ContactReadModel
     */
    'webpage'?: string | null;
    /**
     * Name of the att. person in cases here the contact is a company. If IsPerson this should be NULL.
     * @type {string}
     * @memberof ContactReadModel
     */
    'attPerson'?: string | null;
    /**
     * VAT number. If IsPerson this should be NULL.  This can be used for digital invoicing.
     * @type {string}
     * @memberof ContactReadModel
     */
    'vatNumber'?: string | null;
    /**
     * EAN number. This number is used for digital invoicing. If IsPerson this should be NULL.
     * @type {string}
     * @memberof ContactReadModel
     */
    'eanNumber'?: string | null;
    /**
     * SE number. The number is used for digital invoicing. If IsPerson this should be NULL.
     * @type {string}
     * @memberof ContactReadModel
     */
    'seNumber'?: string | null;
    /**
     * P number. The number is used for digital invoicing. If IsPerson this should be NULL.
     * @type {string}
     * @memberof ContactReadModel
     */
    'pNumber'?: string | null;
    /**
     * Type of the payment condition for the contact. Netto, NettoCash or CurrentMonthOut. If NettoCash, then PaymentConditionNumberOfDays should be null. Defaults to type specified in voucher settings.
     * @type {string}
     * @memberof ContactReadModel
     */
    'paymentConditionType'?: string | null;
    /**
     * Number of days for payment for the contact. E.g. that the contact has 7 days until  payment has to be made. This field depends on PaymentConditionType. If left empty, defaults to the number of days specified in voucher settings.
     * @type {number}
     * @memberof ContactReadModel
     */
    'paymentConditionNumberOfDays'?: number | null;
    /**
     * Boolean to indicate whether the contact is a private person or a company. If true, the contact is a person.
     * @type {boolean}
     * @memberof ContactReadModel
     */
    'isPerson': boolean;
    /**
     * Boolean to indicate whether the contact is a member. If true, the contact is a member else a private person of a company depending on IsPerson.  Only usable by unions.
     * @type {boolean}
     * @memberof ContactReadModel
     */
    'isMember': boolean;
    /**
     * A membership number used if the contact is a member.  Only usable by unions.
     * @type {string}
     * @memberof ContactReadModel
     */
    'memberNumber'?: string | null;
    /**
     * Boolean to indicate whether the contacts name and address should be updated with data from CVR.
     * @type {boolean}
     * @memberof ContactReadModel
     */
    'useCvr': boolean;
    /**
     * String with the key of the company type. The following keys are allowed: EmptyCompanyType,  SoleProprietorship, PrivateLimitedCompany, PublicLimitedCompany, GeneralPartnership,  LimitedPartnership, LimitedLiabilityCooperative, LimitedLiabilityVoluntaryAssociation,  LimitedLiabilityCompany, EntreprenurLimitedCompany, Union, VoluntaryUnion, SmallPersonallyOwnedCompany,  TrustFund and Others.
     * @type {string}
     * @memberof ContactReadModel
     */
    'companyTypeKey'?: string | null;
    /**
     * Preferred e-invoicing method.  The possible values are:  VAT (cvr-nummer), GLN (ean- / gln-nummer), SE (se-nummer), P (p-nummer) and null if the contact is not a company or if nothing is preferred.  Each field requires that the selected mail out number is present - e.g. vat number should be present when InvoiceMailOutOptionKey is set to VAT.
     * @type {string}
     * @memberof ContactReadModel
     */
    'invoiceMailOutOptionKey'?: string | null;
    /**
     * Our Guid
     * @type {string}
     * @memberof ContactReadModel
     */
    'contactGuid': string;
    /**
     * Time at which the Contact was created
     * @type {string}
     * @memberof ContactReadModel
     */
    'createdAt'?: string | null;
    /**
     * Time at which the Contact was last updated
     * @type {string}
     * @memberof ContactReadModel
     */
    'updatedAt'?: string | null;
    /**
     * Time at which the Contact was deleted
     * @type {string}
     * @memberof ContactReadModel
     */
    'deletedAt'?: string | null;
    /**
     * Is the contact a debitor
     * @type {boolean}
     * @memberof ContactReadModel
     */
    'isDebitor': boolean;
    /**
     * Is the contact a creditor
     * @type {boolean}
     * @memberof ContactReadModel
     */
    'isCreditor': boolean;
    /**
     * Possible values are unknown, normal, active, withoutLegalEffect, underVoluntaryLiquidation, duringReconstruction, underBankruptcy, underCompulsoryResolution,  dissolvedAfterBankruptcy, forciblyDissolved, dissolvedAfterVoluntaryLiquidation, dissolvedAfterDeclaration, underReassumption, deleted, dissolved,  dissolvedAfterFusion, dissolvedAfterDemerger, underCreation, dissolvedAfterOfficeBorderRelocation, dissolvedAfterOfficeBorderFusion and ceasedTrading
     * @type {string}
     * @memberof ContactReadModel
     */
    'companyStatus'?: string | null;
    /**
     * The country of the contact is placed in this region.  Different danish VAT rules apply in these regions.  Possible values are DK, EU and World.
     * @type {string}
     * @memberof ContactReadModel
     */
    'vatRegionKey'?: string | null;
}

