const Common = require("./client/CommonPlatformClient");

const Lead = require("./client/LeadPlatformClient");

const Billing = require("./client/BillingPlatformClient");

const Communication = require("./client/CommunicationPlatformClient");

const Payment = require("./client/PaymentPlatformClient");

const Order = require("./client/OrderPlatformClient");

const Catalog = require("./client/CatalogPlatformClient");

const CompanyProfile = require("./client/CompanyProfilePlatformClient");

const FileStorage = require("./client/FileStoragePlatformClient");

const Inventory = require("./client/InventoryPlatformClient");

const Configuration = require("./client/ConfigurationPlatformClient");

const Analytics = require("./client/AnalyticsPlatformClient");

const Discount = require("./client/DiscountPlatformClient");

const Webhook = require("./client/WebhookPlatformClient");

const AuditTrail = require("./client/AuditTrailPlatformClient");
const PlatformApplicationClient = require("./PlatformApplicationClient");
const { FDKClientValidationError } = require("../common/FDKError");

class PlatformClient {
  constructor(config) {
    this.config = config;
    this.common = new Common(config);
    this.lead = new Lead(config);
    this.billing = new Billing(config);
    this.communication = new Communication(config);
    this.payment = new Payment(config);
    this.order = new Order(config);
    this.catalog = new Catalog(config);
    this.companyProfile = new CompanyProfile(config);
    this.fileStorage = new FileStorage(config);
    this.inventory = new Inventory(config);
    this.configuration = new Configuration(config);
    this.analytics = new Analytics(config);
    this.discount = new Discount(config);
    this.webhook = new Webhook(config);
    this.auditTrail = new AuditTrail(config);
  }
  application(applicationId) {
    if (typeof applicationId == "string") {
      return new PlatformApplicationClient(applicationId, this.config);
    }
    throw new Error(
      `Application Id should be of type string, ${typeof applicationId} provided`
    );
  }

  setExtraHeaders(header) {
    if (typeof header === "object") {
      this.config.extraHeaders.push(header);
    } else {
      throw new FDKClientValidationError("Context value should be an object");
    }
  }
}

/**
 * @typedef ApplicationResponse
 * @property {Application} [application]
 */

/**
 * @typedef Currency
 * @property {string} [_id]
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {string} [code]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [decimal_digits]
 * @property {string} [symbol]
 */

/**
 * @typedef Domain
 * @property {boolean} [verified]
 * @property {boolean} [is_primary]
 * @property {boolean} [is_shortlink]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {boolean} [is_predefined]
 */

/**
 * @typedef ApplicationWebsite
 * @property {boolean} [enabled]
 * @property {string} [basepath]
 */

/**
 * @typedef ApplicationCors
 * @property {string[]} [domains]
 */

/**
 * @typedef ApplicationAuth
 * @property {boolean} [enabled]
 */

/**
 * @typedef ApplicationRedirections
 * @property {string} [redirect_from]
 * @property {string} [redirect_to]
 * @property {string} [type]
 */

/**
 * @typedef ApplicationMeta
 * @property {string} [name]
 * @property {string} [value]
 */

/**
 * @typedef SecureUrl
 * @property {string} [secure_url]
 */

/**
 * @typedef Application
 * @property {ApplicationWebsite} [website]
 * @property {ApplicationCors} [cors]
 * @property {ApplicationAuth} [auth]
 * @property {string} [description]
 * @property {string} [channel_type]
 * @property {number} [cache_ttl]
 * @property {boolean} [is_internal]
 * @property {boolean} [is_active]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [owner]
 * @property {number} [company_id]
 * @property {string} [token]
 * @property {ApplicationRedirections[]} [redirections]
 * @property {ApplicationMeta[]} [meta]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 * @property {SecureUrl} [banner]
 * @property {SecureUrl} [logo]
 * @property {SecureUrl} [favicon]
 * @property {Domain[]} [domains]
 * @property {string} [app_type]
 * @property {SecureUrl} [mobile_logo]
 * @property {Domain} [domain]
 */

/**
 * @typedef NotFound
 * @property {string} [message]
 */

/**
 * @typedef BadRequest
 * @property {string} [message]
 */

/**
 * @typedef LocationDefaultLanguage
 * @property {string} [name]
 * @property {string} [code]
 */

/**
 * @typedef LocationDefaultCurrency
 * @property {string} [name]
 * @property {string} [symbol]
 * @property {string} [code]
 */

/**
 * @typedef LocationCountry
 * @property {string} [capital]
 * @property {string} [currency]
 * @property {string} [iso2]
 * @property {string} [iso3]
 * @property {string} [name]
 * @property {string} [parent]
 * @property {string} [phone_code]
 * @property {string} [type]
 * @property {number} [uid]
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {LocationDefaultCurrency} [default_currency]
 * @property {LocationDefaultLanguage} [default_language]
 */

/**
 * @typedef Locations
 * @property {Object[]} [items]
 */

/**
 * @typedef TicketList
 * @property {Ticket[]} [items]
 * @property {Filter} [filters]
 * @property {Page} [page]
 */

/**
 * @typedef Page
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 * @property {number} [current]
 * @property {string} type
 * @property {number} [size]
 */

/**
 * @typedef TicketHistoryList
 * @property {TicketHistory[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef CustomFormList
 * @property {CustomForm[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef CreateCustomFormPayload
 * @property {string} slug
 * @property {string} title
 * @property {Object[]} inputs
 * @property {string} [description]
 * @property {string} [header_image]
 * @property {PriorityEnum} priority
 * @property {boolean} [should_notify]
 * @property {string} [success_message]
 * @property {PollForAssignment} [poll_for_assignment]
 */

/**
 * @typedef EditCustomFormPayload
 * @property {string} title
 * @property {Object[]} inputs
 * @property {string} [description]
 * @property {PriorityEnum} priority
 * @property {string} [header_image]
 * @property {boolean} [should_notify]
 * @property {boolean} [login_required]
 * @property {string} [success_message]
 * @property {PollForAssignment} [poll_for_assignment]
 */

/**
 * @typedef EditTicketPayload
 * @property {TicketContent} [content]
 * @property {string} [category]
 * @property {string} [sub_category]
 * @property {string} [source]
 * @property {string} [status]
 * @property {PriorityEnum} [priority]
 * @property {AgentChangePayload} [assigned_to]
 * @property {string[]} [tags]
 */

/**
 * @typedef AgentChangePayload
 * @property {string} agent_id
 */

/**
 * @typedef CreateVideoRoomResponse
 * @property {string} unique_name
 */

/**
 * @typedef CloseVideoRoomResponse
 * @property {boolean} success
 */

/**
 * @typedef CreateVideoRoomPayload
 * @property {string} unique_name
 * @property {NotifyUser[]} [notify]
 */

/**
 * @typedef NotifyUser
 * @property {string} country_code
 * @property {string} phone_number
 */

/**
 * @typedef Filter
 * @property {Priority[]} priorities
 * @property {TicketCategory[]} [categories]
 * @property {Status[]} statuses
 * @property {Object[]} assignees
 */

/**
 * @typedef TicketHistoryPayload
 * @property {Object} value
 * @property {HistoryTypeEnum} type
 */

/**
 * @typedef CustomFormSubmissionPayload
 * @property {Object[]} response
 * @property {TicketAsset[]} [attachments]
 */

/**
 * @typedef GetTokenForVideoRoomResponse
 * @property {string} access_token
 */

/**
 * @typedef GetParticipantsInsideVideoRoomResponse
 * @property {Participant[]} participants
 */

/**
 * @typedef Participant
 * @property {UserSchema} [user]
 * @property {string} [identity]
 * @property {string} [status]
 */

/**
 * @typedef Email
 * @property {boolean} [primary]
 * @property {boolean} [verified]
 * @property {string} [email]
 * @property {boolean} [active]
 */

/**
 * @typedef Debug
 * @property {string} [source]
 * @property {string} [platform]
 */

/**
 * @typedef SubmitCustomFormResponse
 * @property {string} message
 * @property {Ticket} [ticket]
 */

/**
 * @typedef TicketContext
 * @property {string} [application_id]
 * @property {string} company_id
 */

/**
 * @typedef CreatedOn
 * @property {string} user_agent
 */

/**
 * @typedef TicketAsset
 * @property {string} [display]
 * @property {string} value
 * @property {TicketAssetTypeEnum} type
 */

/**
 * @typedef TicketContent
 * @property {string} title
 * @property {string} [description]
 * @property {TicketAsset[]} [attachments]
 */

/**
 * @typedef AddTicketPayload
 * @property {Object} [created_by]
 * @property {string} [status]
 * @property {PriorityEnum} [priority]
 * @property {string} category
 * @property {TicketContent} content
 * @property {Object} [_custom_json]
 */

/**
 * @typedef Priority
 * @property {PriorityEnum} key
 * @property {string} display
 * @property {string} color
 */

/**
 * @typedef Status
 * @property {string} key
 * @property {string} display
 * @property {string} color
 */

/**
 * @typedef TicketFeedbackForm
 * @property {string} title
 * @property {Object[]} [display]
 */

/**
 * @typedef TicketFeedbackList
 * @property {TicketFeedback[]} [items]
 */

/**
 * @typedef TicketFeedbackPayload
 * @property {Object} [form_response]
 */

/**
 * @typedef SubmitButton
 * @property {string} title
 * @property {string} title_color
 * @property {string} background_color
 */

/**
 * @typedef PollForAssignment
 * @property {number} duration
 * @property {string} message
 * @property {string} success_message
 * @property {string} failure_message
 */

/**
 * @typedef CustomForm
 * @property {string} application_id
 * @property {string} slug
 * @property {string} [header_image]
 * @property {string} title
 * @property {string} [description]
 * @property {Priority} priority
 * @property {boolean} login_required
 * @property {boolean} should_notify
 * @property {string} [success_message]
 * @property {SubmitButton} [submit_button]
 * @property {Object[]} inputs
 * @property {CreatedOn} [created_on]
 * @property {PollForAssignment} [poll_for_assignment]
 * @property {string} _id
 */

/**
 * @typedef CommunicationDetails
 * @property {string} [type]
 * @property {string} [title]
 * @property {string} [value]
 * @property {string} [description]
 * @property {boolean} [enabled]
 */

/**
 * @typedef SupportGeneralConfig
 * @property {string} [_id]
 * @property {CommunicationDetails} [support_email]
 * @property {CommunicationDetails} [support_phone]
 * @property {CommunicationDetails} [support_faq]
 * @property {boolean} [show_communication_info]
 * @property {CommunicationDetails} [support_communication]
 * @property {boolean} [show_support_dris]
 * @property {Object} [integration]
 */

/**
 * @typedef FeedbackForm
 * @property {Object} [inputs]
 * @property {string} [title]
 * @property {Object} [timestamps]
 */

/**
 * @typedef TicketSubCategory
 * @property {string} key
 * @property {string} display
 * @property {TicketSubCategory} [sub_categories]
 */

/**
 * @typedef TicketCategory
 * @property {string} display
 * @property {string} key
 * @property {TicketCategory} [sub_categories]
 * @property {number} [group_id]
 * @property {FeedbackForm} [feedback_form]
 */

/**
 * @typedef CategoryData
 * @property {TicketCategory} [list]
 */

/**
 * @typedef IntegrationConfig
 * @property {string} [_id]
 * @property {string} integration_type
 * @property {string} [base_url]
 * @property {string} [create_ticket_apikey]
 * @property {string} [update_ticket_apikey]
 * @property {string} [category_sync_apikey]
 * @property {CategoryData} [category_data]
 * @property {string} [webhook_apikey]
 * @property {boolean} [config_completed]
 * @property {boolean} allow_ticket_creation
 * @property {boolean} show_listing
 */

/**
 * @typedef FeedbackResponseItem
 * @property {string} display
 * @property {string} key
 * @property {string} value
 */

/**
 * @typedef TicketFeedback
 * @property {string} _id
 * @property {string} ticket_id
 * @property {string} company_id
 * @property {FeedbackResponseItem[]} response
 * @property {string} [category]
 * @property {Object} [user]
 * @property {string} [updated_at]
 * @property {string} [created_at]
 */

/**
 * @typedef TicketHistory
 * @property {string} type
 * @property {Object} value
 * @property {string} ticket_id
 * @property {CreatedOn} [created_on]
 * @property {Object} [created_by]
 * @property {string} _id
 * @property {string} [updated_at]
 * @property {string} [created_at]
 */

/**
 * @typedef Ticket
 * @property {TicketContext} [context]
 * @property {CreatedOn} [created_on]
 * @property {string} [response_id]
 * @property {TicketContent} [content]
 * @property {TicketCategory} category
 * @property {string} [sub_category]
 * @property {TicketSourceEnum} source
 * @property {Status} status
 * @property {Priority} priority
 * @property {Object} [created_by]
 * @property {Object} [assigned_to]
 * @property {string[]} [tags]
 * @property {Object} [_custom_json]
 * @property {boolean} [is_feedback_pending]
 * @property {Object} [integration]
 * @property {string} _id
 * @property {string} [updated_at]
 * @property {string} [created_at]
 */

/**
 * @typedef AvailablePageSchema
 * @property {string} [value]
 * @property {string} [text]
 * @property {string} [path]
 * @property {string} [type]
 * @property {AvailablePageSchemaSections[]} [sections]
 * @property {AvailablePageSectionMetaAttributes[]} [sections_meta]
 * @property {string} [theme]
 * @property {AvailablePageSeo} [seo]
 * @property {Object[]} [props]
 * @property {string} [_id]
 */

/**
 * @typedef AvailablePageSectionMetaAttributes
 * @property {Object} [attributes]
 */

/**
 * @typedef AvailablePageSeo
 * @property {string} [title]
 * @property {string} [description]
 * @property {string} [_id]
 */

/**
 * @typedef AvailablePageSchemaSections
 * @property {string} [name]
 * @property {string} [label]
 * @property {Object} [props]
 * @property {Object[]} [blocks]
 * @property {Object} [preset]
 * @property {AvailablePagePredicate} [predicate]
 */

/**
 * @typedef AvailablePageScreenPredicate
 * @property {boolean} [mobile]
 * @property {boolean} [desktop]
 * @property {boolean} [tablet]
 */

/**
 * @typedef AvailablePageUserPredicate
 * @property {boolean} [authenticated]
 * @property {boolean} [anonymous]
 */

/**
 * @typedef AvailablePageRoutePredicate
 * @property {string} [selected]
 * @property {string} [exact_url]
 * @property {Object} [query]
 */

/**
 * @typedef AvailablePagePredicate
 * @property {AvailablePageScreenPredicate} [screen]
 * @property {AvailablePageUserPredicate} [user]
 * @property {AvailablePageRoutePredicate} [route]
 */

/**
 * @typedef AllAvailablePageSchema
 * @property {AvailablePageSchema[]} [pages]
 */

/**
 * @typedef PaginationSchema
 * @property {number} [size]
 * @property {number} [item_total]
 * @property {boolean} [has_next]
 * @property {string} [type]
 * @property {number} [current]
 */

/**
 * @typedef ThemesListingResponseSchema
 * @property {ThemesSchema[]} [items]
 * @property {PaginationSchema} [page]
 */

/**
 * @typedef AddThemeRequestSchema
 * @property {string} [theme_id]
 */

/**
 * @typedef UpgradableThemeSchema
 * @property {string} [parent_theme]
 * @property {string} [applied_theme]
 * @property {boolean} [upgrade]
 */

/**
 * @typedef FontsSchema
 * @property {FontsSchemaItems} [items]
 * @property {string} [kind]
 */

/**
 * @typedef BlitzkriegApiErrorSchema
 * @property {string} [message]
 */

/**
 * @typedef BlitzkriegNotFoundSchema
 * @property {string} [message]
 */

/**
 * @typedef BlitzkriegInternalServerErrorSchema
 * @property {string} [message]
 */

/**
 * @typedef FontsSchemaItems
 * @property {string} [family]
 * @property {string[]} [variants]
 * @property {string[]} [subsets]
 * @property {string} [version]
 * @property {string} [last_modified]
 * @property {FontsSchemaItemsFiles} [files]
 * @property {string} [category]
 * @property {string} [kind]
 */

/**
 * @typedef FontsSchemaItemsFiles
 * @property {string} [regular]
 * @property {string} [italic]
 * @property {string} [bold]
 */

/**
 * @typedef ThemesSchema
 * @property {string} [application]
 * @property {boolean} [applied]
 * @property {boolean} [customized]
 * @property {boolean} [published]
 * @property {boolean} [archived]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [version]
 * @property {string} [parent_theme_version]
 * @property {string} [parent_theme]
 * @property {Information} [information]
 * @property {string[]} [tags]
 * @property {Src} [src]
 * @property {AssetsSchema} [assets]
 * @property {availableSectionSchema[]} [available_sections]
 * @property {Object} [styles]
 * @property {Config} [config]
 * @property {Font} [font]
 * @property {string} [_id]
 * @property {number} [__v]
 * @property {Colors} [colors]
 */

/**
 * @typedef availableSectionSchema
 * @property {Blocks[]} [blocks]
 * @property {string} [name]
 * @property {string} [label]
 * @property {BlocksProps[]} [props]
 */

/**
 * @typedef Information
 * @property {Images} [images]
 * @property {string[]} [features]
 * @property {string} [name]
 * @property {string} [description]
 */

/**
 * @typedef Images
 * @property {string[]} [desktop]
 * @property {string[]} [android]
 * @property {string[]} [ios]
 * @property {string[]} [thumbnail]
 */

/**
 * @typedef Src
 * @property {string} [link]
 */

/**
 * @typedef AssetsSchema
 * @property {UmdJs} [umd_js]
 * @property {CommonJs} [common_js]
 * @property {Css} [css]
 */

/**
 * @typedef UmdJs
 * @property {string} [link]
 * @property {string[]} [links]
 */

/**
 * @typedef CommonJs
 * @property {string} [link]
 */

/**
 * @typedef Css
 * @property {string} [link]
 * @property {string[]} [links]
 */

/**
 * @typedef Sections
 * @property {string} [attributes]
 */

/**
 * @typedef Config
 * @property {Preset} [preset]
 * @property {GlobalSchema} [global_schema]
 * @property {string} [current]
 * @property {ListSchemaItem[]} [list]
 */

/**
 * @typedef Preset
 * @property {AvailablePageSchema[]} [pages]
 */

/**
 * @typedef GlobalSchema
 * @property {GlobalSchemaProps[]} [props]
 */

/**
 * @typedef ListSchemaItem
 * @property {Object} [global_config]
 * @property {ConfigPage[]} [page]
 * @property {string} [name]
 */

/**
 * @typedef Colors
 * @property {string} [bg_color]
 * @property {string} [primary_color]
 * @property {string} [secondary_color]
 * @property {string} [accent_color]
 * @property {string} [link_color]
 * @property {string} [button_secondary_color]
 */

/**
 * @typedef Custom
 * @property {Object} [props]
 */

/**
 * @typedef ConfigPage
 * @property {Object} [settings]
 * @property {string} [page]
 */

/**
 * @typedef Font
 * @property {string} [family]
 * @property {Variants} [variants]
 */

/**
 * @typedef Variants
 * @property {Medium} [medium]
 * @property {SemiBold} [semi_bold]
 * @property {Bold} [bold]
 * @property {Light} [light]
 * @property {Regular} [regular]
 */

/**
 * @typedef Medium
 * @property {string} [name]
 * @property {string} [file]
 */

/**
 * @typedef SemiBold
 * @property {string} [name]
 * @property {string} [file]
 */

/**
 * @typedef Bold
 * @property {string} [name]
 * @property {string} [file]
 */

/**
 * @typedef Light
 * @property {string} [name]
 * @property {string} [file]
 */

/**
 * @typedef Regular
 * @property {string} [name]
 * @property {string} [file]
 */

/**
 * @typedef Blocks
 * @property {string} [type]
 * @property {string} [name]
 * @property {BlocksProps[]} [props]
 */

/**
 * @typedef GlobalSchemaProps
 * @property {string} [id]
 * @property {string} [label]
 * @property {string} [type]
 * @property {string} [category]
 */

/**
 * @typedef BlocksProps
 * @property {string} [id]
 * @property {string} [label]
 * @property {string} [type]
 */

/**
 * @typedef BlockUserRequestSchema
 * @property {boolean} [status]
 * @property {string[]} [user_id]
 * @property {string} [reason]
 */

/**
 * @typedef ArchiveUserRequestSchema
 * @property {string} [user_id]
 */

/**
 * @typedef DeleteApplicationUserRequestSchema
 * @property {string} [user_id]
 * @property {string} [reason]
 * @property {string} [reason_id]
 * @property {string} [request_id]
 * @property {string} [otp]
 */

/**
 * @typedef UnDeleteUserRequestSchema
 * @property {string} [user_id]
 * @property {string} [reason]
 * @property {string} [reason_id]
 */

/**
 * @typedef EditEmailRequestSchema
 * @property {string} [email]
 */

/**
 * @typedef SendVerificationLinkMobileRequestSchema
 * @property {boolean} [verified]
 * @property {boolean} [active]
 * @property {string} [country_code]
 * @property {string} [phone]
 * @property {boolean} [primary]
 */

/**
 * @typedef EditMobileRequestSchema
 * @property {string} [country_code]
 * @property {string} [phone]
 */

/**
 * @typedef EditProfileRequestSchema
 * @property {string} [first_name]
 * @property {string} [last_name]
 * @property {EditProfileMobileSchema} [mobile]
 * @property {string} [country_code]
 * @property {string} [email]
 * @property {string} [gender]
 * @property {string} [dob]
 * @property {string} [profile_pic_url]
 * @property {string} [android_hash]
 * @property {string} [sender]
 * @property {string} [register_token]
 */

/**
 * @typedef EditProfileMobileSchema
 * @property {string} [phone]
 * @property {string} [country_code]
 */

/**
 * @typedef SendEmailOtpRequestSchema
 * @property {string} [email]
 * @property {string} [action]
 * @property {string} [token]
 * @property {string} [register_token]
 */

/**
 * @typedef VerifyEmailOtpRequestSchema
 * @property {string} [email]
 * @property {string} [action]
 * @property {string} [register_token]
 * @property {string} [otp]
 */

/**
 * @typedef VerifyOtpRequestSchema
 * @property {string} [request_id]
 * @property {string} [register_token]
 * @property {string} [otp]
 */

/**
 * @typedef SendMobileOtpRequestSchema
 * @property {string} [mobile]
 * @property {string} [country_code]
 * @property {string} [action]
 * @property {string} [token]
 * @property {string} [android_hash]
 * @property {string} [force]
 * @property {string} [captcha_code]
 */

/**
 * @typedef UpdatePasswordRequestSchema
 * @property {string} [old_password]
 * @property {string} [new_password]
 */

/**
 * @typedef FormRegisterRequestSchema
 * @property {string} [first_name]
 * @property {string} [last_name]
 * @property {string} [gender]
 * @property {string} [email]
 * @property {string} [password]
 * @property {FormRegisterRequestSchemaPhone} [phone]
 * @property {string} [register_token]
 */

/**
 * @typedef TokenRequestBodySchema
 * @property {string} [token]
 */

/**
 * @typedef ForgotPasswordRequestSchema
 * @property {string} [code]
 * @property {string} [password]
 */

/**
 * @typedef CodeRequestBodySchema
 * @property {string} [code]
 */

/**
 * @typedef SendResetPasswordEmailRequestSchema
 * @property {string} [email]
 * @property {string} [captcha_code]
 */

/**
 * @typedef SendResetPasswordMobileRequestSchema
 * @property {string} [country_code]
 * @property {string} [mobile]
 * @property {string} [captcha_code]
 */

/**
 * @typedef PasswordLoginRequestSchema
 * @property {string} [captcha_code]
 * @property {string} [password]
 * @property {string} [username]
 */

/**
 * @typedef SendOtpRequestSchema
 * @property {string} [country_code]
 * @property {string} [captcha_code]
 * @property {string} [mobile]
 * @property {string} [android_hash]
 */

/**
 * @typedef OAuthRequestSchema
 * @property {boolean} [is_signed_in]
 * @property {OAuthRequestSchemaOauth2} [oauth2]
 * @property {OAuthRequestSchemaProfile} [profile]
 */

/**
 * @typedef OAuthRequestAppleSchema
 * @property {string} [user_identifier]
 * @property {OAuthRequestAppleSchemaOauth} [oauth]
 * @property {OAuthRequestAppleSchemaProfile} [profile]
 */

/**
 * @typedef UserObjectSchema
 * @property {UserSchema} [user]
 */

/**
 * @typedef AuthSuccess
 * @property {string} [register_token]
 * @property {boolean} [user_exists]
 * @property {UserSchema} [user]
 */

/**
 * @typedef SendOtpResponse
 * @property {number} [resend_timer]
 * @property {string} [resend_token]
 * @property {boolean} [success]
 * @property {string} [request_id]
 * @property {string} [message]
 * @property {string} [mobile]
 * @property {string} [country_code]
 * @property {string} [email]
 * @property {string} [resend_email_token]
 * @property {string} [register_token]
 * @property {boolean} [verify_email_otp]
 * @property {boolean} [verify_mobile_otp]
 * @property {boolean} [user_exists]
 */

/**
 * @typedef ProfileEditSuccess
 * @property {UserSchema} [user]
 * @property {string} [register_token]
 * @property {string} [resend_email_token]
 * @property {boolean} [user_exists]
 * @property {boolean} [verify_email_link]
 * @property {boolean} [verify_email_otp]
 * @property {boolean} [verify_mobile_otp]
 * @property {string} [email]
 * @property {string} [request_id]
 * @property {string} [country_code]
 * @property {string} [mobile]
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {number} [resend_timer]
 * @property {string} [resend_token]
 */

/**
 * @typedef LoginSuccess
 * @property {UserSchema} [user]
 * @property {string} [request_id]
 * @property {string} [register_token]
 */

/**
 * @typedef VerifyOtpSuccess
 * @property {UserSchema} [user]
 * @property {boolean} [user_exists]
 * @property {string} [register_token]
 */

/**
 * @typedef ResetPasswordSuccess
 * @property {string} [status]
 */

/**
 * @typedef RegisterFormSuccess
 * @property {string} [email]
 * @property {number} [resend_timer]
 * @property {string} [resend_token]
 * @property {string} [resend_email_token]
 * @property {string} [register_token]
 * @property {boolean} [success]
 * @property {string} [request_id]
 * @property {string} [message]
 * @property {string} [mobile]
 * @property {string} [country_code]
 * @property {boolean} [verify_email_otp]
 * @property {boolean} [verify_mobile_otp]
 * @property {boolean} [user_exists]
 */

/**
 * @typedef VerifyEmailSuccess
 * @property {string} [message]
 */

/**
 * @typedef HasPasswordSuccess
 * @property {boolean} [result]
 */

/**
 * @typedef LogoutSuccess
 * @property {boolean} [logout]
 */

/**
 * @typedef BlockUserSuccess
 * @property {boolean} [success]
 */

/**
 * @typedef ArchiveUserSuccess
 * @property {boolean} [success]
 */

/**
 * @typedef DeleteUserSuccess
 * @property {boolean} [success]
 */

/**
 * @typedef UnDeleteUserSuccess
 * @property {boolean} [success]
 */

/**
 * @typedef OtpSuccess
 * @property {number} [resend_timer]
 * @property {string} [resend_token]
 * @property {string} [register_token]
 * @property {boolean} [success]
 * @property {string} [request_id]
 * @property {string} [message]
 * @property {string} [mobile]
 * @property {string} [country_code]
 */

/**
 * @typedef EmailOtpSuccess
 * @property {boolean} [success]
 */

/**
 * @typedef SessionListSuccess
 * @property {string[]} [sessions]
 */

/**
 * @typedef VerifyMobileOTPSuccess
 * @property {UserSchema} [user]
 * @property {boolean} [verify_mobile_link]
 */

/**
 * @typedef VerifyEmailOTPSuccess
 * @property {UserSchema} [user]
 * @property {boolean} [verify_email_link]
 */

/**
 * @typedef SendMobileVerifyLinkSuccess
 * @property {boolean} [verify_mobile_link]
 */

/**
 * @typedef SendEmailVerifyLinkSuccess
 * @property {boolean} [verify_email_link]
 */

/**
 * @typedef UserSearchResponseSchema
 * @property {UserSchema[]} [users]
 */

/**
 * @typedef CustomerListResponseSchema
 * @property {UserSchema[]} [items]
 * @property {PaginationSchema} [page]
 */

/**
 * @typedef SessionListResponseSchema
 * @property {string[]} [items]
 */

/**
 * @typedef SessionDeleteResponseSchema
 * @property {string[]} [items]
 */

/**
 * @typedef UnauthorizedSchema
 * @property {string} [message]
 */

/**
 * @typedef UnauthenticatedSchema
 * @property {boolean} [authenticated]
 */

/**
 * @typedef NotFoundSchema
 * @property {string} [message]
 */

/**
 * @typedef AuthenticationInternalServerErrorSchema
 * @property {string} [message]
 */

/**
 * @typedef AuthenticationApiErrorSchema
 * @property {string} [message]
 */

/**
 * @typedef ProfileEditSuccessSchema
 * @property {string} [email]
 * @property {boolean} [verify_email_otp]
 * @property {boolean} [verify_email_link]
 * @property {boolean} [verify_mobile_otp]
 * @property {string} [user]
 * @property {string} [register_token]
 * @property {boolean} [user_exists]
 */

/**
 * @typedef FormRegisterRequestSchemaPhone
 * @property {string} [country_code]
 * @property {string} [mobile]
 */

/**
 * @typedef OAuthRequestSchemaOauth2
 * @property {string} [access_token]
 * @property {number} [expiry]
 * @property {string} [refresh_token]
 */

/**
 * @typedef OAuthRequestSchemaProfile
 * @property {string} [last_name]
 * @property {string} [image]
 * @property {string} [id]
 * @property {string} [email]
 * @property {string} [full_name]
 * @property {string} [first_name]
 */

/**
 * @typedef OAuthRequestAppleSchemaOauth
 * @property {string} [identity_token]
 */

/**
 * @typedef OAuthRequestAppleSchemaProfile
 * @property {string} [last_name]
 * @property {string} [full_name]
 * @property {string} [first_name]
 */

/**
 * @typedef AuthSuccessUser
 * @property {string} [first_name]
 * @property {string} [last_name]
 * @property {AuthSuccessUserDebug} [debug]
 * @property {boolean} [active]
 * @property {AuthSuccessUserEmails} [emails]
 */

/**
 * @typedef AuthSuccessUserDebug
 * @property {string} [platform]
 */

/**
 * @typedef AuthSuccessUserEmails
 * @property {string} [email]
 * @property {boolean} [verified]
 * @property {boolean} [primary]
 * @property {boolean} [active]
 */

/**
 * @typedef CreateUserRequestSchema
 * @property {string} phone_number
 * @property {string} [email]
 * @property {string} [first_name]
 * @property {string} [last_name]
 * @property {string} [gender]
 * @property {string} username
 * @property {Object} [meta]
 */

/**
 * @typedef CreateUserResponseSchema
 * @property {UserSchema} [user]
 */

/**
 * @typedef CreateUserSessionRequestSchema
 * @property {string} [domain]
 * @property {number} [max_age]
 * @property {string} [user_id]
 */

/**
 * @typedef CreateUserSessionResponseSchema
 * @property {string} [domain]
 * @property {number} [max_age]
 * @property {boolean} [secure]
 * @property {boolean} [http_only]
 * @property {Object} [cookie]
 */

/**
 * @typedef PlatformSchema
 * @property {string} [display]
 * @property {LookAndFeel} [look_and_feel]
 * @property {string} [updated_at]
 * @property {boolean} [active]
 * @property {boolean} [forgot_password]
 * @property {Login} [login]
 * @property {boolean} [skip_captcha]
 * @property {string} [name]
 * @property {MetaSchema} [meta]
 * @property {string} [_id]
 * @property {Social} [social]
 * @property {RequiredFields} [required_fields]
 * @property {RegisterRequiredFields} [register_required_fields]
 * @property {boolean} [skip_login]
 * @property {FlashCard} [flash_card]
 * @property {string} [subtext]
 * @property {SocialTokens} [social_tokens]
 * @property {string} [created_at]
 * @property {boolean} [register]
 * @property {string} [mobile_image]
 * @property {string} [desktop_image]
 * @property {number} [delete_account_day]
 * @property {DeleteAccountReasons[]} [delete_account_reasons]
 * @property {Object} [delete_account_consent]
 */

/**
 * @typedef LookAndFeel
 * @property {string} [card_position]
 * @property {string} [background_color]
 */

/**
 * @typedef Login
 * @property {boolean} [password]
 * @property {boolean} [otp]
 */

/**
 * @typedef MetaSchema
 * @property {boolean} [fynd_default]
 */

/**
 * @typedef Social
 * @property {boolean} [account_kit]
 * @property {boolean} [facebook]
 * @property {boolean} [google]
 * @property {boolean} [apple]
 */

/**
 * @typedef RequiredFields
 * @property {PlatformEmail} [email]
 * @property {PlatformMobile} [mobile]
 */

/**
 * @typedef PlatformEmail
 * @property {boolean} [is_required]
 * @property {string} [level]
 */

/**
 * @typedef PlatformMobile
 * @property {boolean} [is_required]
 * @property {string} [level]
 */

/**
 * @typedef RegisterRequiredFields
 * @property {RegisterRequiredFieldsEmail} [email]
 * @property {RegisterRequiredFieldsMobile} [mobile]
 */

/**
 * @typedef RegisterRequiredFieldsEmail
 * @property {boolean} [is_required]
 * @property {string} [level]
 */

/**
 * @typedef RegisterRequiredFieldsMobile
 * @property {boolean} [is_required]
 * @property {string} [level]
 */

/**
 * @typedef FlashCard
 * @property {string} [text]
 * @property {string} [text_color]
 * @property {string} [background_color]
 */

/**
 * @typedef SocialTokens
 * @property {Facebook} [facebook]
 * @property {Accountkit} [account_kit]
 * @property {Google} [google]
 */

/**
 * @typedef DeleteAccountReasons
 * @property {string} [reason_text]
 * @property {string} [reason_id]
 * @property {boolean} [show_text_area]
 */

/**
 * @typedef DeleteAccountConsent
 * @property {string} [consent_text]
 */

/**
 * @typedef Facebook
 * @property {string} [app_id]
 */

/**
 * @typedef Accountkit
 * @property {string} [app_id]
 */

/**
 * @typedef Google
 * @property {string} [app_id]
 */

/**
 * @typedef UpdateUserRequestSchema
 * @property {string} [first_name]
 * @property {string} [last_name]
 * @property {string} [gender]
 * @property {string} [external_id]
 * @property {Object} [meta]
 */

/**
 * @typedef UserSchema
 * @property {string} [application_id]
 * @property {string} [user_id]
 * @property {string} [first_name]
 * @property {Object} [meta]
 * @property {string} [last_name]
 * @property {PhoneNumber[]} [phone_numbers]
 * @property {Email[]} [emails]
 * @property {string} [gender]
 * @property {string} [dob]
 * @property {boolean} [active]
 * @property {string} [profile_pic_url]
 * @property {string} [username]
 * @property {string} [account_type]
 * @property {Debug} [debug]
 * @property {boolean} [has_old_password_hash]
 * @property {string} [_id]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 */

/**
 * @typedef PhoneNumber
 * @property {boolean} [active]
 * @property {boolean} [primary]
 * @property {boolean} [verified]
 * @property {string} [phone]
 * @property {number} [country_code]
 */

/**
 * @typedef ApplicationLegal
 * @property {string} [application]
 * @property {string} [tnc]
 * @property {string} [policy]
 * @property {string} [shipping]
 * @property {string} [returns]
 * @property {ApplicationLegalFAQ[]} [faq]
 * @property {string} [_id]
 * @property {string} [updated_at]
 * @property {string} [created_at]
 */

/**
 * @typedef ApplicationLegalFAQ
 * @property {string} [question]
 * @property {string} [answer]
 */

/**
 * @typedef PathMappingSchema
 * @property {string} [application]
 * @property {string} [_id]
 * @property {string} [redirect_from]
 * @property {string} [redirect_to]
 * @property {string} [updated_at]
 * @property {string} [created_at]
 * @property {TagSourceSchema} [__source]
 */

/**
 * @typedef SeoComponent
 * @property {SeoSchema} [seo]
 */

/**
 * @typedef SeoSchema
 * @property {string} [app]
 * @property {string} [_id]
 * @property {string} [robots_txt]
 * @property {boolean} [sitemap_enabled]
 * @property {Object[]} [custom_meta_tags]
 * @property {Detail} [details]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 */

/**
 * @typedef CustomMetaTag
 * @property {string} [name]
 * @property {string} [content]
 * @property {string} [_id]
 */

/**
 * @typedef Detail
 * @property {string} [title]
 * @property {string} [description]
 */

/**
 * @typedef AnnouncementPageSchema
 * @property {string} [page_slug]
 * @property {string} [type]
 */

/**
 * @typedef EditorMeta
 * @property {string} [foreground_color]
 * @property {string} [background_color]
 * @property {string} [content_type]
 * @property {string} [content]
 */

/**
 * @typedef AnnouncementAuthorSchema
 * @property {string} [created_by]
 * @property {string} [modified_by]
 */

/**
 * @typedef AdminAnnouncementSchema
 * @property {string} [_id]
 * @property {string[]} [platforms]
 * @property {string} [title]
 * @property {string} [announcement]
 * @property {AnnouncementPageSchema[]} [pages]
 * @property {EditorMeta} [editor_meta]
 * @property {AnnouncementAuthorSchema} [author]
 * @property {string} [created_at]
 * @property {string} [app]
 * @property {string} [modified_at]
 * @property {ScheduleSchema} [_schedule]
 */

/**
 * @typedef ScheduleSchema
 * @property {string} [cron]
 * @property {string} [start]
 * @property {string} [end]
 * @property {number} [duration]
 * @property {Object[]} [next_schedule]
 */

/**
 * @typedef NextSchedule
 * @property {string} [start]
 * @property {string} [end]
 */

/**
 * @typedef AnnouncementSchema
 * @property {string} [announcement]
 * @property {ScheduleStartSchema} [schedule]
 */

/**
 * @typedef ScheduleStartSchema
 * @property {string} [start]
 * @property {string} [end]
 */

/**
 * @typedef BlogGetResponse
 * @property {BlogSchema[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef ResourceContent
 * @property {string} [type]
 * @property {string} [value]
 */

/**
 * @typedef Asset
 * @property {string} [aspect_ratio]
 * @property {string} [id]
 * @property {string} [secure_url]
 */

/**
 * @typedef Author
 * @property {string} [designation]
 * @property {string} [id]
 * @property {string} [name]
 */

/**
 * @typedef BlogSchema
 * @property {string} [_id]
 * @property {Object} [_custom_json]
 * @property {string} [application]
 * @property {boolean} [archived]
 * @property {Author} [author]
 * @property {ResourceContent[]} [content]
 * @property {Asset} [feature_image]
 * @property {boolean} [published]
 * @property {string} [reading_time]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {SEO} [seo]
 * @property {CronSchedule} [_schedule]
 * @property {string} [title]
 * @property {DateMeta} [date_meta]
 */

/**
 * @typedef SEO
 * @property {string} [description]
 * @property {SEOImage} [image]
 * @property {string} [title]
 */

/**
 * @typedef SEOImage
 * @property {string} [url]
 */

/**
 * @typedef DateMeta
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */

/**
 * @typedef BlogRequest
 * @property {string} [application]
 * @property {Object} [_custom_json]
 * @property {Author} [author]
 * @property {ResourceContent[]} [content]
 * @property {Asset} [feature_image]
 * @property {boolean} [published]
 * @property {string} [reading_time]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {string} [title]
 * @property {SEO} [seo]
 * @property {CronSchedule} [_schedule]
 */

/**
 * @typedef GetAnnouncementListSchema
 * @property {AdminAnnouncementSchema[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef CreateAnnouncementSchema
 * @property {string} [message]
 * @property {AdminAnnouncementSchema} [data]
 */

/**
 * @typedef DataLoaderResponseSchema
 * @property {string} [application]
 * @property {string} [company]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [service]
 * @property {string} [operation_id]
 * @property {string} [type]
 * @property {string} [url]
 * @property {string} [content]
 * @property {DataLoaderSourceSchema} [__source]
 */

/**
 * @typedef DataLoaderResetResponseSchema
 * @property {string} [reset]
 */

/**
 * @typedef Navigation
 * @property {string} [name]
 * @property {string} [slug]
 * @property {string} [orientation]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {string} [_id]
 * @property {string} [position]
 * @property {string} [application]
 * @property {string} [platform]
 * @property {NavigationReference} [navigation]
 */

/**
 * @typedef LocaleLanguage
 * @property {Language} [hi]
 * @property {Language} [ar]
 * @property {Language} [en_us]
 */

/**
 * @typedef Language
 * @property {string} [display]
 */

/**
 * @typedef Action
 * @property {ActionPage} [page]
 * @property {ActionPage} [popup]
 * @property {string} [type]
 */

/**
 * @typedef ActionPage
 * @property {Object} [params]
 * @property {Object} [query]
 * @property {string} [url]
 * @property {PageType} type
 */

/**
 * @typedef NavigationReference
 * @property {string[]} [acl]
 * @property {string[]} [tags]
 * @property {LocaleLanguage} [_locale_language]
 * @property {string} [image]
 * @property {string} [type]
 * @property {Action} [action]
 * @property {boolean} [active]
 * @property {string} [display]
 * @property {number} [sort_order]
 * @property {NavigationReference[]} [sub_navigation]
 */

/**
 * @typedef LandingPage
 * @property {LandingPageSchema} [data]
 * @property {boolean} [success]
 */

/**
 * @typedef ConfigurationSchema
 * @property {number} [sleep_time]
 * @property {boolean} [start_on_launch]
 * @property {number} [duration]
 * @property {string} [slide_direction]
 */

/**
 * @typedef SlideshowMedia
 * @property {string} [type]
 * @property {string} [url]
 * @property {string} [bg_color]
 * @property {number} [duration]
 * @property {boolean} [auto_decide_duration]
 * @property {Action} [action]
 */

/**
 * @typedef Slideshow
 * @property {SlideshowSchema} [data]
 * @property {boolean} [success]
 */

/**
 * @typedef AnnouncementsResponseSchema
 * @property {Object} [announcements]
 * @property {number} [refresh_rate]
 * @property {string[]} [refresh_pages]
 */

/**
 * @typedef FaqResponseSchema
 * @property {FaqSchema[]} [faqs]
 */

/**
 * @typedef UpdateHandpickedSchema
 * @property {HandpickedTagSchema} [tag]
 */

/**
 * @typedef HandpickedTagSchema
 * @property {string} [position]
 * @property {Object} [attributes]
 * @property {string} [name]
 * @property {string} [url]
 * @property {string} [type]
 * @property {string} [sub_type]
 * @property {string} [content]
 */

/**
 * @typedef RemoveHandpickedSchema
 * @property {string[]} [tags]
 */

/**
 * @typedef CreateTagSchema
 * @property {string} [name]
 * @property {string} [sub_type]
 * @property {string} [_id]
 * @property {string} [type]
 * @property {string} [url]
 * @property {string} [position]
 * @property {Object} [attributes]
 * @property {Object[]} [pages]
 * @property {string} [content]
 */

/**
 * @typedef CreateTagRequestSchema
 * @property {CreateTagSchema[]} [tags]
 */

/**
 * @typedef DataLoaderSchema
 * @property {string} [name]
 * @property {string} [service]
 * @property {string} [operation_id]
 * @property {string} [type]
 * @property {string} [url]
 * @property {string} [content]
 * @property {DataLoaderSourceSchema} [__source]
 * @property {string} [_id]
 */

/**
 * @typedef DataLoaderSourceSchema
 * @property {string} [type]
 * @property {string} [id]
 */

/**
 * @typedef DataLoadersSchema
 * @property {DataLoaderSchema[]} [items]
 */

/**
 * @typedef TagDeleteSuccessResponse
 * @property {boolean} [success]
 */

/**
 * @typedef ContentAPIError
 * @property {string} [message]
 * @property {number} [status]
 * @property {string} [code]
 * @property {string} [exception]
 * @property {string} [info]
 * @property {string} [request_id]
 * @property {string} [stack_trace]
 * @property {Object} [meta]
 */

/**
 * @typedef CommonError
 * @property {string} [message]
 */

/**
 * @typedef CategorySchema
 * @property {number} [index]
 * @property {string} [title]
 * @property {string} [description]
 * @property {string[]} [children]
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {string} [application]
 * @property {string} [icon_url]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef ChildrenSchema
 * @property {string} [question]
 * @property {string} [answer]
 * @property {string} [slug]
 * @property {string} [application]
 * @property {string} [_id]
 */

/**
 * @typedef CategoryRequestSchema
 * @property {string} [slug]
 * @property {string} [title]
 */

/**
 * @typedef FAQCategorySchema
 * @property {number} [index]
 * @property {string} [title]
 * @property {string} [description]
 * @property {ChildrenSchema[]} [children]
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {string} [application]
 * @property {string} [icon_url]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef FaqSchema
 * @property {string} [slug]
 * @property {string} [application]
 * @property {string} [_id]
 * @property {string} [question]
 * @property {string} [answer]
 * @property {string[]} [tags]
 */

/**
 * @typedef FAQ
 * @property {string} [slug]
 * @property {string} [question]
 * @property {string} [answer]
 */

/**
 * @typedef CreateFaqResponseSchema
 * @property {FaqSchema} [faq]
 */

/**
 * @typedef CreateFaqSchema
 * @property {FAQ} [faq]
 */

/**
 * @typedef GetFaqSchema
 * @property {FaqSchema[]} [faqs]
 */

/**
 * @typedef UpdateFaqCategoryRequestSchema
 * @property {CategorySchema} [category]
 */

/**
 * @typedef CreateFaqCategoryRequestSchema
 * @property {CategoryRequestSchema} [category]
 */

/**
 * @typedef CreateFaqCategorySchema
 * @property {CategorySchema} [category]
 */

/**
 * @typedef GetFaqCategoriesSchema
 * @property {CategorySchema[]} [categories]
 */

/**
 * @typedef GetFaqCategoryBySlugSchema
 * @property {FAQCategorySchema} [category]
 */

/**
 * @typedef LandingPageGetResponse
 * @property {LandingPageSchema[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef LandingPageSchema
 * @property {string} [slug]
 * @property {Action} [action]
 * @property {string[]} [platform]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {boolean} [archived]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef DefaultNavigationResponse
 * @property {NavigationSchema[]} [items]
 */

/**
 * @typedef NavigationGetResponse
 * @property {NavigationSchema[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef Orientation
 * @property {string[]} [portrait]
 * @property {string[]} [landscape]
 */

/**
 * @typedef NavigationSchema
 * @property {string} [_id]
 * @property {string} [application]
 * @property {boolean} [archived]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {string[]} [platform]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {Orientation} [orientation]
 * @property {number} [version]
 * @property {NavigationReference[]} [navigation]
 */

/**
 * @typedef NavigationRequest
 * @property {string} [name]
 * @property {string} [slug]
 * @property {string[]} [platform]
 * @property {Orientation} [orientation]
 * @property {NavigationReference[]} [navigation]
 */

/**
 * @typedef CustomPageSchema
 * @property {string} [_id]
 * @property {string} [platform]
 * @property {string} [title]
 * @property {string} [slug]
 * @property {string} [type]
 * @property {string} [orientation]
 * @property {string} [application]
 * @property {string} [description]
 * @property {boolean} [published]
 * @property {string[]} [tags]
 * @property {Object[]} [content]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {ScheduleSchema} [_schedule]
 */

/**
 * @typedef ContentSchema
 * @property {string} [type]
 * @property {Object} [value]
 */

/**
 * @typedef CustomPage
 * @property {CustomPageSchema} [data]
 */

/**
 * @typedef FeatureImage
 * @property {string} [secure_url]
 */

/**
 * @typedef PageGetResponse
 * @property {PageSchema[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef PageSpec
 * @property {Object[]} [specifications]
 */

/**
 * @typedef PageSpecParam
 * @property {string} [key]
 * @property {boolean} [required]
 */

/**
 * @typedef PageSpecItem
 * @property {string} [page_type]
 * @property {string} [display_name]
 * @property {PageSpecParam[]} [params]
 * @property {PageSpecParam[]} [query]
 */

/**
 * @typedef PageSchema
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string[]} [component_ids]
 * @property {Object[]} [content]
 * @property {string} [content_path]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {string} [description]
 * @property {Asset} [feature_image]
 * @property {Object[]} [page_meta]
 * @property {ScheduleSchema} [_schedule]
 * @property {Object} [_custom_json]
 * @property {string} [orientation]
 * @property {string} [platform]
 * @property {boolean} [published]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {string} [title]
 * @property {string} [type]
 * @property {SEO} [seo]
 * @property {Object} [visibility]
 * @property {boolean} [archived]
 */

/**
 * @typedef CreatedBySchema
 * @property {string} [id]
 */

/**
 * @typedef PageContent
 * @property {string} [type]
 * @property {Object} [value]
 */

/**
 * @typedef PageMeta
 * @property {string} [key]
 * @property {Object} [value]
 */

/**
 * @typedef PageRequest
 * @property {CronSchedule} [_schedule]
 * @property {string} [application]
 * @property {Author} [author]
 * @property {Object} [_custom_json]
 * @property {string} [orientation]
 * @property {Object[]} [content]
 * @property {Asset} [feature_image]
 * @property {boolean} [published]
 * @property {string} [reading_time]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {SEO} [seo]
 * @property {string} [title]
 */

/**
 * @typedef CronSchedule
 * @property {string} [cron]
 * @property {string} [start]
 * @property {string} [end]
 * @property {number} [duration]
 */

/**
 * @typedef PagePublishRequest
 * @property {boolean} [publish]
 */

/**
 * @typedef PageMetaSchema
 * @property {NavigationSchema[]} [system_pages]
 * @property {PageSchema[]} [custom_pages]
 * @property {string} [application_id]
 */

/**
 * @typedef SlideshowGetResponse
 * @property {SlideshowSchema[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef SlideshowSchema
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {DateMeta} [date_meta]
 * @property {string} [application]
 * @property {string} [platform]
 * @property {ConfigurationSchema} [configuration]
 * @property {SlideshowMedia[]} [media]
 * @property {boolean} [active]
 * @property {boolean} [archived]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef SlideshowRequest
 * @property {string} [slug]
 * @property {string} [platform]
 * @property {ConfigurationSchema} [configuration]
 * @property {SlideshowMedia} [media]
 * @property {boolean} [active]
 */

/**
 * @typedef Support
 * @property {boolean} [created]
 * @property {string} [_id]
 * @property {string} [config_type]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {ContactSchema} [contact]
 */

/**
 * @typedef PhoneProperties
 * @property {string} [key]
 * @property {string} [code]
 * @property {string} [number]
 */

/**
 * @typedef PhoneSchema
 * @property {boolean} [active]
 * @property {PhoneProperties[]} [phone]
 */

/**
 * @typedef EmailProperties
 * @property {string} [key]
 * @property {string} [value]
 */

/**
 * @typedef EmailSchema
 * @property {boolean} [active]
 * @property {EmailProperties[]} [email]
 */

/**
 * @typedef ContactSchema
 * @property {PhoneSchema} [phone]
 * @property {EmailSchema} [email]
 */

/**
 * @typedef TagsSchema
 * @property {string} [application]
 * @property {string} [_id]
 * @property {TagSchema[]} [tags]
 */

/**
 * @typedef TagSchema
 * @property {string} [name]
 * @property {string} [url]
 * @property {string} [type]
 * @property {string} [sub_type]
 * @property {string} [_id]
 * @property {string} [position]
 * @property {Object} [attributes]
 * @property {string} [content]
 * @property {Object[]} [pages]
 * @property {TagSourceSchema} [__source]
 */

/**
 * @typedef TagSourceSchema
 * @property {string} [type]
 * @property {string} [id]
 */

/**
 * @typedef UnauthenticatedUser
 * @property {string} [message]
 */

/**
 * @typedef UnauthenticatedApplication
 * @property {string} [message]
 */

/**
 * @typedef ResourceNotFound
 * @property {string} [message]
 */

/**
 * @typedef InternalServerError
 * @property {string} [message]
 * @property {string} [code]
 */

/**
 * @typedef CheckValidityResponse
 * @property {boolean} [is_valid]
 * @property {number} [discount_amount]
 */

/**
 * @typedef PlanRecurring
 * @property {string} [interval]
 * @property {number} [interval_count]
 */

/**
 * @typedef Plan
 * @property {PlanRecurring} [recurring]
 * @property {boolean} [is_trial_plan]
 * @property {string} [plan_group]
 * @property {string[]} [tag_lines]
 * @property {string} [currency]
 * @property {boolean} [is_active]
 * @property {boolean} [is_visible]
 * @property {number} [trial_period]
 * @property {string[]} [addons]
 * @property {string[]} [tags]
 * @property {string} [type]
 * @property {string} [country]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [description]
 * @property {number} [amount]
 * @property {string} [product_suite_id]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 */

/**
 * @typedef DetailedPlanComponents
 * @property {string} [name]
 * @property {string} [slug]
 * @property {string} [description]
 * @property {string} [group]
 * @property {string} [icon]
 * @property {Object} [links]
 * @property {boolean} [enabled]
 * @property {string} [display_text]
 */

/**
 * @typedef DetailedPlan
 * @property {PlanRecurring} [recurring]
 * @property {boolean} [is_trial_plan]
 * @property {string} [plan_group]
 * @property {string[]} [tag_lines]
 * @property {string} [currency]
 * @property {boolean} [is_active]
 * @property {boolean} [is_visible]
 * @property {number} [trial_period]
 * @property {string[]} [addons]
 * @property {string[]} [tags]
 * @property {string} [type]
 * @property {string} [country]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [description]
 * @property {number} [amount]
 * @property {string} [product_suite_id]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 * @property {DetailedPlanComponents[]} [components]
 */

/**
 * @typedef SubscriptionTrialPeriod
 * @property {string} [start_date]
 * @property {string} [end_date]
 */

/**
 * @typedef EntityChargePrice
 * @property {number} amount
 * @property {string} currency_code
 */

/**
 * @typedef EntityChargeRecurring
 * @property {string} interval
 */

/**
 * @typedef ChargeLineItem
 * @property {string} name
 * @property {string} term
 * @property {string} pricing_type
 * @property {EntityChargePrice} price
 * @property {EntityChargeRecurring} [recurring]
 * @property {number} [capped_amount]
 * @property {number} [trial_days]
 * @property {boolean} [is_test]
 * @property {Object} [metadata]
 */

/**
 * @typedef CreateSubscriptionCharge
 * @property {string} name
 * @property {number} [trial_days]
 * @property {ChargeLineItem[]} line_items
 * @property {boolean} [is_test]
 * @property {string} return_url
 */

/**
 * @typedef CurrentPeriod
 * @property {string} [start_date]
 * @property {string} [end_date]
 */

/**
 * @typedef SubscriptionCharge
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [term]
 * @property {string} [pricing_type]
 * @property {EntityChargePrice} [price]
 * @property {EntityChargeRecurring} [recurring]
 * @property {number} [capped_amount]
 * @property {string} [activated_on]
 * @property {string} [cancelled_on]
 * @property {string} [billing_date]
 * @property {CurrentPeriod} [current_period]
 * @property {string} [status]
 * @property {boolean} [is_test]
 * @property {Object} [metadata]
 */

/**
 * @typedef EntitySubscription
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [status]
 * @property {number} [company_id]
 * @property {string} [activated_on]
 * @property {string} [cancelled_on]
 * @property {number} [trial_days]
 * @property {SubscriptionTrialPeriod} [trial_period]
 * @property {Object} [metadata]
 * @property {SubscriptionCharge[]} [line_items]
 */

/**
 * @typedef CreateSubscriptionResponse
 * @property {EntitySubscription} [subscription]
 * @property {string} [confirm_url]
 */

/**
 * @typedef InvoiceDetailsPeriod
 * @property {string} [start]
 * @property {string} [end]
 */

/**
 * @typedef InvoiceDetailsClient
 * @property {string[]} [address_lines]
 * @property {string} [name]
 * @property {string} [email]
 * @property {string} [phone]
 */

/**
 * @typedef InvoiceDetailsStatusTrail
 * @property {string} [_id]
 * @property {string} [value]
 * @property {string} [timestamp]
 */

/**
 * @typedef InvoiceDetailsPaymentMethodsDataChecks
 * @property {string} [cvc_check]
 * @property {string} [address_line1_check]
 * @property {string} [address_postal_code_check]
 */

/**
 * @typedef InvoiceDetailsPaymentMethodsDataNetworks
 * @property {string[]} [available]
 * @property {string} [preferred]
 */

/**
 * @typedef InvoiceDetailsPaymentMethodsDataThreeDSecureUsage
 * @property {boolean} [supported]
 */

/**
 * @typedef InvoiceDetailsPaymentMethodsData
 * @property {string} [brand]
 * @property {string} [last4]
 * @property {InvoiceDetailsPaymentMethodsDataChecks} [checks]
 * @property {string} [wallet]
 * @property {string} [country]
 * @property {string} [funding]
 * @property {number} [exp_year]
 * @property {InvoiceDetailsPaymentMethodsDataNetworks} [networks]
 * @property {number} [exp_month]
 * @property {string} [fingerprint]
 * @property {string} [generated_from]
 * @property {InvoiceDetailsPaymentMethodsDataThreeDSecureUsage} [three_d_secure_usage]
 */

/**
 * @typedef InvoiceDetailsPaymentMethods
 * @property {number} [id]
 * @property {string} [type]
 * @property {string} [pg_payment_method_id]
 * @property {InvoiceDetailsPaymentMethodsData} [data]
 * @property {boolean} [is_default]
 */

/**
 * @typedef InvoicePaymentMethod
 * @property {string} [pg_payment_method_id]
 */

/**
 * @typedef InvoiceDetails
 * @property {InvoiceDetailsPeriod} [period]
 * @property {InvoiceDetailsClient} [client]
 * @property {boolean} [auto_advance]
 * @property {string} [currency]
 * @property {boolean} [paid]
 * @property {number} [attemp]
 * @property {string} [_id]
 * @property {string} [collection_method]
 * @property {string} [subscriber_id]
 * @property {string} [invoice_url]
 * @property {string} [number]
 * @property {Object} [pg_data]
 * @property {string} [receipt_number]
 * @property {string} [statement_descriptor]
 * @property {string} [current_status]
 * @property {InvoiceDetailsStatusTrail[]} [status_trail]
 * @property {number} [subtotal]
 * @property {number} [total]
 * @property {string} [subscription]
 * @property {string} [next_action_time]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 * @property {string} [hash_identifier]
 * @property {InvoicePaymentMethod} [payment_method]
 */

/**
 * @typedef InvoiceItemsPlanRecurring
 * @property {string} [interval]
 * @property {number} [interval_count]
 */

/**
 * @typedef InvoiceItemsPlan
 * @property {InvoiceItemsPlanRecurring} [recurring]
 * @property {boolean} [is_trial_plan]
 * @property {string} [plan_group]
 * @property {string[]} [tag_lines]
 * @property {string} [currency]
 * @property {boolean} [is_active]
 * @property {boolean} [is_visible]
 * @property {number} [trial_period]
 * @property {string[]} [addons]
 * @property {string[]} [tags]
 * @property {string} [type]
 * @property {string} [country]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [description]
 * @property {number} [amount]
 * @property {string} [product_suite_id]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 */

/**
 * @typedef InvoiceItemsPeriod
 * @property {string} [start]
 * @property {string} [end]
 */

/**
 * @typedef InvoiceItems
 * @property {string} [_id]
 * @property {string} [currency]
 * @property {InvoiceItemsPlan} [plan]
 * @property {string} [name]
 * @property {number} [quantity]
 * @property {string} [description]
 * @property {InvoiceItemsPeriod} [period]
 * @property {number} [unit_amount]
 * @property {number} [amount]
 * @property {string} [type]
 * @property {string} [invoice_id]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 */

/**
 * @typedef Invoice
 * @property {InvoiceDetails} [invoice]
 * @property {InvoiceItems[]} [invoice_items]
 */

/**
 * @typedef InvoicesDataClient
 * @property {string} [name]
 * @property {string} [email]
 * @property {string} [phone]
 * @property {string[]} [address_lines]
 */

/**
 * @typedef InvoicesDataPeriod
 * @property {string} [start]
 * @property {string} [end]
 */

/**
 * @typedef InvoicesDataPaymentMethod
 * @property {string} [pg_payment_method_id]
 */

/**
 * @typedef InvoicesData
 * @property {string} [_id]
 * @property {InvoicesDataClient} [client]
 * @property {boolean} [auto_advance]
 * @property {string} [currency]
 * @property {boolean} [paid]
 * @property {number} [attemp]
 * @property {string} [collection_method]
 * @property {string} [subscriber_id]
 * @property {string} [invoice_url]
 * @property {string} [number]
 * @property {Object} [pg_data]
 * @property {InvoicesDataPeriod} [period]
 * @property {string} [receipt_number]
 * @property {string} [statement_descriptor]
 * @property {string} [current_status]
 * @property {InvoiceDetailsStatusTrail[]} [status_trail]
 * @property {number} [subtotal]
 * @property {number} [total]
 * @property {string} [subscription]
 * @property {string} [next_action_time]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 * @property {string} [hash_identifier]
 * @property {InvoicesDataPaymentMethod} [payment_method]
 * @property {InvoiceItems[]} [invoice_items]
 */

/**
 * @typedef Invoices
 * @property {InvoicesData[]} [data]
 * @property {number} [start]
 * @property {number} [end]
 * @property {number} [limit]
 * @property {number} [page]
 * @property {number} [total]
 */

/**
 * @typedef Phone
 * @property {string} [phone_number]
 * @property {string} [phone_country_code]
 */

/**
 * @typedef SubscriptionBillingAddress
 * @property {string} [country]
 * @property {string} [state]
 * @property {string} [city]
 * @property {string} [line1]
 * @property {string} [line2]
 * @property {string} [postal_code]
 */

/**
 * @typedef SubscriptionCustomer
 * @property {Phone} [phone]
 * @property {SubscriptionBillingAddress} [billing_address]
 * @property {string} [_id]
 * @property {string} [unique_id]
 * @property {string} [type]
 * @property {string} [name]
 * @property {string} [email]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 * @property {Object} [data]
 */

/**
 * @typedef SubscriptionCustomerCreate
 * @property {Phone} [phone]
 * @property {SubscriptionBillingAddress} [billing_address]
 * @property {string} [unique_id]
 * @property {string} [type]
 * @property {string} [name]
 * @property {string} [email]
 */

/**
 * @typedef SubscriptionCurrentPeriod
 * @property {string} [start]
 * @property {string} [end]
 */

/**
 * @typedef SubscriptionPauseCollection
 * @property {string} [behavior]
 * @property {string} [resume_at]
 */

/**
 * @typedef SubscriptionTrial
 * @property {string} [start]
 * @property {string} [end]
 */

/**
 * @typedef SubscriptionInvoiceSettings
 * @property {boolean} [generation]
 * @property {boolean} [charging]
 */

/**
 * @typedef Subscription
 * @property {SubscriptionCurrentPeriod} [current_period]
 * @property {SubscriptionPauseCollection} [pause_collection]
 * @property {SubscriptionTrial} [trial]
 * @property {SubscriptionInvoiceSettings} [invoice_settings]
 * @property {boolean} [is_active]
 * @property {boolean} [cancel_at_period_end]
 * @property {string} [_id]
 * @property {string} [subscriber_id]
 * @property {string} [plan_id]
 * @property {string} [product_suite_id]
 * @property {Plan} [plan_data]
 * @property {string} [current_status]
 * @property {string} [collection_method]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 * @property {string} [latest_invoice]
 */

/**
 * @typedef SubscriptionStatus
 * @property {boolean} [is_enabled]
 * @property {Subscription} [subscription]
 */

/**
 * @typedef SubscriptionLimitApplication
 * @property {boolean} [enabled]
 * @property {number} [hard_limit]
 * @property {number} [soft_limit]
 */

/**
 * @typedef SubscriptionLimitMarketplace
 * @property {boolean} [enabled]
 */

/**
 * @typedef SubscriptionLimitOtherPlatform
 * @property {boolean} [enabled]
 */

/**
 * @typedef SubscriptionLimitTeam
 * @property {number} [limit]
 */

/**
 * @typedef SubscriptionLimitProducts
 * @property {boolean} [bulk]
 * @property {number} [limit]
 */

/**
 * @typedef SubscriptionLimitExtensions
 * @property {boolean} [enabled]
 * @property {number} [limit]
 */

/**
 * @typedef SubscriptionLimitIntegrations
 * @property {boolean} [enabled]
 * @property {number} [limit]
 */

/**
 * @typedef SubscriptionLimit
 * @property {SubscriptionLimitApplication} [application]
 * @property {SubscriptionLimitMarketplace} [marketplace]
 * @property {SubscriptionLimitOtherPlatform} [other_platform]
 * @property {SubscriptionLimitTeam} [team]
 * @property {SubscriptionLimitProducts} [products]
 * @property {SubscriptionLimitExtensions} [extensions]
 * @property {SubscriptionLimitIntegrations} [integrations]
 * @property {boolean} [is_trial_plan]
 */

/**
 * @typedef SubscriptionActivateReq
 * @property {string} [unique_id]
 * @property {string} [type]
 * @property {string} [product_suite]
 * @property {string} [plan_id]
 * @property {string} [payment_method]
 */

/**
 * @typedef SubscriptionActivateRes
 * @property {boolean} [success]
 * @property {Subscription} [data]
 */

/**
 * @typedef CancelSubscriptionReq
 * @property {string} [unique_id]
 * @property {string} [type]
 * @property {string} [product_suite]
 * @property {string} [subscription_id]
 */

/**
 * @typedef CancelSubscriptionRes
 * @property {boolean} [success]
 * @property {Subscription} [data]
 */

/**
 * @typedef StatsImported
 * @property {number} [count]
 */

/**
 * @typedef StatsProcessedEmail
 * @property {number} [success]
 * @property {number} [failed]
 * @property {number} [suppressed]
 */

/**
 * @typedef StatsProcessedSms
 * @property {number} [success]
 * @property {number} [failed]
 * @property {number} [suppressed]
 */

/**
 * @typedef StatsProcessed
 * @property {StatsProcessedEmail} [email]
 * @property {StatsProcessedSms} [sms]
 */

/**
 * @typedef Stats
 * @property {string} [_id]
 * @property {Object} [imported]
 * @property {Object} [processed]
 */

/**
 * @typedef GetStats
 * @property {Stats[]} [items]
 */

/**
 * @typedef CampaignReq
 * @property {string} [description]
 * @property {string[]} [tags]
 * @property {string[]} [headers]
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {string} [file_url]
 * @property {string} [type]
 * @property {number} [records_count]
 * @property {string} [application]
 */

/**
 * @typedef RecipientHeaders
 * @property {string} [email]
 */

/**
 * @typedef CampaignEmailTemplate
 * @property {string} [key]
 * @property {string} [value]
 */

/**
 * @typedef CampignEmailProvider
 * @property {string} [_id]
 * @property {string} [from_name]
 * @property {string} [from_email]
 */

/**
 * @typedef CampaignEmail
 * @property {CampaignEmailTemplate} [template]
 * @property {CampignEmailProvider} [provider]
 */

/**
 * @typedef Campaign
 * @property {RecipientHeaders} [recipient_headers]
 * @property {CampaignEmail} [email]
 * @property {string} [description]
 * @property {Object[]} [tags]
 * @property {boolean} [is_active]
 * @property {string} [_id]
 * @property {string} [datasource]
 * @property {string} [type]
 * @property {string} [name]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [slug]
 * @property {number} [__v]
 */

/**
 * @typedef Campaigns
 * @property {Campaign[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef BadRequestSchema
 * @property {string} [status]
 * @property {string} [message]
 */

/**
 * @typedef BigqueryHeadersReq
 * @property {string} [query]
 * @property {string} [type]
 */

/**
 * @typedef BigqueryHeadersResHeaders
 * @property {string} [name]
 * @property {string} [type]
 */

/**
 * @typedef BigqueryHeadersRes
 * @property {BigqueryHeadersResHeaders[]} [headers]
 */

/**
 * @typedef GetNRecordsCsvReq
 * @property {string} [url]
 * @property {boolean} [header]
 * @property {number} [count]
 */

/**
 * @typedef GetNRecordsCsvResItems
 * @property {string} [phone_number]
 * @property {string} [email]
 * @property {string} [firstname]
 * @property {string} [lastname]
 * @property {string} [orderid]
 */

/**
 * @typedef GetNRecordsCsvRes
 * @property {GetNRecordsCsvResItems[]} [items]
 */

/**
 * @typedef AudienceReq
 * @property {string} [description]
 * @property {string[]} [tags]
 * @property {string[]} [headers]
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {string} [file_url]
 * @property {string} [type]
 * @property {number} [records_count]
 * @property {string} [application]
 */

/**
 * @typedef Audience
 * @property {string} [description]
 * @property {string[]} [tags]
 * @property {string[]} [headers]
 * @property {boolean} [is_active]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [file_url]
 * @property {string} [type]
 * @property {number} [records_count]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [slug]
 * @property {number} [__v]
 */

/**
 * @typedef Audiences
 * @property {Audience[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef EmailProviderReqFrom
 * @property {string} [name]
 * @property {string} [email]
 * @property {boolean} [is_default]
 */

/**
 * @typedef EmailProviderReq
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [api_key]
 * @property {string} [type]
 * @property {string} [provider]
 * @property {EmailProviderReqFrom[]} [from_address]
 */

/**
 * @typedef EmailProvider
 * @property {string} [type]
 * @property {string} [provider]
 * @property {EmailProviderReqFrom[]} [from_address]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [api_key]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [slug]
 * @property {number} [__v]
 */

/**
 * @typedef EmailProviders
 * @property {EmailProvider[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef EmailTemplateDeleteSuccessRes
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef EmailTemplateDeleteFailureRes
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef EmailTemplateKeys
 * @property {string} [to]
 * @property {string} [cc]
 * @property {string} [bcc]
 */

/**
 * @typedef EmailTemplateHeaders
 * @property {string} [key]
 * @property {string} [value]
 */

/**
 * @typedef EmailTemplateReq
 * @property {string} [name]
 * @property {string} [description]
 * @property {EmailTemplateKeys} [keys]
 * @property {string[]} [static_to]
 * @property {string[]} [static_cc]
 * @property {string[]} [static_bcc]
 * @property {string} [reply_to]
 * @property {EmailTemplateHeaders[]} [headers]
 * @property {TemplateAndType} [subject]
 * @property {TemplateAndType} [html]
 * @property {TemplateAndType} [text]
 * @property {Object[]} [attachments]
 * @property {string} [priority]
 */

/**
 * @typedef TemplateAndType
 * @property {string} [template_type]
 * @property {string} [template]
 */

/**
 * @typedef EmailTemplateRes
 * @property {boolean} [is_system]
 * @property {boolean} [is_internal]
 * @property {string} [description]
 * @property {string[]} [static_to]
 * @property {string[]} [static_cc]
 * @property {string[]} [static_bcc]
 * @property {Object[]} [tags]
 * @property {string} [priority]
 * @property {boolean} [published]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {EmailTemplateKeys} [keys]
 * @property {string} [reply_to]
 * @property {EmailTemplateHeaders[]} [headers]
 * @property {TemplateAndType} [subject]
 * @property {TemplateAndType} [html]
 * @property {TemplateAndType} [text]
 * @property {Object[]} [attachments]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [slug]
 * @property {number} [__v]
 */

/**
 * @typedef EmailTemplate
 * @property {boolean} [is_system]
 * @property {boolean} [is_internal]
 * @property {string} [description]
 * @property {Object[]} [static_to]
 * @property {Object[]} [static_cc]
 * @property {Object[]} [static_bcc]
 * @property {Object[]} [tags]
 * @property {string} [priority]
 * @property {boolean} [published]
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {string} [name]
 * @property {string} [from_name]
 * @property {TemplateAndType} [subject]
 * @property {TemplateAndType} [html]
 * @property {TemplateAndType} [text]
 * @property {Object[]} [headers]
 * @property {Object[]} [attachments]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */

/**
 * @typedef SystemEmailTemplate
 * @property {boolean} [is_system]
 * @property {boolean} [is_internal]
 * @property {string} [description]
 * @property {Object[]} [static_to]
 * @property {Object[]} [static_cc]
 * @property {Object[]} [static_bcc]
 * @property {Object[]} [tags]
 * @property {string} [priority]
 * @property {boolean} [published]
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {string} [name]
 * @property {string} [from_name]
 * @property {TemplateAndType} [subject]
 * @property {TemplateAndType} [html]
 * @property {TemplateAndType} [text]
 * @property {Object[]} [headers]
 * @property {Object[]} [attachments]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */

/**
 * @typedef EmailTemplates
 * @property {EmailTemplate[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef SystemEmailTemplates
 * @property {SystemEmailTemplate[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef PayloadEmailTemplateStructure
 * @property {string} [key]
 * @property {Object} [value]
 */

/**
 * @typedef PayloadEmailProviderStructure
 * @property {string} [_id]
 */

/**
 * @typedef PayloadEmailStructure
 * @property {PayloadEmailTemplateStructure} [template]
 * @property {PayloadEmailProviderStructure} [provider]
 */

/**
 * @typedef PayloadSmsTemplateStructure
 * @property {string} [key]
 * @property {Object} [value]
 */

/**
 * @typedef PayloadSmsProviderStructure
 * @property {string} [_id]
 */

/**
 * @typedef PayloadSmsStructure
 * @property {PayloadSmsTemplateStructure} [template]
 * @property {PayloadSmsProviderStructure} [provider]
 */

/**
 * @typedef PayloadStructure
 * @property {Object[]} [data]
 * @property {PayloadEmailStructure} [email]
 * @property {PayloadSmsStructure} [sms]
 * @property {string} [application]
 */

/**
 * @typedef MetaStructure
 * @property {string} [job_type]
 * @property {string} [action]
 * @property {string} [trace]
 * @property {string} [timestamp]
 */

/**
 * @typedef EngineRequest
 * @property {PayloadStructure} [payload]
 * @property {MetaStructure} [meta]
 */

/**
 * @typedef EngineResponse
 * @property {boolean} [success]
 */

/**
 * @typedef EventSubscriptionTemplateSms
 * @property {boolean} [subscribed]
 * @property {string} [template]
 */

/**
 * @typedef EventSubscriptionTemplateEmail
 * @property {boolean} [subscribed]
 * @property {string} [template]
 */

/**
 * @typedef EventSubscriptionTemplate
 * @property {EventSubscriptionTemplateSms} [sms]
 * @property {EventSubscriptionTemplateEmail} [email]
 */

/**
 * @typedef EventSubscription
 * @property {EventSubscriptionTemplate} [template]
 * @property {boolean} [is_default]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [event]
 * @property {string} [slug]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */

/**
 * @typedef EventSubscriptions
 * @property {EventSubscription[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef TriggerJobResponse
 * @property {number} [status]
 */

/**
 * @typedef TriggerJobRequest
 * @property {string} [job_id]
 */

/**
 * @typedef Job
 * @property {boolean} [completed]
 * @property {boolean} [is_active]
 * @property {string} [_id]
 * @property {string} [campaign]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */

/**
 * @typedef Jobs
 * @property {Job[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef JobLog
 * @property {Object} [imported]
 * @property {Object} [processed]
 * @property {string} [_id]
 * @property {string} [job]
 * @property {string} [campaign]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */

/**
 * @typedef JobLogs
 * @property {JobLog[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef LogEmail
 * @property {string} [template]
 */

/**
 * @typedef LogPushnotification
 * @property {string[]} [pushtokens]
 */

/**
 * @typedef LogMeta
 * @property {string} [type]
 * @property {string} [identifier]
 * @property {string} [key]
 * @property {string} [offset]
 * @property {string} [partition]
 * @property {string} [topic]
 */

/**
 * @typedef Log
 * @property {LogEmail} [email]
 * @property {LogPushnotification} [pushnotification]
 * @property {LogMeta} [meta]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [service]
 * @property {string} [step]
 * @property {string} [status]
 * @property {Object} [data]
 * @property {string} [expire_at]
 * @property {string} [created_at]
 */

/**
 * @typedef Logs
 * @property {Log[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef SendOtpSmsCommsTemplate
 * @property {string} [key]
 * @property {Object} [value]
 */

/**
 * @typedef SendOtpSmsCommsProvider
 * @property {string} [slug]
 * @property {string} [_id]
 */

/**
 * @typedef SendOtpEmailCommsTemplate
 * @property {string} [key]
 * @property {Object} [value]
 */

/**
 * @typedef SendOtpCommsReqData
 * @property {boolean} [send_same_otp_to_channel]
 * @property {string} [mobile]
 * @property {string} [country_code]
 * @property {string} [to]
 */

/**
 * @typedef SendOtpCommsReqSms
 * @property {number} [otp_length]
 * @property {number} [expiry]
 * @property {SendOtpSmsCommsTemplate} [template]
 * @property {SendOtpSmsCommsProvider} [provider]
 */

/**
 * @typedef SendOtpCommsReqEmail
 * @property {number} [otp_length]
 * @property {number} [expiry]
 * @property {SendOtpEmailCommsTemplate} [template]
 */

/**
 * @typedef SendOtpCommsResSms
 * @property {boolean} [success]
 * @property {string} [request_id]
 * @property {string} [message]
 * @property {string} [mobile]
 * @property {string} [country_code]
 * @property {number} [resend_timer]
 */

/**
 * @typedef SendOtpCommsResEmail
 * @property {boolean} [success]
 * @property {string} [request_id]
 * @property {string} [message]
 * @property {string} [to]
 * @property {number} [resend_timer]
 */

/**
 * @typedef SendOtpCommsReq
 * @property {SendOtpCommsReqData} [data]
 * @property {SendOtpCommsReqSms} [sms]
 * @property {SendOtpCommsReqEmail} [email]
 */

/**
 * @typedef SendOtpCommsRes
 * @property {SendOtpCommsResSms} [sms]
 * @property {SendOtpCommsResEmail} [email]
 */

/**
 * @typedef VerifyOtpCommsReq
 * @property {string} [request_id]
 * @property {string} [otp]
 */

/**
 * @typedef VerifyOtpCommsSuccessRes
 * @property {boolean} [success]
 * @property {string} [mobile]
 * @property {string} [country_code]
 * @property {string} [message]
 */

/**
 * @typedef VerifyOtpCommsErrorRes
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef PushtokenReq
 * @property {string} [action]
 * @property {string} [bundle_identifier]
 * @property {string} [push_token]
 * @property {string} [unique_device_id]
 */

/**
 * @typedef PushtokenRes
 * @property {string} [_id]
 * @property {string} [bundle_identifier]
 * @property {string} [push_token]
 * @property {string} [unique_device_id]
 * @property {string} [type]
 * @property {string} [platform]
 * @property {string} [application_id]
 * @property {string} [user_id]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [expired_at]
 */

/**
 * @typedef SmsProviderReq
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [sender]
 * @property {string} [username]
 * @property {string} [authkey]
 * @property {string} [type]
 * @property {string} [provider]
 */

/**
 * @typedef SmsProvider
 * @property {number} [rpt]
 * @property {string} [type]
 * @property {string} [provider]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [sender]
 * @property {string} [username]
 * @property {string} [authkey]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [slug]
 * @property {number} [__v]
 */

/**
 * @typedef SmsProviders
 * @property {SmsProvider[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef SmsTemplateDeleteSuccessRes
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef SmsTemplateDeleteFailureRes
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef SmsTemplateMessage
 * @property {string} [template_type]
 * @property {string} [template]
 */

/**
 * @typedef SmsTemplateReq
 * @property {string} [name]
 * @property {string} [description]
 * @property {SmsTemplateMessage} [message]
 * @property {Object} [template_variables]
 * @property {Object[]} [attachments]
 * @property {string} [priority]
 */

/**
 * @typedef SmsTemplateRes
 * @property {boolean} [is_system]
 * @property {boolean} [is_internal]
 * @property {string} [description]
 * @property {Object[]} [tags]
 * @property {string} [priority]
 * @property {boolean} [published]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {SmsTemplateMessage} [message]
 * @property {Object} [template_variables]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [slug]
 * @property {number} [__v]
 */

/**
 * @typedef SmsTemplate
 * @property {boolean} [is_system]
 * @property {boolean} [is_internal]
 * @property {string} [description]
 * @property {string} [priority]
 * @property {Object[]} [tags]
 * @property {boolean} [published]
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {string} [name]
 * @property {SmsTemplateMessage} [message]
 * @property {Object} [template_variables]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */

/**
 * @typedef SystemSmsTemplate
 * @property {boolean} [is_system]
 * @property {boolean} [is_internal]
 * @property {string} [description]
 * @property {Object[]} [tags]
 * @property {string} [priority]
 * @property {boolean} [published]
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {string} [name]
 * @property {SmsTemplateMessage} [message]
 * @property {Object} [template_variables]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */

/**
 * @typedef SmsTemplates
 * @property {SmsTemplate[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef SystemSmsTemplates
 * @property {SystemSmsTemplate[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef Notification
 * @property {string} [title]
 * @property {string} [body]
 * @property {string} [subtitle]
 * @property {string} [icon]
 * @property {string} [deeplink]
 * @property {string} [click_action]
 */

/**
 * @typedef SystemNotificationUser
 * @property {string} [type]
 * @property {string} [value]
 */

/**
 * @typedef SystemNotificationSettings
 * @property {boolean} [sound]
 * @property {string} [priority]
 * @property {string} [time_to_live]
 */

/**
 * @typedef SystemNotification
 * @property {Notification} [notification]
 * @property {SystemNotificationUser} [user]
 * @property {SystemNotificationUser} [settings]
 * @property {string} [_id]
 * @property {string} [group]
 * @property {string} [created_at]
 */

/**
 * @typedef SystemNotificationsPage
 * @property {string} [type]
 * @property {number} [current]
 * @property {number} [size]
 * @property {number} [item_total]
 * @property {boolean} [has_next]
 */

/**
 * @typedef SystemNotifications
 * @property {SystemNotification[]} [items]
 * @property {number} [last_read_anchor]
 * @property {Page} [page]
 */

/**
 * @typedef PaymentGatewayConfigResponse
 * @property {string} app_id
 * @property {Object[]} [aggregators]
 * @property {boolean} success
 * @property {boolean} created
 * @property {string[]} excluded_fields
 * @property {string[]} display_fields
 */

/**
 * @typedef ErrorCodeDescription
 * @property {string} code
 * @property {string} description
 * @property {boolean} success
 */

/**
 * @typedef PaymentGatewayConfig
 * @property {string} config_type
 * @property {string} secret
 * @property {boolean} [is_active]
 * @property {string} key
 * @property {string} merchant_salt
 */

/**
 * @typedef PaymentGatewayConfigRequest
 * @property {string} app_id
 * @property {boolean} [is_active]
 * @property {PaymentGatewayConfig} [aggregator_name]
 */

/**
 * @typedef PaymentGatewayToBeReviewed
 * @property {string[]} aggregator
 * @property {boolean} success
 */

/**
 * @typedef ErrorCodeAndDescription
 * @property {string} code
 * @property {string} description
 */

/**
 * @typedef HttpErrorCodeAndResponse
 * @property {boolean} success
 * @property {ErrorCodeAndDescription} error
 */

/**
 * @typedef PaymentModeLogo
 * @property {string} large
 * @property {string} small
 */

/**
 * @typedef IntentApp
 * @property {string} [code]
 * @property {string} [package_name]
 * @property {string} [display_name]
 * @property {PaymentModeLogo} [logos]
 */

/**
 * @typedef IntentAppErrorList
 * @property {string} [code]
 * @property {string} [package_name]
 */

/**
 * @typedef PaymentModeList
 * @property {IntentApp[]} [intent_app]
 * @property {number} [remaining_limit]
 * @property {number} [exp_month]
 * @property {number} [exp_year]
 * @property {IntentAppErrorList[]} [intent_app_error_dict_list]
 * @property {string} [card_id]
 * @property {string} [code]
 * @property {string} [card_isin]
 * @property {string} [card_type]
 * @property {string} [nickname]
 * @property {PaymentModeLogo} [logo_url]
 * @property {number} [cod_limit_per_order]
 * @property {string} [card_reference]
 * @property {string} [name]
 * @property {boolean} [expired]
 * @property {number} [retry_count]
 * @property {number} [cod_limit]
 * @property {string} [card_name]
 * @property {string} [card_brand_image]
 * @property {string} [fynd_vpa]
 * @property {string[]} [intent_app_error_list]
 * @property {number} [display_priority]
 * @property {string} [card_token]
 * @property {string} [display_name]
 * @property {string} [card_number]
 * @property {string} [card_brand]
 * @property {string} [merchant_code]
 * @property {string} [card_fingerprint]
 * @property {string} aggregator_name
 * @property {number} [timeout]
 * @property {boolean} [compliant_with_tokenisation_guidelines]
 * @property {boolean} [intent_flow]
 * @property {string} [card_issuer]
 */

/**
 * @typedef RootPaymentMode
 * @property {boolean} [add_card_enabled]
 * @property {string} name
 * @property {boolean} [save_card]
 * @property {PaymentModeList[]} [list]
 * @property {string} [aggregator_name]
 * @property {number} display_priority
 * @property {boolean} [is_pay_by_card_pl]
 * @property {boolean} [anonymous_enable]
 * @property {string} display_name
 */

/**
 * @typedef PaymentOptions
 * @property {RootPaymentMode[]} payment_option
 */

/**
 * @typedef PaymentOptionsResponse
 * @property {boolean} success
 * @property {PaymentOptions} payment_options
 */

/**
 * @typedef PayoutsResponse
 * @property {Object[]} payouts_aggregators
 * @property {boolean} is_active
 * @property {Object} customers
 * @property {string} transfer_type
 * @property {Object} unique_transfer_no
 * @property {Object} more_attributes
 * @property {boolean} is_default
 */

/**
 * @typedef PayoutBankDetails
 * @property {string} [bank_name]
 * @property {string} [branch_name]
 * @property {string} [state]
 * @property {string} ifsc_code
 * @property {string} [account_no]
 * @property {number} [pincode]
 * @property {string} [country]
 * @property {string} [city]
 * @property {string} [account_holder]
 * @property {string} account_type
 */

/**
 * @typedef PayoutRequest
 * @property {string} aggregator
 * @property {PayoutBankDetails} bank_details
 * @property {boolean} is_active
 * @property {string} transfer_type
 * @property {Object} users
 * @property {string} unique_external_id
 */

/**
 * @typedef PayoutResponse
 * @property {Object} bank_details
 * @property {string} aggregator
 * @property {boolean} is_active
 * @property {boolean} success
 * @property {boolean} created
 * @property {Object} payouts
 * @property {string} transfer_type
 * @property {string} unique_transfer_no
 * @property {Object} users
 * @property {string} payment_status
 */

/**
 * @typedef UpdatePayoutResponse
 * @property {boolean} is_active
 * @property {boolean} success
 * @property {boolean} is_default
 */

/**
 * @typedef UpdatePayoutRequest
 * @property {boolean} is_active
 * @property {string} unique_external_id
 * @property {boolean} is_default
 */

/**
 * @typedef DeletePayoutResponse
 * @property {boolean} success
 */

/**
 * @typedef SubscriptionPaymentMethodResponse
 * @property {boolean} success
 * @property {Object[]} data
 */

/**
 * @typedef DeleteSubscriptionPaymentMethodResponse
 * @property {boolean} success
 */

/**
 * @typedef SubscriptionConfigResponse
 * @property {string} aggregator
 * @property {Object} config
 * @property {boolean} success
 */

/**
 * @typedef SaveSubscriptionSetupIntentRequest
 * @property {string} unique_external_id
 */

/**
 * @typedef SaveSubscriptionSetupIntentResponse
 * @property {boolean} success
 * @property {Object} data
 */

/**
 * @typedef RefundAccountResponse
 * @property {string} message
 * @property {boolean} [is_verified_flag]
 * @property {boolean} success
 * @property {Object} [data]
 */

/**
 * @typedef NotFoundResourceError
 * @property {string} code
 * @property {string} description
 * @property {boolean} success
 */

/**
 * @typedef BankDetailsForOTP
 * @property {string} bank_name
 * @property {string} branch_name
 * @property {string} ifsc_code
 * @property {string} account_no
 * @property {string} account_holder
 */

/**
 * @typedef AddBeneficiaryDetailsOTPRequest
 * @property {string} order_id
 * @property {BankDetailsForOTP} details
 */

/**
 * @typedef IfscCodeResponse
 * @property {string} bank_name
 * @property {boolean} [success]
 * @property {string} branch_name
 */

/**
 * @typedef OrderBeneficiaryDetails
 * @property {string} email
 * @property {string} subtitle
 * @property {string} [delights_user_name]
 * @property {string} [branch_name]
 * @property {number} id
 * @property {boolean} is_active
 * @property {string} ifsc_code
 * @property {string} transfer_mode
 * @property {string} bank_name
 * @property {string} account_no
 * @property {string} modified_on
 * @property {string} account_holder
 * @property {string} title
 * @property {string} display_name
 * @property {string} created_on
 * @property {string} beneficiary_id
 * @property {string} address
 * @property {string} [mobile]
 * @property {string} [comment]
 */

/**
 * @typedef OrderBeneficiaryResponse
 * @property {boolean} [show_beneficiary_details]
 * @property {OrderBeneficiaryDetails[]} [beneficiaries]
 */

/**
 * @typedef MultiTenderPaymentMeta
 * @property {Object} [extra_meta]
 * @property {string} [order_id]
 * @property {string} [payment_id]
 * @property {string} [current_status]
 * @property {string} [payment_gateway]
 */

/**
 * @typedef MultiTenderPaymentMethod
 * @property {MultiTenderPaymentMeta} [meta]
 * @property {string} mode
 * @property {string} [name]
 * @property {number} amount
 */

/**
 * @typedef PaymentConfirmationRequest
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {string} order_id
 */

/**
 * @typedef PaymentConfirmationResponse
 * @property {string} message
 * @property {boolean} success
 * @property {string} order_id
 */

/**
 * @typedef CODdata
 * @property {string} user_id
 * @property {number} limit
 * @property {boolean} is_active
 * @property {number} remaining_limit
 * @property {number} usages
 */

/**
 * @typedef GetUserCODLimitResponse
 * @property {boolean} success
 * @property {CODdata} user_cod_data
 */

/**
 * @typedef SetCODForUserRequest
 * @property {boolean} is_active
 * @property {string} merchant_user_id
 * @property {string} mobileno
 */

/**
 * @typedef SetCODOptionResponse
 * @property {string} message
 * @property {boolean} success
 */

/**
 * @typedef ShipmentItemFulFillingStore
 * @property {string} code
 * @property {string} id
 */

/**
 * @typedef GSTDetailsData
 * @property {string} gstin_code
 * @property {number} tax_collected_at_source
 * @property {number} brand_calculated_amount
 * @property {number} gst_fee
 * @property {number} value_of_good
 */

/**
 * @typedef Prices
 * @property {number} [price_effective]
 * @property {number} [delivery_charge]
 * @property {number} [refund_credit]
 * @property {number} [promotion_effective_discount]
 * @property {number} [cod_charges]
 * @property {number} [amount_paid_roundoff]
 * @property {number} [refund_amount]
 * @property {number} [amount_paid]
 * @property {number} [discount]
 * @property {number} [fynd_credits]
 * @property {number} [cashback]
 * @property {number} [coupon_value]
 * @property {number} [tax_collected_at_source]
 * @property {number} [cashback_applied]
 * @property {number} [value_of_good]
 * @property {number} [price_marked]
 */

/**
 * @typedef PlatformItem
 * @property {string} [code]
 * @property {number} [department_id]
 * @property {string[]} [l1_category]
 * @property {string[]} [image]
 * @property {boolean} [can_return]
 * @property {string} [l3_category_name]
 * @property {boolean} [can_cancel]
 * @property {string[]} [images]
 * @property {number} [l3_category]
 * @property {string} [size]
 * @property {string} [color]
 * @property {number} [id]
 * @property {string} [name]
 */

/**
 * @typedef BagUnit
 * @property {boolean} [can_return]
 * @property {GSTDetailsData} [gst]
 * @property {boolean} [can_cancel]
 * @property {number} total_shipment_bags
 * @property {number} bag_id
 * @property {Object} status
 * @property {string} shipment_id
 * @property {Prices} [prices]
 * @property {number} item_quantity
 * @property {string} ordering_channel
 * @property {PlatformItem} [item]
 */

/**
 * @typedef ShipmentStatus
 * @property {string} status
 * @property {string} ops_status
 * @property {string} hex_code
 * @property {string} title
 * @property {string} actual_status
 */

/**
 * @typedef PaymentModeInfo
 * @property {string} logo
 * @property {string} type
 */

/**
 * @typedef UserDataInfo
 * @property {string} [first_name]
 * @property {number} [uid]
 * @property {boolean} [is_anonymous_user]
 * @property {string} [gender]
 * @property {string} [avis_user_id]
 * @property {string} [last_name]
 * @property {string} [email]
 * @property {string} [name]
 * @property {string} [mobile]
 */

/**
 * @typedef ShipmentItem
 * @property {ShipmentItemFulFillingStore} [fulfilling_store]
 * @property {BagUnit[]} [bags]
 * @property {string} created_at
 * @property {number} shipment_created_at
 * @property {string} fulfilling_centre
 * @property {ShipmentStatus} [shipment_status]
 * @property {Object} [application]
 * @property {PaymentModeInfo} [payment_mode_info]
 * @property {number} total_bags_count
 * @property {UserDataInfo} [user]
 * @property {Object} [sla]
 * @property {number} total_shipments_in_order
 * @property {Object} [channel]
 * @property {Prices} [prices]
 * @property {string} id
 * @property {Object} [payment_methods]
 */

/**
 * @typedef FilterInfoOption
 * @property {string} [value]
 * @property {string} text
 * @property {string} [name]
 */

/**
 * @typedef FiltersInfo
 * @property {string} value
 * @property {string} text
 * @property {string} type
 * @property {FilterInfoOption[]} [options]
 */

/**
 * @typedef ShipmentInternalPlatformViewResponse
 * @property {ShipmentItem[]} [items]
 * @property {Object} [page]
 * @property {Object} [applied_filters]
 * @property {FiltersInfo[]} [filters]
 */

/**
 * @typedef Error
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef UserDetailsData
 * @property {string} phone
 * @property {string} country
 * @property {string} pincode
 * @property {string} state
 * @property {string} address
 * @property {string} city
 * @property {string} email
 * @property {string} name
 */

/**
 * @typedef BagStateMapper
 * @property {boolean} [app_facing]
 * @property {string} [app_state_name]
 * @property {number} bs_id
 * @property {boolean} [notify_customer]
 * @property {boolean} [is_active]
 * @property {string} journey_type
 * @property {string} state_type
 * @property {string} [app_display_name]
 * @property {string} display_name
 * @property {string} name
 */

/**
 * @typedef BagStatusHistory
 * @property {number} bsh_id
 * @property {string} created_at
 * @property {Object[]} [reasons]
 * @property {boolean} [forward]
 * @property {number} [delivery_partner_id]
 * @property {number} store_id
 * @property {string} [updated_at]
 * @property {number} bag_id
 * @property {boolean} [kafka_sync]
 * @property {string} status
 * @property {string} shipment_id
 * @property {string} [delivery_awb_number]
 * @property {BagStateMapper} bag_state_mapper
 * @property {string} [state_type]
 * @property {number} state_id
 * @property {boolean} [app_display_name]
 * @property {boolean} [display_name]
 */

/**
 * @typedef FulfillingStore
 * @property {string} code
 * @property {string} phone
 * @property {string} fulfillment_channel
 * @property {string} contact_person
 * @property {string} country
 * @property {string} pincode
 * @property {Object} meta
 * @property {string} city
 * @property {string} state
 * @property {string} address
 * @property {string} store_name
 * @property {string} id
 */

/**
 * @typedef OrderDetailsData
 * @property {string} [affiliate_id]
 * @property {string} [cod_charges]
 * @property {Object} [ordering_channel_logo]
 * @property {string} [order_date]
 * @property {string} [order_value]
 * @property {Object} [tax_details]
 * @property {string} [source]
 * @property {string} [ordering_channel]
 * @property {string} fynd_order_id
 */

/**
 * @typedef DiscountRules
 * @property {number} [value]
 * @property {string} [type]
 */

/**
 * @typedef ItemCriterias
 * @property {number[]} [item_brand]
 */

/**
 * @typedef BuyRules
 * @property {ItemCriterias} [item_criteria]
 * @property {Object} [cart_conditions]
 */

/**
 * @typedef AppliedPromos
 * @property {number} [amount]
 * @property {boolean} [mrp_promotion]
 * @property {DiscountRules[]} [discount_rules]
 * @property {number} [article_quantity]
 * @property {string} [promotion_type]
 * @property {string} [promotion_name]
 * @property {BuyRules[]} [buy_rules]
 * @property {string} [promo_id]
 */

/**
 * @typedef OrderBrandName
 * @property {string} company
 * @property {string} logo
 * @property {number} created_on
 * @property {number} [modified_on]
 * @property {number} id
 * @property {string} brand_name
 */

/**
 * @typedef BagConfigs
 * @property {boolean} enable_tracking
 * @property {boolean} is_active
 * @property {boolean} can_be_cancelled
 * @property {boolean} allow_force_return
 * @property {boolean} is_returnable
 * @property {boolean} is_customer_return_allowed
 */

/**
 * @typedef Identifier
 * @property {string} [ean]
 */

/**
 * @typedef FinancialBreakup
 * @property {number} price_effective
 * @property {number} promotion_effective_discount
 * @property {string} gst_tag
 * @property {number} gst_tax_percentage
 * @property {number} price_marked
 * @property {string} item_name
 * @property {Identifier} identifiers
 * @property {number} discount
 * @property {number} coupon_value
 * @property {number} [tax_collected_at_source]
 * @property {string} gst_fee
 * @property {Object} pm_price_split
 * @property {number} refund_credit
 * @property {number} cod_charges
 * @property {number} amount_paid
 * @property {string} hsn_code
 * @property {string} size
 * @property {number} cashback_applied
 * @property {number} transfer_price
 * @property {number} value_of_good
 * @property {number} fynd_credits
 * @property {number} total_units
 * @property {number} delivery_charge
 * @property {boolean} added_to_fynd_cash
 * @property {number} [amount_paid_roundoff]
 * @property {number} cashback
 * @property {number} coupon_effective_discount
 * @property {number} brand_calculated_amount
 */

/**
 * @typedef PlatformDeliveryAddress
 * @property {string} [address_category]
 * @property {string} [area]
 * @property {string} [landmark]
 * @property {string} [address1]
 * @property {string} [created_at]
 * @property {string} [phone]
 * @property {string} [country]
 * @property {number} [longitude]
 * @property {string} [pincode]
 * @property {string} [updated_at]
 * @property {string} [state]
 * @property {string} [address2]
 * @property {number} [latitude]
 * @property {string} [city]
 * @property {string} [email]
 * @property {string} [contact_person]
 * @property {string} [address_type]
 * @property {string} [version]
 */

/**
 * @typedef OrderBagArticle
 * @property {Object} [identifiers]
 * @property {Object} [return_config]
 * @property {string} [uid]
 */

/**
 * @typedef BagGST
 * @property {boolean} [is_default_hsn_code]
 * @property {number} [gst_fee]
 * @property {string} [gst_tag]
 * @property {number} [gst_tax_percentage]
 * @property {string} [hsn_code]
 * @property {number} [brand_calculated_amount]
 * @property {string} [gstin_code]
 * @property {number} [value_of_good]
 */

/**
 * @typedef OrderBags
 * @property {Object} [parent_promo_bags]
 * @property {AppliedPromos[]} [applied_promos]
 * @property {Prices} [prices]
 * @property {number} [quantity]
 * @property {OrderBrandName} [brand]
 * @property {BagConfigs} [bag_configs]
 * @property {boolean} [can_return]
 * @property {FinancialBreakup[]} [financial_breakup]
 * @property {PlatformItem} [item]
 * @property {string} [entity_type]
 * @property {string} [seller_identifier]
 * @property {boolean} [can_cancel]
 * @property {number} bag_id
 * @property {PlatformDeliveryAddress} [delivery_address]
 * @property {string} [current_status]
 * @property {string} [display_name]
 * @property {OrderBagArticle} [article]
 * @property {BagGST} [gst_details]
 * @property {string} [identifier]
 * @property {number} [line_number]
 */

/**
 * @typedef ShipmentStatusData
 * @property {string} [created_at]
 * @property {string} [status]
 * @property {string} [shipment_id]
 * @property {number[]} [bag_list]
 * @property {number} [id]
 */

/**
 * @typedef TrackingList
 * @property {string} text
 * @property {string} [time]
 * @property {string} status
 * @property {boolean} [is_current]
 * @property {boolean} [is_passed]
 */

/**
 * @typedef ShipmentPayments
 * @property {string} mode
 * @property {string} [source]
 * @property {string} [logo]
 */

/**
 * @typedef DPDetailsData
 * @property {string} [track_url]
 * @property {string} [country]
 * @property {string} [gst_tag]
 * @property {string} [pincode]
 * @property {string} [awb_no]
 * @property {string} [eway_bill_id]
 * @property {string} [id]
 * @property {string} [name]
 */

/**
 * @typedef ShipmentInfoResponse
 * @property {number} [shipment_quantity]
 * @property {Object} fyndstore_emp
 * @property {UserDetailsData} [delivery_details]
 * @property {string} [shipment_status]
 * @property {UserDetailsData} [billing_details]
 * @property {string} lock_status
 * @property {string} affiliate_shipment_id
 * @property {Object} current_shipment_status
 * @property {Object} [user_info]
 * @property {string} [refund_text]
 * @property {Object} ordering_store
 * @property {string} [is_pdsr]
 * @property {string[]} [child_nodes]
 * @property {Object} [refund_details]
 * @property {number} [total_items]
 * @property {Object} [delivery_slot]
 * @property {string} [secured_delivery_flag]
 * @property {Object[]} [forward_shipment_status]
 * @property {Prices} [prices]
 * @property {Object} invoice
 * @property {boolean} [go_green]
 * @property {BagStatusHistory[]} [bag_status_history]
 * @property {string} [due_date]
 * @property {string} [enable_dp_tracking]
 * @property {FulfillingStore} [fulfilling_store]
 * @property {OrderDetailsData} [order]
 * @property {OrderBags[]} [bags]
 * @property {Object} order_status
 * @property {string} [priority_text]
 * @property {boolean} [can_return]
 * @property {string} [replacement_details]
 * @property {string} order_type
 * @property {string[]} [shipment_images]
 * @property {ShipmentStatusData} [status]
 * @property {string} user_id
 * @property {string} [order_created_time]
 * @property {number} status_progress
 * @property {TrackingList[]} [tracking_list]
 * @property {string} tracking_url
 * @property {Object[]} items
 * @property {boolean} [enable_tracking]
 * @property {string} [is_fynd_store]
 * @property {string} can_break
 * @property {string} [journey_type]
 * @property {string} email_id
 * @property {ShipmentPayments} [payments]
 * @property {boolean} [can_cancel]
 * @property {string} [vertical]
 * @property {string} [packaging_type]
 * @property {Object[]} [forward_tracking_list]
 * @property {string} shipment_id
 * @property {Object} [bank_data]
 * @property {DPDetailsData} [dp_details]
 * @property {string} [picked_date]
 * @property {Object[]} delivery_status
 * @property {Object} company
 * @property {boolean} [beneficiary_details]
 * @property {boolean} is_fynd_coupon
 * @property {boolean} is_packaging_order
 * @property {string} [mid]
 * @property {string} [pay_button]
 * @property {Object} [coupon]
 * @property {string} [kirana_store_id]
 * @property {Object[]} [forward_order_status]
 * @property {string} [payment_mode]
 * @property {string} [user_agent]
 * @property {boolean} is_not_fynd_source
 * @property {boolean} platform_logo
 * @property {boolean} is_invoiced
 * @property {GSTDetailsData} [gst_details]
 * @property {Object} [escalation]
 * @property {number} [total_bags]
 * @property {string} credit_note_id
 * @property {Object[]} [custom_meta]
 * @property {string} [operational_status]
 */

/**
 * @typedef OrderDict
 * @property {Prices} [prices]
 * @property {string} order_date
 * @property {number} shipment_count
 * @property {string} fynd_order_id
 */

/**
 * @typedef PlatformShipment
 * @property {number} [shipment_quantity]
 * @property {UserDetailsData} [delivery_details]
 * @property {string} [shipment_status]
 * @property {UserDetailsData} [billing_details]
 * @property {number} [total_items]
 * @property {Object} [delivery_slot]
 * @property {Prices} [prices]
 * @property {BagStatusHistory[]} [bag_status_history]
 * @property {string} [enable_dp_tracking]
 * @property {FulfillingStore} [fulfilling_store]
 * @property {OrderDetailsData} [order]
 * @property {OrderBags[]} [bags]
 * @property {string} [priority_text]
 * @property {string[]} [shipment_images]
 * @property {ShipmentStatusData} [status]
 * @property {TrackingList[]} [tracking_list]
 * @property {string} [journey_type]
 * @property {ShipmentPayments} [payments]
 * @property {string} [vertical]
 * @property {string} [packaging_type]
 * @property {string} shipment_id
 * @property {DPDetailsData} [dp_details]
 * @property {string} [picked_date]
 * @property {Object} [coupon]
 * @property {string} [payment_mode]
 * @property {string} [user_agent]
 * @property {string} [platform_logo]
 * @property {GSTDetailsData} [gst_details]
 * @property {number} [total_bags]
 * @property {Object[]} [custom_meta]
 * @property {string} [operational_status]
 */

/**
 * @typedef ShipmentDetailsResponse
 * @property {boolean} success
 * @property {OrderDict} [order]
 * @property {Object[]} [custom_meta]
 * @property {PlatformShipment[]} [shipments]
 */

/**
 * @typedef SubLane
 * @property {Object[]} [actions]
 * @property {string} [value]
 * @property {number} [index]
 * @property {string} [text]
 * @property {number} [total_items]
 */

/**
 * @typedef SuperLane
 * @property {number} [total_items]
 * @property {string} value
 * @property {string} text
 * @property {SubLane[]} [options]
 */

/**
 * @typedef LaneConfigResponse
 * @property {SuperLane[]} [super_lanes]
 */

/**
 * @typedef PlatformBreakupValues
 * @property {string} [value]
 * @property {string} [display]
 * @property {string} [name]
 */

/**
 * @typedef PlatformChannel
 * @property {string} [logo]
 * @property {string} [name]
 */

/**
 * @typedef PlatformOrderItems
 * @property {string} [order_id]
 * @property {PlatformBreakupValues[]} [breakup_values]
 * @property {UserDataInfo} [user_info]
 * @property {number} [total_order_value]
 * @property {Object} [meta]
 * @property {string} [payment_mode]
 * @property {string} [order_created_time]
 * @property {PlatformChannel} [channel]
 * @property {number} [order_value]
 * @property {PlatformShipment[]} [shipments]
 */

/**
 * @typedef OrderListingResponse
 * @property {PlatformOrderItems[]} [items]
 * @property {string} [lane]
 * @property {Page} [page]
 * @property {number} [total_count]
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef Options
 * @property {number} [value]
 * @property {string} [text]
 */

/**
 * @typedef MetricsCount
 * @property {string} text
 * @property {number} value
 * @property {Options[]} [options]
 * @property {string} key
 */

/**
 * @typedef MetricCountResponse
 * @property {MetricsCount[]} [items]
 */

/**
 * @typedef PlatformTrack
 * @property {string} [last_location_recieved_at]
 * @property {string} [reason]
 * @property {string} [raw_status]
 * @property {string} [awb]
 * @property {Object} [meta]
 * @property {string} [updated_time]
 * @property {string} [updated_at]
 * @property {string} [status]
 * @property {string} [account_name]
 * @property {string} [shipment_type]
 */

/**
 * @typedef PlatformShipmentTrack
 * @property {Object} [meta]
 * @property {PlatformTrack[]} [results]
 */

/**
 * @typedef FiltersResponse
 * @property {Object[]} [advance]
 */

/**
 * @typedef Success
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef OmsReports
 * @property {string} [report_name]
 * @property {Object} [request_details]
 * @property {string} [s3_key]
 * @property {string} [status]
 * @property {string} [report_id]
 * @property {string} [report_created_at]
 * @property {string} [display_name]
 * @property {string} [report_requested_at]
 * @property {string} [report_type]
 */

/**
 * @typedef JioCodeUpsertDataSet
 * @property {string} [item_id]
 * @property {string} [jio_code]
 * @property {string} [company_id]
 * @property {string} [article_id]
 */

/**
 * @typedef JioCodeUpsertPayload
 * @property {JioCodeUpsertDataSet[]} [data]
 */

/**
 * @typedef NestedErrorSchemaDataSet
 * @property {string} [value]
 * @property {string} [type]
 * @property {string} [message]
 */

/**
 * @typedef JioCodeUpsertResponse
 * @property {string} [trace_id]
 * @property {Object[]} [data]
 * @property {NestedErrorSchemaDataSet[]} [error]
 * @property {string} [identifier]
 * @property {boolean} [success]
 */

/**
 * @typedef BulkInvoicingResponse
 * @property {boolean} success
 * @property {string} [message]
 */

/**
 * @typedef BulkInvoiceLabelResponse
 * @property {string} [invoice_status]
 * @property {string} [store_id]
 * @property {Object} [label]
 * @property {string} batch_id
 * @property {boolean} do_invoice_label_generated
 * @property {Object} [data]
 * @property {string} [store_code]
 * @property {string} [store_name]
 * @property {Object} [invoice]
 * @property {string} [company_id]
 */

/**
 * @typedef URL
 * @property {string} [url]
 */

/**
 * @typedef FileUploadResponse
 * @property {string} [url]
 * @property {number} [expiry]
 */

/**
 * @typedef FileResponse
 * @property {string} [content_type]
 * @property {string} [namespace]
 * @property {string} [method]
 * @property {URL} [cdn]
 * @property {string} [file_path]
 * @property {string} [file_name]
 * @property {FileUploadResponse} [upload]
 * @property {string} [operation]
 * @property {number} [size]
 * @property {string[]} [tags]
 */

/**
 * @typedef BulkListingPage
 * @property {boolean} [has_previous]
 * @property {number} [total]
 * @property {number} [current]
 * @property {string} [type]
 * @property {number} [size]
 * @property {boolean} [has_next]
 */

/**
 * @typedef bulkListingData
 * @property {number} [store_id]
 * @property {number} [processing]
 * @property {string} [store_code]
 * @property {string} [file_name]
 * @property {number} [total]
 * @property {string} [user_name]
 * @property {string} [status]
 * @property {string} [user_id]
 * @property {string[]} [processing_shipments]
 * @property {Object[]} [successful_shipments]
 * @property {number} [successful]
 * @property {number} [failed]
 * @property {number} [company_id]
 * @property {Object[]} [failed_shipments]
 * @property {string} [uploaded_on]
 * @property {string} [batch_id]
 * @property {string} [store_name]
 * @property {string} [excel_url]
 * @property {string} [id]
 */

/**
 * @typedef BulkListingResponse
 * @property {boolean} [success]
 * @property {BulkListingPage} [page]
 * @property {string} [error]
 * @property {bulkListingData[]} [data]
 */

/**
 * @typedef DateRange
 * @property {string} [to_date]
 * @property {string} [from_date]
 */

/**
 * @typedef ManifestFilter
 * @property {string} [lane]
 * @property {string} [dp_name]
 * @property {string} [stores]
 * @property {string} [sales_channel_name]
 * @property {string} [dp_ids]
 * @property {DateRange} [date_range]
 * @property {string} [store_name]
 * @property {string} [sales_channels]
 */

/**
 * @typedef GeneratedManifestItem
 * @property {string} [created_at]
 * @property {boolean} [is_active]
 * @property {string} [manifest_id]
 * @property {string} [status]
 * @property {string} [created_by]
 * @property {ManifestFilter} [filters]
 * @property {number} [company_id]
 */

/**
 * @typedef ManifestPage
 * @property {boolean} [has_previous]
 * @property {number} [total]
 * @property {string} [current]
 * @property {string} [type]
 * @property {boolean} [has_next]
 * @property {string} [size]
 */

/**
 * @typedef GeneratedManifestResponse
 * @property {GeneratedManifestItem[]} [items]
 * @property {ManifestPage} [page]
 */

/**
 * @typedef ManifestDetailItem
 * @property {string} [order_id]
 * @property {string} [invoice_id]
 * @property {string} [awb]
 * @property {number} [item_qty]
 * @property {string} [shipment_id]
 */

/**
 * @typedef ManifestDetailTotalShipmentPricesCount
 * @property {number} [shipment_count]
 * @property {number} [total_price]
 */

/**
 * @typedef ManifestDetailMeta
 * @property {ManifestFilter} [filters]
 * @property {ManifestDetailTotalShipmentPricesCount} [total_shipment_prices_count]
 */

/**
 * @typedef ManifestDetail
 * @property {string} [created_at]
 * @property {boolean} [is_active]
 * @property {number} [uid]
 * @property {string} [manifest_id]
 * @property {ManifestDetailMeta} [meta]
 * @property {string} [status]
 * @property {string} [created_by]
 * @property {number} [user_id]
 * @property {ManifestFilter} [filters]
 * @property {number} [id]
 * @property {number} [company_id]
 */

/**
 * @typedef ManifestDetailResponse
 * @property {ManifestDetailItem[]} [items]
 * @property {number} [additional_shipment_count]
 * @property {ManifestPage} [page]
 * @property {ManifestDetail[]} [manifest_details]
 */

/**
 * @typedef QuestionSet
 * @property {number} [id]
 * @property {string} [display_name]
 */

/**
 * @typedef Reason
 * @property {QuestionSet[]} [question_set]
 * @property {number} [id]
 * @property {string} [display_name]
 * @property {string[]} [qc_type]
 */

/**
 * @typedef PlatformShipmentReasonsResponse
 * @property {boolean} [success]
 * @property {Reason[]} [reasons]
 */

/**
 * @typedef BulkActionPayload
 * @property {string} url
 */

/**
 * @typedef BulkActionResponse
 * @property {boolean} [status]
 * @property {string} [message]
 */

/**
 * @typedef BulkActionDetailsDataField
 * @property {number} [failed_shipments_count]
 * @property {number} [total_shipments_count]
 * @property {number} [processing_shipments_count]
 * @property {string} [batch_id]
 * @property {string[]} [successful_shipment_ids]
 * @property {number} [successful_shipments_count]
 * @property {string} [company_id]
 */

/**
 * @typedef BulkActionDetailsResponse
 * @property {string} [uploaded_by]
 * @property {string} [uploaded_on]
 * @property {string[]} [error]
 * @property {BulkActionDetailsDataField[]} [data]
 * @property {string} [user_id]
 * @property {boolean} [status]
 * @property {string} [success]
 * @property {string} [message]
 * @property {string[]} [failed_records]
 */

/**
 * @typedef B2BPODetails
 * @property {number} [po_line_amount]
 * @property {number} [total_gst_percentage]
 * @property {string} [docker_number]
 * @property {number} [po_tax_amount]
 * @property {number} [item_base_price]
 * @property {boolean} [partial_can_ret]
 */

/**
 * @typedef BagMeta
 * @property {B2BPODetails} [b2b_po_details]
 */

/**
 * @typedef Document
 * @property {string} value
 * @property {string} [url]
 * @property {string} legal_name
 * @property {string} ds_type
 * @property {boolean} verified
 */

/**
 * @typedef StoreDocuments
 * @property {Document} [gst]
 */

/**
 * @typedef StoreEinvoice
 * @property {string} [user]
 * @property {string} [password]
 * @property {string} [username]
 * @property {boolean} enabled
 */

/**
 * @typedef StoreEwaybill
 * @property {boolean} [enabled]
 */

/**
 * @typedef StoreGstCredentials
 * @property {StoreEinvoice} [e_invoice]
 * @property {StoreEwaybill} [e_waybill]
 */

/**
 * @typedef EInvoicePortalDetails
 * @property {string} [user]
 * @property {string} [password]
 * @property {string} [username]
 */

/**
 * @typedef StoreMeta
 * @property {string[]} [notification_emails]
 * @property {Object} [additional_contact_details]
 * @property {string} [gst_number]
 * @property {StoreDocuments} [documents]
 * @property {Object} [product_return_config]
 * @property {StoreGstCredentials} gst_credentials
 * @property {Object[]} [timing]
 * @property {Object} [ewaybill_portal_details]
 * @property {string} stage
 * @property {EInvoicePortalDetails} [einvoice_portal_details]
 * @property {string} display_name
 */

/**
 * @typedef StoreAddress
 * @property {string} [area]
 * @property {string} address_type
 * @property {string} [landmark]
 * @property {number} longitude
 * @property {string} country_code
 * @property {string} updated_at
 * @property {string} state
 * @property {number} latitude
 * @property {string} contact_person
 * @property {string} [version]
 * @property {string} address_category
 * @property {string} created_at
 * @property {string} phone
 * @property {string} country
 * @property {number} pincode
 * @property {string} city
 * @property {string} [email]
 * @property {string} address1
 * @property {string} [address2]
 */

/**
 * @typedef Store
 * @property {string} store_email
 * @property {string} fulfillment_channel
 * @property {StoreMeta} meta
 * @property {StoreAddress} [store_address_json]
 * @property {string} s_id
 * @property {number} [alohomora_user_id]
 * @property {string[]} [brand_store_tags]
 * @property {number} longitude
 * @property {string} [updated_at]
 * @property {string} state
 * @property {string} [order_integration_id]
 * @property {number} latitude
 * @property {string} contact_person
 * @property {number} [parent_store_id]
 * @property {string} created_at
 * @property {boolean} [is_active]
 * @property {number} phone
 * @property {string} country
 * @property {string} [store_active_from]
 * @property {string} pincode
 * @property {string} login_username
 * @property {number} [packaging_material_count]
 * @property {string} [mall_area]
 * @property {string} city
 * @property {string} location_type
 * @property {string} name
 * @property {number} company_id
 * @property {string} [code]
 * @property {string} address1
 * @property {Object} [brand_id]
 * @property {boolean} [is_archived]
 * @property {string} [address2]
 * @property {boolean} [is_enabled_for_recon]
 * @property {string} [mall_name]
 * @property {string} [vat_no]
 */

/**
 * @typedef Dates
 * @property {Object} [delivery_date]
 * @property {string} [order_created]
 */

/**
 * @typedef Brand
 * @property {string} [pickup_location]
 * @property {boolean} [credit_note_allowed]
 * @property {boolean} [is_virtual_invoice]
 * @property {string} brand_name
 * @property {string} company
 * @property {number} [credit_note_expiry_days]
 * @property {number} brand_id
 * @property {string} [logo]
 * @property {string} [start_date]
 * @property {number} [created_on]
 * @property {string} [invoice_prefix]
 * @property {number} [modified_on]
 * @property {string} [script_last_ran]
 */

/**
 * @typedef AffiliateMeta
 * @property {boolean} [is_priority]
 * @property {number} [quantity]
 * @property {string} [order_item_id]
 * @property {string} [coupon_code]
 * @property {string} [box_type]
 * @property {string} [channel_order_id]
 * @property {number} [loyalty_discount]
 * @property {string} [due_date]
 * @property {number} [employee_discount]
 * @property {string} [channel_shipment_id]
 * @property {number} [size_level_total_qty]
 */

/**
 * @typedef AffiliateBagDetails
 * @property {AffiliateMeta} affiliate_meta
 * @property {string} affiliate_bag_id
 * @property {number} [loyalty_discount]
 * @property {number} [employee_discount]
 * @property {string} affiliate_order_id
 */

/**
 * @typedef BagReturnableCancelableStatus
 * @property {boolean} enable_tracking
 * @property {boolean} is_active
 * @property {boolean} can_be_cancelled
 * @property {boolean} is_returnable
 * @property {boolean} is_customer_return_allowed
 */

/**
 * @typedef Attributes
 * @property {string} [brand_name]
 * @property {string[]} [gender]
 * @property {string} [primary_material]
 * @property {string} [marketer_name]
 * @property {string} [primary_color]
 * @property {string} [marketer_address]
 * @property {string} [primary_color_hex]
 * @property {string} [essential]
 * @property {string} [name]
 */

/**
 * @typedef Item
 * @property {number} [department_id]
 * @property {Attributes} attributes
 * @property {string} slug_key
 * @property {Object} [meta]
 * @property {string} [last_updated_at]
 * @property {string} brand
 * @property {string[]} image
 * @property {boolean} [can_return]
 * @property {string} [l3_category_name]
 * @property {number} [l3_category]
 * @property {string[]} [l2_category]
 * @property {number} [l2_category_id]
 * @property {boolean} [can_cancel]
 * @property {string} size
 * @property {string} [branch_url]
 * @property {string} name
 * @property {string} [code]
 * @property {string[]} [l1_category]
 * @property {number} brand_id
 * @property {string} [gender]
 * @property {number} item_id
 * @property {string} [webstore_product_url]
 * @property {number} [l1_category_id]
 * @property {string} [color]
 */

/**
 * @typedef PDFLinks
 * @property {string} [invoice_a6]
 * @property {string} [label_a4]
 * @property {string} [label_a6]
 * @property {string} [invoice_a4]
 * @property {string} [b2b]
 * @property {string} [credit_note_url]
 * @property {string} [invoice_pos]
 * @property {string} [label]
 * @property {string} [po_invoice]
 * @property {string} [label_pos]
 * @property {string} invoice_type
 * @property {string} [invoice]
 * @property {string} label_type
 */

/**
 * @typedef Formatted
 * @property {string} [f_max]
 * @property {string} [f_min]
 */

/**
 * @typedef BuyerDetails
 * @property {string} gstin
 * @property {number} pincode
 * @property {string} [ajio_site_id]
 * @property {string} state
 * @property {string} address
 * @property {string} city
 * @property {string} name
 */

/**
 * @typedef ShipmentTimeStamp
 * @property {string} [t_min]
 * @property {string} [t_max]
 */

/**
 * @typedef EInvoice
 * @property {string} [signed_invoice]
 * @property {string} [signed_qr_code]
 * @property {string} [acknowledge_date]
 * @property {number} [acknowledge_no]
 * @property {string} [irn]
 * @property {string} [error_message]
 * @property {string} [error_code]
 */

/**
 * @typedef EinvoiceInfo
 * @property {EInvoice} [invoice]
 * @property {EInvoice} [credit_note]
 */

/**
 * @typedef DebugInfo
 * @property {string} [stormbreaker_uuid]
 */

/**
 * @typedef LockData
 * @property {string} [lock_message]
 * @property {boolean} [locked]
 * @property {boolean} [mto]
 */

/**
 * @typedef ShipmentMeta
 * @property {string} [forward_affiliate_shipment_id]
 * @property {Object} [ewaybill_info]
 * @property {boolean} auto_trigger_dp_assignment_acf
 * @property {string} [store_invoice_updated_date]
 * @property {string} [return_awb_number]
 * @property {string} [return_affiliate_order_id]
 * @property {string} [return_affiliate_shipment_id]
 * @property {string} [po_number]
 * @property {string} [packaging_name]
 * @property {string} [due_date]
 * @property {string} [dp_sort_key]
 * @property {number} [shipment_volumetric_weight]
 * @property {Formatted} [formatted]
 * @property {BuyerDetails} [b2b_buyer_details]
 * @property {Object} [external]
 * @property {string} [order_type]
 * @property {string} [awb_number]
 * @property {string} [box_type]
 * @property {number} [return_store_node]
 * @property {ShipmentTimeStamp} [timestamp]
 * @property {string} [forward_affiliate_order_id]
 * @property {number} weight
 * @property {EinvoiceInfo} [einvoice_info]
 * @property {string} [dp_name]
 * @property {Object} [bag_weight]
 * @property {string} [dp_id]
 * @property {Object} [return_details]
 * @property {string} [marketplace_store_id]
 * @property {string} [fulfilment_priority_text]
 * @property {DebugInfo} [debug_info]
 * @property {Object} [b2c_buyer_details]
 * @property {LockData} [lock_data]
 * @property {Object} [dp_options]
 * @property {boolean} [assign_dp_from_sb]
 * @property {number} [shipment_weight]
 * @property {boolean} same_store_available
 */

/**
 * @typedef AffiliateDetails
 * @property {string} [company_affiliate_tag]
 * @property {AffiliateMeta} affiliate_meta
 * @property {PDFLinks} [pdf_links]
 * @property {ShipmentMeta} shipment_meta
 * @property {string} [ad_id]
 * @property {string} affiliate_bag_id
 * @property {string} [affiliate_id]
 * @property {string} affiliate_shipment_id
 * @property {string} affiliate_store_id
 * @property {string} affiliate_order_id
 */

/**
 * @typedef ArticleDetails
 * @property {Object} [status]
 */

/**
 * @typedef Dimensions
 * @property {string} [unit]
 * @property {number} [width]
 * @property {boolean} [is_default]
 * @property {number} [length]
 * @property {number} [height]
 */

/**
 * @typedef ReturnConfig
 * @property {string} [unit]
 * @property {boolean} [returnable]
 * @property {number} [time]
 */

/**
 * @typedef Weight
 * @property {number} [shipping]
 * @property {string} [unit]
 * @property {boolean} [is_default]
 */

/**
 * @typedef Article
 * @property {string} [code]
 * @property {Object} [raw_meta]
 * @property {string} uid
 * @property {boolean} [is_set]
 * @property {string} seller_identifier
 * @property {Identifier} identifiers
 * @property {Object} [a_set]
 * @property {Dimensions} [dimensions]
 * @property {Object} [esp_modified]
 * @property {ReturnConfig} [return_config]
 * @property {string} size
 * @property {Weight} [weight]
 * @property {string} _id
 * @property {Object} [child_details]
 */

/**
 * @typedef BagGSTDetails
 * @property {boolean} [is_default_hsn_code]
 * @property {number} gst_fee
 * @property {number} igst_tax_percentage
 * @property {string} gst_tag
 * @property {number} sgst_tax_percentage
 * @property {number} gst_tax_percentage
 * @property {string} hsn_code_id
 * @property {string} cgst_gst_fee
 * @property {string} hsn_code
 * @property {string} igst_gst_fee
 * @property {string} sgst_gst_fee
 * @property {number} tax_collected_at_source
 * @property {number} brand_calculated_amount
 * @property {string} [gstin_code]
 * @property {number} value_of_good
 * @property {number} cgst_tax_percentage
 */

/**
 * @typedef BagDetailsPlatformResponse
 * @property {Object} [restore_promos]
 * @property {Object} [parent_promo_bags]
 * @property {BagStatusHistory[]} bag_status
 * @property {Object[]} [applied_promos]
 * @property {BagMeta} [meta]
 * @property {Store} [ordering_store]
 * @property {boolean} [restore_coupon]
 * @property {Dates} [dates]
 * @property {string} [b_type]
 * @property {Prices} prices
 * @property {number} [quantity]
 * @property {BagStatusHistory} [bag_status_history]
 * @property {Brand} brand
 * @property {Object[]} [reasons]
 * @property {AffiliateBagDetails} affiliate_bag_details
 * @property {BagReturnableCancelableStatus} status
 * @property {FinancialBreakup[]} financial_breakup
 * @property {string} [order_integration_id]
 * @property {number} b_id
 * @property {Item} item
 * @property {BagStatusHistory} current_operational_status
 * @property {number} [no_of_bags_order]
 * @property {string} [entity_type]
 * @property {string} [seller_identifier]
 * @property {string} journey_type
 * @property {Object} [qc_required]
 * @property {string} [shipment_id]
 * @property {BagStatusHistory} current_status
 * @property {number[]} [original_bag_list]
 * @property {string[]} [tags]
 * @property {string} [display_name]
 * @property {AffiliateDetails} [affiliate_details]
 * @property {number} [bag_update_time]
 * @property {ArticleDetails} [article_details]
 * @property {Article} article
 * @property {BagGSTDetails} gst_details
 * @property {string} [identifier]
 * @property {number} [line_number]
 * @property {string} [operational_status]
 */

/**
 * @typedef ErrorResponse
 * @property {string} message
 * @property {string} error
 */

/**
 * @typedef Page1
 * @property {number} item_total
 * @property {number} current
 * @property {number} size
 * @property {boolean} has_next
 * @property {string} page_type
 */

/**
 * @typedef GetBagsPlatformResponse
 * @property {BagDetailsPlatformResponse[]} items
 * @property {Page1} page
 */

/**
 * @typedef InvalidateShipmentCachePayload
 * @property {string[]} shipment_ids
 */

/**
 * @typedef InvalidateShipmentCacheNestedResponse
 * @property {string} [message]
 * @property {string} [shipment_id]
 * @property {number} [status]
 * @property {string} [error]
 */

/**
 * @typedef InvalidateShipmentCacheResponse
 * @property {InvalidateShipmentCacheNestedResponse[]} [response]
 */

/**
 * @typedef ErrorResponse1
 * @property {string} message
 * @property {number} status
 * @property {string} [error_trace]
 */

/**
 * @typedef StoreReassign
 * @property {number[]} [reason_ids]
 * @property {number} [bag_id]
 * @property {string} [set_id]
 * @property {string} [affiliate_bag_id]
 * @property {string} [affiliate_order_id]
 * @property {string} [affiliate_id]
 * @property {string} [mongo_article_id]
 * @property {string} [fynd_order_id]
 * @property {string} [item_id]
 * @property {number} store_id
 */

/**
 * @typedef StoreReassignResponse
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef Entities
 * @property {string} [id]
 * @property {string} [affiliate_bag_id]
 * @property {string} reason_text
 * @property {string} [affiliate_order_id]
 * @property {string} [affiliate_id]
 * @property {string} [affiliate_shipment_id]
 */

/**
 * @typedef UpdateShipmentLockPayload
 * @property {string} action
 * @property {Entities[]} entities
 * @property {string} action_type
 * @property {string} entity_type
 */

/**
 * @typedef OriginalFilter
 * @property {string} [affiliate_shipment_id]
 * @property {string} [affiliate_id]
 */

/**
 * @typedef Bags
 * @property {boolean} [is_locked]
 * @property {string} [affiliate_bag_id]
 * @property {string} [affiliate_order_id]
 * @property {number} [bag_id]
 */

/**
 * @typedef CheckResponse
 * @property {boolean} [lock_status]
 * @property {OriginalFilter} [original_filter]
 * @property {string} [status]
 * @property {string} [affiliate_id]
 * @property {boolean} [is_shipment_locked]
 * @property {boolean} [is_bag_locked]
 * @property {Bags[]} [bags]
 * @property {string} [affiliate_shipment_id]
 * @property {string} [shipment_id]
 */

/**
 * @typedef UpdateShipmentLockResponse
 * @property {string} [message]
 * @property {CheckResponse[]} [check_response]
 * @property {boolean} [success]
 */

/**
 * @typedef AnnouncementResponse
 * @property {string} [title]
 * @property {string} [to_datetime]
 * @property {number} id
 * @property {string} [logo_url]
 * @property {string} [platform_id]
 * @property {string} [platform_name]
 * @property {number} [company_id]
 * @property {string} [description]
 * @property {string} [created_at]
 * @property {string} [from_datetime]
 */

/**
 * @typedef AnnouncementsResponse
 * @property {AnnouncementResponse[]} [announcements]
 */

/**
 * @typedef BaseResponse
 * @property {string} message
 * @property {boolean} success
 */

/**
 * @typedef Click2CallResponse
 * @property {string} call_id
 * @property {boolean} status
 */

/**
 * @typedef EntityReasonData
 * @property {string} [reason_text]
 * @property {number} [reason_id]
 */

/**
 * @typedef EntitiesReasons
 * @property {Object[]} [filters]
 * @property {EntityReasonData} [data]
 */

/**
 * @typedef ProductsReasonsFilters
 * @property {string} [identifier]
 * @property {number} [line_number]
 * @property {number} [quantity]
 */

/**
 * @typedef ProductsReasonsData
 * @property {string} [reason_text]
 * @property {number} [reason_id]
 */

/**
 * @typedef ProductsReasons
 * @property {ProductsReasonsFilters[]} [filters]
 * @property {ProductsReasonsData} [data]
 */

/**
 * @typedef ReasonsData
 * @property {EntitiesReasons[]} [entities]
 * @property {ProductsReasons[]} [products]
 */

/**
 * @typedef Products
 * @property {string} [identifier]
 * @property {number} [line_number]
 * @property {number} [quantity]
 */

/**
 * @typedef EntitiesDataUpdates
 * @property {Object[]} [filters]
 * @property {Object} [data]
 */

/**
 * @typedef ProductsDataUpdatesFilters
 * @property {string} [identifier]
 * @property {number} [line_number]
 */

/**
 * @typedef ProductsDataUpdates
 * @property {ProductsDataUpdatesFilters[]} [filters]
 * @property {Object} [data]
 */

/**
 * @typedef DataUpdates
 * @property {EntitiesDataUpdates[]} [entities]
 * @property {ProductsDataUpdates[]} [products]
 */

/**
 * @typedef ShipmentsRequest
 * @property {string} identifier
 * @property {ReasonsData} [reasons]
 * @property {Products[]} [products]
 * @property {DataUpdates} [data_updates]
 */

/**
 * @typedef StatuesRequest
 * @property {string} [status]
 * @property {string} [exclude_bags_next_state]
 * @property {ShipmentsRequest[]} [shipments]
 */

/**
 * @typedef UpdateShipmentStatusRequest
 * @property {StatuesRequest[]} [statuses]
 * @property {boolean} [lock_after_transition]
 * @property {boolean} [task]
 * @property {boolean} [force_transition]
 * @property {boolean} [unlock_before_transition]
 */

/**
 * @typedef ShipmentsResponse
 * @property {Object} [meta]
 * @property {string} [message]
 * @property {number} [status]
 * @property {string} [identifier]
 * @property {string} [code]
 * @property {Object} [final_state]
 * @property {string} [stack_trace]
 * @property {string} [exception]
 */

/**
 * @typedef StatuesResponse
 * @property {ShipmentsResponse[]} [shipments]
 */

/**
 * @typedef UpdateShipmentStatusResponseBody
 * @property {StatuesResponse[]} [statuses]
 */

/**
 * @typedef AffiliateInventoryStoreConfig
 * @property {Object} [store]
 */

/**
 * @typedef AffiliateInventoryLogisticsConfig
 * @property {boolean} [dp_assignment]
 */

/**
 * @typedef AffiliateInventoryOrderConfig
 * @property {boolean} [force_reassignment]
 */

/**
 * @typedef AffiliateInventoryArticleAssignmentConfig
 * @property {boolean} [post_order_reassignment]
 */

/**
 * @typedef AffiliateInventoryPaymentConfig
 * @property {string} [source]
 * @property {string} [mode_of_payment]
 */

/**
 * @typedef AffiliateInventoryConfig
 * @property {AffiliateInventoryStoreConfig} [inventory]
 * @property {AffiliateInventoryLogisticsConfig} [logistics]
 * @property {AffiliateInventoryOrderConfig} [order]
 * @property {AffiliateInventoryArticleAssignmentConfig} [article_assignment]
 * @property {AffiliateInventoryPaymentConfig} [payment]
 */

/**
 * @typedef AffiliateAppConfigMeta
 * @property {string} value
 * @property {string} name
 */

/**
 * @typedef AffiliateAppConfig
 * @property {string} id
 * @property {AffiliateAppConfigMeta[]} [meta]
 * @property {string} owner
 * @property {string} secret
 * @property {string} updated_at
 * @property {string} token
 * @property {string} [description]
 * @property {string} created_at
 * @property {string} name
 */

/**
 * @typedef AffiliateConfig
 * @property {AffiliateInventoryConfig} [inventory]
 * @property {AffiliateAppConfig} [app]
 */

/**
 * @typedef Affiliate
 * @property {string} token
 * @property {string} id
 * @property {AffiliateConfig} [config]
 */

/**
 * @typedef AffiliateStoreIdMapping
 * @property {string} marketplace_store_id
 * @property {number} store_id
 */

/**
 * @typedef OrderConfig
 * @property {string} [article_lookup]
 * @property {Affiliate} affiliate
 * @property {boolean} [create_user]
 * @property {AffiliateStoreIdMapping[]} affiliate_store_id_mapping
 * @property {string} [bag_end_state]
 * @property {string} [store_lookup]
 */

/**
 * @typedef OrderPriority
 * @property {string} [fulfilment_priority_text]
 * @property {string} [affiliate_priority_code]
 * @property {number} [fulfilment_priority]
 */

/**
 * @typedef OrderUser
 * @property {string} pincode
 * @property {string} state
 * @property {string} [address2]
 * @property {string} [address1]
 * @property {string} country
 * @property {string} city
 * @property {number} mobile
 * @property {string} last_name
 * @property {string} email
 * @property {number} phone
 * @property {string} first_name
 */

/**
 * @typedef UserData
 * @property {OrderUser} [billing_user]
 * @property {OrderUser} [shipping_user]
 */

/**
 * @typedef ArticleDetails1
 * @property {string} _id
 * @property {number} quantity
 * @property {Object} category
 * @property {number} brand_id
 * @property {Object} attributes
 * @property {Object} dimension
 * @property {Object} weight
 */

/**
 * @typedef ShipmentDetails
 * @property {string} [box_type]
 * @property {Object} [meta]
 * @property {number} shipments
 * @property {string} affiliate_shipment_id
 * @property {number} fulfillment_id
 * @property {number} [dp_id]
 * @property {ArticleDetails1[]} articles
 */

/**
 * @typedef LocationDetails
 * @property {string} fulfillment_type
 * @property {number} fulfillment_id
 * @property {ArticleDetails1[]} articles
 */

/**
 * @typedef ShipmentConfig
 * @property {string} to_pincode
 * @property {string} journey
 * @property {string} payment_mode
 * @property {string} source
 * @property {string} action
 * @property {string} identifier
 * @property {ShipmentDetails[]} shipment
 * @property {LocationDetails} [location_details]
 */

/**
 * @typedef ShipmentData
 * @property {ShipmentConfig} shipment_data
 */

/**
 * @typedef MarketPlacePdf
 * @property {string} [invoice]
 * @property {string} [label]
 */

/**
 * @typedef AffiliateBag
 * @property {string} _id
 * @property {number} quantity
 * @property {number} transfer_price
 * @property {number} unit_price
 * @property {Object} affiliate_meta
 * @property {number} item_id
 * @property {number} avl_qty
 * @property {number} delivery_charge
 * @property {string} modified_on
 * @property {string} affiliate_store_id
 * @property {number} store_id
 * @property {string} fynd_store_id
 * @property {MarketPlacePdf} [pdf_links]
 * @property {number} company_id
 * @property {string} sku
 * @property {number} price_marked
 * @property {number} price_effective
 * @property {string} item_size
 * @property {string} hsn_code_id
 * @property {Object} identifier
 * @property {number} amount_paid
 * @property {number} discount
 * @property {string} seller_identifier
 */

/**
 * @typedef OrderInfo
 * @property {OrderPriority} [order_priority]
 * @property {UserData} user
 * @property {string} payment_mode
 * @property {OrderUser} shipping_address
 * @property {number} order_value
 * @property {string} [affiliate_order_id]
 * @property {string} [coupon]
 * @property {OrderUser} billing_address
 * @property {ShipmentData} [shipment]
 * @property {AffiliateBag[]} bags
 * @property {number} cod_charges
 * @property {number} discount
 * @property {number} delivery_charges
 * @property {Object} [payment]
 * @property {Object} items
 */

/**
 * @typedef CreateOrderPayload
 * @property {OrderConfig} order_config
 * @property {string} affiliate_id
 * @property {OrderInfo} order_info
 */

/**
 * @typedef CreateOrderResponse
 * @property {string} fynd_order_id
 */

/**
 * @typedef DispatchManifest
 * @property {string} manifest_id
 */

/**
 * @typedef SuccessResponse
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef ActionInfo
 * @property {string} slug
 * @property {string} description
 * @property {number} id
 * @property {string} display_text
 */

/**
 * @typedef GetActionsResponse
 * @property {ActionInfo} permissions
 */

/**
 * @typedef HistoryDict
 * @property {string} type
 * @property {string} user
 * @property {string} [ticket_id]
 * @property {number} [bag_id]
 * @property {string} message
 * @property {string} [l2_detail]
 * @property {string} [ticket_url]
 * @property {string} [l1_detail]
 * @property {string} [l3_detail]
 * @property {string} createdat
 */

/**
 * @typedef ShipmentHistoryResponse
 * @property {HistoryDict[]} [activity_history]
 */

/**
 * @typedef ErrorDetail
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef SmsDataPayload
 * @property {string} payment_mode
 * @property {string} country_code
 * @property {string} message
 * @property {string} order_id
 * @property {string} customer_name
 * @property {string} brand_name
 * @property {number} shipment_id
 * @property {number} amount_paid
 * @property {number} phone_number
 */

/**
 * @typedef SendSmsPayload
 * @property {string} slug
 * @property {SmsDataPayload} [data]
 * @property {number} bag_id
 */

/**
 * @typedef Meta
 * @property {string} [state_manager_used]
 * @property {number} [kafka_emission_status]
 */

/**
 * @typedef ShipmentDetail
 * @property {number[]} [bag_list]
 * @property {string} [shipment_id]
 * @property {Meta} meta
 * @property {number} id
 * @property {string} [status]
 * @property {string} [remarks]
 */

/**
 * @typedef OrderDetails
 * @property {string} [fynd_order_id]
 * @property {string} [created_at]
 */

/**
 * @typedef OrderStatusData
 * @property {string[]} [errors]
 * @property {ShipmentDetail[]} [shipment_details]
 * @property {OrderDetails} order_details
 */

/**
 * @typedef OrderStatusResult
 * @property {OrderStatusData[]} [result]
 * @property {string} success
 */

/**
 * @typedef ManualAssignDPToShipment
 * @property {number} dp_id
 * @property {string} qc_required
 * @property {string[]} [shipment_ids]
 * @property {string} order_type
 */

/**
 * @typedef ManualAssignDPToShipmentResponse
 * @property {string[]} [errors]
 * @property {string} success
 */

/**
 * @typedef BillingInfo
 * @property {string} [title]
 * @property {string} [address2]
 * @property {string} [country_code]
 * @property {string} [alternate_mobile_number]
 * @property {string} [external_customer_code]
 * @property {string} primary_mobile_number
 * @property {string} pincode
 * @property {string} [house_no]
 * @property {string} state
 * @property {string} [floor_no]
 * @property {string} [middle_name]
 * @property {string} [customer_code]
 * @property {string} [alternate_email]
 * @property {string} country
 * @property {string} primary_email
 * @property {string} address1
 * @property {string} city
 * @property {string} [last_name]
 * @property {string} [gender]
 * @property {string} first_name
 * @property {string} [state_code]
 */

/**
 * @typedef PaymentMethod
 * @property {Object} [meta]
 * @property {Object} [transaction_data]
 * @property {string} mode
 * @property {string} name
 * @property {string} collect_by
 * @property {string} refund_by
 * @property {number} amount
 */

/**
 * @typedef PaymentInfo
 * @property {PaymentMethod[]} [payment_methods]
 * @property {string} primary_mode
 */

/**
 * @typedef ProcessingDates
 * @property {Object} [dp_pickup_slot]
 * @property {string} [dispatch_by_date]
 * @property {Object} [customer_pickup_slot]
 * @property {string} [dispatch_after_date]
 * @property {string} [pack_by_date]
 * @property {string} [confirm_by_date]
 */

/**
 * @typedef Tax
 * @property {number} rate
 * @property {Object[]} [breakup]
 * @property {Object} amount
 * @property {string} name
 */

/**
 * @typedef Charge
 * @property {string} type
 * @property {Tax} [tax]
 * @property {string} [code]
 * @property {string} name
 * @property {Object} amount
 */

/**
 * @typedef LineItem
 * @property {Object} [meta]
 * @property {number} [quantity]
 * @property {string} [external_line_id]
 * @property {Charge[]} [charges]
 * @property {string} [custom_messasge]
 * @property {string} seller_identifier
 */

/**
 * @typedef Shipment
 * @property {ProcessingDates} [processing_dates]
 * @property {number} [priority]
 * @property {string} [external_shipment_id]
 * @property {Object} [meta]
 * @property {LineItem[]} line_items
 * @property {number} location_id
 */

/**
 * @typedef ShippingInfo
 * @property {string} [title]
 * @property {string} [address2]
 * @property {string} [country_code]
 * @property {string} [alternate_mobile_number]
 * @property {string} [external_customer_code]
 * @property {string} primary_mobile_number
 * @property {string} pincode
 * @property {string} [house_no]
 * @property {string} state
 * @property {string} [floor_no]
 * @property {string} [middle_name]
 * @property {string} [shipping_type]
 * @property {Object} [geo_location]
 * @property {string} [customer_code]
 * @property {string} [address_type]
 * @property {string} country
 * @property {string} [alternate_email]
 * @property {string} primary_email
 * @property {Object[]} [slot]
 * @property {string} [landmark]
 * @property {string} address1
 * @property {string} city
 * @property {string} [last_name]
 * @property {string} [gender]
 * @property {string} first_name
 * @property {string} [state_code]
 */

/**
 * @typedef TaxInfo
 * @property {string} [b2b_gstin_number]
 * @property {string} [gstin]
 */

/**
 * @typedef CreateOrderAPI
 * @property {Object} [currency_info]
 * @property {BillingInfo} billing_info
 * @property {PaymentInfo} payment_info
 * @property {Object} [meta]
 * @property {Shipment[]} shipments
 * @property {ShippingInfo} shipping_info
 * @property {Charge[]} [charges]
 * @property {string} [external_order_id]
 * @property {TaxInfo} [tax_info]
 * @property {string} [external_creation_date]
 */

/**
 * @typedef CreateOrderErrorReponse
 * @property {string} [request_id]
 * @property {string} [meta]
 * @property {string} message
 * @property {number} status
 * @property {string} [code]
 * @property {string} [stack_trace]
 * @property {Object} [info]
 * @property {string} [exception]
 */

/**
 * @typedef PaymentMethods
 * @property {string} [collect_by]
 * @property {string} [refund_by]
 * @property {string} [mode]
 */

/**
 * @typedef CreateChannelPaymentInfo
 * @property {string} [source]
 * @property {PaymentMethods[]} [payment_methods]
 * @property {string} [mode_of_payment]
 */

/**
 * @typedef DpConfiguration
 * @property {string} [shipping_by]
 */

/**
 * @typedef CreateChannelConfig
 * @property {boolean} [location_reassignment]
 * @property {CreateChannelPaymentInfo} [payment_info]
 * @property {DpConfiguration} [dp_configuration]
 * @property {Object} [logo_url]
 * @property {string} [shipment_assignment]
 * @property {string[]} [lock_states]
 */

/**
 * @typedef CreateChannelConfigData
 * @property {CreateChannelConfig} [config_data]
 */

/**
 * @typedef CreateChannelConfigResponse
 * @property {boolean} [acknowledged]
 * @property {boolean} [is_upserted]
 * @property {boolean} [is_inserted]
 */

/**
 * @typedef CreateChannelConifgErrorResponse
 * @property {string} [error]
 */

/**
 * @typedef UploadConsent
 * @property {string} consent_url
 * @property {string} manifest_id
 */

/**
 * @typedef PlatformOrderUpdate
 * @property {string} order_id
 */

/**
 * @typedef ResponseDetail
 * @property {string[]} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef FyndOrderIdList
 * @property {string[]} [fynd_order_id]
 */

/**
 * @typedef OrderStatus
 * @property {number} mobile
 * @property {string} start_date
 * @property {string} end_date
 * @property {FyndOrderIdList[]} [order_details]
 */

/**
 * @typedef GetSearchWordsData
 * @property {Object} [_custom_json]
 * @property {string} [uid]
 * @property {Object} [result]
 * @property {string} [app_id]
 * @property {string[]} [words]
 * @property {boolean} [is_active]
 */

/**
 * @typedef GetSearchWordsDetailResponse
 * @property {GetSearchWordsData} [items]
 * @property {Page} [page]
 */

/**
 * @typedef DeleteResponse
 * @property {string} [message]
 */

/**
 * @typedef SearchKeywordResult
 * @property {string} sort_on
 * @property {Object} query
 */

/**
 * @typedef CreateSearchKeyword
 * @property {Object} [_custom_json]
 * @property {SearchKeywordResult} result
 * @property {string} [app_id]
 * @property {string[]} [words]
 * @property {boolean} [is_active]
 */

/**
 * @typedef GetSearchWordsResponse
 * @property {GetSearchWordsData[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef GetAutocompleteWordsData
 * @property {Object} [_custom_json]
 * @property {string} [uid]
 * @property {Object[]} [results]
 * @property {string} [app_id]
 * @property {string[]} [words]
 */

/**
 * @typedef GetAutocompleteWordsResponse
 * @property {GetAutocompleteWordsData[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef AutocompletePageAction
 * @property {string} [url]
 * @property {Object} [params]
 * @property {Object} [query]
 * @property {string} [type]
 */

/**
 * @typedef AutocompleteAction
 * @property {AutocompletePageAction} [page]
 * @property {string} [type]
 */

/**
 * @typedef Media
 * @property {string} [url]
 * @property {string} [aspect_ratio]
 * @property {string} [type]
 */

/**
 * @typedef AutocompleteResult
 * @property {AutocompleteAction} [action]
 * @property {Object} [_custom_json]
 * @property {Media} [logo]
 * @property {string} [display]
 */

/**
 * @typedef CreateAutocompleteKeyword
 * @property {Object} [_custom_json]
 * @property {AutocompleteResult[]} [results]
 * @property {string} [app_id]
 * @property {string[]} [words]
 * @property {boolean} [is_active]
 */

/**
 * @typedef CreateAutocompleteWordsResponse
 * @property {string[]} [words]
 * @property {string} [app_id]
 * @property {Object} [_custom_json]
 * @property {Object[]} [results]
 */

/**
 * @typedef ProductBundleItem
 * @property {number} min_quantity
 * @property {boolean} [auto_select]
 * @property {number} max_quantity
 * @property {boolean} [auto_add_to_cart]
 * @property {boolean} [allow_remove]
 * @property {number} product_uid
 */

/**
 * @typedef GetProductBundleCreateResponse
 * @property {Object} [modified_by]
 * @property {string} slug
 * @property {string} name
 * @property {number} [company_id]
 * @property {string} [created_on]
 * @property {Object} [meta]
 * @property {string} choice
 * @property {boolean} [same_store_assignment]
 * @property {ProductBundleItem[]} products
 * @property {string[]} [page_visibility]
 * @property {string} [logo]
 * @property {Object} [created_by]
 * @property {boolean} is_active
 * @property {string} [modified_on]
 * @property {string} [id]
 */

/**
 * @typedef GetProductBundleListingResponse
 * @property {GetProductBundleCreateResponse[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef ProductBundleRequest
 * @property {Object} [modified_by]
 * @property {string} slug
 * @property {string} name
 * @property {number} [company_id]
 * @property {string} [created_on]
 * @property {Object} [meta]
 * @property {string} choice
 * @property {boolean} [same_store_assignment]
 * @property {ProductBundleItem[]} products
 * @property {string[]} [page_visibility]
 * @property {string} [logo]
 * @property {Object} [created_by]
 * @property {boolean} is_active
 * @property {string} [modified_on]
 */

/**
 * @typedef Size
 * @property {number} [quantity]
 * @property {boolean} [is_available]
 * @property {string} [value]
 * @property {string} [display]
 */

/**
 * @typedef LimitedProductData
 * @property {number} [quantity]
 * @property {string} [short_description]
 * @property {string} [slug]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {Object} [attributes]
 * @property {string[]} [images]
 * @property {string[]} [sizes]
 * @property {string} [item_code]
 * @property {string} [country_of_origin]
 * @property {Object} [price]
 * @property {Object} [identifier]
 */

/**
 * @typedef Price
 * @property {number} [min_marked]
 * @property {string} [currency]
 * @property {number} [max_marked]
 * @property {number} [min_effective]
 * @property {number} [max_effective]
 */

/**
 * @typedef GetProducts
 * @property {number} [min_quantity]
 * @property {boolean} [auto_select]
 * @property {number} [max_quantity]
 * @property {boolean} [auto_add_to_cart]
 * @property {boolean} [allow_remove]
 * @property {Size[]} [sizes]
 * @property {LimitedProductData} [product_details]
 * @property {number} [product_uid]
 * @property {Price} [price]
 */

/**
 * @typedef GetProductBundleResponse
 * @property {string} [slug]
 * @property {string} [name]
 * @property {number} [company_id]
 * @property {GetProducts[]} [products]
 * @property {Object} [meta]
 * @property {string} [choice]
 * @property {boolean} [same_store_assignment]
 * @property {string[]} [page_visibility]
 * @property {string} [logo]
 * @property {boolean} [is_active]
 */

/**
 * @typedef ProductBundleUpdateRequest
 * @property {Object} [modified_by]
 * @property {string} slug
 * @property {string} name
 * @property {number} [company_id]
 * @property {Object} [meta]
 * @property {string} choice
 * @property {boolean} [same_store_assignment]
 * @property {ProductBundleItem[]} products
 * @property {string[]} [page_visibility]
 * @property {string} [logo]
 * @property {boolean} is_active
 * @property {string} [modified_on]
 */

/**
 * @typedef ListSizeGuide
 * @property {Object[]} [items]
 * @property {Object} [page]
 */

/**
 * @typedef Guide
 * @property {Meta} [meta]
 */

/**
 * @typedef ValidateSizeGuide
 * @property {Object} [modified_by]
 * @property {string} [tag]
 * @property {string} name
 * @property {string} [subtitle]
 * @property {number} [company_id]
 * @property {Guide} [guide]
 * @property {boolean} [active]
 * @property {string} [created_on]
 * @property {string} [image]
 * @property {Object} [created_by]
 * @property {string} [id]
 * @property {string} [modified_on]
 * @property {number} [brand_id]
 * @property {string} [description]
 * @property {string} title
 */

/**
 * @typedef SizeGuideResponse
 * @property {Object} [modified_by]
 * @property {string} [created_on]
 * @property {string} [name]
 * @property {number} [company_id]
 * @property {Object} [guide]
 * @property {string} [tag]
 * @property {boolean} [active]
 * @property {string} [subtitle]
 * @property {Object} [created_by]
 * @property {string} [id]
 * @property {string} [modified_on]
 * @property {number} [brand_id]
 * @property {string} [title]
 */

/**
 * @typedef MOQData
 * @property {number} [minimum]
 * @property {number} [maximum]
 * @property {number} [increment_unit]
 */

/**
 * @typedef SEOData
 * @property {Object} [description]
 * @property {Object} [title]
 */

/**
 * @typedef OwnerAppItemResponse
 * @property {boolean} [is_gift]
 * @property {boolean} [is_cod]
 * @property {MOQData} [moq]
 * @property {Object} [alt_text]
 * @property {SEOData} [seo]
 */

/**
 * @typedef ApplicationItemMOQ
 * @property {number} [minimum]
 * @property {number} [maximum]
 * @property {number} [increment_unit]
 */

/**
 * @typedef MetaFields
 * @property {Object} value
 * @property {Object} key
 */

/**
 * @typedef ApplicationItemSEO
 * @property {Object} [description]
 * @property {Object} [title]
 */

/**
 * @typedef ApplicationItemMeta
 * @property {Object} [_custom_json]
 * @property {boolean} [is_gift]
 * @property {boolean} [is_cod]
 * @property {ApplicationItemMOQ} [moq]
 * @property {Object} [alt_text]
 * @property {MetaFields[]} [_custom_meta]
 * @property {ApplicationItemSEO} [seo]
 */

/**
 * @typedef SuccessResponse1
 * @property {boolean} [success]
 * @property {number} [uid]
 */

/**
 * @typedef GetConfigMetadataResponse
 * @property {Object[]} [values]
 * @property {Object[]} [condition]
 * @property {Object[]} data
 */

/**
 * @typedef PageResponseType
 * @property {number} total_count
 * @property {number} current
 * @property {boolean} has_next
 * @property {number} next
 */

/**
 * @typedef GetConfigResponse
 * @property {PageResponseType} page
 * @property {Object[]} data
 */

/**
 * @typedef ConfigErrorResponse
 * @property {string} message
 */

/**
 * @typedef AttributeDetailsGroup
 * @property {string} [slug]
 * @property {string} [unit]
 * @property {string} name
 * @property {string} [logo]
 * @property {boolean} is_active
 * @property {string} display_type
 * @property {string} [key]
 * @property {number} priority
 */

/**
 * @typedef AppConfigurationDetail
 * @property {string[]} [template_slugs]
 * @property {string} slug
 * @property {string} [name]
 * @property {boolean} is_default
 * @property {AttributeDetailsGroup[]} [attributes]
 * @property {string} app_id
 * @property {string} [logo]
 * @property {boolean} is_active
 * @property {number} priority
 */

/**
 * @typedef ConfigSuccessResponse
 * @property {string} message
 */

/**
 * @typedef AppConfigurationsSort
 * @property {string} [name]
 * @property {boolean} is_default
 * @property {string} app_id
 * @property {string} [logo]
 * @property {boolean} is_active
 * @property {string} key
 * @property {number} priority
 * @property {string} default_key
 */

/**
 * @typedef AllowSingleRequest
 * @property {boolean} allow_single
 */

/**
 * @typedef DefaultKeyRequest
 * @property {string} default_key
 */

/**
 * @typedef MetaDataListingFilterMetaResponse
 * @property {Object[]} [units]
 * @property {string} [display]
 * @property {string[]} [filter_types]
 * @property {string} [key]
 */

/**
 * @typedef MetaDataListingFilterResponse
 * @property {MetaDataListingFilterMetaResponse[]} [data]
 */

/**
 * @typedef MetaDataListingSortMetaResponse
 * @property {string} [display]
 * @property {string} [key]
 */

/**
 * @typedef MetaDataListingSortResponse
 * @property {MetaDataListingSortMetaResponse[]} [data]
 */

/**
 * @typedef MetaDataListingResponse
 * @property {MetaDataListingFilterResponse} filter
 * @property {MetaDataListingSortResponse} sort
 */

/**
 * @typedef GetCatalogConfigurationDetailsProduct
 * @property {Object} [variant]
 * @property {Object} [similar]
 * @property {Object} [detail]
 * @property {Object} [compare]
 */

/**
 * @typedef GetCatalogConfigurationMetaData
 * @property {MetaDataListingResponse} [listing]
 * @property {GetCatalogConfigurationDetailsProduct} [product]
 */

/**
 * @typedef ConfigurationBucketPoints
 * @property {number} [end]
 * @property {number} [start]
 * @property {string} [display]
 */

/**
 * @typedef ConfigurationListingFilterValue
 * @property {ConfigurationBucketPoints[]} [bucket_points]
 * @property {Object[]} [map_values]
 * @property {string} [sort]
 * @property {string} [condition]
 * @property {string} [value]
 * @property {Object} [map]
 */

/**
 * @typedef ConfigurationListingFilterConfig
 * @property {string} [name]
 * @property {string} [logo]
 * @property {string} type
 * @property {ConfigurationListingFilterValue} [value_config]
 * @property {boolean} is_active
 * @property {string} [display_name]
 * @property {string} key
 * @property {number} priority
 */

/**
 * @typedef ConfigurationListingFilter
 * @property {boolean} allow_single
 * @property {ConfigurationListingFilterConfig[]} [attribute_config]
 */

/**
 * @typedef ConfigurationListingSortConfig
 * @property {string} [name]
 * @property {string} [logo]
 * @property {boolean} is_active
 * @property {string} key
 * @property {number} priority
 */

/**
 * @typedef ConfigurationListingSort
 * @property {ConfigurationListingSortConfig[]} [config]
 * @property {string} default_key
 */

/**
 * @typedef ConfigurationListing
 * @property {ConfigurationListingFilter} filter
 * @property {ConfigurationListingSort} sort
 */

/**
 * @typedef ProductSize
 * @property {number} max
 * @property {number} min
 */

/**
 * @typedef ConfigurationProductVariantConfig
 * @property {string} name
 * @property {ProductSize} size
 * @property {string} [logo]
 * @property {boolean} is_active
 * @property {string} display_type
 * @property {string} key
 * @property {number} priority
 */

/**
 * @typedef ConfigurationProductVariant
 * @property {ConfigurationProductVariantConfig[]} [config]
 */

/**
 * @typedef ConfigurationProductConfig
 * @property {string} [subtitle]
 * @property {ProductSize} [size]
 * @property {string} [logo]
 * @property {boolean} is_active
 * @property {string} key
 * @property {number} priority
 * @property {string} [title]
 */

/**
 * @typedef ConfigurationProductSimilar
 * @property {ConfigurationProductConfig[]} [config]
 */

/**
 * @typedef ConfigurationProduct
 * @property {ConfigurationProductVariant} variant
 * @property {ConfigurationProductSimilar} similar
 */

/**
 * @typedef AppCatalogConfiguration
 * @property {Object} [modified_by]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {string} app_id
 * @property {Object} [created_by]
 * @property {string} [type]
 * @property {ConfigurationListing} [listing]
 * @property {string} config_type
 * @property {ConfigurationProduct} [product]
 * @property {string} [config_id]
 * @property {string} [id]
 */

/**
 * @typedef GetAppCatalogConfiguration
 * @property {AppCatalogConfiguration} [data]
 * @property {boolean} [is_default]
 */

/**
 * @typedef AppConfiguration
 * @property {Object} [modified_by]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {string} app_id
 * @property {Object} [created_by]
 * @property {string} [type]
 * @property {ConfigurationListing} [listing]
 * @property {string} config_type
 * @property {ConfigurationProduct} [product]
 * @property {string} [config_id]
 */

/**
 * @typedef GetCatalogConfigurationDetailsSchemaListing
 * @property {Object} [filter]
 * @property {Object} [sort]
 */

/**
 * @typedef EntityConfiguration
 * @property {string} app_id
 * @property {GetCatalogConfigurationDetailsSchemaListing} [listing]
 * @property {string} config_type
 * @property {GetCatalogConfigurationDetailsProduct} [product]
 * @property {string} [config_id]
 * @property {string} [id]
 */

/**
 * @typedef GetAppCatalogEntityConfiguration
 * @property {EntityConfiguration} [data]
 * @property {boolean} [is_default]
 */

/**
 * @typedef ProductSortOn
 * @property {boolean} [is_selected]
 * @property {string} [name]
 * @property {string} [value]
 */

/**
 * @typedef ProductFiltersValue
 * @property {Object} value
 * @property {string} [display_format]
 * @property {string} [currency_code]
 * @property {number} [max]
 * @property {string} [currency_symbol]
 * @property {string} [query_format]
 * @property {boolean} is_selected
 * @property {number} [selected_max]
 * @property {number} [count]
 * @property {number} [selected_min]
 * @property {number} [min]
 * @property {string} display
 */

/**
 * @typedef ProductFiltersKey
 * @property {string} name
 * @property {string[]} [operators]
 * @property {string} [logo]
 * @property {string} [kind]
 * @property {string} display
 */

/**
 * @typedef ProductFilters
 * @property {ProductFiltersValue[]} values
 * @property {ProductFiltersKey} key
 */

/**
 * @typedef GetCollectionQueryOptionResponse
 * @property {ProductSortOn[]} [sort_on]
 * @property {Object} operators
 * @property {ProductFilters[]} [filters]
 */

/**
 * @typedef CollectionListingFilterTag
 * @property {boolean} [is_selected]
 * @property {string} [name]
 * @property {string} [display]
 */

/**
 * @typedef CollectionListingFilterType
 * @property {boolean} [is_selected]
 * @property {string} [name]
 * @property {string} [display]
 */

/**
 * @typedef CollectionListingFilter
 * @property {CollectionListingFilterTag[]} [tags]
 * @property {CollectionListingFilterType[]} [type]
 */

/**
 * @typedef Media1
 * @property {string} [type]
 * @property {string} url
 * @property {Object} [meta]
 */

/**
 * @typedef BannerImage
 * @property {string} [url]
 * @property {string} [aspect_ratio]
 * @property {string} [type]
 */

/**
 * @typedef ImageUrls
 * @property {BannerImage} [portrait]
 * @property {BannerImage} [landscape]
 */

/**
 * @typedef CollectionQuery
 * @property {string} attribute
 * @property {string} op
 * @property {Object[]} value
 */

/**
 * @typedef GetCollectionDetailNest
 * @property {Object} [meta]
 * @property {string} [app_id]
 * @property {Object} [badge]
 * @property {string} [type]
 * @property {string} [uid]
 * @property {Media1} [logo]
 * @property {Action} [action]
 * @property {number} [priority]
 * @property {ImageUrls} [banners]
 * @property {string[]} [visible_facets_keys]
 * @property {string} [slug]
 * @property {string[]} [tag]
 * @property {boolean} [allow_sort]
 * @property {boolean} [allow_facets]
 * @property {string} [description]
 * @property {string} [name]
 * @property {Object} [cron]
 * @property {boolean} [is_active]
 * @property {CollectionQuery[]} [query]
 * @property {Object} [_schedule]
 */

/**
 * @typedef GetCollectionListingResponse
 * @property {CollectionListingFilter} [filters]
 * @property {GetCollectionDetailNest[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef UserInfo
 * @property {string} [email]
 * @property {string} [username]
 * @property {string} [uid]
 * @property {string} [user_id]
 */

/**
 * @typedef CollectionBadge
 * @property {string} [color]
 * @property {string} [text]
 */

/**
 * @typedef CollectionImage
 * @property {string} url
 * @property {string} aspect_ratio
 */

/**
 * @typedef CollectionBanner
 * @property {CollectionImage} portrait
 * @property {CollectionImage} landscape
 */

/**
 * @typedef SeoDetail
 * @property {string} [description]
 * @property {string} [title]
 */

/**
 * @typedef CollectionSchedule
 * @property {string} [cron]
 * @property {number} [duration]
 * @property {string} [end]
 * @property {string} [start]
 * @property {NextSchedule[]} [next_schedule]
 */

/**
 * @typedef CreateCollection
 * @property {Object} [meta]
 * @property {string} app_id
 * @property {UserInfo} [created_by]
 * @property {CollectionBadge} [badge]
 * @property {string} type
 * @property {boolean} [published]
 * @property {string} [sort_on]
 * @property {boolean} [is_visible]
 * @property {CollectionImage} logo
 * @property {CollectionBanner} banners
 * @property {number} [priority]
 * @property {string[]} [visible_facets_keys]
 * @property {string} slug
 * @property {string[]} [tags]
 * @property {boolean} [allow_sort]
 * @property {SeoDetail} [seo]
 * @property {boolean} [allow_facets]
 * @property {string} [description]
 * @property {UserInfo} [modified_by]
 * @property {Object} [_custom_json]
 * @property {string} name
 * @property {boolean} [is_active]
 * @property {CollectionQuery[]} [query]
 * @property {CollectionSchedule} [_schedule]
 * @property {Object} [_locale_language]
 */

/**
 * @typedef CollectionCreateResponse
 * @property {Object} [meta]
 * @property {string} [app_id]
 * @property {Object} [badge]
 * @property {string} [type]
 * @property {string} [sort_on]
 * @property {BannerImage} [logo]
 * @property {number} [priority]
 * @property {ImageUrls} [banners]
 * @property {string[]} [visible_facets_keys]
 * @property {string} [slug]
 * @property {string[]} [tag]
 * @property {boolean} [allow_sort]
 * @property {boolean} [allow_facets]
 * @property {string} [description]
 * @property {string} [name]
 * @property {Object} [cron]
 * @property {boolean} [is_active]
 * @property {CollectionQuery[]} [query]
 * @property {Object} [_schedule]
 */

/**
 * @typedef CollectionDetailResponse
 * @property {string} [slug]
 * @property {string} [name]
 * @property {string[]} [tag]
 * @property {Object} [_schedule]
 * @property {Object} [meta]
 * @property {string} [app_id]
 * @property {Media1} [logo]
 * @property {Object} [cron]
 * @property {boolean} [allow_sort]
 * @property {string} [type]
 * @property {Object} [badge]
 * @property {boolean} [is_active]
 * @property {CollectionQuery[]} [query]
 * @property {number} [priority]
 * @property {ImageUrls} [banners]
 * @property {boolean} [allow_facets]
 * @property {string[]} [visible_facets_keys]
 * @property {string} [description]
 */

/**
 * @typedef UpdateCollection
 * @property {Object} [meta]
 * @property {CollectionBadge} [badge]
 * @property {boolean} [published]
 * @property {string} [type]
 * @property {string} [sort_on]
 * @property {boolean} [is_visible]
 * @property {CollectionImage} [logo]
 * @property {CollectionBanner} [banners]
 * @property {number} [priority]
 * @property {string[]} [visible_facets_keys]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {boolean} [allow_sort]
 * @property {SeoDetail} [seo]
 * @property {boolean} [allow_facets]
 * @property {string} [description]
 * @property {UserInfo} [modified_by]
 * @property {Object} [_custom_json]
 * @property {string} [name]
 * @property {boolean} [is_active]
 * @property {CollectionQuery[]} [query]
 * @property {CollectionSchedule} [_schedule]
 * @property {Object} [_locale_language]
 */

/**
 * @typedef ProductBrand
 * @property {Action} [action]
 * @property {Media1} [logo]
 * @property {string} [name]
 * @property {number} [uid]
 */

/**
 * @typedef ProductDetailAttribute
 * @property {string} [type]
 * @property {string} [value]
 * @property {string} [key]
 */

/**
 * @typedef ProductDetailGroupedAttribute
 * @property {ProductDetailAttribute[]} [details]
 * @property {string} [title]
 */

/**
 * @typedef Price1
 * @property {number} [max]
 * @property {string} [currency_code]
 * @property {number} [min]
 * @property {string} [currency_symbol]
 */

/**
 * @typedef ProductListingPrice
 * @property {Price1} [effective]
 * @property {Price1} [marked]
 */

/**
 * @typedef ProductListingDetail
 * @property {string} [discount]
 * @property {string} [item_type]
 * @property {number} [rating]
 * @property {string} [type]
 * @property {ProductBrand} [brand]
 * @property {string[]} [similars]
 * @property {boolean} [sellable]
 * @property {number} [uid]
 * @property {boolean} [has_variant]
 * @property {string[]} [tryouts]
 * @property {string} [product_online_date]
 * @property {Media1[]} [medias]
 * @property {string[]} [highlights]
 * @property {string} slug
 * @property {Object} [attributes]
 * @property {number} [rating_count]
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes]
 * @property {Object} [teaser_tag]
 * @property {string} [item_code]
 * @property {string} [color]
 * @property {string} [description]
 * @property {string} [short_description]
 * @property {string} [name]
 * @property {Object} [promo_meta]
 * @property {string} [image_nature]
 * @property {ProductListingPrice} [price]
 */

/**
 * @typedef GetCollectionItemsResponse
 * @property {ProductListingDetail[]} [items]
 * @property {ProductFilters[]} [filters]
 * @property {Page} [page]
 * @property {ProductSortOn[]} [sort_on]
 */

/**
 * @typedef ItemQueryForUserCollection
 * @property {string} [action]
 * @property {number} [item_id]
 */

/**
 * @typedef CollectionItemRequest
 * @property {ItemQueryForUserCollection[]} [item]
 * @property {CollectionQuery[]} [query]
 * @property {string} [type]
 */

/**
 * @typedef UpdatedResponse
 * @property {string} [message]
 * @property {number[]} [items_not_updated]
 */

/**
 * @typedef CatalogInsightItem
 * @property {number} [count]
 * @property {number} [out_of_stock_count]
 * @property {number} [sellable_count]
 */

/**
 * @typedef CatalogInsightBrand
 * @property {string} [name]
 * @property {number} [total_articles]
 * @property {number} [available_sizes]
 * @property {number} [available_articles]
 * @property {number} [total_sizes]
 * @property {number} [article_freshness]
 */

/**
 * @typedef CatalogInsightResponse
 * @property {CatalogInsightItem} [item]
 * @property {CatalogInsightBrand} [brand_distribution]
 */

/**
 * @typedef CrossSellingData
 * @property {number} [articles]
 * @property {number} [products]
 */

/**
 * @typedef CrossSellingResponse
 * @property {CatalogInsightBrand} [brand_distribution]
 * @property {CrossSellingData} [data]
 */

/**
 * @typedef OptInPostRequest
 * @property {string} opt_level
 * @property {number[]} [store_ids]
 * @property {boolean} [enabled]
 * @property {number} [company_id]
 * @property {string} [platform]
 * @property {number[]} [brand_ids]
 */

/**
 * @typedef CompanyOptIn
 * @property {string} opt_level
 * @property {number[]} store_ids
 * @property {boolean} enabled
 * @property {number} company_id
 * @property {number} created_on
 * @property {string} platform
 * @property {Object} [modified_by]
 * @property {Object} [created_by]
 * @property {number[]} brand_ids
 * @property {number} modified_on
 */

/**
 * @typedef GetOptInPlatform
 * @property {CompanyOptIn[]} items
 * @property {Page} page
 */

/**
 * @typedef OptinCompanyDetail
 * @property {string} [company_type]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {string} [business_type]
 */

/**
 * @typedef CompanyBrandDetail
 * @property {number} [brand_id]
 * @property {number} [company_id]
 * @property {number} [total_article]
 * @property {string} [brand_name]
 */

/**
 * @typedef OptinCompanyBrandDetailsView
 * @property {CompanyBrandDetail[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef OptinCompanyMetrics
 * @property {number} [store]
 * @property {string} [company]
 * @property {number} [brand]
 */

/**
 * @typedef StoreDetail
 * @property {string} [store_type]
 * @property {string} [created_on]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {number} [company_id]
 * @property {Object} [address]
 * @property {string} [display_name]
 * @property {string} [store_code]
 * @property {Object} [manager]
 * @property {Object[]} [documents]
 * @property {Object[]} [additional_contacts]
 * @property {string} [modified_on]
 * @property {Object} [timing]
 */

/**
 * @typedef OptinStoreDetails
 * @property {StoreDetail[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef AttributeMasterFilter
 * @property {boolean} indexing
 * @property {number} [priority]
 * @property {string[]} [depends_on]
 */

/**
 * @typedef AttributeMasterMandatoryDetails
 * @property {string[]} [l3_keys]
 */

/**
 * @typedef AttributeMasterMeta
 * @property {AttributeMasterMandatoryDetails} mandatory_details
 * @property {boolean} [enriched]
 */

/**
 * @typedef AttributeMasterDetails
 * @property {string} display_type
 */

/**
 * @typedef AttributeSchemaRange
 * @property {number} [max]
 * @property {number} [min]
 */

/**
 * @typedef AttributeMaster
 * @property {boolean} [mandatory]
 * @property {string} type
 * @property {AttributeSchemaRange} [range]
 * @property {string[]} [allowed_values]
 * @property {string} [format]
 * @property {boolean} [multi]
 */

/**
 * @typedef GenderDetail
 * @property {string} [slug]
 * @property {string} [name]
 * @property {AttributeMasterFilter} [filters]
 * @property {boolean} [enabled_for_end_consumer]
 * @property {AttributeMasterMeta} [meta]
 * @property {AttributeMasterDetails} [details]
 * @property {string} [logo]
 * @property {string} [id]
 * @property {boolean} [is_nested]
 * @property {string[]} [departments]
 * @property {AttributeMaster} [schema]
 * @property {string} [description]
 */

/**
 * @typedef ProdcutTemplateCategoriesResponse
 * @property {Object[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef PTErrorResponse
 * @property {string} [message]
 * @property {Object} [errors]
 * @property {Object} [meta]
 * @property {number} [status]
 * @property {string} [code]
 */

/**
 * @typedef UserSerializer
 * @property {string} [uid]
 * @property {string} [contact]
 * @property {string} [user_id]
 * @property {string} [username]
 * @property {string} [_id]
 */

/**
 * @typedef GetDepartment
 * @property {UserSerializer} [modified_by]
 * @property {string} [slug]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {string[]} [synonyms]
 * @property {string} [created_on]
 * @property {number} [page_no]
 * @property {number} [page_size]
 * @property {string} [search]
 * @property {string} [item_type]
 * @property {string} [logo]
 * @property {UserSerializer} [created_by]
 * @property {boolean} [is_active]
 * @property {string} [modified_on]
 * @property {number} [priority_order]
 */

/**
 * @typedef DepartmentsResponse
 * @property {GetDepartment[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef DepartmentErrorResponse
 * @property {string} [message]
 * @property {Object} [errors]
 * @property {Object} [meta]
 * @property {number} [status]
 * @property {string} [code]
 */

/**
 * @typedef DepartmentCreateUpdate
 * @property {Object} [platforms]
 * @property {string[]} [synonyms]
 * @property {string} name
 * @property {number} [uid]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {Object} [_custom_json]
 * @property {string} logo
 * @property {boolean} [is_active]
 * @property {string} [_cls]
 * @property {number} priority_order
 */

/**
 * @typedef DepartmentCreateResponse
 * @property {string} message
 * @property {number} uid
 */

/**
 * @typedef DepartmentCreateErrorResponse
 * @property {string} [error]
 */

/**
 * @typedef UserDetail
 * @property {string} user_id
 * @property {string} username
 * @property {string} [contact]
 * @property {boolean} [super_user]
 */

/**
 * @typedef DepartmentModel
 * @property {UserDetail} [modified_by]
 * @property {string} created_on
 * @property {Object} [slug]
 * @property {number} [uid]
 * @property {string} modified_on
 * @property {Object} name
 * @property {Object[]} [synonyms]
 * @property {Object} [_custom_json]
 * @property {string} logo
 * @property {UserDetail} [created_by]
 * @property {boolean} [is_active]
 * @property {UserDetail} [verified_by]
 * @property {Object} [_cls]
 * @property {Object} [_id]
 * @property {number} priority_order
 * @property {string} [verified_on]
 */

/**
 * @typedef ProductTemplate
 * @property {Object} [modified_by]
 * @property {string} slug
 * @property {string} [name]
 * @property {string} [tag]
 * @property {boolean} [is_archived]
 * @property {string[]} [attributes]
 * @property {string} [created_on]
 * @property {string} [logo]
 * @property {Object} [created_by]
 * @property {string[]} [categories]
 * @property {boolean} is_expirable
 * @property {boolean} [is_active]
 * @property {string[]} [departments]
 * @property {boolean} is_physical
 * @property {string} [modified_on]
 * @property {string} [description]
 */

/**
 * @typedef TemplatesResponse
 * @property {ProductTemplate} [items]
 * @property {Page} [page]
 */

/**
 * @typedef TemplateDetails
 * @property {string} slug
 * @property {string} [name]
 * @property {string} [tag]
 * @property {boolean} [is_archived]
 * @property {string[]} [attributes]
 * @property {string} [logo]
 * @property {string} [id]
 * @property {string[]} [categories]
 * @property {boolean} is_expirable
 * @property {boolean} [is_active]
 * @property {string[]} [departments]
 * @property {boolean} is_physical
 * @property {string} [description]
 */

/**
 * @typedef Properties
 * @property {Object} [product_group_tag]
 * @property {Object} [category_slug]
 * @property {Object} [item_type]
 * @property {Object} [product_publish]
 * @property {Object} [return_config]
 * @property {Object} [trader_type]
 * @property {Object} [command]
 * @property {Object} [currency]
 * @property {Object} [hsn_code]
 * @property {Object} [highlights]
 * @property {Object} [slug]
 * @property {Object} [tags]
 * @property {Object} [multi_size]
 * @property {Object} [is_dependent]
 * @property {Object} [teaser_tag]
 * @property {Object} [item_code]
 * @property {Object} [brand_uid]
 * @property {Object} [description]
 * @property {Object} [short_description]
 * @property {Object} [media]
 * @property {Object} [name]
 * @property {Object} [trader]
 * @property {Object} [is_active]
 * @property {Object} [country_of_origin]
 * @property {Object} [no_of_boxes]
 * @property {Object} [variants]
 * @property {Object} [sizes]
 * @property {Object} [size_guide]
 * @property {Object} [custom_order]
 */

/**
 * @typedef GlobalValidation
 * @property {Object} [definitions]
 * @property {Properties} [properties]
 * @property {string} [type]
 * @property {string[]} [required]
 * @property {string} [title]
 * @property {string} [description]
 */

/**
 * @typedef TemplateValidationData
 * @property {Object} [template_validation]
 * @property {GlobalValidation} [global_validation]
 */

/**
 * @typedef TemplatesValidationResponse
 * @property {TemplateDetails} [template_details]
 * @property {TemplateValidationData} [data]
 */

/**
 * @typedef InventoryValidationResponse
 * @property {string} [message]
 * @property {Object} [data]
 */

/**
 * @typedef HSNData
 * @property {string[]} [hsn_code]
 * @property {string[]} [country_of_origin]
 */

/**
 * @typedef HSNCodesResponse
 * @property {string} [message]
 * @property {HSNData} [data]
 */

/**
 * @typedef ProductDownloadItemsData
 * @property {string[]} [templates]
 * @property {string[]} [brand]
 * @property {string} [type]
 */

/**
 * @typedef VerifiedBy
 * @property {string} [user_id]
 * @property {string} [username]
 */

/**
 * @typedef ProductDownloadsItems
 * @property {number} [seller_id]
 * @property {ProductDownloadItemsData} [data]
 * @property {Object} [template_tags]
 * @property {string} [status]
 * @property {string} [url]
 * @property {string} [trigger_on]
 * @property {VerifiedBy} [created_by]
 * @property {string} [completed_on]
 * @property {string} [task_id]
 * @property {string} [id]
 */

/**
 * @typedef ProductDownloadsResponse
 * @property {ProductDownloadsItems} [items]
 * @property {Page} [page]
 */

/**
 * @typedef ProductConfigurationDownloads
 * @property {boolean} [multivalue]
 * @property {Object[]} [data]
 */

/**
 * @typedef Media2
 * @property {string} logo
 * @property {string} portrait
 * @property {string} landscape
 */

/**
 * @typedef Hierarchy
 * @property {number} l1
 * @property {number} l2
 * @property {number} department
 */

/**
 * @typedef CategoryMappingValues
 * @property {number} [catalog_id]
 * @property {string} name
 */

/**
 * @typedef CategoryMapping
 * @property {CategoryMappingValues} [facebook]
 * @property {CategoryMappingValues} [ajio]
 * @property {CategoryMappingValues} [google]
 */

/**
 * @typedef Category
 * @property {Object} [modified_by]
 * @property {Media2} [media]
 * @property {string} name
 * @property {number} [uid]
 * @property {string} [slug]
 * @property {string} [created_on]
 * @property {string[]} [tryouts]
 * @property {number} level
 * @property {Object} [created_by]
 * @property {boolean} is_active
 * @property {number[]} departments
 * @property {Hierarchy[]} [hierarchy]
 * @property {CategoryMapping} [marketplaces]
 * @property {number} [priority]
 * @property {string} [modified_on]
 * @property {string[]} [synonyms]
 * @property {string} [id]
 */

/**
 * @typedef CategoryResponse
 * @property {Category[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef CategoryRequestBody
 * @property {Media2} [media]
 * @property {string} name
 * @property {string} [slug]
 * @property {string[]} [tryouts]
 * @property {number} level
 * @property {boolean} is_active
 * @property {number[]} departments
 * @property {Hierarchy[]} [hierarchy]
 * @property {CategoryMapping} [marketplaces]
 * @property {number} [priority]
 * @property {string[]} [synonyms]
 */

/**
 * @typedef CategoryCreateResponse
 * @property {string} [message]
 * @property {number} [uid]
 */

/**
 * @typedef SingleCategoryResponse
 * @property {Category} [data]
 */

/**
 * @typedef CategoryUpdateResponse
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef ProductPublished
 * @property {number} [product_online_date]
 * @property {boolean} [is_set]
 */

/**
 * @typedef ReturnConfigResponse
 * @property {number} [time]
 * @property {boolean} [returnable]
 * @property {string} [unit]
 */

/**
 * @typedef Logo
 * @property {string} [secure_url]
 * @property {string} [url]
 * @property {string} [aspect_ratio]
 * @property {number} [aspect_ratio_f]
 */

/**
 * @typedef Image
 * @property {string} [secure_url]
 * @property {string} [url]
 * @property {string} [aspect_ratio]
 * @property {number} [aspect_ratio_f]
 */

/**
 * @typedef NetQuantityResponse
 * @property {string} [unit]
 * @property {number} [value]
 */

/**
 * @typedef Product
 * @property {string[]} [product_group_tag]
 * @property {string} [category_slug]
 * @property {string} [item_type]
 * @property {ProductPublished} [product_publish]
 * @property {boolean} [is_set]
 * @property {ReturnConfigResponse} [return_config]
 * @property {Object} [created_by]
 * @property {string} [pending]
 * @property {string[]} [all_identifiers]
 * @property {number[]} [departments]
 * @property {Brand} [brand]
 * @property {string} [primary_color]
 * @property {number} [category_uid]
 * @property {Object} [variant_group]
 * @property {string} [created_on]
 * @property {Object} [variant_media]
 * @property {number} [uid]
 * @property {string} [currency]
 * @property {boolean} [is_physical]
 * @property {string} [hsn_code]
 * @property {string[]} [highlights]
 * @property {string} [modified_on]
 * @property {string} [id]
 * @property {string} [slug]
 * @property {number} [company_id]
 * @property {string[]} [tags]
 * @property {Image[]} [images]
 * @property {Object} [attributes]
 * @property {Object} [tax_identifier]
 * @property {boolean} [multi_size]
 * @property {boolean} [is_dependent]
 * @property {NetQuantityResponse} [net_quantity]
 * @property {VerifiedBy} [verified_by]
 * @property {Object} [teaser_tag]
 * @property {string} [template_tag]
 * @property {string} [item_code]
 * @property {string} [stage]
 * @property {number} [brand_uid]
 * @property {string} [color]
 * @property {boolean} [is_image_less_product]
 * @property {string} [verified_on]
 * @property {string} [description]
 * @property {string} [short_description]
 * @property {Object} [modified_by]
 * @property {Object} [_custom_json]
 * @property {string} [name]
 * @property {Media1[]} [media]
 * @property {Object[]} [trader]
 * @property {number[]} [all_company_ids]
 * @property {Object} [moq]
 * @property {string[]} [l3_mapping]
 * @property {boolean} [is_expirable]
 * @property {boolean} [is_active]
 * @property {string} [country_of_origin]
 * @property {Object[]} [sizes]
 * @property {Object} [variants]
 * @property {Object} [category]
 * @property {number} [no_of_boxes]
 * @property {Object[]} [all_sizes]
 * @property {string} [size_guide]
 * @property {string} [image_nature]
 * @property {Object} [custom_order]
 */

/**
 * @typedef ProductListingResponse
 * @property {Product[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef ProductPublish
 * @property {string} [product_online_date]
 * @property {boolean} [is_set]
 */

/**
 * @typedef TaxIdentifier
 * @property {string} [hsn_code]
 * @property {string} [hsn_code_id]
 * @property {string} [reporting_hsn]
 */

/**
 * @typedef NetQuantity
 * @property {Object} [unit]
 * @property {number} [value]
 */

/**
 * @typedef TeaserTag
 * @property {string} [tag]
 * @property {string} [url]
 */

/**
 * @typedef Trader
 * @property {string[]} [address]
 * @property {Object} name
 * @property {string} [type]
 */

/**
 * @typedef CustomOrder
 * @property {number} [manufacturing_time]
 * @property {boolean} [is_custom_order]
 * @property {string} [manufacturing_time_unit]
 */

/**
 * @typedef ProductCreateUpdateSchemaV2
 * @property {string[]} [product_group_tag]
 * @property {string} category_slug
 * @property {string} item_type
 * @property {ProductPublish} [product_publish]
 * @property {boolean} [is_set]
 * @property {ReturnConfig} return_config
 * @property {number[]} departments
 * @property {Object} [variant_group]
 * @property {Object} [variant_media]
 * @property {number} [uid]
 * @property {string} currency
 * @property {string[]} [highlights]
 * @property {Object} [change_request_id]
 * @property {string} [action]
 * @property {string} [bulk_job_id]
 * @property {string} slug
 * @property {number} company_id
 * @property {string[]} [tags]
 * @property {Object} [attributes]
 * @property {TaxIdentifier} tax_identifier
 * @property {string} [requester]
 * @property {boolean} [is_dependent]
 * @property {boolean} [multi_size]
 * @property {NetQuantity} [net_quantity]
 * @property {TeaserTag} [teaser_tag]
 * @property {string} template_tag
 * @property {string} item_code
 * @property {number} brand_uid
 * @property {boolean} [is_image_less_product]
 * @property {string} [description]
 * @property {string} [short_description]
 * @property {Media1[]} [media]
 * @property {string} name
 * @property {Trader[]} trader
 * @property {Object} [_custom_json]
 * @property {boolean} [is_active]
 * @property {string} country_of_origin
 * @property {number} [no_of_boxes]
 * @property {Object} [variants]
 * @property {Object[]} sizes
 * @property {string} [size_guide]
 * @property {CustomOrder} [custom_order]
 */

/**
 * @typedef ProductVariants
 * @property {Media1[]} [media]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {string} [item_code]
 * @property {number} [brand_uid]
 * @property {number} [category_uid]
 */

/**
 * @typedef ProductVariantsResponse
 * @property {Page} [page]
 * @property {ProductVariants[]} [variants]
 */

/**
 * @typedef AttributeMasterSerializer
 * @property {string} [raw_key]
 * @property {string} [unit]
 * @property {boolean} [enabled_for_end_consumer]
 * @property {Object} [created_by]
 * @property {string[]} departments
 * @property {string} [created_on]
 * @property {string} [logo]
 * @property {string} [modified_on]
 * @property {Object} [synonyms]
 * @property {string} slug
 * @property {string[]} [tags]
 * @property {string} [suggestion]
 * @property {string} [description]
 * @property {Object} [modified_by]
 * @property {string} [name]
 * @property {AttributeMasterFilter} filters
 * @property {AttributeMasterDetails} details
 * @property {boolean} [is_nested]
 * @property {boolean} [variant]
 * @property {AttributeMaster} schema
 */

/**
 * @typedef ProductAttributesResponse
 * @property {AttributeMasterSerializer[]} items
 */

/**
 * @typedef SingleProductResponse
 * @property {Product} [data]
 */

/**
 * @typedef ValidateIdentifier
 * @property {string} gtin_type
 * @property {boolean} [primary]
 * @property {string} gtin_value
 */

/**
 * @typedef AllSizes
 * @property {ValidateIdentifier[]} [identifiers]
 * @property {number} item_weight
 * @property {Object} size
 * @property {number} item_length
 * @property {number} item_height
 * @property {Object} item_weight_unit_of_measure
 * @property {string} item_dimensions_unit_of_measure
 * @property {number} item_width
 */

/**
 * @typedef GetAllSizes
 * @property {AllSizes[]} [all_sizes]
 */

/**
 * @typedef ValidateProduct
 * @property {boolean} [valid]
 */

/**
 * @typedef UserDetail1
 * @property {string} [user_id]
 * @property {string} [username]
 * @property {string} [full_name]
 */

/**
 * @typedef ProductBulkRequest
 * @property {number} [succeed]
 * @property {number} [cancelled]
 * @property {string} [created_on]
 * @property {UserDetail1} [modified_by]
 * @property {number} [company_id]
 * @property {number} [failed]
 * @property {ProductTemplate} [template]
 * @property {UserDetail1} [created_by]
 * @property {number} [total]
 * @property {boolean} [is_active]
 * @property {string} [stage]
 * @property {string} [template_tag]
 * @property {string[]} [failed_records]
 * @property {string} [modified_on]
 * @property {string} [file_path]
 * @property {string[]} [cancelled_records]
 */

/**
 * @typedef ProductBulkRequestList
 * @property {ProductBulkRequest} [items]
 * @property {Page} [page]
 */

/**
 * @typedef UserInfo1
 * @property {string} [email]
 * @property {string} [username]
 * @property {string} [uid]
 * @property {string} [user_id]
 */

/**
 * @typedef BulkJob
 * @property {number} [succeed]
 * @property {UserInfo1} [modified_by]
 * @property {string} created_on
 * @property {number} [cancelled]
 * @property {number} company_id
 * @property {number} [failed]
 * @property {UserInfo1} [created_by]
 * @property {string} [tracking_url]
 * @property {number} [total]
 * @property {boolean} [is_active]
 * @property {string} [stage]
 * @property {string} [template_tag]
 * @property {string} [custom_template_tag]
 * @property {Object[]} [failed_records]
 * @property {string} [modified_on]
 * @property {string} [file_path]
 * @property {Object[]} [cancelled_records]
 */

/**
 * @typedef BulkResponse
 * @property {UserInfo1} [modified_by]
 * @property {string} created_on
 * @property {string} batch_id
 * @property {UserInfo1} [created_by]
 * @property {boolean} [is_active]
 * @property {string} [modified_on]
 */

/**
 * @typedef BulkProductRequest
 * @property {string} batch_id
 * @property {number} company_id
 * @property {string} template_tag
 * @property {Object[]} data
 */

/**
 * @typedef NestedTags
 * @property {string[]} [tags]
 */

/**
 * @typedef ProductTagsViewResponse
 * @property {NestedTags} [items]
 */

/**
 * @typedef UserCommon
 * @property {string} [user_id]
 * @property {string} [username]
 * @property {number} [company_id]
 */

/**
 * @typedef Items
 * @property {number} [succeed]
 * @property {UserCommon} [modified_by]
 * @property {string} [created_on]
 * @property {number} [retry]
 * @property {number} [failed]
 * @property {number} [company_id]
 * @property {number} [cancelled]
 * @property {UserCommon} [created_by]
 * @property {string} [tracking_url]
 * @property {number} [total]
 * @property {boolean} [is_active]
 * @property {string} [stage]
 * @property {string[]} [failed_records]
 * @property {string} [modified_on]
 * @property {string} [file_path]
 * @property {string[]} [cancelled_records]
 * @property {string} [id]
 */

/**
 * @typedef BulkAssetResponse
 * @property {Items[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef ProductBulkAssets
 * @property {Object} user
 * @property {string} url
 * @property {number} [company_id]
 */

/**
 * @typedef ProductSizeDeleteDataResponse
 * @property {string} [size]
 * @property {number} [item_id]
 * @property {number} [company_id]
 */

/**
 * @typedef ProductSizeDeleteResponse
 * @property {boolean} [success]
 * @property {ProductSizeDeleteDataResponse} [data]
 */

/**
 * @typedef InventoryResponse
 * @property {number} [quantity]
 * @property {string} [inventory_updated_on]
 * @property {string} [seller_identifier]
 * @property {Object} [identifiers]
 * @property {string} [uid]
 * @property {number} [sellable_quantity]
 * @property {string} [size]
 * @property {number} [item_id]
 * @property {string} [currency]
 * @property {number} [price_transfer]
 * @property {Object} [store]
 * @property {number} [price_effective]
 * @property {number} [price]
 */

/**
 * @typedef InventoryResponsePaginated
 * @property {InventoryResponse[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef ItemQuery
 * @property {number} [brand_uid]
 * @property {number} [uid]
 * @property {string} [item_code]
 */

/**
 * @typedef GTIN
 * @property {string} gtin_type
 * @property {boolean} [primary]
 * @property {Object} gtin_value
 */

/**
 * @typedef SetSize
 * @property {number} pieces
 * @property {string} size
 */

/**
 * @typedef SizeDistribution
 * @property {SetSize[]} sizes
 */

/**
 * @typedef InventorySet
 * @property {number} [quantity]
 * @property {string} [name]
 * @property {SizeDistribution} size_distribution
 */

/**
 * @typedef InvSize
 * @property {number} quantity
 * @property {GTIN[]} identifiers
 * @property {string} [expiration_date]
 * @property {number} [item_weight]
 * @property {Object} size
 * @property {boolean} [is_set]
 * @property {number} [item_length]
 * @property {number} [item_height]
 * @property {number} [price]
 * @property {string} [item_weight_unit_of_measure]
 * @property {string} [item_dimensions_unit_of_measure]
 * @property {string} store_code
 * @property {string} currency
 * @property {number} [price_transfer]
 * @property {number} [item_width]
 * @property {number} price_effective
 * @property {InventorySet} [set]
 */

/**
 * @typedef InventoryRequest
 * @property {ItemQuery} item
 * @property {number} company_id
 * @property {InvSize[]} sizes
 */

/**
 * @typedef ReturnConfig1
 * @property {number} [time]
 * @property {boolean} [returnable]
 * @property {string} [unit]
 */

/**
 * @typedef BrandMeta
 * @property {string} name
 * @property {number} id
 */

/**
 * @typedef ManufacturerResponse
 * @property {string} name
 * @property {boolean} is_default
 * @property {string} address
 */

/**
 * @typedef QuantityBase
 * @property {string} [updated_at]
 * @property {number} [count]
 */

/**
 * @typedef Quantities
 * @property {QuantityBase} [not_available]
 * @property {QuantityBase} [damaged]
 * @property {QuantityBase} [order_committed]
 * @property {QuantityBase} [sellable]
 */

/**
 * @typedef WeightResponse
 * @property {string} unit
 * @property {number} shipping
 * @property {boolean} is_default
 */

/**
 * @typedef CompanyMeta
 * @property {number} id
 */

/**
 * @typedef DimensionResponse
 * @property {string} unit
 * @property {boolean} is_default
 * @property {number} height
 * @property {number} width
 * @property {number} length
 */

/**
 * @typedef Trader1
 * @property {string[]} address
 * @property {string} name
 * @property {string} type
 */

/**
 * @typedef PriceMeta
 * @property {number} effective
 * @property {string} [updated_at]
 * @property {string} currency
 * @property {Object} [tp_notes]
 * @property {number} transfer
 * @property {number} marked
 */

/**
 * @typedef InventorySellerResponse
 * @property {string} [expiration_date]
 * @property {Object} [meta]
 * @property {boolean} [is_set]
 * @property {ReturnConfig1} [return_config]
 * @property {UserSerializer} [created_by]
 * @property {InventorySet} [set]
 * @property {BrandMeta} brand
 * @property {string} [added_on_store]
 * @property {ManufacturerResponse} manufacturer
 * @property {Quantities} [quantities]
 * @property {boolean} [track_inventory]
 * @property {string} seller_identifier
 * @property {Object} [fynd_meta]
 * @property {string} uid
 * @property {WeightResponse} weight
 * @property {string} size
 * @property {number} item_id
 * @property {number} total_quantity
 * @property {CompanyMeta} company
 * @property {Object} identifier
 * @property {string} fynd_article_code
 * @property {DimensionResponse} dimension
 * @property {string[]} [tags]
 * @property {string} fynd_item_code
 * @property {Object} [tax_identifier]
 * @property {string} [stage]
 * @property {StoreMeta} store
 * @property {Object} [raw_meta]
 * @property {UserSerializer} [modified_by]
 * @property {Trader1[]} [trader]
 * @property {Object} [_custom_json]
 * @property {string} [trace_id]
 * @property {boolean} fragile
 * @property {boolean} [is_active]
 * @property {string} country_of_origin
 * @property {PriceMeta} price
 */

/**
 * @typedef InventorySellerIdentifierResponsePaginated
 * @property {InventorySellerResponse[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef ReturnConfig2
 * @property {number} [time]
 * @property {boolean} [returnable]
 * @property {string} [unit]
 */

/**
 * @typedef BrandMeta1
 * @property {string} [name]
 * @property {number} [id]
 */

/**
 * @typedef ManufacturerResponse1
 * @property {string} [name]
 * @property {boolean} [is_default]
 * @property {string} [address]
 */

/**
 * @typedef Quantity
 * @property {number} [count]
 */

/**
 * @typedef QuantitiesArticle
 * @property {Quantity} [not_available]
 * @property {Quantity} [damaged]
 * @property {Quantity} [order_committed]
 * @property {Quantity} [sellable]
 */

/**
 * @typedef WeightResponse1
 * @property {string} [unit]
 * @property {number} [shipping]
 */

/**
 * @typedef CompanyMeta1
 * @property {number} [id]
 */

/**
 * @typedef DimensionResponse1
 * @property {number} [height]
 * @property {string} [unit]
 * @property {number} [width]
 * @property {number} [length]
 */

/**
 * @typedef ArticleStoreResponse
 * @property {string} [store_type]
 * @property {string} [store_code]
 * @property {string} [name]
 * @property {number} [uid]
 */

/**
 * @typedef Trader2
 * @property {string[]} [address]
 * @property {string} [name]
 * @property {string} [type]
 */

/**
 * @typedef PriceArticle
 * @property {number} [effective]
 * @property {string} [currency]
 * @property {Object} [tp_notes]
 * @property {number} [transfer]
 * @property {number} [marked]
 */

/**
 * @typedef GetInventories
 * @property {string} [expiration_date]
 * @property {boolean} [is_set]
 * @property {ReturnConfig2} [return_config]
 * @property {UserSerializer} [created_by]
 * @property {BrandMeta1} [brand]
 * @property {ManufacturerResponse1} [manufacturer]
 * @property {QuantitiesArticle} [quantities]
 * @property {boolean} [track_inventory]
 * @property {string} [seller_identifier]
 * @property {string} [inventory_updated_on]
 * @property {string} [uid]
 * @property {WeightResponse1} [weight]
 * @property {string} [size]
 * @property {number} [item_id]
 * @property {DateMeta} [date_meta]
 * @property {number} [total_quantity]
 * @property {CompanyMeta1} [company]
 * @property {Object} [identifier]
 * @property {string} [id]
 * @property {DimensionResponse1} [dimension]
 * @property {string[]} [tags]
 * @property {Object} [tax_identifier]
 * @property {string} [stage]
 * @property {ArticleStoreResponse} [store]
 * @property {Object} [platforms]
 * @property {UserSerializer} [modified_by]
 * @property {Trader2[]} [trader]
 * @property {string} [trace_id]
 * @property {string} [country_of_origin]
 * @property {PriceArticle} [price]
 */

/**
 * @typedef GetInventoriesResponse
 * @property {GetInventories[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef BulkInventoryGetItems
 * @property {number} [succeed]
 * @property {number} [cancelled]
 * @property {string} [created_on]
 * @property {Object} [modified_by]
 * @property {number} [company_id]
 * @property {number} [failed]
 * @property {Object} [created_by]
 * @property {number} [total]
 * @property {boolean} [is_active]
 * @property {string} [stage]
 * @property {string[]} [failed_records]
 * @property {string} [modified_on]
 * @property {string} [file_path]
 * @property {string[]} [cancelled_records]
 * @property {string} [id]
 */

/**
 * @typedef BulkInventoryGet
 * @property {BulkInventoryGetItems[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef InventoryJobPayload
 * @property {string} seller_identifier
 * @property {number} [quantity]
 * @property {number} [price_marked]
 * @property {string} [expiration_date]
 * @property {string[]} [tags]
 * @property {string} [trace_id]
 * @property {number} [total_quantity]
 * @property {string} store_code
 * @property {string} [currency]
 * @property {string} [item_weight_unit_of_measure]
 * @property {string} [item_dimensions_unit_of_measure]
 * @property {number} [price_effective]
 * @property {number} [price]
 */

/**
 * @typedef InventoryBulkRequest
 * @property {string} batch_id
 * @property {Object} [user]
 * @property {number} company_id
 * @property {InventoryJobPayload[]} sizes
 */

/**
 * @typedef InventoryExportJob
 * @property {number} seller_id
 * @property {string} [status]
 * @property {string} [url]
 * @property {string} [trigger_on]
 * @property {Object} [request_params]
 * @property {string} [completed_on]
 * @property {string} task_id
 */

/**
 * @typedef InventoryExportRequest
 * @property {number[]} [store]
 * @property {number[]} [brand]
 * @property {string} [type]
 */

/**
 * @typedef InventoryExportResponse
 * @property {number} seller_id
 * @property {string} [status]
 * @property {string} [trigger_on]
 * @property {Object} [request_params]
 * @property {string} task_id
 */

/**
 * @typedef FilerList
 * @property {string} [value]
 * @property {string} [display]
 */

/**
 * @typedef InventoryConfig
 * @property {boolean} [multivalues]
 * @property {FilerList[]} [data]
 */

/**
 * @typedef InventoryPayload
 * @property {string} seller_identifier
 * @property {number} store_id
 * @property {number} [price_marked]
 * @property {string} [expiration_date]
 * @property {string[]} [tags]
 * @property {string} [trace_id]
 * @property {number} [total_quantity]
 * @property {number} [price_effective]
 */

/**
 * @typedef InventoryRequestSchemaV2
 * @property {number} company_id
 * @property {InventoryPayload[]} [payload]
 * @property {Object} [meta]
 */

/**
 * @typedef InventoryFailedReason
 * @property {string} message
 * @property {string} [errors]
 */

/**
 * @typedef InventoryResponseItem
 * @property {InventoryFailedReason} [reason]
 * @property {InventoryPayload} [data]
 */

/**
 * @typedef InventoryUpdateResponse
 * @property {string} message
 * @property {InventoryResponseItem[]} [items]
 */

/**
 * @typedef HsnCodesObject
 * @property {number} [company_id]
 * @property {boolean} [tax_on_esp]
 * @property {number} [threshold1]
 * @property {number} [tax2]
 * @property {string} [hs2_code]
 * @property {number} [threshold2]
 * @property {string} [hsn_code]
 * @property {number} [tax1]
 * @property {boolean} [tax_on_mrp]
 * @property {string} [modified_on]
 * @property {string} [id]
 */

/**
 * @typedef PageResponse
 * @property {string} [current]
 * @property {number} [size]
 * @property {number} [item_total]
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 */

/**
 * @typedef HsnCodesListingResponse
 * @property {HsnCodesObject[]} [items]
 * @property {PageResponse} [page]
 */

/**
 * @typedef HsnUpsert
 * @property {number} company_id
 * @property {number} [uid]
 * @property {boolean} [tax_on_esp]
 * @property {number} threshold1
 * @property {number} [tax2]
 * @property {string} hs2_code
 * @property {number} [threshold2]
 * @property {boolean} [is_active]
 * @property {string} hsn_code
 * @property {number} tax1
 * @property {boolean} tax_on_mrp
 */

/**
 * @typedef HsnCode
 * @property {HsnCodesObject} [data]
 */

/**
 * @typedef BulkHsnUpsert
 * @property {HsnUpsert[]} data
 */

/**
 * @typedef BulkHsnResponse
 * @property {boolean} [success]
 */

/**
 * @typedef TaxSlab
 * @property {number} rate
 * @property {number} threshold
 * @property {number} [cess]
 * @property {string} effective_date
 */

/**
 * @typedef HSNDataInsertV2
 * @property {Object} [modified_by]
 * @property {string} [created_on]
 * @property {TaxSlab[]} taxes
 * @property {Object} [created_by]
 * @property {string} country_code
 * @property {string} type
 * @property {string} hsn_code
 * @property {string} [modified_on]
 * @property {string} reporting_hsn
 * @property {string} description
 */

/**
 * @typedef HsnCodesListingResponseSchemaV2
 * @property {HSNDataInsertV2[]} [items]
 * @property {PageResponse} [page]
 */

/**
 * @typedef BrandItem
 * @property {string} [slug]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {string} [discount]
 * @property {Media} [logo]
 * @property {string[]} [departments]
 * @property {Action} [action]
 * @property {ImageUrls} [banners]
 */

/**
 * @typedef BrandListingResponse
 * @property {BrandItem[]} [items]
 * @property {Page} page
 */

/**
 * @typedef Department
 * @property {string} [slug]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {Media} [logo]
 * @property {number} [priority_order]
 */

/**
 * @typedef DepartmentResponse
 * @property {Department[]} [items]
 */

/**
 * @typedef DepartmentIdentifier
 * @property {string} [slug]
 * @property {number} [uid]
 */

/**
 * @typedef ThirdLevelChild
 * @property {string} [slug]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {Object} [_custom_json]
 * @property {Object[]} [childs]
 * @property {Action} [action]
 * @property {ImageUrls} [banners]
 */

/**
 * @typedef SecondLevelChild
 * @property {string} [slug]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {Object} [_custom_json]
 * @property {ThirdLevelChild[]} [childs]
 * @property {Action} [action]
 * @property {ImageUrls} [banners]
 */

/**
 * @typedef Child
 * @property {string} [slug]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {Object} [_custom_json]
 * @property {SecondLevelChild[]} [childs]
 * @property {Action} [action]
 * @property {ImageUrls} [banners]
 */

/**
 * @typedef CategoryItems
 * @property {string} [slug]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {Child[]} [childs]
 * @property {Action} [action]
 * @property {ImageUrls} [banners]
 */

/**
 * @typedef DepartmentCategoryTree
 * @property {CategoryItems[]} [items]
 * @property {string} [department]
 */

/**
 * @typedef CategoryListingResponse
 * @property {DepartmentIdentifier[]} [departments]
 * @property {DepartmentCategoryTree[]} [data]
 */

/**
 * @typedef ApplicationProductListingResponse
 * @property {ProductFilters[]} [filters]
 * @property {Page} page
 * @property {ProductSortOn[]} [sort_on]
 * @property {Object} [operators]
 * @property {ProductListingDetail[]} [items]
 */

/**
 * @typedef ProductDetail
 * @property {string} [item_type]
 * @property {number} [rating]
 * @property {string} [type]
 * @property {ProductBrand} [brand]
 * @property {string[]} [similars]
 * @property {number} [uid]
 * @property {boolean} [has_variant]
 * @property {string[]} [tryouts]
 * @property {string} [product_online_date]
 * @property {Media1[]} [medias]
 * @property {string[]} [highlights]
 * @property {string} slug
 * @property {Object} [attributes]
 * @property {number} [rating_count]
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes]
 * @property {Object} [teaser_tag]
 * @property {string} [item_code]
 * @property {string} [color]
 * @property {string} [description]
 * @property {string} [short_description]
 * @property {string} [name]
 * @property {Object} [promo_meta]
 * @property {string} [image_nature]
 */

/**
 * @typedef InventoryPage
 * @property {string} [next_id]
 * @property {string} type
 * @property {number} item_total
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 */

/**
 * @typedef InventoryStockResponse
 * @property {Object[]} [items]
 * @property {InventoryPage} page
 */

/**
 * @typedef ArticleQuery
 * @property {string} size
 * @property {number} item_id
 * @property {number[]} [ignored_stores]
 */

/**
 * @typedef ArticleAssignment
 * @property {string} [strategy]
 * @property {string} [level]
 */

/**
 * @typedef AssignStoreArticle
 * @property {number} [quantity]
 * @property {Object} [meta]
 * @property {string} [group_id]
 * @property {ArticleQuery} [query]
 * @property {ArticleAssignment} [article_assignment]
 */

/**
 * @typedef AssignStore
 * @property {number[]} [store_ids]
 * @property {number} [company_id]
 * @property {string} [channel_identifier]
 * @property {string} app_id
 * @property {string} pincode
 * @property {string} [channel_type]
 * @property {AssignStoreArticle[]} articles
 */

/**
 * @typedef ArticleAssignment1
 * @property {string} [strategy]
 * @property {string} [level]
 */

/**
 * @typedef StoreAssignResponse
 * @property {number} quantity
 * @property {number} [store_id]
 * @property {string} [uid]
 * @property {number} [company_id]
 * @property {number} [price_marked]
 * @property {Object} [meta]
 * @property {string} size
 * @property {number} item_id
 * @property {boolean} status
 * @property {string} [group_id]
 * @property {string} [s_city]
 * @property {number} [index]
 * @property {Object[]} [strategy_wise_listing]
 * @property {ArticleAssignment1} article_assignment
 * @property {number} [store_pincode]
 * @property {string} [_id]
 * @property {number} [price_effective]
 */

/**
 * @typedef SellerPhoneNumber
 * @property {number} country_code
 * @property {string} number
 */

/**
 * @typedef UserSerializer1
 * @property {string} [user_id]
 * @property {string} [username]
 * @property {string} [contact]
 */

/**
 * @typedef LocationManagerSerializer
 * @property {string} [email]
 * @property {SellerPhoneNumber} mobile_no
 * @property {string} [name]
 */

/**
 * @typedef LocationIntegrationType
 * @property {string} [order]
 * @property {string} [inventory]
 */

/**
 * @typedef InvoiceCredSerializer
 * @property {string} [password]
 * @property {string} [username]
 * @property {boolean} [enabled]
 */

/**
 * @typedef InvoiceDetailsSerializer
 * @property {InvoiceCredSerializer} [e_invoice]
 * @property {InvoiceCredSerializer} [e_waybill]
 */

/**
 * @typedef UserSerializer2
 * @property {string} [user_id]
 * @property {string} [username]
 * @property {string} [contact]
 */

/**
 * @typedef GetAddressSerializer
 * @property {number} [latitude]
 * @property {string} [state]
 * @property {string} [country]
 * @property {string} [address_type]
 * @property {string} [address2]
 * @property {string} [country_code]
 * @property {number} [pincode]
 * @property {string} [landmark]
 * @property {number} [longitude]
 * @property {string} [city]
 * @property {string} [address1]
 */

/**
 * @typedef GetCompanySerializer
 * @property {UserSerializer2} [modified_by]
 * @property {string} [created_on]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {string} [company_type]
 * @property {UserSerializer2} [created_by]
 * @property {string} [reject_reason]
 * @property {UserSerializer2} [verified_by]
 * @property {string} [stage]
 * @property {string} [business_type]
 * @property {string} [modified_on]
 * @property {string} [verified_on]
 */

/**
 * @typedef LocationTimingSerializer
 * @property {number} [hour]
 * @property {number} [minute]
 */

/**
 * @typedef LocationDayWiseSerializer
 * @property {LocationTimingSerializer} [closing]
 * @property {boolean} open
 * @property {LocationTimingSerializer} [opening]
 * @property {string} weekday
 */

/**
 * @typedef ProductReturnConfigSerializer
 * @property {number} [store_uid]
 * @property {boolean} [on_same_store]
 */

/**
 * @typedef GetLocationSerializer
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {UserSerializer1} [created_by]
 * @property {LocationManagerSerializer} [manager]
 * @property {LocationIntegrationType} [integration_type]
 * @property {string} [created_on]
 * @property {number} [uid]
 * @property {string} code
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {GetCompanySerializer} [company]
 * @property {string} [modified_on]
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {string[]} [notification_emails]
 * @property {Object} [warnings]
 * @property {string} display_name
 * @property {UserSerializer1} [verified_by]
 * @property {string} [stage]
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {string} [verified_on]
 * @property {string} [store_type]
 * @property {UserSerializer1} [modified_by]
 * @property {Object} [_custom_json]
 * @property {string} name
 * @property {GetAddressSerializer} address
 * @property {string} phone_number
 * @property {Document[]} [documents]
 */

/**
 * @typedef LocationListSerializer
 * @property {GetLocationSerializer[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef ApplicationBrandJson
 * @property {Object} _custom_json
 */

/**
 * @typedef ApplicationCategoryJson
 * @property {Object} _custom_json
 */

/**
 * @typedef ApplicationDepartment
 * @property {Object} [_custom_json]
 * @property {string} [name]
 * @property {number} uid
 * @property {string} app_id
 * @property {string} [logo]
 * @property {boolean} [is_active]
 */

/**
 * @typedef ApplicationDepartmentListingResponse
 * @property {ApplicationDepartment[]} [items]
 * @property {Page} page
 */

/**
 * @typedef ApplicationDepartmentJson
 * @property {Object} _custom_json
 */

/**
 * @typedef ApplicationStoreJson
 * @property {Object} _custom_json
 */

/**
 * @typedef BusinessCountryInfo
 * @property {string} [country_code]
 * @property {string} [country]
 */

/**
 * @typedef CompanyTaxesSerializer
 * @property {number} [rate]
 * @property {string} [effective_date]
 * @property {boolean} [enable]
 */

/**
 * @typedef Website
 * @property {string} [url]
 */

/**
 * @typedef BusinessDetails
 * @property {Website} [website]
 */

/**
 * @typedef ContactDetails
 * @property {SellerPhoneNumber[]} [phone]
 * @property {string[]} [emails]
 */

/**
 * @typedef GetCompanyProfileSerializerResponse
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {CompanyTaxesSerializer[]} [taxes]
 * @property {BusinessDetails} [business_details]
 * @property {UserSerializer} [created_by]
 * @property {string} [stage]
 * @property {string} business_type
 * @property {UserSerializer} [modified_by]
 * @property {string} company_type
 * @property {string} [modified_on]
 * @property {Document[]} [documents]
 * @property {ContactDetails} [contact_details]
 * @property {string} [business_info]
 * @property {string[]} [notification_emails]
 * @property {number} uid
 * @property {string} [created_on]
 * @property {string} [name]
 * @property {Object} [_custom_json]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {boolean} [franchise_enabled]
 * @property {UserSerializer} [verified_by]
 * @property {Object} [warnings]
 * @property {string} [mode]
 * @property {string} [verified_on]
 */

/**
 * @typedef CompanyTaxesSerializer1
 * @property {number} [rate]
 * @property {string} [effective_date]
 * @property {boolean} [enable]
 */

/**
 * @typedef CreateUpdateAddressSerializer
 * @property {string} address1
 * @property {number} pincode
 * @property {string} country
 * @property {number} latitude
 * @property {string} [landmark]
 * @property {string} city
 * @property {string} [country_code]
 * @property {string} [address2]
 * @property {string} state
 * @property {string} address_type
 * @property {number} longitude
 */

/**
 * @typedef UpdateCompany
 * @property {boolean} [franchise_enabled]
 * @property {ContactDetails} [contact_details]
 * @property {string} [business_info]
 * @property {string} [company_type]
 * @property {CompanyTaxesSerializer1[]} [taxes]
 * @property {string[]} [notification_emails]
 * @property {Object} [warnings]
 * @property {BusinessDetails} [business_details]
 * @property {string} [reject_reason]
 * @property {Object} [_custom_json]
 * @property {string} [name]
 * @property {Document[]} [documents]
 * @property {string} [business_type]
 * @property {CreateUpdateAddressSerializer[]} [addresses]
 */

/**
 * @typedef ProfileSuccessResponse
 * @property {number} [uid]
 * @property {boolean} [success]
 */

/**
 * @typedef DocumentsObj
 * @property {number} [verified]
 * @property {number} [pending]
 */

/**
 * @typedef MetricsSerializer
 * @property {DocumentsObj} [brand]
 * @property {number} [uid]
 * @property {DocumentsObj} [company_documents]
 * @property {DocumentsObj} [store_documents]
 * @property {string} [stage]
 * @property {DocumentsObj} [product]
 * @property {DocumentsObj} [store]
 */

/**
 * @typedef BrandBannerSerializer
 * @property {string} [landscape]
 * @property {string} [portrait]
 */

/**
 * @typedef GetBrandResponseSerializer
 * @property {UserSerializer} [created_by]
 * @property {string} [stage]
 * @property {string} [slug_key]
 * @property {UserSerializer} [modified_by]
 * @property {string} [modified_on]
 * @property {BrandBannerSerializer} [banner]
 * @property {string} [logo]
 * @property {string} [reject_reason]
 * @property {number} [uid]
 * @property {string} [created_on]
 * @property {string} name
 * @property {Object} [_custom_json]
 * @property {Object} [_locale_language]
 * @property {UserSerializer} [verified_by]
 * @property {Object} [warnings]
 * @property {string} [mode]
 * @property {string} [description]
 * @property {string} [verified_on]
 * @property {string[]} [synonyms]
 */

/**
 * @typedef CreateUpdateBrandRequestSerializer
 * @property {string} [brand_tier]
 * @property {Object} [_locale_language]
 * @property {BrandBannerSerializer} [banner]
 * @property {string} [description]
 * @property {string} logo
 * @property {number} [uid]
 * @property {string} name
 * @property {string[]} [synonyms]
 * @property {Object} [_custom_json]
 * @property {number} [company_id]
 */

/**
 * @typedef CompanySocialAccounts
 * @property {string} url
 * @property {string} name
 */

/**
 * @typedef CompanyDetails
 * @property {CompanySocialAccounts[]} [socials]
 * @property {string} [website_url]
 */

/**
 * @typedef CompanySerializer
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {string[]} [market_channels]
 * @property {string} company_type
 * @property {UserSerializer} [verified_by]
 * @property {string} [modified_on]
 * @property {string[]} [notification_emails]
 * @property {string} [reject_reason]
 * @property {number} [uid]
 * @property {Object} [_custom_json]
 * @property {string} [verified_on]
 * @property {string} [created_on]
 * @property {UserSerializer} [created_by]
 * @property {string} [name]
 * @property {string} [stage]
 * @property {CompanyDetails} [details]
 * @property {string} business_type
 * @property {GetAddressSerializer[]} [addresses]
 * @property {UserSerializer} [modified_by]
 */

/**
 * @typedef CompanyBrandSerializer
 * @property {GetBrandResponseSerializer} [brand]
 * @property {UserSerializer} [verified_by]
 * @property {string} [modified_on]
 * @property {Object} [warnings]
 * @property {string} [reject_reason]
 * @property {number} [uid]
 * @property {string} [verified_on]
 * @property {string} [created_on]
 * @property {UserSerializer} [created_by]
 * @property {string} [stage]
 * @property {CompanySerializer} [company]
 * @property {UserSerializer} [modified_by]
 */

/**
 * @typedef CompanyBrandListSerializer
 * @property {CompanyBrandSerializer[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef CompanyBrandPostRequestSerializer
 * @property {number} [uid]
 * @property {number} company
 * @property {number[]} brands
 */

/**
 * @typedef HolidayDateSerializer
 * @property {string} start_date
 * @property {string} end_date
 */

/**
 * @typedef HolidaySchemaSerializer
 * @property {HolidayDateSerializer} date
 * @property {string} holiday_type
 * @property {string} title
 */

/**
 * @typedef AddressSerializer
 * @property {string} [address1]
 * @property {number} [pincode]
 * @property {string} [country]
 * @property {number} latitude
 * @property {string} [landmark]
 * @property {string} [city]
 * @property {string} [address_type]
 * @property {string} [address2]
 * @property {string} [state]
 * @property {string} [country_code]
 * @property {number} longitude
 */

/**
 * @typedef LocationSerializer
 * @property {AddressSerializer} address
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {string[]} [notification_emails]
 * @property {Object} [warnings]
 * @property {string} [store_type]
 * @property {number} [uid]
 * @property {string} code
 * @property {string} name
 * @property {string} display_name
 * @property {Document[]} [documents]
 * @property {LocationManagerSerializer} [manager]
 * @property {string} [stage]
 * @property {number} company
 * @property {Object} [_custom_json]
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {HolidaySchemaSerializer[]} [holiday]
 */

/**
 * @typedef BulkLocationSerializer
 * @property {LocationSerializer[]} [data]
 */

/**
 * @typedef _ArticleAssignment
 * @property {string} [strategy]
 * @property {string} [level]
 */

/**
 * @typedef _ArticleQuery
 * @property {number[]} [ignored_stores]
 * @property {number} [item_id]
 * @property {string} [size]
 */

/**
 * @typedef _AssignStoreArticle
 * @property {number} [quantity]
 * @property {Object} [meta]
 * @property {string} [group_id]
 * @property {_ArticleAssignment} [article_assignment]
 * @property {_ArticleQuery} [query]
 */

/**
 * @typedef AssignStoreRequestValidator
 * @property {_AssignStoreArticle[]} [articles]
 * @property {string} [pincode]
 * @property {number[]} [store_ids]
 * @property {string} [channel_identifier]
 * @property {string} [app_id]
 * @property {string} [channel_type]
 * @property {number} [company_id]
 */

/**
 * @typedef AssignStoreResponseSerializer
 * @property {string} [_id]
 * @property {number} [price_marked]
 * @property {number} [quantity]
 * @property {number} [store_id]
 * @property {Object} [meta]
 * @property {number} [preice_effective]
 * @property {string} [uid]
 * @property {string} [s_city]
 * @property {number} [item_id]
 * @property {string} [store_pincode]
 * @property {string} [size]
 * @property {boolean} [status]
 * @property {_ArticleAssignment} [article_assignment]
 * @property {number} [company_id]
 * @property {number} [index]
 */

/**
 * @typedef FailedResponse
 * @property {string} message
 */

/**
 * @typedef CDN
 * @property {string} url
 */

/**
 * @typedef Upload
 * @property {number} expiry
 * @property {string} url
 */

/**
 * @typedef StartResponse
 * @property {string} file_name
 * @property {string} file_path
 * @property {string} content_type
 * @property {string} [method]
 * @property {string} namespace
 * @property {string} operation
 * @property {number} size
 * @property {Upload} upload
 * @property {CDN} cdn
 * @property {string[]} [tags]
 */

/**
 * @typedef StartRequest
 * @property {string} file_name
 * @property {string} content_type
 * @property {number} size
 * @property {string[]} [tags]
 * @property {Object} [params]
 */

/**
 * @typedef CompleteResponse
 * @property {string} _id
 * @property {string} file_name
 * @property {string} file_path
 * @property {string} content_type
 * @property {string} namespace
 * @property {string} operation
 * @property {number} size
 * @property {Upload} upload
 * @property {CDN} cdn
 * @property {boolean} success
 * @property {string[]} [tags]
 * @property {string} created_on
 * @property {string} modified_on
 */

/**
 * @typedef Opts
 * @property {number} [attempts]
 * @property {number} [timestamp]
 * @property {number} [delay]
 */

/**
 * @typedef CopyFileTask
 * @property {string} id
 * @property {string} name
 * @property {BulkRequest} data
 * @property {Opts} opts
 * @property {number} progress
 * @property {number} delay
 * @property {number} timestamp
 * @property {number} attempts_made
 * @property {string[]} [stacktrace]
 * @property {number} finished_on
 * @property {number} processed_on
 */

/**
 * @typedef BulkUploadResponse
 * @property {string} tracking_url
 * @property {CopyFileTask} task
 */

/**
 * @typedef ReqConfiguration
 * @property {number} [concurrency]
 */

/**
 * @typedef Destination
 * @property {string} namespace
 * @property {string} rewrite
 * @property {string} [basepath]
 */

/**
 * @typedef BulkRequest
 * @property {string[]} urls
 * @property {Destination} destination
 * @property {ReqConfiguration} [configuration]
 */

/**
 * @typedef Urls
 * @property {string} url
 * @property {string} signed_url
 * @property {number} expiry
 */

/**
 * @typedef SignUrlResponse
 * @property {Urls[]} urls
 */

/**
 * @typedef SignUrlRequest
 * @property {number} expiry
 * @property {string[]} urls
 */

/**
 * @typedef DbRecord
 * @property {boolean} success
 * @property {string[]} tags
 * @property {string} _id
 * @property {string} file_name
 * @property {string} [operation]
 * @property {string} namespace
 * @property {string} content_type
 * @property {string} file_path
 * @property {Upload} upload
 * @property {CDN} cdn
 * @property {string} created_on
 * @property {string} modified_on
 */

/**
 * @typedef BrowseResponse
 * @property {DbRecord[]} items
 * @property {Page} page
 */

/**
 * @typedef RedirectDevice
 * @property {string} [link]
 * @property {string} [type]
 */

/**
 * @typedef WebRedirect
 * @property {string} [link]
 * @property {string} [type]
 */

/**
 * @typedef Redirects
 * @property {RedirectDevice} [ios]
 * @property {RedirectDevice} [android]
 * @property {WebRedirect} [web]
 * @property {boolean} [force_web]
 */

/**
 * @typedef CampaignShortLink
 * @property {string} [source]
 * @property {string} [medium]
 */

/**
 * @typedef Attribution
 * @property {string} [campaign_cookie_expiry]
 */

/**
 * @typedef SocialMediaTags
 * @property {string} [title]
 * @property {string} [description]
 * @property {string} [image]
 */

/**
 * @typedef ShortLinkReq
 * @property {string} title
 * @property {string} url
 * @property {string} [hash]
 * @property {boolean} [active]
 * @property {string} [expire_at]
 * @property {boolean} [enable_tracking]
 * @property {boolean} [personalized]
 * @property {CampaignShortLink} [campaign]
 * @property {Redirects} [redirects]
 * @property {Attribution} [attribution]
 * @property {SocialMediaTags} [social_media_tags]
 * @property {number} [count]
 */

/**
 * @typedef UrlInfo
 * @property {string} [original]
 * @property {string} [short]
 * @property {string} [hash]
 */

/**
 * @typedef ShortLinkRes
 * @property {string} [title]
 * @property {UrlInfo} [url]
 * @property {string} [created_by]
 * @property {boolean} [app_redirect]
 * @property {string} [fallback]
 * @property {boolean} [active]
 * @property {string} [_id]
 * @property {boolean} [enable_tracking]
 * @property {string} [expire_at]
 * @property {string} [application]
 * @property {string} [user_id]
 * @property {string} [created_at]
 * @property {Object} [meta]
 * @property {string} [updated_at]
 * @property {boolean} [personalized]
 * @property {CampaignShortLink} [campaign]
 * @property {Redirects} [redirects]
 * @property {Attribution} [attribution]
 * @property {SocialMediaTags} [social_media_tags]
 * @property {number} [count]
 */

/**
 * @typedef ShortLinkList
 * @property {ShortLinkRes[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef ErrorRes
 * @property {string} [message]
 */

/**
 * @typedef DataTresholdDTO
 * @property {number} [min_price]
 * @property {number} [safe_stock]
 * @property {number} [period_threshold]
 * @property {string} [period_threshold_type]
 * @property {GenericDTO[]} [period_type_list]
 */

/**
 * @typedef GenericDTO
 * @property {string} [text]
 * @property {Object} [value]
 */

/**
 * @typedef JobConfigDTO
 * @property {Object} [integration_data]
 * @property {string} [company_name]
 * @property {string} integration
 * @property {number} company_id
 * @property {TaskDTO} [task_details]
 * @property {DataTresholdDTO} [threshold_details]
 * @property {string} [job_code]
 * @property {string} [alias]
 */

/**
 * @typedef TaskDTO
 * @property {number} [type]
 * @property {GenericDTO[]} [group_list]
 */

/**
 * @typedef ResponseEnvelopeString
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {string} [items]
 * @property {string} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */

/**
 * @typedef KafkaMetaModel
 * @property {string} [job_type]
 * @property {number} [batch_id]
 * @property {string} [action]
 * @property {string[]} [trace]
 * @property {string} [created_on]
 * @property {number} [created_timestamp]
 */

/**
 * @typedef SuppressStoreModel
 * @property {number[]} [stores]
 */

/**
 * @typedef SuppressStorePayload
 * @property {SuppressStoreModel[]} [payload]
 * @property {KafkaMetaModel} [meta]
 */

/**
 * @typedef KafkaResponse
 * @property {number} [offset]
 * @property {number} [partition]
 */

/**
 * @typedef ResponseEnvelopeKafkaResponse
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {KafkaResponse} [items]
 * @property {KafkaResponse} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */

/**
 * @typedef GCompany
 * @property {string} [_id]
 * @property {string} [integration]
 * @property {string} [level]
 * @property {number} [uid]
 * @property {boolean} [opted]
 * @property {string[]} [permissions]
 * @property {string} [token]
 * @property {string} [name]
 * @property {GStore[]} [stores]
 */

/**
 * @typedef GStore
 * @property {string} [_id]
 * @property {string} [integration]
 * @property {string} [level]
 * @property {number} [uid]
 * @property {boolean} [opted]
 * @property {string[]} [permissions]
 * @property {string} [token]
 * @property {string} [code]
 * @property {string} [name]
 * @property {StoreData} [data]
 */

/**
 * @typedef Metum
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [value]
 */

/**
 * @typedef ResponseEnvelopeListSlingshotConfigurationDetail
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {SlingshotConfigurationDetail[]} [items]
 * @property {SlingshotConfigurationDetail[]} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */

/**
 * @typedef SlingshotConfigurationDetail
 * @property {SlingshotIntegration} [integration]
 * @property {GCompany[]} [companies]
 */

/**
 * @typedef SlingshotIntegration
 * @property {string} [_id]
 * @property {string} [description]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {Metum[]} [meta]
 */

/**
 * @typedef StoreData
 * @property {string} [location_id]
 */

/**
 * @typedef AWSS3config
 * @property {string} [bucket]
 * @property {string} [region]
 * @property {string} [dir]
 * @property {string} [access_key]
 * @property {string} [secret_key]
 * @property {string} [local_file_path]
 * @property {string} [archive_path]
 * @property {boolean} [archive]
 * @property {boolean} [delete]
 * @property {boolean} [unzip]
 * @property {string} [zip_format]
 * @property {string} [file_regex]
 * @property {ArchiveConfig} [archive_config]
 */

/**
 * @typedef ArchiveConfig
 * @property {boolean} [delete]
 * @property {boolean} [archive]
 * @property {string} [archive_dir]
 */

/**
 * @typedef Audit
 * @property {string} [created_by]
 * @property {string} [modified_by]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */

/**
 * @typedef CatalogMasterConfig
 * @property {string} [source_slug]
 */

/**
 * @typedef CompanyConfig
 * @property {number} [company_id]
 * @property {number[]} [exclude_steps]
 * @property {string[]} [hidden_closet_keys]
 * @property {Object} [open_tags]
 * @property {string[]} [tax_identifiers]
 * @property {number} [delete_quantity_threshold]
 */

/**
 * @typedef DBConfig
 * @property {string} [vendor]
 * @property {string} [host]
 * @property {number} [port]
 * @property {string} [username]
 * @property {string} [password]
 * @property {string} [dbname]
 * @property {string} [query]
 * @property {boolean} [procedure]
 * @property {string} [driver_class]
 * @property {string} [jdbc_url]
 * @property {Object} [optional_properties]
 */

/**
 * @typedef DBConnectionProfile
 * @property {string} [inventory]
 */

/**
 * @typedef DBParamConfig
 * @property {Object} [params]
 */

/**
 * @typedef DefaultHeadersDTO
 * @property {PropBeanDTO} [store]
 * @property {PropBeanDTO} [intf_article_id]
 * @property {PropBeanDTO} [price_effective]
 * @property {PropBeanDTO} [quantity]
 */

/**
 * @typedef DocMappingConfig
 * @property {Object} [properties]
 * @property {number} [junk_data_threshold_count]
 * @property {PropBeanConfig[]} [prop_bean_configs]
 * @property {string} [unwind_field]
 * @property {DefaultHeadersDTO} [default_headers]
 */

/**
 * @typedef EmailConfig
 * @property {string} [recepient]
 * @property {string} [host]
 * @property {string} [username]
 * @property {string} [password]
 * @property {boolean} [unzip]
 * @property {boolean} [read_from_content]
 * @property {boolean} [filter_based_on_recepients]
 * @property {string} [pcol]
 * @property {string} [subject_line_regex]
 * @property {string} [sender_address]
 * @property {string} [local_dir]
 * @property {string[]} [folder_name_hierarchies]
 * @property {string} [attachment_regex]
 * @property {string} [body_content_regex]
 * @property {boolean} [password_protected]
 * @property {string} [zip_format]
 * @property {boolean} [attachment_mandate]
 * @property {boolean} [filter_files_after_extraction]
 * @property {ArchiveConfig} [archive_config]
 * @property {boolean} [read_all_unread_mails]
 * @property {string} [content_type]
 * @property {boolean} [downloadable_link]
 * @property {Object} [properties]
 */

/**
 * @typedef FTPConfig
 * @property {string} [host]
 * @property {number} [port]
 * @property {string} [username]
 * @property {string} [password]
 * @property {boolean} [unzip]
 * @property {number} [retries]
 * @property {number} [interval]
 * @property {string} [local_dir]
 * @property {string} [remote_dir]
 * @property {string} [zip_file_regex]
 * @property {ArchiveConfig} [archive_config]
 * @property {string} [file_regex]
 * @property {string} [zip_format]
 * @property {boolean} [read_all_files]
 */

/**
 * @typedef FileConfig
 * @property {string} [delimiter]
 * @property {string} [charset]
 * @property {Object} [properties]
 * @property {boolean} [file_has_header]
 * @property {number} [header_index]
 * @property {string[]} [header_array]
 * @property {number} [data_start_index]
 * @property {PropBeanConfig[]} [prop_bean_configs]
 * @property {number} [junk_data_threshold_count]
 * @property {string} [file_type]
 * @property {boolean} [line_validity_check]
 * @property {string[]} [sheet_names]
 * @property {boolean} [read_all_sheets]
 * @property {string} [quote_char]
 * @property {string} [escape_char]
 * @property {DefaultHeadersDTO} [default_headers]
 */

/**
 * @typedef GoogleSpreadSheetConfig
 * @property {string} [range]
 * @property {string} [sheet_id]
 * @property {string} [client_secret_location]
 * @property {string} [cred_storage_directory]
 * @property {string} [local_dir]
 * @property {ArchiveConfig} [archive_config]
 */

/**
 * @typedef HttpConfig
 * @property {string} [hosturl]
 * @property {string} [username]
 * @property {string} [password]
 * @property {Object} [request_params]
 * @property {string} [http_method]
 * @property {string} [request_payload]
 * @property {string} [local_path]
 * @property {ArchiveConfig} [archive_config]
 */

/**
 * @typedef JobConfig
 * @property {number} [_id]
 * @property {string} [job_code]
 * @property {string} [task_type]
 * @property {number} [sync_delay]
 * @property {string} [cron_expression]
 * @property {StoreFilter} [store_filter]
 * @property {ProcessConfig} [process_config]
 * @property {StoreConfig[]} [store_config]
 * @property {Object} [properties]
 * @property {boolean} [immediate_first_run]
 * @property {boolean} [disable]
 * @property {string[]} [dependent_job_codes]
 * @property {CompanyConfig[]} [company_config]
 * @property {number[]} [company_ids]
 * @property {string[]} [tax_identifiers]
 * @property {string} [priority]
 * @property {number} [period_threshold]
 * @property {string} [period_threshold_type]
 * @property {DBConnectionProfile} [db_connection_profile]
 * @property {Object} [params]
 * @property {Object} [open_tags]
 * @property {number} [delete_quantity_threshold]
 * @property {CatalogMasterConfig} [catalog_master_config]
 * @property {string[]} [aggregator_types]
 * @property {string} [integration_type]
 * @property {number} [min_price]
 * @property {Audit} [audit]
 * @property {number} [version]
 * @property {string} [alias]
 */

/**
 * @typedef JobConfigRawDTO
 * @property {string} company_name
 * @property {string} integration
 * @property {number} company_id
 * @property {JobConfig} [data]
 */

/**
 * @typedef JsonDocConfig
 * @property {PropBeanConfig[]} [prop_bean_configs]
 */

/**
 * @typedef LocalFileConfig
 * @property {number} [retries]
 * @property {number} [interval]
 * @property {string} [local_dir]
 * @property {string} [working_dir]
 * @property {boolean} [unzip]
 * @property {string} [zip_file_regex]
 * @property {string} [file_regex]
 * @property {string} [zip_format]
 * @property {ArchiveConfig} [archive_config]
 * @property {boolean} [read_all_files]
 */

/**
 * @typedef MongoDocConfig
 * @property {string} [collection_name]
 * @property {Object} [find_query]
 * @property {Object} [projection_query]
 * @property {PropBeanConfig[]} [prop_bean_configs]
 * @property {Object[]} [aggregate_pipeline]
 * @property {boolean} [skip_save]
 */

/**
 * @typedef OAuthConfig
 * @property {number} [limit]
 * @property {number} [pages]
 * @property {number} [interval]
 * @property {string} [consumer_key]
 * @property {string} [consumer_secret]
 * @property {string} [token]
 * @property {string} [token_secret]
 * @property {string} [rest_url]
 * @property {string} [rest_base_url]
 * @property {string} [function_name]
 */

/**
 * @typedef ProcessConfig
 * @property {DBConfig} [db_config]
 * @property {DBParamConfig} [db_param_config]
 * @property {SFTPConfig} [sftp_config]
 * @property {AWSS3config} [aws_s3_config]
 * @property {MongoDocConfig} [mongo_doc_config]
 * @property {FTPConfig} [ftp_config]
 * @property {EmailConfig} [email_config]
 * @property {FileConfig} [file_config]
 * @property {JsonDocConfig} [json_doc_config]
 * @property {DocMappingConfig} [doc_mapping_config]
 * @property {TaskStepConfig} [task_step_config]
 * @property {HttpConfig} [http_config]
 * @property {LocalFileConfig} [local_file_config]
 * @property {OAuthConfig} [oauth_config]
 * @property {GoogleSpreadSheetConfig} [google_spreadsheet_config]
 */

/**
 * @typedef PropBeanConfig
 * @property {boolean} [required]
 * @property {boolean} [optional]
 * @property {Send} [send]
 * @property {Object[]} [validations]
 * @property {string[]} [values]
 * @property {boolean} [include]
 * @property {string} [source_field]
 * @property {string[]} [source_fields]
 * @property {string} [destination_field]
 * @property {string} [data_type]
 * @property {Object} [default_value]
 * @property {Object} [const_value]
 * @property {string} [concat_str]
 * @property {string} [function_name]
 * @property {string} [transformer_name]
 * @property {string} [all_param_function_name]
 * @property {string} [sub_separator]
 * @property {string} [index_field]
 * @property {boolean} [ignore_if_not_exists]
 * @property {string} [identifier_type]
 * @property {Object} [projection_query]
 * @property {boolean} [enrich_from_master]
 */

/**
 * @typedef PropBeanDTO
 * @property {boolean} [required]
 * @property {boolean} [optional]
 * @property {boolean} [include]
 * @property {string} [source_field]
 * @property {string[]} [source_fields]
 * @property {string} [destination_field]
 * @property {string} [data_type]
 * @property {Object} [default_value]
 * @property {Object} [const_value]
 * @property {string} [concat_str]
 * @property {string} [function_name]
 * @property {string} [transformer_name]
 * @property {string} [all_param_function_name]
 * @property {string} [sub_separator]
 * @property {string} [index_field]
 * @property {boolean} [ignore_if_not_exists]
 * @property {string} [identifier_type]
 * @property {Object} [projection_query]
 * @property {boolean} [enrich_from_master]
 */

/**
 * @typedef ResponseEnvelopeListJobConfigRawDTO
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {JobConfigRawDTO[]} [items]
 * @property {JobConfigRawDTO[]} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */

/**
 * @typedef SFTPConfig
 * @property {string} [host]
 * @property {number} [port]
 * @property {string} [username]
 * @property {string} [password]
 * @property {boolean} [unzip]
 * @property {number} [retries]
 * @property {number} [interval]
 * @property {string} [private_key_path]
 * @property {boolean} [strict_host_key_checking]
 * @property {string} [local_dir]
 * @property {string} [remote_dir]
 * @property {boolean} [password_protected]
 * @property {string} [zip_file_regex]
 * @property {string} [file_regex]
 * @property {string} [zip_format]
 * @property {ArchiveConfig} [archive_config]
 * @property {boolean} [read_all_files]
 */

/**
 * @typedef Send
 * @property {boolean} [raw]
 * @property {boolean} [processed]
 */

/**
 * @typedef StoreConfig
 * @property {string} [job_code]
 * @property {string} [storeid]
 * @property {string} [store_alias]
 * @property {string} [store_file_regex]
 * @property {string} [store_file_name]
 * @property {ProcessConfig} [process_config]
 * @property {Object} [properties]
 */

/**
 * @typedef StoreFilter
 * @property {string[]} [include_tags]
 * @property {string[]} [exclude_tags]
 * @property {Object} [query]
 */

/**
 * @typedef TaskConfig
 * @property {string} [name]
 * @property {number} [task_config_id]
 * @property {TaskParam[]} [task_params]
 */

/**
 * @typedef TaskParam
 * @property {string} [name]
 * @property {Object} [value]
 */

/**
 * @typedef TaskStepConfig
 * @property {TaskConfig[]} [task_configs]
 * @property {number[]} [task_config_ids]
 * @property {number[]} [task_config_group_ids]
 */

/**
 * @typedef JobStepsDTO
 * @property {string} [step_name]
 * @property {string} [type]
 * @property {number} [step_execution_time]
 * @property {number} [start_count]
 * @property {number} [end_count]
 * @property {number} [deleted_count]
 * @property {string} [processed_start_time]
 * @property {string} [processed_at]
 */

/**
 * @typedef ResponseEnvelopeListJobStepsDTO
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {JobStepsDTO[]} [items]
 * @property {JobStepsDTO[]} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */

/**
 * @typedef ResponseEnvelopeListJobConfigDTO
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {JobConfigDTO[]} [items]
 * @property {JobConfigDTO[]} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */

/**
 * @typedef ResponseEnvelopeJobConfigDTO
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {JobConfigDTO} [items]
 * @property {JobConfigDTO} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */

/**
 * @typedef JobHistoryDto
 * @property {number} [total_added_count]
 * @property {number} [total_updated_count]
 * @property {number} [total_suppressed_count]
 * @property {number} [total_initial_count]
 * @property {number} [job_id]
 * @property {string} [status]
 * @property {string} [job_code]
 * @property {string} [processed_on]
 * @property {string[]} [filename]
 * @property {string} [error_type]
 * @property {string} [message]
 */

/**
 * @typedef JobMetricsDto
 * @property {string} [job_code]
 * @property {string} [is_run_more_than_usual]
 * @property {JobHistoryDto[]} [job_history]
 * @property {number} [total_success_count]
 * @property {number} [total_failure_count]
 * @property {number} [total_warning_count]
 * @property {number} [total_suppressed_count]
 * @property {number} [total_job_runs]
 */

/**
 * @typedef ResponseEnvelopeJobMetricsDto
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {JobMetricsDto} [items]
 * @property {JobMetricsDto} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */

/**
 * @typedef JobConfigListDTO
 * @property {string} [code]
 * @property {string} [alias]
 * @property {string} [modified_by]
 * @property {string} [created_by]
 * @property {string} [modified_on]
 * @property {string} [created_on]
 * @property {boolean} [active]
 * @property {string} [type]
 */

/**
 * @typedef ResponseEnvelopeListJobConfigListDTO
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {JobConfigListDTO[]} [items]
 * @property {JobConfigListDTO[]} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */

/**
 * @typedef ApplicationInventory
 * @property {AppInventoryConfig} [inventory]
 * @property {AuthenticationConfig} [authentication]
 * @property {ArticleAssignmentConfig} [article_assignment]
 * @property {RewardPointsConfig} [reward_points]
 * @property {AppCartConfig} [cart]
 * @property {AppPaymentConfig} [payment]
 * @property {AppOrderConfig} [order]
 * @property {AppLogisticsConfig} [logistics]
 * @property {string} [business]
 * @property {boolean} [comms_enabled]
 * @property {string[]} [platforms]
 * @property {string} [_id]
 * @property {LoyaltyPointsConfig} [loyalty_points]
 * @property {string} [app]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [modified_by]
 */

/**
 * @typedef AppInventoryConfig
 * @property {InventoryBrand} [brand]
 * @property {InventoryStore} [store]
 * @property {InventoryCategory} [category]
 * @property {InventoryPrice} [price]
 * @property {InventoryDiscount} [discount]
 * @property {boolean} [out_of_stock]
 * @property {boolean} [only_verified_products]
 * @property {boolean} [franchise_enabled]
 * @property {Object[]} [exclude_category]
 * @property {string[]} [image]
 * @property {Object[]} [company_store]
 */

/**
 * @typedef InventoryBrand
 * @property {string} [criteria]
 * @property {Object[]} [brands]
 */

/**
 * @typedef InventoryStore
 * @property {string} [criteria]
 * @property {Object[]} [stores]
 * @property {AppStoreRules} [rules]
 */

/**
 * @typedef AppStoreRules
 * @property {number[]} [companies]
 * @property {Object[]} [brands]
 */

/**
 * @typedef InventoryCategory
 * @property {string} [criteria]
 * @property {Object[]} [categories]
 */

/**
 * @typedef InventoryPrice
 * @property {number} [min]
 * @property {number} [max]
 */

/**
 * @typedef InventoryDiscount
 * @property {number} [min]
 * @property {number} [max]
 */

/**
 * @typedef AuthenticationConfig
 * @property {boolean} [required]
 * @property {string} [provider]
 */

/**
 * @typedef ArticleAssignmentConfig
 * @property {ArticleAssignmentRules} [rules]
 * @property {boolean} [post_order_reassignment]
 */

/**
 * @typedef ArticleAssignmentRules
 * @property {StorePriority} [store_priority]
 */

/**
 * @typedef StorePriority
 * @property {boolean} [enabled]
 * @property {Object[]} [storetype_order]
 */

/**
 * @typedef AppCartConfig
 * @property {DeliveryCharges} [delivery_charges]
 * @property {boolean} [enabled]
 * @property {number} [max_cart_items]
 * @property {number} [min_cart_value]
 * @property {boolean} [bulk_coupons]
 * @property {boolean} [revenue_engine_coupon]
 */

/**
 * @typedef DeliveryCharges
 * @property {boolean} [enabled]
 * @property {Charges} [charges]
 */

/**
 * @typedef Charges
 * @property {number} [threshold]
 * @property {number} [charges]
 */

/**
 * @typedef AppPaymentConfig
 * @property {CallbackUrl} [callback_url]
 * @property {Methods} [methods]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {string} [mode_of_payment]
 * @property {string} [source]
 * @property {boolean} [enabled]
 * @property {number} [cod_amount_limit]
 * @property {number} [cod_charges]
 */

/**
 * @typedef CallbackUrl
 * @property {string} [app]
 * @property {string} [web]
 */

/**
 * @typedef Methods
 * @property {PaymentModeConfig} [pl]
 * @property {PaymentModeConfig} [card]
 * @property {PaymentModeConfig} [nb]
 * @property {PaymentModeConfig} [wl]
 * @property {PaymentModeConfig} [ps]
 * @property {PaymentModeConfig} [upi]
 * @property {PaymentModeConfig} [qr]
 * @property {PaymentModeConfig} [cod]
 * @property {PaymentModeConfig} [pp]
 * @property {PaymentModeConfig} [jp]
 * @property {PaymentModeConfig} [pac]
 * @property {PaymentModeConfig} [fc]
 * @property {PaymentModeConfig} [jiopp]
 * @property {PaymentModeConfig} [stripepg]
 * @property {PaymentModeConfig} [juspaypg]
 * @property {PaymentModeConfig} [payubizpg]
 * @property {PaymentModeConfig} [payumoneypg]
 * @property {PaymentModeConfig} [rupifipg]
 * @property {PaymentModeConfig} [simpl]
 */

/**
 * @typedef PaymentModeConfig
 * @property {boolean} [enabled]
 */

/**
 * @typedef PaymentSelectionLock
 * @property {boolean} [enabled]
 * @property {string} [default_options]
 * @property {string} [payment_identifier]
 */

/**
 * @typedef AppOrderConfig
 * @property {boolean} [enabled]
 * @property {boolean} [force_reassignment]
 * @property {string} [message]
 */

/**
 * @typedef AppLogisticsConfig
 * @property {boolean} [logistics_by_seller]
 * @property {boolean} [serviceability_check]
 * @property {boolean} [same_day_delivery]
 * @property {boolean} [dp_assignment]
 */

/**
 * @typedef LoyaltyPointsConfig
 * @property {boolean} [enabled]
 * @property {boolean} [auto_apply]
 */

/**
 * @typedef AppInventoryPartialUpdate
 * @property {RewardPointsConfig} [reward_points]
 * @property {AppCartConfig} [cart]
 * @property {AppPaymentConfig} [payment]
 * @property {LoyaltyPointsConfig} [loyalty_points]
 * @property {boolean} [comms_enabled]
 */

/**
 * @typedef BrandCompanyInfo
 * @property {string} [company_name]
 * @property {number} [company_id]
 */

/**
 * @typedef CompanyByBrandsRequest
 * @property {number} brands
 * @property {string} [search_text]
 */

/**
 * @typedef CompanyByBrandsResponse
 * @property {BrandCompanyInfo[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef StoreByBrandsRequest
 * @property {number} [company_id]
 * @property {number} brands
 * @property {string} [search_text]
 */

/**
 * @typedef StoreByBrandsResponse
 * @property {BrandStoreInfo[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef BrandStoreInfo
 * @property {string} [store_name]
 * @property {number} [store_id]
 * @property {string} [store_type]
 * @property {string} [store_code]
 * @property {OptedStoreAddress} [store_address]
 * @property {OptedCompany} [company]
 */

/**
 * @typedef CompanyBrandInfo
 * @property {string} [name]
 * @property {number} [value]
 * @property {string} [brand_logo_url]
 * @property {string} [brand_banner_url]
 * @property {string} [brand_banner_portrait_url]
 */

/**
 * @typedef BrandsByCompanyResponse
 * @property {CompanyBrandInfo} [brands]
 */

/**
 * @typedef CreateApplicationRequest
 * @property {App} [app]
 * @property {AppInventory} [configuration]
 * @property {AppDomain} [domain]
 */

/**
 * @typedef CreateAppResponse
 * @property {Application} [app]
 * @property {ApplicationInventory} [configuration]
 */

/**
 * @typedef ApplicationsResponse
 * @property {Application[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef MobileAppConfiguration
 * @property {boolean} [is_active]
 * @property {string} [_id]
 * @property {string} [app_name]
 * @property {LandingImage} [landing_image]
 * @property {SplashImage} [splash_image]
 * @property {string} [application]
 * @property {string} [platform_type]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 * @property {string} [package_name]
 */

/**
 * @typedef LandingImage
 * @property {string} [aspect_ratio]
 * @property {string} [secure_url]
 */

/**
 * @typedef SplashImage
 * @property {string} [aspect_ratio]
 * @property {string} [secure_url]
 */

/**
 * @typedef MobileAppConfigRequest
 * @property {string} [app_name]
 * @property {LandingImage} [landing_image]
 * @property {SplashImage} [splash_image]
 * @property {boolean} [is_active]
 */

/**
 * @typedef BuildVersionHistory
 * @property {BuildVersion} [versions]
 * @property {string} [latest_available_version_name]
 */

/**
 * @typedef BuildVersion
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [platform_type]
 * @property {string} [build_status]
 * @property {string} [version_name]
 * @property {number} [version_code]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */

/**
 * @typedef AppSupportedCurrency
 * @property {string} [_id]
 * @property {string[]} [supported_currency]
 * @property {string} [application]
 * @property {DefaultCurrency} [default_currency]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 */

/**
 * @typedef DefaultCurrency
 * @property {string} [ref]
 * @property {string} [code]
 */

/**
 * @typedef CurrencyConfig
 * @property {string} [_id]
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {string} [code]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [decimal_digits]
 * @property {string} [symbol]
 */

/**
 * @typedef DomainAdd
 * @property {string} [name]
 */

/**
 * @typedef DomainAddRequest
 * @property {DomainAdd} [domain]
 */

/**
 * @typedef DomainsResponse
 * @property {Domain[]} [domains]
 */

/**
 * @typedef UpdateDomain
 * @property {string} [_id]
 */

/**
 * @typedef UpdateDomainTypeRequest
 * @property {UpdateDomain} [domain]
 * @property {string} [action]
 */

/**
 * @typedef DomainStatusRequest
 * @property {string} [domain_url]
 */

/**
 * @typedef DomainStatus
 * @property {string} [display]
 * @property {boolean} [status]
 */

/**
 * @typedef DomainStatusResponse
 * @property {boolean} [connected]
 * @property {DomainStatus[]} [status]
 */

/**
 * @typedef DomainSuggestionsRequest
 * @property {string} [domain_url]
 * @property {boolean} [custom]
 */

/**
 * @typedef DomainSuggestion
 * @property {string} name
 * @property {boolean} [unsupported]
 * @property {boolean} is_available
 * @property {number} [price]
 * @property {string} [currency]
 */

/**
 * @typedef DomainSuggestionsResponse
 * @property {DomainSuggestion[]} [domains]
 */

/**
 * @typedef GetIntegrationsOptInsResponse
 * @property {IntegrationOptIn[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef IntegrationOptIn
 * @property {Validators} [validators]
 * @property {string} [description]
 * @property {string} [description_html]
 * @property {string} [constants]
 * @property {Object[]} [companies]
 * @property {string[]} [support]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {IntegrationMeta[]} [meta]
 * @property {string} [icon]
 * @property {string} [owner]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [token]
 * @property {string} [secret]
 * @property {number} [__v]
 */

/**
 * @typedef Validators
 * @property {CompanyValidator} [company]
 * @property {StoreValidator} [store]
 * @property {InventoryValidator} [inventory]
 * @property {OrderValidator} [order]
 */

/**
 * @typedef CompanyValidator
 * @property {JsonSchema[]} [json_schema]
 * @property {string} [browser_script]
 */

/**
 * @typedef JsonSchema
 * @property {string} [display]
 * @property {string} [key]
 * @property {string} [type]
 * @property {string} [tooltip]
 */

/**
 * @typedef StoreValidator
 * @property {JsonSchema[]} [json_schema]
 * @property {string} [browser_script]
 */

/**
 * @typedef InventoryValidator
 * @property {JsonSchema[]} [json_schema]
 * @property {string} [browser_script]
 */

/**
 * @typedef OrderValidator
 * @property {JsonSchema[]} [json_schema]
 * @property {string} [browser_script]
 */

/**
 * @typedef IntegrationMeta
 * @property {boolean} [is_public]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [value]
 */

/**
 * @typedef Integration
 * @property {Validators} [validators]
 * @property {string} [description]
 * @property {string} [description_html]
 * @property {Object} [constants]
 * @property {Object[]} [companies]
 * @property {string[]} [support]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {IntegrationMeta[]} [meta]
 * @property {string} [icon]
 * @property {string} [owner]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [token]
 * @property {string} [secret]
 * @property {number} [__v]
 */

/**
 * @typedef IntegrationConfigResponse
 * @property {IntegrationLevel[]} [items]
 */

/**
 * @typedef IntegrationLevel
 * @property {boolean} [opted]
 * @property {Object[]} [permissions]
 * @property {LastPatch[]} [last_patch]
 * @property {string} [_id]
 * @property {string} [integration]
 * @property {string} [level]
 * @property {number} [uid]
 * @property {IntegrationMeta[]} [meta]
 * @property {string} [token]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 * @property {Object} [data]
 */

/**
 * @typedef UpdateIntegrationLevelRequest
 * @property {IntegrationLevel[]} [items]
 */

/**
 * @typedef OptedStoreIntegration
 * @property {boolean} [other_opted]
 * @property {IntegrationOptIn} [other_integration]
 * @property {OtherEntity} [other_entity]
 */

/**
 * @typedef OtherEntity
 * @property {boolean} [opted]
 * @property {string[]} [permissions]
 * @property {LastPatch[]} [last_patch]
 * @property {string} [_id]
 * @property {string} [integration]
 * @property {string} [level]
 * @property {number} [uid]
 * @property {OtherEntityData} [data]
 * @property {Object[]} [meta]
 * @property {string} [token]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */

/**
 * @typedef LastPatch
 * @property {string} [op]
 * @property {string} [path]
 * @property {string} [value]
 */

/**
 * @typedef OtherEntityData
 * @property {string} [article_identifier]
 */

/**
 * @typedef App
 * @property {string} [company_id]
 * @property {string} [channel_type]
 * @property {ApplicationAuth} [auth]
 * @property {string} [name]
 * @property {string} [desc]
 */

/**
 * @typedef AppInventory
 * @property {InventoryBrandRule} [brand]
 * @property {InventoryStoreRule} [store]
 * @property {string[]} [image]
 * @property {boolean} [franchise_enabled]
 * @property {boolean} [out_of_stock]
 * @property {boolean} [only_verified_products]
 * @property {InventoryPaymentConfig} [payment]
 * @property {InventoryArticleAssignment} [article_assignment]
 */

/**
 * @typedef AppDomain
 * @property {string} [name]
 */

/**
 * @typedef CompaniesResponse
 * @property {AppInventoryCompanies} [items]
 * @property {Page} [page]
 */

/**
 * @typedef AppInventoryCompanies
 * @property {number} [uid]
 * @property {string} [name]
 * @property {string} [company_type]
 */

/**
 * @typedef StoresResponse
 * @property {AppInventoryStores} [items]
 * @property {Page} [page]
 */

/**
 * @typedef AppInventoryStores
 * @property {string} [_id]
 * @property {string} [modified_on]
 * @property {number} [uid]
 * @property {string} [name]
 * @property {string} [display_name]
 * @property {string} [store_type]
 * @property {string} [store_code]
 * @property {number} [company_id]
 */

/**
 * @typedef FilterOrderingStoreRequest
 * @property {boolean} [all_stores]
 * @property {number[]} [deployed_stores]
 * @property {string} [q]
 */

/**
 * @typedef DeploymentMeta
 * @property {number[]} [deployed_stores]
 * @property {boolean} [all_stores]
 * @property {boolean} [enabled]
 * @property {string} [type]
 * @property {string} [_id]
 * @property {string} [app]
 */

/**
 * @typedef OrderingStoreConfig
 * @property {DeploymentMeta} [deployment_meta]
 */

/**
 * @typedef OtherSellerCompany
 * @property {number} [uid]
 * @property {string} [name]
 */

/**
 * @typedef OtherSellerApplication
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [_id]
 * @property {string} [domain]
 * @property {OtherSellerCompany} [company]
 * @property {string} [opt_type]
 */

/**
 * @typedef OtherSellerApplications
 * @property {OtherSellerApplication[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef OptedApplicationResponse
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [_id]
 * @property {string} [domain]
 * @property {OptedCompany} [company]
 * @property {OptedInventory} [opted_inventory]
 * @property {OptOutInventory} [opt_out_inventory]
 */

/**
 * @typedef OptedCompany
 * @property {number} [uid]
 * @property {string} [name]
 */

/**
 * @typedef OptedInventory
 * @property {OptType} [opt_type]
 * @property {Object} [items]
 */

/**
 * @typedef OptType
 * @property {string} [key]
 * @property {string} [display]
 */

/**
 * @typedef OptedStore
 * @property {string} [name]
 * @property {string} [store_code]
 * @property {string} [_id]
 * @property {string} [modified_on]
 * @property {number} [uid]
 * @property {OptedStoreAddress} [address]
 * @property {string} [display_name]
 * @property {string} [store_type]
 * @property {number} [company_id]
 */

/**
 * @typedef OptOutInventory
 * @property {number[]} store
 * @property {number[]} company
 */

/**
 * @typedef TokenResponse
 * @property {Tokens} [tokens]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */

/**
 * @typedef Tokens
 * @property {Firebase} [firebase]
 * @property {Moengage} [moengage]
 * @property {Segment} [segment]
 * @property {Gtm} [gtm]
 * @property {Freshchat} [freshchat]
 * @property {Safetynet} [safetynet]
 * @property {FyndRewards} [fynd_rewards]
 * @property {GoogleMap} [google_map]
 */

/**
 * @typedef Firebase
 * @property {Credentials} [credentials]
 * @property {boolean} [enabled]
 */

/**
 * @typedef Credentials
 * @property {Ios} [ios]
 * @property {Android} [android]
 * @property {string} [project_id]
 * @property {string} [gcm_sender_id]
 * @property {string} [application_id]
 * @property {string} [api_key]
 */

/**
 * @typedef Ios
 * @property {string} [application_id]
 * @property {string} [api_key]
 */

/**
 * @typedef Android
 * @property {string} [application_id]
 * @property {string} [api_key]
 */

/**
 * @typedef Moengage
 * @property {MoengageCredentials} [credentials]
 * @property {boolean} [enabled]
 */

/**
 * @typedef MoengageCredentials
 * @property {string} [app_id]
 */

/**
 * @typedef Segment
 * @property {SegmentCredentials} [credentials]
 * @property {boolean} [enabled]
 */

/**
 * @typedef SegmentCredentials
 * @property {string} [write_key]
 */

/**
 * @typedef Gtm
 * @property {GtmCredentials} [credentials]
 * @property {boolean} [enabled]
 */

/**
 * @typedef GtmCredentials
 * @property {string} [api_key]
 */

/**
 * @typedef Freshchat
 * @property {FreshchatCredentials} [credentials]
 * @property {boolean} [enabled]
 */

/**
 * @typedef FreshchatCredentials
 * @property {string} [app_id]
 * @property {string} [app_key]
 * @property {string} [web_token]
 */

/**
 * @typedef Safetynet
 * @property {SafetynetCredentials} [credentials]
 * @property {boolean} [enabled]
 */

/**
 * @typedef SafetynetCredentials
 * @property {string} [api_key]
 */

/**
 * @typedef FyndRewards
 * @property {FyndRewardsCredentials} [credentials]
 */

/**
 * @typedef FyndRewardsCredentials
 * @property {string} [public_key]
 */

/**
 * @typedef GoogleMap
 * @property {GoogleMapCredentials} [credentials]
 */

/**
 * @typedef GoogleMapCredentials
 * @property {string} [api_key]
 */

/**
 * @typedef RewardPointsConfig
 * @property {Credit} [credit]
 * @property {Debit} [debit]
 */

/**
 * @typedef Credit
 * @property {boolean} [enabled]
 */

/**
 * @typedef Debit
 * @property {boolean} [enabled]
 * @property {boolean} [auto_apply]
 * @property {string} [strategy_channel]
 */

/**
 * @typedef ProductDetailFeature
 * @property {string[]} [similar]
 * @property {boolean} [seller_selection]
 * @property {boolean} [update_product_meta]
 * @property {boolean} [request_product]
 */

/**
 * @typedef LaunchPage
 * @property {string} [page_type]
 * @property {Object} [params]
 * @property {Object} [query]
 */

/**
 * @typedef LandingPageFeature
 * @property {LaunchPage} [launch_page]
 * @property {boolean} [continue_as_guest]
 * @property {string} [login_btn_text]
 * @property {boolean} [show_domain_textbox]
 * @property {boolean} [show_register_btn]
 */

/**
 * @typedef RegistrationPageFeature
 * @property {boolean} [ask_store_address]
 */

/**
 * @typedef AppFeature
 * @property {ProductDetailFeature} [product_detail]
 * @property {LandingPageFeature} [landing_page]
 * @property {RegistrationPageFeature} [registration_page]
 * @property {HomePageFeature} [home_page]
 * @property {CommonFeature} [common]
 * @property {CartFeature} [cart]
 * @property {QrFeature} [qr]
 * @property {PcrFeature} [pcr]
 * @property {OrderFeature} [order]
 * @property {string} [_id]
 * @property {string} [app]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */

/**
 * @typedef HomePageFeature
 * @property {boolean} [order_processing]
 */

/**
 * @typedef CommonFeature
 * @property {CommunicationOptinDialogFeature} [communication_optin_dialog]
 * @property {DeploymentStoreSelectionFeature} [deployment_store_selection]
 * @property {ListingPriceFeature} [listing_price]
 * @property {CurrencyFeature} [currency]
 * @property {RevenueEngineFeature} [revenue_engine]
 * @property {FeedbackFeature} [feedback]
 * @property {CompareProductsFeature} [compare_products]
 * @property {RewardPointsConfig} [reward_points]
 */

/**
 * @typedef CommunicationOptinDialogFeature
 * @property {boolean} [visibility]
 */

/**
 * @typedef DeploymentStoreSelectionFeature
 * @property {boolean} [enabled]
 * @property {string} [type]
 */

/**
 * @typedef ListingPriceFeature
 * @property {string} [value]
 */

/**
 * @typedef CurrencyFeature
 * @property {string[]} [value]
 * @property {string} [type]
 * @property {string} [default_currency]
 */

/**
 * @typedef RevenueEngineFeature
 * @property {boolean} [enabled]
 */

/**
 * @typedef FeedbackFeature
 * @property {boolean} [enabled]
 */

/**
 * @typedef CompareProductsFeature
 * @property {boolean} [enabled]
 */

/**
 * @typedef CartFeature
 * @property {boolean} [gst_input]
 * @property {boolean} [staff_selection]
 * @property {boolean} [placing_for_customer]
 * @property {boolean} [google_map]
 * @property {boolean} [revenue_engine_coupon]
 */

/**
 * @typedef QrFeature
 * @property {boolean} [application]
 * @property {boolean} [products]
 * @property {boolean} [collections]
 */

/**
 * @typedef PcrFeature
 * @property {boolean} [staff_selection]
 */

/**
 * @typedef OrderFeature
 * @property {boolean} [buy_again]
 */

/**
 * @typedef AppFeatureRequest
 * @property {AppFeature} [feature]
 */

/**
 * @typedef AppFeatureResponse
 * @property {AppFeature} [feature]
 */

/**
 * @typedef UnhandledError
 * @property {string} [message]
 */

/**
 * @typedef InvalidPayloadRequest
 * @property {string} [message]
 */

/**
 * @typedef SuccessMessageResponse
 * @property {string} [message]
 */

/**
 * @typedef InventoryBrandRule
 * @property {string} [criteria]
 * @property {number[]} [brands]
 */

/**
 * @typedef StoreCriteriaRule
 * @property {number[]} [companies]
 * @property {number[]} [brands]
 */

/**
 * @typedef InventoryStoreRule
 * @property {string} [criteria]
 * @property {StoreCriteriaRule[]} [rules]
 * @property {number[]} [stores]
 */

/**
 * @typedef InventoryPaymentConfig
 * @property {string} [mode_of_payment]
 * @property {string} [source]
 */

/**
 * @typedef StorePriorityRule
 * @property {boolean} [enabled]
 * @property {string[]} [storetype_order]
 */

/**
 * @typedef ArticleAssignmentRule
 * @property {StorePriorityRule} [store_priority]
 */

/**
 * @typedef InventoryArticleAssignment
 * @property {boolean} [post_order_reassignment]
 * @property {ArticleAssignmentRule} [rules]
 */

/**
 * @typedef CompanyAboutAddress
 * @property {number} [pincode]
 * @property {string} [address1]
 * @property {string} [address2]
 * @property {string} [city]
 * @property {string} [state]
 * @property {string} [country]
 * @property {string} [address_type]
 */

/**
 * @typedef UserEmail
 * @property {boolean} [active]
 * @property {boolean} [primary]
 * @property {boolean} [verified]
 * @property {string} [email]
 */

/**
 * @typedef UserPhoneNumber
 * @property {boolean} [active]
 * @property {boolean} [primary]
 * @property {boolean} [verified]
 * @property {number} [country_code]
 * @property {string} [phone]
 */

/**
 * @typedef ApplicationInformation
 * @property {InformationAddress} [address]
 * @property {InformationSupport} [support]
 * @property {SocialLinks} [social_links]
 * @property {Links} [links]
 * @property {string} [copyright_text]
 * @property {string} [_id]
 * @property {BusinessHighlights} [business_highlights]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */

/**
 * @typedef InformationAddress
 * @property {string} [loc]
 * @property {string[]} [address_line]
 * @property {InformationPhone} [phone]
 * @property {string} [city]
 * @property {string} [country]
 * @property {number} [pincode]
 */

/**
 * @typedef InformationPhone
 * @property {string} [code]
 * @property {string} [number]
 */

/**
 * @typedef InformationSupport
 * @property {string[]} [phone]
 * @property {string[]} [email]
 * @property {string} [timing]
 */

/**
 * @typedef SocialLinks
 * @property {FacebookLink} [facebook]
 * @property {InstagramLink} [instagram]
 * @property {TwitterLink} [twitter]
 * @property {PinterestLink} [pinterest]
 * @property {GooglePlusLink} [google_plus]
 * @property {YoutubeLink} [youtube]
 * @property {LinkedInLink} [linked_in]
 * @property {VimeoLink} [vimeo]
 * @property {BlogLink} [blog_link]
 */

/**
 * @typedef FacebookLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */

/**
 * @typedef InstagramLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */

/**
 * @typedef TwitterLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */

/**
 * @typedef PinterestLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */

/**
 * @typedef GooglePlusLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */

/**
 * @typedef YoutubeLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */

/**
 * @typedef LinkedInLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */

/**
 * @typedef VimeoLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */

/**
 * @typedef BlogLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */

/**
 * @typedef Links
 * @property {string} [title]
 * @property {string} [link]
 */

/**
 * @typedef BusinessHighlights
 * @property {string} [_id]
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [sub_title]
 */

/**
 * @typedef ApplicationDetail
 * @property {string} name
 * @property {string} description
 * @property {SecureUrl} logo
 * @property {SecureUrl} mobile_logo
 * @property {SecureUrl} favicon
 * @property {SecureUrl} banner
 * @property {Domain} [domain]
 * @property {Domain[]} [domains]
 * @property {string} [_id]
 */

/**
 * @typedef CurrenciesResponse
 * @property {Currency[]} [items]
 */

/**
 * @typedef AppCurrencyResponse
 * @property {string} [application]
 * @property {DefaultCurrency} [default_currency]
 * @property {Currency[]} [supported_currency]
 */

/**
 * @typedef StoreLatLong
 * @property {string} [type]
 * @property {number[]} [coordinates]
 */

/**
 * @typedef OptedStoreAddress
 * @property {string} [state]
 * @property {string} [address1]
 * @property {StoreLatLong} [lat_long]
 * @property {string} [address2]
 * @property {number} [pincode]
 * @property {string} [country]
 * @property {string} [city]
 */

/**
 * @typedef OrderingStore
 * @property {OptedStoreAddress} [address]
 * @property {string} [_id]
 * @property {number} [uid]
 * @property {string} [name]
 * @property {string} [display_name]
 * @property {string} [store_type]
 * @property {string} [store_code]
 * @property {number} [pincode]
 * @property {string} [code]
 */

/**
 * @typedef OrderingStores
 * @property {Page} [page]
 * @property {OrderingStore[]} [items]
 * @property {number[]} [deployed_stores]
 * @property {boolean} [all_stores]
 * @property {boolean} [enabled]
 * @property {string} [type]
 * @property {string} [_id]
 * @property {string} [app]
 * @property {number} [__v]
 */

/**
 * @typedef OrderingStoresResponse
 * @property {Page} [page]
 * @property {OrderingStore[]} [items]
 */

/**
 * @typedef Ownership
 * @property {string} payable_by
 * @property {string} payable_category
 */

/**
 * @typedef Validity
 * @property {number} [priority]
 */

/**
 * @typedef DisplayMetaDict
 * @property {string} [title]
 * @property {string} [subtitle]
 */

/**
 * @typedef DisplayMeta
 * @property {DisplayMetaDict} [remove]
 * @property {string} [subtitle]
 * @property {string} [description]
 * @property {DisplayMetaDict} [apply]
 * @property {string} [title]
 * @property {DisplayMetaDict} [auto]
 */

/**
 * @typedef CouponDateMeta
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */

/**
 * @typedef Validation
 * @property {string[]} [app_id]
 * @property {boolean} [anonymous]
 * @property {string} [user_registered_after]
 */

/**
 * @typedef RuleDefinition
 * @property {boolean} [is_exact]
 * @property {boolean} [auto_apply]
 * @property {string} value_type
 * @property {string[]} [scope]
 * @property {string} [currency_code]
 * @property {string} calculate_on
 * @property {string} applicable_on
 * @property {string} type
 */

/**
 * @typedef PriceRange
 * @property {number} [max]
 * @property {number} [min]
 */

/**
 * @typedef PaymentAllowValue
 * @property {number} [max]
 */

/**
 * @typedef PaymentModes
 * @property {string[]} [codes]
 * @property {PaymentAllowValue} [uses]
 * @property {string[]} [types]
 * @property {string[]} [networks]
 */

/**
 * @typedef PostOrder
 * @property {boolean} [return_allowed]
 * @property {boolean} [cancellation_allowed]
 */

/**
 * @typedef UsesRemaining
 * @property {number} [total]
 * @property {number} [app]
 * @property {number} [user]
 */

/**
 * @typedef UsesRestriction
 * @property {UsesRemaining} [remaining]
 * @property {UsesRemaining} [maximum]
 */

/**
 * @typedef BulkBundleRestriction
 * @property {boolean} multi_store_allowed
 */

/**
 * @typedef Restrictions
 * @property {PriceRange} [price_range]
 * @property {Object} [payments]
 * @property {number[]} [ordering_stores]
 * @property {PostOrder} [post_order]
 * @property {number[]} [user_groups]
 * @property {boolean} [coupon_allowed]
 * @property {UsesRestriction} [uses]
 * @property {string[]} [platforms]
 * @property {BulkBundleRestriction} [bulk_bundle]
 */

/**
 * @typedef State
 * @property {boolean} [is_display]
 * @property {boolean} [is_archived]
 * @property {boolean} [is_public]
 */

/**
 * @typedef CouponAction
 * @property {string} [txn_mode]
 * @property {string} [action_date]
 */

/**
 * @typedef CouponSchedule
 * @property {number} [duration]
 * @property {string} [cron]
 * @property {string} [end]
 * @property {Object[]} [next_schedule]
 * @property {string} [start]
 */

/**
 * @typedef CouponAuthor
 * @property {string} [modified_by]
 * @property {string} [created_by]
 */

/**
 * @typedef Rule
 * @property {number} [max]
 * @property {number} [discount_qty]
 * @property {number} [value]
 * @property {number} [min]
 * @property {number} [key]
 */

/**
 * @typedef CouponAdd
 * @property {Ownership} ownership
 * @property {Validity} validity
 * @property {DisplayMeta} display_meta
 * @property {CouponDateMeta} [date_meta]
 * @property {Validation} [validation]
 * @property {RuleDefinition} rule_definition
 * @property {string} type_slug
 * @property {Restrictions} [restrictions]
 * @property {State} [state]
 * @property {CouponAction} [action]
 * @property {CouponSchedule} [_schedule]
 * @property {CouponAuthor} [author]
 * @property {string[]} [tags]
 * @property {Identifier} identifiers
 * @property {Rule[]} rule
 * @property {string} code
 */

/**
 * @typedef CouponsResponse
 * @property {CouponAdd} [items]
 * @property {Page} [page]
 */

/**
 * @typedef SuccessMessage
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef OperationErrorResponse
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef CouponUpdate
 * @property {Ownership} ownership
 * @property {Validity} validity
 * @property {DisplayMeta} display_meta
 * @property {CouponDateMeta} [date_meta]
 * @property {Validation} [validation]
 * @property {RuleDefinition} rule_definition
 * @property {string} type_slug
 * @property {Restrictions} [restrictions]
 * @property {State} [state]
 * @property {CouponAction} [action]
 * @property {CouponSchedule} [_schedule]
 * @property {CouponAuthor} [author]
 * @property {string[]} [tags]
 * @property {Identifier} identifiers
 * @property {Rule[]} rule
 * @property {string} code
 */

/**
 * @typedef CouponPartialUpdate
 * @property {CouponSchedule} [schedule]
 * @property {boolean} [archive]
 */

/**
 * @typedef PromotionDateMeta
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */

/**
 * @typedef PaymentAllowValue1
 * @property {number} [max]
 */

/**
 * @typedef PromotionPaymentModes
 * @property {string[]} [codes]
 * @property {PaymentAllowValue1} [uses]
 * @property {string} type
 */

/**
 * @typedef PostOrder1
 * @property {boolean} [return_allowed]
 * @property {boolean} [cancellation_allowed]
 */

/**
 * @typedef UsesRemaining1
 * @property {number} [total]
 * @property {number} [user]
 */

/**
 * @typedef UsesRestriction1
 * @property {UsesRemaining1} [remaining]
 * @property {UsesRemaining1} [maximum]
 */

/**
 * @typedef UserRegistered
 * @property {string} [start]
 * @property {string} [end]
 */

/**
 * @typedef Restrictions1
 * @property {number} [order_quantity]
 * @property {PromotionPaymentModes[]} [payments]
 * @property {PostOrder1} [post_order]
 * @property {number[]} [user_groups]
 * @property {boolean} [anonymous_users]
 * @property {UsesRestriction1} uses
 * @property {string[]} [platforms]
 * @property {string[]} [user_id]
 * @property {UserRegistered} [user_registered]
 */

/**
 * @typedef PromotionAction
 * @property {string} action_type
 * @property {string} action_date
 */

/**
 * @typedef CompareObject
 * @property {number} [greater_than]
 * @property {number} [less_than]
 * @property {number} [equals]
 * @property {number} [less_than_equals]
 * @property {number} [greater_than_equals]
 */

/**
 * @typedef ItemCriteria
 * @property {string[]} [item_sku]
 * @property {number[]} [item_exclude_brand]
 * @property {number[]} [item_exclude_company]
 * @property {string[]} [buy_rules]
 * @property {number[]} [item_exclude_store]
 * @property {number[]} [item_brand]
 * @property {string[]} [item_size]
 * @property {CompareObject} [cart_quantity]
 * @property {number[]} [item_id]
 * @property {boolean} [all_items]
 * @property {number[]} [item_company]
 * @property {string[]} [item_exclude_sku]
 * @property {CompareObject} [cart_total]
 * @property {number[]} [item_store]
 * @property {number[]} [item_category]
 * @property {number[]} [item_exclude_category]
 */

/**
 * @typedef DiscountOffer
 * @property {number} [discount_price]
 * @property {number} [discount_percentage]
 * @property {number} [max_discount_amount]
 * @property {number} [max_offer_quantity]
 * @property {number} [discount_amount]
 * @property {number} [min_offer_quantity]
 * @property {string} [code]
 */

/**
 * @typedef DiscountRule
 * @property {string} buy_condition
 * @property {ItemCriteria} item_criteria
 * @property {DiscountOffer} offer
 * @property {string} discount_type
 */

/**
 * @typedef DisplayMeta1
 * @property {string} [name]
 * @property {string} [offer_text]
 * @property {string} [description]
 */

/**
 * @typedef Ownership1
 * @property {string} payable_by
 * @property {string} payable_category
 */

/**
 * @typedef Visibility
 * @property {boolean} pdp
 * @property {boolean} coupon_list
 */

/**
 * @typedef PromotionSchedule
 * @property {number} [duration]
 * @property {string} [cron]
 * @property {string} [end]
 * @property {boolean} published
 * @property {Object[]} [next_schedule]
 * @property {string} start
 */

/**
 * @typedef PromotionAuthor
 * @property {string} [modified_by]
 * @property {string} [created_by]
 */

/**
 * @typedef PromotionListItem
 * @property {Object} [_custom_json]
 * @property {PromotionDateMeta} [date_meta]
 * @property {string} promo_group
 * @property {Restrictions1} [restrictions]
 * @property {number} [apply_priority]
 * @property {string} [code]
 * @property {boolean} [stackable]
 * @property {string} mode
 * @property {PromotionAction} [post_order_action]
 * @property {DiscountRule[]} discount_rules
 * @property {Object} buy_rules
 * @property {DisplayMeta1} display_meta
 * @property {string} [currency]
 * @property {string} [apply_exclusive]
 * @property {Ownership1} ownership
 * @property {Visibility} [visiblility]
 * @property {boolean} [apply_all_discount]
 * @property {string} promotion_type
 * @property {PromotionSchedule} [_schedule]
 * @property {string} application_id
 * @property {PromotionAuthor} [author]
 */

/**
 * @typedef PromotionsResponse
 * @property {PromotionListItem} [items]
 * @property {Page} [page]
 */

/**
 * @typedef PromotionAdd
 * @property {Object} [_custom_json]
 * @property {PromotionDateMeta} [date_meta]
 * @property {string} promo_group
 * @property {Restrictions1} [restrictions]
 * @property {number} [apply_priority]
 * @property {string} [code]
 * @property {boolean} [stackable]
 * @property {string} mode
 * @property {PromotionAction} [post_order_action]
 * @property {DiscountRule[]} discount_rules
 * @property {Object} buy_rules
 * @property {DisplayMeta1} display_meta
 * @property {string} [currency]
 * @property {string} [apply_exclusive]
 * @property {Ownership1} ownership
 * @property {Visibility} [visiblility]
 * @property {boolean} [apply_all_discount]
 * @property {string} promotion_type
 * @property {PromotionSchedule} [_schedule]
 * @property {string} application_id
 * @property {PromotionAuthor} [author]
 */

/**
 * @typedef PromotionUpdate
 * @property {Object} [_custom_json]
 * @property {PromotionDateMeta} [date_meta]
 * @property {string} promo_group
 * @property {Restrictions1} [restrictions]
 * @property {number} [apply_priority]
 * @property {string} [code]
 * @property {boolean} [stackable]
 * @property {string} mode
 * @property {PromotionAction} [post_order_action]
 * @property {DiscountRule[]} discount_rules
 * @property {Object} buy_rules
 * @property {DisplayMeta1} display_meta
 * @property {string} [currency]
 * @property {string} [apply_exclusive]
 * @property {Ownership1} ownership
 * @property {Visibility} [visiblility]
 * @property {boolean} [apply_all_discount]
 * @property {string} promotion_type
 * @property {PromotionSchedule} [_schedule]
 * @property {string} application_id
 * @property {PromotionAuthor} [author]
 */

/**
 * @typedef PromotionPartialUpdate
 * @property {PromotionSchedule} [schedule]
 * @property {boolean} [archive]
 */

/**
 * @typedef CartItem
 * @property {string} product_id
 * @property {string} size
 * @property {number} [quantity]
 */

/**
 * @typedef OpenapiCartDetailsRequest
 * @property {CartItem} [cart_items]
 */

/**
 * @typedef CouponBreakup
 * @property {string} [message]
 * @property {boolean} [is_applied]
 * @property {string} [uid]
 * @property {number} [value]
 * @property {string} [code]
 * @property {string} [type]
 */

/**
 * @typedef DisplayBreakup
 * @property {string} [display]
 * @property {string[]} [message]
 * @property {string} [currency_symbol]
 * @property {number} [value]
 * @property {string} [currency_code]
 * @property {string} [key]
 */

/**
 * @typedef LoyaltyPoints
 * @property {number} [total]
 * @property {boolean} [is_applied]
 * @property {string} [description]
 * @property {number} [applicable]
 */

/**
 * @typedef RawBreakup
 * @property {number} [convenience_fee]
 * @property {number} [cod_charge]
 * @property {number} [fynd_cash]
 * @property {number} [subtotal]
 * @property {number} [you_saved]
 * @property {number} [coupon]
 * @property {number} [total]
 * @property {number} [discount]
 * @property {number} [gst_charges]
 * @property {number} [vog]
 * @property {number} [mrp_total]
 * @property {number} [delivery_charge]
 */

/**
 * @typedef CartBreakup
 * @property {CouponBreakup} [coupon]
 * @property {DisplayBreakup[]} [display]
 * @property {LoyaltyPoints} [loyalty_points]
 * @property {RawBreakup} [raw]
 */

/**
 * @typedef ProductPrice
 * @property {number} [add_on]
 * @property {number} [selling]
 * @property {string} [currency_symbol]
 * @property {number} [effective]
 * @property {string} [currency_code]
 * @property {number} [marked]
 */

/**
 * @typedef ProductPriceInfo
 * @property {ProductPrice} [converted]
 * @property {ProductPrice} [base]
 */

/**
 * @typedef PromoMeta
 * @property {string} [message]
 */

/**
 * @typedef Ownership2
 * @property {string} [payable_by]
 * @property {string} [payable_category]
 */

/**
 * @typedef AppliedPromotion
 * @property {string} [promo_id]
 * @property {boolean} [mrp_promotion]
 * @property {string} [offer_text]
 * @property {Ownership2} [ownership]
 * @property {number} [amount]
 * @property {string} [promotion_type]
 * @property {number} [article_quantity]
 */

/**
 * @typedef CategoryInfo
 * @property {string} [name]
 * @property {number} [uid]
 */

/**
 * @typedef BaseInfo
 * @property {string} [name]
 * @property {number} [uid]
 */

/**
 * @typedef ActionQuery
 * @property {string[]} [product_slug]
 */

/**
 * @typedef ProductAction
 * @property {string} [url]
 * @property {ActionQuery} [query]
 * @property {string} [type]
 */

/**
 * @typedef ProductImage
 * @property {string} [url]
 * @property {string} [secure_url]
 * @property {string} [aspect_ratio]
 */

/**
 * @typedef CartProduct
 * @property {string} [name]
 * @property {CategoryInfo[]} [categories]
 * @property {string} [slug]
 * @property {BaseInfo} [brand]
 * @property {number} [uid]
 * @property {ProductAction} [action]
 * @property {string} [type]
 * @property {ProductImage[]} [images]
 */

/**
 * @typedef ProductAvailability
 * @property {boolean} [deliverable]
 * @property {boolean} [out_of_stock]
 * @property {boolean} [is_valid]
 * @property {string[]} [sizes]
 * @property {number} [other_store_quantity]
 */

/**
 * @typedef CartProductIdentifer
 * @property {string} [identifier]
 */

/**
 * @typedef BasePrice
 * @property {string} [currency_code]
 * @property {number} [marked]
 * @property {number} [effective]
 * @property {string} [currency_symbol]
 */

/**
 * @typedef ArticlePriceInfo
 * @property {BasePrice} [converted]
 * @property {BasePrice} [base]
 */

/**
 * @typedef ProductArticle
 * @property {Object} [parent_item_identifiers]
 * @property {BaseInfo} [store]
 * @property {BaseInfo} [seller]
 * @property {string[]} [product_group_tags]
 * @property {string} [size]
 * @property {string} [uid]
 * @property {number} [quantity]
 * @property {string} [type]
 * @property {Object} [extra_meta]
 * @property {ArticlePriceInfo} [price]
 */

/**
 * @typedef CartProductInfo
 * @property {ProductPriceInfo} [price]
 * @property {Object} [parent_item_identifiers]
 * @property {PromoMeta} [promo_meta]
 * @property {Object} [bulk_offer]
 * @property {string} [message]
 * @property {AppliedPromotion[]} [promotions_applied]
 * @property {string} [discount]
 * @property {CartProduct} [product]
 * @property {boolean} [is_set]
 * @property {number} [quantity]
 * @property {ProductAvailability} [availability]
 * @property {CartProductIdentifer} identifiers
 * @property {ProductPriceInfo} [price_per_unit]
 * @property {string} [key]
 * @property {string} [coupon_message]
 * @property {ProductArticle} [article]
 */

/**
 * @typedef OpenapiCartDetailsResponse
 * @property {CartBreakup} [breakup_values]
 * @property {CartProductInfo[]} [items]
 * @property {boolean} [is_valid]
 * @property {string} [message]
 */

/**
 * @typedef OpenApiErrorResponse
 * @property {boolean} [success]
 * @property {Object} [errors]
 * @property {string} [message]
 */

/**
 * @typedef ShippingAddress
 * @property {string} [name]
 * @property {string} [landmark]
 * @property {string} [country]
 * @property {string} [address_type]
 * @property {string} [email]
 * @property {string} [country_code]
 * @property {string} area_code
 * @property {string} [state]
 * @property {string} [city]
 * @property {string} [area_code_slug]
 * @property {Object} [meta]
 * @property {string} [area]
 * @property {number} [phone]
 * @property {string} [address]
 * @property {number} [pincode]
 */

/**
 * @typedef OpenApiCartServiceabilityRequest
 * @property {CartItem} [cart_items]
 * @property {ShippingAddress} shipping_address
 */

/**
 * @typedef PromiseTimestamp
 * @property {number} [max]
 * @property {number} [min]
 */

/**
 * @typedef PromiseFormatted
 * @property {string} [max]
 * @property {string} [min]
 */

/**
 * @typedef ShipmentPromise
 * @property {PromiseTimestamp} [timestamp]
 * @property {PromiseFormatted} [formatted]
 */

/**
 * @typedef OpenApiCartServiceabilityResponse
 * @property {CartBreakup} [breakup_values]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [message]
 * @property {boolean} [is_valid]
 * @property {CartProductInfo[]} [items]
 */

/**
 * @typedef OpenApiFiles
 * @property {string[]} values
 * @property {string} key
 */

/**
 * @typedef CartItemMeta
 * @property {boolean} [primary_item]
 * @property {string} [group_id]
 */

/**
 * @typedef OpenApiOrderItem
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {number} price_effective
 * @property {number} amount_paid
 * @property {number} discount
 * @property {number} coupon_effective_discount
 * @property {number} [loyalty_discount]
 * @property {number} cashback_applied
 * @property {string} size
 * @property {OpenApiFiles[]} [files]
 * @property {number} [quantity]
 * @property {number} product_id
 * @property {number} delivery_charges
 * @property {number} [employee_discount]
 * @property {CartItemMeta} [meta]
 * @property {Object} [extra_meta]
 * @property {number} cod_charges
 * @property {number} price_marked
 */

/**
 * @typedef OpenApiPlatformCheckoutReq
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {OpenApiOrderItem[]} cart_items
 * @property {number} coupon_value
 * @property {string} [affiliate_order_id]
 * @property {string} [payment_mode]
 * @property {number} [loyalty_discount]
 * @property {number} cashback_applied
 * @property {number} cod_charges
 * @property {ShippingAddress} billing_address
 * @property {string} [comment]
 * @property {string} [currency_code]
 * @property {Object} [employee_discount]
 * @property {string} [gstin]
 * @property {ShippingAddress} [shipping_address]
 * @property {string} coupon_code
 * @property {string} [coupon]
 * @property {OpenApiFiles[]} [files]
 * @property {number} delivery_charges
 * @property {string} [order_id]
 * @property {number} cart_value
 */

/**
 * @typedef OpenApiCheckoutResponse
 * @property {string} order_id
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {string} [order_ref_id]
 */

/**
 * @typedef AbandonedCart
 * @property {boolean} [is_archive]
 * @property {Object[]} [payment_methods]
 * @property {string} [payment_mode]
 * @property {string} [comment]
 * @property {Object[]} articles
 * @property {Object} [promotion]
 * @property {boolean} is_default
 * @property {string} [app_id]
 * @property {number} [discount]
 * @property {Object} [coupon]
 * @property {boolean} [merge_qty]
 * @property {number} [cart_value]
 * @property {boolean} [buy_now]
 * @property {string} [order_id]
 * @property {string} _id
 * @property {Object} cashback
 * @property {Object} [meta]
 * @property {boolean} [is_active]
 * @property {number} [bulk_coupon_discount]
 * @property {Object} [payments]
 * @property {string} expire_at
 * @property {string} user_id
 * @property {string} [checkout_mode]
 * @property {Object} [pick_up_customer_details]
 * @property {string} [gstin]
 * @property {Object[]} [shipments]
 * @property {string} last_modified
 * @property {string} created_on
 * @property {number} uid
 * @property {number[]} [fc_index_map]
 * @property {Object} [delivery_charges]
 * @property {Object} [fynd_credits]
 * @property {Object} [cod_charges]
 */

/**
 * @typedef AbandonedCartResponse
 * @property {string} [message]
 * @property {boolean} [success]
 * @property {AbandonedCart[]} [items]
 * @property {Object} [result]
 * @property {Page} [page]
 */

/**
 * @typedef CartCurrency
 * @property {string} [code]
 * @property {string} [symbol]
 */

/**
 * @typedef CartDetailResponse
 * @property {CartBreakup} [breakup_values]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [message]
 * @property {string} [id]
 * @property {CartCurrency} [currency]
 * @property {string} [last_modified]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {string} [delivery_charge_info]
 * @property {boolean} [restrict_checkout]
 * @property {boolean} [buy_now]
 * @property {string} [comment]
 * @property {boolean} [is_valid]
 * @property {CartProductInfo[]} [items]
 * @property {string} [coupon_text]
 * @property {string} [checkout_mode]
 * @property {string} [gstin]
 */

/**
 * @typedef AddProductCart
 * @property {string} [display]
 * @property {Object} [parent_item_identifiers]
 * @property {string} [article_id]
 * @property {Object} [article_assignment]
 * @property {string} [item_size]
 * @property {string[]} [product_group_tags]
 * @property {boolean} [pos]
 * @property {number} [quantity]
 * @property {number} [item_id]
 * @property {number} [seller_id]
 * @property {number} [store_id]
 * @property {Object} [extra_meta]
 */

/**
 * @typedef AddCartRequest
 * @property {AddProductCart[]} [items]
 */

/**
 * @typedef AddCartDetailResponse
 * @property {boolean} [partial]
 * @property {boolean} [success]
 * @property {CartDetailResponse} [cart]
 * @property {string} [message]
 */

/**
 * @typedef UpdateProductCart
 * @property {Object} [parent_item_identifiers]
 * @property {string} [article_id]
 * @property {string} [item_size]
 * @property {number} [item_index]
 * @property {number} [quantity]
 * @property {number} [item_id]
 * @property {CartProductIdentifer} identifiers
 * @property {Object} [extra_meta]
 */

/**
 * @typedef UpdateCartRequest
 * @property {string} operation
 * @property {UpdateProductCart[]} [items]
 */

/**
 * @typedef UpdateCartDetailResponse
 * @property {boolean} [success]
 * @property {CartDetailResponse} [cart]
 * @property {string} [message]
 */

/**
 * @typedef E
 * @property {number} [code]
 * @property {string} [exception]
 * @property {string} [info]
 * @property {string} [message]
 */

/**
 * @typedef GiveawayResponse
 * @property {Giveaway[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef Giveaway
 * @property {string} [_id]
 * @property {Schedule} [_schedule]
 * @property {boolean} [active]
 * @property {string} [application_id]
 * @property {RewardsAudience} [audience]
 * @property {Asset} [banner_image]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} [name]
 * @property {RewardsRule} [rule]
 * @property {string} [title]
 * @property {string} [updated_at]
 */

/**
 * @typedef Schedule
 * @property {number} [duration]
 * @property {string} [end]
 * @property {string} [start]
 * @property {string} [cron]
 */

/**
 * @typedef RewardsAudience
 * @property {string} [header_user_id]
 * @property {string} [id]
 */

/**
 * @typedef RewardsRule
 * @property {number} [amount]
 */

/**
 * @typedef Offer
 * @property {Schedule} [_schedule]
 * @property {boolean} [active]
 * @property {string} [application_id]
 * @property {Asset} [banner_image]
 * @property {string} [created_at]
 * @property {string} [name]
 * @property {Object} [rule]
 * @property {ShareMessages} [share]
 * @property {string} [sub_text]
 * @property {string} [text]
 * @property {string} [type]
 * @property {string} [updated_at]
 * @property {string} [updated_by]
 * @property {string} [url]
 */

/**
 * @typedef ShareMessages
 * @property {number} [email]
 * @property {string} [facebook]
 * @property {string} [fallback]
 * @property {string} [message]
 * @property {string} [messenger]
 * @property {string} [sms]
 * @property {string} [text]
 * @property {string} [twitter]
 * @property {string} [whatsapp]
 */

/**
 * @typedef UserRes
 * @property {Points} [points]
 * @property {RewardUser} [user]
 */

/**
 * @typedef Points
 * @property {number} [available]
 */

/**
 * @typedef RewardUser
 * @property {string} [_id]
 * @property {boolean} [active]
 * @property {string} [created_at]
 * @property {Referral} [referral]
 * @property {number} [uid]
 * @property {string} [updated_at]
 * @property {string} [user_block_reason]
 * @property {string} [user_id]
 */

/**
 * @typedef Referral
 * @property {string} [code]
 */

/**
 * @typedef AppUser
 * @property {string} [_id]
 * @property {boolean} [active]
 * @property {string} [application_id]
 * @property {string} [block_reason]
 * @property {string} [updated_at]
 * @property {string} [updated_by]
 * @property {string} [user_id]
 */

/**
 * @typedef GiveawayAudience
 * @property {string} [audience_id]
 * @property {number} [current_count]
 */

/**
 * @typedef HistoryRes
 * @property {PointsHistory[]} [items]
 * @property {Page} [page]
 * @property {number} [points]
 */

/**
 * @typedef PointsHistory
 * @property {string} [_id]
 * @property {string} [application_id]
 * @property {boolean} [claimed]
 * @property {string} [created_at]
 * @property {string} [expires_on]
 * @property {Object} [meta]
 * @property {number} [points]
 * @property {number} [remaining_points]
 * @property {string} [text_1]
 * @property {string} [text_2]
 * @property {string} [text_3]
 * @property {string} [txn_name]
 * @property {string} [updated_at]
 * @property {string} [user_id]
 */

/**
 * @typedef StatGroup
 * @property {string} [key]
 * @property {string} [url]
 * @property {string} [title]
 */

/**
 * @typedef StatsGroups
 * @property {StatGroup[]} [groups]
 */

/**
 * @typedef StatsGroupComponent
 * @property {string} [key]
 * @property {string} [url]
 * @property {string} [title]
 * @property {string} [type]
 * @property {Object} [filters]
 */

/**
 * @typedef StatsGroupComponents
 * @property {string} [title]
 * @property {StatsGroupComponent[]} [components]
 */

/**
 * @typedef StatsRes
 * @property {string} [key]
 * @property {string} [title]
 * @property {string} [type]
 * @property {Object} [data]
 */

/**
 * @typedef ReceivedAt
 * @property {string} [value]
 */

/**
 * @typedef AbandonCartsDetail
 * @property {string} [properties_cart_id]
 * @property {string} [context_traits_first_name]
 * @property {string} [context_traits_last_name]
 * @property {string} [context_traits_phone_number]
 * @property {string} [context_traits_email]
 * @property {string} [context_app_application_id]
 * @property {string} [properties_breakup_values_raw_total]
 * @property {ReceivedAt} [received_at]
 */

/**
 * @typedef AbandonCartsList
 * @property {AbandonCartsDetail[]} [items]
 * @property {string} [cart_total]
 * @property {Page} [page]
 */

/**
 * @typedef AbandonCartDetail
 * @property {string} [_id]
 * @property {string} [user_id]
 * @property {string} [cart_value]
 * @property {Object[]} [articles]
 * @property {Object} [breakup]
 * @property {Object} [address]
 */

/**
 * @typedef ExportJobReq
 * @property {string} [marketplace_name]
 * @property {string} [start_time]
 * @property {string} [end_time]
 * @property {string} [event_type]
 * @property {string} [trace_id]
 */

/**
 * @typedef ExportJobRes
 * @property {string} [status]
 * @property {string} [job_id]
 */

/**
 * @typedef ExportJobStatusRes
 * @property {string} [status]
 * @property {string} [job_id]
 * @property {string} [download_url]
 */

/**
 * @typedef GetLogsListReq
 * @property {string} [marketplace_name]
 * @property {string} [start_date]
 * @property {string} [company_id]
 * @property {string} [end_date]
 */

/**
 * @typedef MkpLogsResp
 * @property {string} [start_time_iso]
 * @property {string} [end_time_iso]
 * @property {string} [event_type]
 * @property {string} [trace_id]
 * @property {string} [count]
 * @property {string} [status]
 */

/**
 * @typedef GetLogsListRes
 * @property {MkpLogsResp[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef SearchLogReq
 * @property {string} [marketplace_name]
 * @property {string} [start_date]
 * @property {string} [company_id]
 * @property {string} [end_date]
 * @property {string} [identifier]
 * @property {string} [identifier_value]
 */

/**
 * @typedef LogInfo
 * @property {string} [_id]
 * @property {string} [status]
 * @property {string} [event_type]
 * @property {string} [marketplace_name]
 * @property {string} [event]
 * @property {string} [trace_id]
 * @property {number} [company_id]
 * @property {number} [brand_id]
 * @property {string} [store_code]
 * @property {number} [store_id]
 * @property {number} [item_id]
 * @property {string} [article_id]
 * @property {string} [seller_identifier]
 */

/**
 * @typedef SearchLogRes
 * @property {LogInfo[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef ValidityObject
 * @property {string} start
 * @property {string} end
 */

/**
 * @typedef CreateUpdateDiscount
 * @property {string} name
 * @property {number} company_id
 * @property {boolean} is_active
 * @property {string[]} app_ids
 * @property {string[]} extension_ids
 * @property {string} job_type
 * @property {string} discount_type
 * @property {string} discount_level
 * @property {number} [value]
 * @property {string} [file_path]
 * @property {number[]} [brand_ids]
 * @property {number[]} [store_ids]
 * @property {ValidityObject} validity
 */

/**
 * @typedef DiscountJob
 * @property {string} _id
 * @property {string} name
 * @property {number} company_id
 * @property {boolean} is_active
 * @property {string[]} [app_ids]
 * @property {string} [job_type]
 * @property {string} [discount_type]
 * @property {string} [discount_level]
 * @property {number} [value]
 * @property {string} [file_path]
 * @property {number[]} [brand_ids]
 * @property {number[]} [store_ids]
 * @property {ValidityObject} validity
 * @property {string} created_on
 * @property {string} modified_on
 * @property {UserDetails} created_by
 * @property {UserDetails} modified_by
 * @property {Object} [meta]
 */

/**
 * @typedef ListOrCalender
 * @property {DiscountJob[]} items
 * @property {Page} page
 */

/**
 * @typedef FileJobResponse
 * @property {string} stage
 * @property {number} total
 * @property {number} failed
 * @property {number} company_id
 * @property {Object} [body]
 * @property {string} type
 * @property {string} file_type
 */

/**
 * @typedef DownloadFileJob
 * @property {number[]} [brand_ids]
 * @property {number[]} [store_ids]
 */

/**
 * @typedef CancelJobResponse
 * @property {boolean} success
 */

/**
 * @typedef UserDetails
 * @property {string} username
 * @property {string} user_id
 */

/**
 * @typedef BadRequestObject
 * @property {string} message
 */

/**
 * @typedef AddProxyReq
 * @property {string} [attached_path]
 * @property {string} [proxy_url]
 */

/**
 * @typedef AddProxyResponse
 * @property {string} [_id]
 * @property {string} [attached_path]
 * @property {string} [proxy_url]
 * @property {string} [company_id]
 * @property {string} [application_id]
 * @property {string} [extension_id]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 */

/**
 * @typedef APIError
 * @property {string} [code]
 * @property {string} [message]
 * @property {string} [info]
 * @property {string} [request_id]
 * @property {Object} [meta]
 */

/**
 * @typedef RemoveProxyResponse
 * @property {string} [message]
 * @property {Object} [data]
 */

/**
 * @typedef EventConfig
 * @property {number} [id]
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [event_category]
 * @property {string} [version]
 * @property {string} [display_name]
 * @property {string} [description]
 * @property {string} [created_on]
 */

/**
 * @typedef EventConfigList
 * @property {EventConfig[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef EventConfigResponse
 * @property {EventConfig[]} [event_configs]
 */

/**
 * @typedef SubscriberConfigList
 * @property {SubscriberResponse[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef EventProcessedStatus
 * @property {number} [id]
 * @property {string} [subscriber_id]
 * @property {number} [attempt]
 * @property {string} [response_code]
 * @property {string} [response_message]
 * @property {string} [created_on]
 * @property {string} [processed_on]
 * @property {boolean} [status]
 */

/**
 * @typedef EventPayload
 * @property {number} [id]
 * @property {string} [event_trace_id]
 * @property {string} [message_id]
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [version]
 * @property {boolean} [status]
 */

/**
 * @typedef SubscriberConfig
 * @property {number} [id]
 * @property {string} [name]
 * @property {string} [webhook_url]
 * @property {Association} [association]
 * @property {Object} [custom_headers]
 * @property {SubscriberStatus} [status]
 * @property {string} [email_id]
 * @property {AuthMeta} [auth_meta]
 * @property {number[]} [event_id]
 */

/**
 * @typedef SubscriberResponse
 * @property {number} [id]
 * @property {string} [name]
 * @property {string} [webhook_url]
 * @property {Association} [association]
 * @property {Object} [custom_headers]
 * @property {string} [email_id]
 * @property {SubscriberStatus} [status]
 * @property {AuthMeta} [auth_meta]
 * @property {string} [created_on]
 * @property {string} [updated_on]
 * @property {EventConfig[]} [event_configs]
 */

/**
 * @typedef SubscriberEvent
 * @property {number} [id]
 * @property {number} [subscriber_id]
 * @property {number} [event_id]
 * @property {string} [created_date]
 */

/**
 * @typedef AuthMeta
 * @property {string} [type]
 * @property {string} [secret]
 */

/**
 * @typedef Association
 * @property {number} [company_id]
 * @property {string[]} [application_id]
 * @property {string} [extension_id]
 * @property {string} [criteria]
 */

/**
 * @typedef EventConfigBase
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [event_category]
 * @property {string} [version]
 */

/**
 * @typedef RequestBodyAuditLog
 * @property {LogMetaObj} log_meta
 * @property {Object} log_payload
 */

/**
 * @typedef CreateLogResponse
 * @property {string} [message]
 * @property {string} [internal_message]
 */

/**
 * @typedef LogMetaObj
 * @property {Object} [modifier]
 * @property {string} [application]
 * @property {EntityObject} [entity]
 * @property {Object} [device_info]
 * @property {Object} [location]
 */

/**
 * @typedef EntityObject
 * @property {string} [id]
 * @property {string} [type]
 * @property {string} [action]
 */

/**
 * @typedef LogSchemaResponse
 * @property {LogDocs[]} [docs]
 */

/**
 * @typedef LogDocs
 * @property {EntityObj} [entity]
 * @property {Modifier} [modifier]
 * @property {DeviceInfo} [device_info]
 * @property {Location} [location]
 * @property {string} [_id]
 * @property {string} [company]
 * @property {string} [application]
 * @property {string} [sessions]
 * @property {string} [date]
 * @property {Object} [logs]
 */

/**
 * @typedef EntityObj
 * @property {string} [id]
 * @property {string} [type]
 * @property {string} [action]
 * @property {Object} [entity_details]
 */

/**
 * @typedef Modifier
 * @property {string} [user_id]
 * @property {boolean} [as_administrator]
 * @property {Object} [user_details]
 */

/**
 * @typedef DeviceInfo
 * @property {string} [user_agent]
 * @property {Object} [extra_meta]
 */

/**
 * @typedef Location
 * @property {Object} [extra_meta]
 */

/**
 * @typedef EntityTypesResponse
 * @property {EntityTypeObj[]} [items]
 */

/**
 * @typedef EntityTypeObj
 * @property {string} [entity_value]
 * @property {string} [display_name]
 */

module.exports = PlatformClient;
