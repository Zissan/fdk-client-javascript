export class CatalogValidator {
    static getProductDetailBySlug: any;
    static getProductSizesBySlug: any;
    static getProductPriceBySlug: any;
    static getProductSellersBySlug: any;
    static getProductComparisonBySlugs: any;
    static getSimilarComparisonProductBySlug: any;
    static getComparedFrequentlyProductBySlug: any;
    static getProductSimilarByIdentifier: any;
    static getProductVariantsBySlug: any;
    static getProductStockByIds: any;
    static getProductStockForTimeByIds: any;
    static getProducts: any;
    static getBrands: any;
    static getBrandDetailBySlug: any;
    static getCategories: any;
    static getCategoryDetailBySlug: any;
    static getHomeProducts: any;
    static getDepartments: any;
    static getSearchResults: any;
    static getCollections: any;
    static getCollectionItemsBySlug: any;
    static getCollectionDetailBySlug: any;
    static getFollowedListing: any;
    static followById: any;
    static unfollowById: any;
    static getFollowerCountById: any;
    static getFollowIds: any;
    static getStores: any;
}
export class CartValidator {
    static getCart: any;
    static getCartLastModified: any;
    static addItems: any;
    static updateCart: any;
    static getItemCount: any;
    static getCoupons: any;
    static applyCoupon: any;
    static removeCoupon: any;
    static getBulkDiscountOffers: any;
    static getAddresses: any;
    static addAddress: any;
    static getAddressById: any;
    static updateAddress: any;
    static removeAddress: any;
    static selectAddress: any;
    static selectPaymentMode: any;
    static validateCouponForPayment: any;
    static getShipments: any;
    static checkoutCart: any;
    static updateCartMeta: any;
    static getCartShareLink: any;
    static getCartSharedItems: any;
    static updateCartWithSharedItems: any;
}
export class LeadValidator {
    static getTicket: any;
    static createHistory: any;
    static createTicket: any;
    static getCustomForm: any;
    static submitCustomForm: any;
    static getParticipantsInsideVideoRoom: any;
    static getTokenForVideoRoom: any;
}
export class ThemeValidator {
    static getAppliedTheme: any;
    static getThemeForPreview: any;
}
export class UserValidator {
    static loginWithFacebook: any;
    static loginWithGoogle: any;
    static loginWithGoogleAndroid: any;
    static loginWithGoogleIOS: any;
    static loginWithOTP: any;
    static loginWithEmailAndPassword: any;
    static sendResetPasswordEmail: any;
    static forgotPassword: any;
    static sendResetToken: any;
    static loginWithToken: any;
    static registerWithForm: any;
    static verifyEmail: any;
    static verifyMobile: any;
    static hasPassword: any;
    static updatePassword: any;
    static logout: any;
    static sendOTPOnMobile: any;
    static verifyMobileOTP: any;
    static sendOTPOnEmail: any;
    static verifyEmailOTP: any;
    static getLoggedInUser: any;
    static getListOfActiveSessions: any;
    static getPlatformConfig: any;
    static updateProfile: any;
    static addMobileNumber: any;
    static deleteMobileNumber: any;
    static setMobileNumberAsPrimary: any;
    static sendVerificationLinkToMobile: any;
    static addEmail: any;
    static deleteEmail: any;
    static setEmailAsPrimary: any;
    static sendVerificationLinkToEmail: any;
}
export class ShareValidator {
    static getApplicationQRCode: any;
    static getProductQRCodeBySlug: any;
    static getCollectionQRCodeBySlug: any;
    static getUrlQRCode: any;
    static createShortLink: any;
    static getShortLinkByHash: any;
    static getOriginalShortLinkByHash: any;
}
export class FileStorageValidator {
    static startUpload: any;
    static completeUpload: any;
}
export class PaymentValidator {
    static getAggregatorsConfig: any;
    static attachCardToCustomer: any;
    static getActiveCardAggregator: any;
    static getActiveUserCards: any;
    static deleteUserCard: any;
    static verifyCustomerForPayment: any;
    static verifyAndChargePayment: any;
    static initialisePayment: any;
    static checkAndUpdatePaymentStatus: any;
    static getPaymentModeRoutes: any;
    static getPosPaymentModeRoutes: any;
    static getUserBeneficiariesDetail: any;
    static verifyIfscCode: any;
    static getOrderBeneficiariesDetail: any;
    static verifyOtpAndAddBeneficiaryForBank: any;
    static addBeneficiaryDetails: any;
    static verifyOtpAndAddBeneficiaryForWallet: any;
    static updateDefaultBeneficiary: any;
}
export class OrderValidator {
    static getOrders: any;
    static getOrderById: any;
    static getShipmentById: any;
    static getShipmentReasons: any;
    static updateShipmentStatus: any;
    static trackShipment: any;
    static getPosOrderById: any;
}
export class FeedbackValidator {
    static createAbuseReport: any;
    static updateAbuseReport: any;
    static getAbuseReports: any;
    static getAttributes: any;
    static createAttribute: any;
    static getAttribute: any;
    static updateAttribute: any;
    static createComment: any;
    static updateComment: any;
    static getComments: any;
    static checkEligibility: any;
    static deleteMedia: any;
    static createMedia: any;
    static updateMedia: any;
    static getMedias: any;
    static getReviewSummaries: any;
    static createReview: any;
    static updateReview: any;
    static getReviews: any;
    static getTemplates: any;
    static createQuestion: any;
    static updateQuestion: any;
    static getQuestionAndAnswers: any;
    static getVotes: any;
    static createVote: any;
    static updateVote: any;
}
export class PosCartValidator {
    static getCart: any;
    static getCartLastModified: any;
    static addItems: any;
    static updateCart: any;
    static getItemCount: any;
    static getCoupons: any;
    static applyCoupon: any;
    static removeCoupon: any;
    static getBulkDiscountOffers: any;
    static getAddresses: any;
    static addAddress: any;
    static getAddressById: any;
    static updateAddress: any;
    static removeAddress: any;
    static selectAddress: any;
    static selectPaymentMode: any;
    static validateCouponForPayment: any;
    static getShipments: any;
    static updateShipments: any;
    static checkoutCart: any;
    static updateCartMeta: any;
    static getAvailableDeliveryModes: any;
    static getStoreAddressByUid: any;
    static getCartShareLink: any;
    static getCartSharedItems: any;
    static updateCartWithSharedItems: any;
}
export class LogisticValidator {
    static getTatProduct: any;
    static getPincodeCity: any;
}
export class Validator {
    static ProductDetailAttribute: () => any;
    static ProductDetailGroupedAttribute: () => any;
    static Media: () => any;
    static ProductListingActionPage: () => any;
    static ProductListingAction: () => any;
    static ProductBrand: () => any;
    static ProductDetail: () => any;
    static ErrorResponse: () => any;
    static ProductSize: () => any;
    static SizeChartValues: () => any;
    static ColumnHeader: () => any;
    static ColumnHeaders: () => any;
    static SizeChart: () => any;
    static Price: () => any;
    static ProductListingPrice: () => any;
    static ProductSizeStores: () => any;
    static ProductSizes: () => any;
    static ProductStockPrice: () => any;
    static Store: () => any;
    static ArticleAssignment: () => any;
    static ProductSetDistributionSize: () => any;
    static ProductSetDistribution: () => any;
    static ProductSet: () => any;
    static Seller: () => any;
    static ProductSizePriceResponse: () => any;
    static ProductSizeSellerFilter: () => any;
    static Page: () => any;
    static ProductSizeSellersResponse: () => any;
    static AttributeDetail: () => any;
    static ProductsComparisonResponse: () => any;
    static ProductCompareResponse: () => any;
    static ProductFrequentlyComparedSimilarResponse: () => any;
    static ProductSimilarItem: () => any;
    static SimilarProductByTypeResponse: () => any;
    static ProductVariantItemResponse: () => any;
    static ProductVariantResponse: () => any;
    static ProductVariantsResponse: () => any;
    static CompanyDetail: () => any;
    static StoreDetail: () => any;
    static ProductStockStatusItem: () => any;
    static ProductStockStatusResponse: () => any;
    static ProductStockPolling: () => any;
    static ProductSortOn: () => any;
    static ProductListingDetail: () => any;
    static ProductFiltersKey: () => any;
    static ProductFiltersValue: () => any;
    static ProductFilters: () => any;
    static ProductListingResponse: () => any;
    static ImageUrls: () => any;
    static BrandItem: () => any;
    static BrandListingResponse: () => any;
    static BrandDetailResponse: () => any;
    static DepartmentIdentifier: () => any;
    static CategoryItems: () => any;
    static DepartmentCategoryTree: () => any;
    static CategoryListingResponse: () => any;
    static CategoryMetaResponse: () => any;
    static HomeListingResponse: () => any;
    static Department: () => any;
    static DepartmentResponse: () => any;
    static PageQuery: () => any;
    static AutocompletePage: () => any;
    static Action: () => any;
    static AutocompleteItem: () => any;
    static AutoCompleteResponse: () => any;
    static CollectionListingFilterTag: () => any;
    static CollectionListingFilterType: () => any;
    static CollectionListingFilter: () => any;
    static GetCollectionDetailNest: () => any;
    static GetCollectionListingResponse: () => any;
    static CollectionDetailResponse: () => any;
    static GetFollowListingResponse: () => any;
    static FollowPostResponse: () => any;
    static FollowerCountResponse: () => any;
    static FollowIdsData: () => any;
    static FollowIdsResponse: () => any;
    static LatLong: () => any;
    static Store1: () => any;
    static StoreListingResponse: () => any;
    static CouponBreakup: () => any;
    static DisplayBreakup: () => any;
    static LoyaltyPoints: () => any;
    static RawBreakup: () => any;
    static CartBreakup: () => any;
    static CartCurrency: () => any;
    static PromiseTimestamp: () => any;
    static PromiseFormatted: () => any;
    static ShipmentPromise: () => any;
    static Image: () => any;
    static CategoryInfo: () => any;
    static ActionQuery: () => any;
    static ProductAction: () => any;
    static BaseInfo: () => any;
    static Product: () => any;
    static CartProductIdentifer: () => any;
    static ProductPrice: () => any;
    static ProductPriceInfo: () => any;
    static BasePrice: () => any;
    static ArticlePriceInfo: () => any;
    static ProductArticle: () => any;
    static ProductAvailability: () => any;
    static CartProductInfo: () => any;
    static CartResponse: () => any;
    static AddProductCart: () => any;
    static AddCartRequest: () => any;
    static AddCartResponse: () => any;
    static UpdateProductCart: () => any;
    static UpdateCartRequest: () => any;
    static UpdateCartResponse: () => any;
    static CartItemCountResponse: () => any;
    static Coupon: () => any;
    static PageCoupon: () => any;
    static GetCouponResponse: () => any;
    static ApplyCouponRequest: () => any;
    static OfferSeller: () => any;
    static OfferPrice: () => any;
    static OfferItem: () => any;
    static BulkPriceOffer: () => any;
    static BulkPriceResponse: () => any;
    static GeoLocation: () => any;
    static Address: () => any;
    static GetAddressesResponse: () => any;
    static SaveAddressResponse: () => any;
    static UpdateAddressResponse: () => any;
    static DeleteAddressResponse: () => any;
    static SelectCartAddressRequest: () => any;
    static UpdateCartPaymentRequest: () => any;
    static CouponValidity: () => any;
    static PaymentUpdate: () => any;
    static ShipmentResponse: () => any;
    static CartShipmentsResponse: () => any;
    static CartCheckoutRequest: () => any;
    static CheckCart: () => any;
    static CartCheckoutResponse: () => any;
    static CartMetaRequest: () => any;
    static CartMetaResponse: () => any;
    static CartMetaMissingResponse: () => any;
    static GetShareCartLinkRequest: () => any;
    static GetShareCartLinkResponse: () => any;
    static SharedCartDetails: () => any;
    static SharedCart: () => any;
    static SharedCartResponse: () => any;
    static TicketList: () => any;
    static TicketHistoryList: () => any;
    static CustomFormList: () => any;
    static CreateCustomFormPayload: () => any;
    static EditCustomFormPayload: () => any;
    static EditTicketPayload: () => any;
    static AgentChangePayload: () => any;
    static CreateVideoRoomResponse: () => any;
    static CloseVideoRoomResponse: () => any;
    static CreateVideoRoomPayload: () => any;
    static Filter: () => any;
    static TicketHistoryPayload: () => any;
    static CustomFormSubmissionPayload: () => any;
    static KeyValue: () => any;
    static GetTokenForVideoRoomResponse: () => any;
    static GetParticipantsInsideVideoRoomResponse: () => any;
    static Participant: () => any;
    static UserSchema: () => any;
    static PhoneNumber: () => any;
    static Email: () => any;
    static Debug: () => any;
    static SubmitCustomFormResponse: () => any;
    static TicketContext: () => any;
    static CreatedOn: () => any;
    static TicketAsset: () => any;
    static TicketContent: () => any;
    static AddTicketPayload: () => any;
    static Priority: () => any;
    static Status: () => any;
    static TicketCategory: () => any;
    static SubmitButton: () => any;
    static PollForAssignment: () => any;
    static CustomForm: () => any;
    static TicketHistory: () => any;
    static Ticket: () => any;
    static PaginationSchema: () => any;
    static ThemesListingResponseSchema: () => any;
    static AddThemeRequestSchema: () => any;
    static UpgradableThemeSchema: () => any;
    static FontsSchema: () => any;
    static BlitzkriegApiErrorSchema: () => any;
    static BlitzkriegNotFoundSchema: () => any;
    static BlitzkriegInternalServerErrorSchema: () => any;
    static FontsSchemaItems: () => any;
    static FontsSchemaItemsFiles: () => any;
    static ThemesSchema: () => any;
    static pagesSchema: () => any;
    static availableSectionSchema: () => any;
    static sectionSchema: () => any;
    static Information: () => any;
    static Images: () => any;
    static Src: () => any;
    static AssetsSchema: () => any;
    static UmdJs: () => any;
    static CommonJs: () => any;
    static Css: () => any;
    static AvailablePages: () => any;
    static Seo: () => any;
    static Sections: () => any;
    static Pages: () => any;
    static Config: () => any;
    static Preset: () => any;
    static GlobalSchema: () => any;
    static ListSchema: () => any;
    static Colors: () => any;
    static Custom: () => any;
    static ConfigPage: () => any;
    static Font: () => any;
    static Variants: () => any;
    static Medium: () => any;
    static SemiBold: () => any;
    static Bold: () => any;
    static Light: () => any;
    static Regular: () => any;
    static Blocks: () => any;
    static BlocksProps: () => any;
    static PageSections: () => any;
    static PageSectionsBlocks: () => any;
    static PageSectionsBlocksProps: () => any;
    static Predicate: () => any;
    static Screen: () => any;
    static PredicateUserSchema: () => any;
    static Route: () => any;
    static EditEmailRequestSchema: () => any;
    static SendVerificationLinkMobileRequestSchema: () => any;
    static EditMobileRequestSchema: () => any;
    static EditProfileRequestSchema: () => any;
    static SendEmailOtpRequestSchema: () => any;
    static VerifyOtpRequestSchema: () => any;
    static SendMobileOtpRequestSchema: () => any;
    static UpdatePasswordRequestSchema: () => any;
    static FormRegisterRequestSchema: () => any;
    static TokenRequestBodySchema: () => any;
    static ForgotPasswordRequestSchema: () => any;
    static CodeRequestBodySchema: () => any;
    static SendResetPasswordEmailRequestSchema: () => any;
    static PasswordLoginRequestSchema: () => any;
    static SendOtpRequestSchema: () => any;
    static OAuthRequestSchema: () => any;
    static AuthSuccess: () => any;
    static SendOtpResponse: () => any;
    static LoginSuccess: () => any;
    static VerifyOtpSuccess: () => any;
    static ResetPasswordSuccess: () => any;
    static RegisterFormSuccess: () => any;
    static VerifyEmailSuccess: () => any;
    static HasPasswordSuccess: () => any;
    static LogoutSuccess: () => any;
    static OtpSuccess: () => any;
    static EmailOtpSuccess: () => any;
    static SessionListSuccess: () => any;
    static VerifyMobileOTPSuccess: () => any;
    static VerifyEmailOTPSuccess: () => any;
    static SendMobileVerifyLinkSuccess: () => any;
    static SendEmailVerifyLinkSuccess: () => any;
    static UserSearchResponseSchema: () => any;
    static CustomerListResponseSchema: () => any;
    static UnauthorizedSchema: () => any;
    static UnauthenticatedSchema: () => any;
    static NotFoundSchema: () => any;
    static AuthenticationApiErrorSchema: () => any;
    static ProfileEditSuccessSchema: () => any;
    static FormRegisterRequestSchemaPhone: () => any;
    static OAuthRequestSchemaOauth2: () => any;
    static OAuthRequestSchemaProfile: () => any;
    static AuthSuccessUser: () => any;
    static AuthSuccessUserDebug: () => any;
    static AuthSuccessUserEmails: () => any;
    static PlatformSchema: () => any;
    static LookAndFeel: () => any;
    static Login: () => any;
    static MetaSchema: () => any;
    static Social: () => any;
    static RequiredFields: () => any;
    static Mobile: () => any;
    static RegisterRequiredFields: () => any;
    static RegisterRequiredFieldsEmail: () => any;
    static RegisterRequiredFieldsMobile: () => any;
    static FlashCard: () => any;
    static SocialTokens: () => any;
    static Facebook: () => any;
    static Accountkit: () => any;
    static Google: () => any;
    static QRCodeResp: () => any;
    static RedirectDevice: () => any;
    static WebRedirect: () => any;
    static Redirects: () => any;
    static ShortLinkReq: () => any;
    static UrlInfo: () => any;
    static ShortLinkRes: () => any;
    static ShortLinkList: () => any;
    static FailedResponse: () => any;
    static CDN: () => any;
    static Upload: () => any;
    static StartResponse: () => any;
    static StartRequest: () => any;
    static CompleteResponse: () => any;
    static Opts: () => any;
    static CopyFileTask: () => any;
    static BulkResponse: () => any;
    static ReqConfiguration: () => any;
    static Destination: () => any;
    static BulkRequest: () => any;
    static Urls: () => any;
    static SignUrlResponse: () => any;
    static SignUrlRequest: () => any;
    static DbRecord: () => any;
    static BrowseResponse: () => any;
    static AggregatorConfigDetail: () => any;
    static AggregatorsConfigDetailResponse: () => any;
    static ErrorCodeAndDescription: () => any;
    static HttpErrorCodeAndResponse: () => any;
    static AttachCardRequest: () => any;
    static AttachCardsResponse: () => any;
    static CardPaymentGateway: () => any;
    static ActiveCardPaymentGatewayResponse: () => any;
    static Card: () => any;
    static ListCardsResponse: () => any;
    static DeletehCardRequest: () => any;
    static DeleteCardsResponse: () => any;
    static ValidateCustomerRequest: () => any;
    static ValidateCustomerResponse: () => any;
    static ChargeCustomerRequest: () => any;
    static ChargeCustomerResponse: () => any;
    static PaymentInitializationRequest: () => any;
    static PaymentInitializationResponse: () => any;
    static PaymentStatusUpdateRequest: () => any;
    static PaymentStatusUpdateResponse: () => any;
    static PaymentModeLogo: () => any;
    static PaymentModeList: () => any;
    static RootPaymentMode: () => any;
    static AggregatorRoute: () => any;
    static PaymentFlow: () => any;
    static PaymentOptionAndFlow: () => any;
    static PaymentModeRouteResponse: () => any;
    static OrderBeneficiaryDetails: () => any;
    static OrderBeneficiaryResponse: () => any;
    static NotFoundResourceError: () => any;
    static IfscCodeResponse: () => any;
    static ErrorCodeDescription: () => any;
    static AddBeneficiaryViaOtpVerificationRequest: () => any;
    static AddBeneficiaryViaOtpVerificationResponse: () => any;
    static WrongOtpError: () => any;
    static BankDetails: () => any;
    static AddBeneficiaryDetailsRequest: () => any;
    static RefundAccountResponse: () => any;
    static WalletOtpRequest: () => any;
    static WalletOtpResponse: () => any;
    static SetDefaultBeneficiaryRequest: () => any;
    static SetDefaultBeneficiaryResponse: () => any;
    static OrderById: () => any;
    static OrderList: () => any;
    static OrderPage: () => any;
    static ShipmentById: () => any;
    static ShipmentReasons: () => any;
    static ShipmentStatusUpdateBody: () => any;
    static Shipments: () => any;
    static ShipmentId: () => any;
    static StatusUpdate: () => any;
    static ShipmentStatusUpdate: () => any;
    static ShipmentTrack: () => any;
    static OrderSchema: () => any;
    static PosOrderById: () => any;
    static Bags: () => any;
    static Item: () => any;
    static BagItemAttributes: () => any;
    static Prices: () => any;
    static CurrentStatus: () => any;
    static BagStateMapper: () => any;
    static BagStatus: () => any;
    static BagStatusBagStateMapper: () => any;
    static Dates: () => any;
    static BagState: () => any;
    static FinancialBreakup: () => any;
    static Identifiers: () => any;
    static BagReasons: () => any;
    static Article: () => any;
    static ArticleIdentifiers: () => any;
    static ReturnConfig: () => any;
    static CurrentOperationalStatus: () => any;
    static CurrentOperationalStatusReasons: () => any;
    static CurrentOperationalStatusBagStateMapper: () => any;
    static Brand: () => any;
    static AffiliateBagDetails: () => any;
    static AffiliateMeta: () => any;
    static Fynd: () => any;
    static GstDetails: () => any;
    static BreakupValues: () => any;
    static DeliveryAddress: () => any;
    static FulfillingStore: () => any;
    static StoreAddressJson: () => any;
    static FulfillingStoreMeta: () => any;
    static AdditionalContactDetails: () => any;
    static Timing: () => any;
    static Opening: () => any;
    static Closing: () => any;
    static Documents: () => any;
    static Gst: () => any;
    static Invoice: () => any;
    static ProductItems: () => any;
    static ProductItemAttributes: () => any;
    static ShipmentMeta: () => any;
    static Timestamp: () => any;
    static DpOptions: () => any;
    static DpOptionId: () => any;
    static Formatted: () => any;
    static DebugInfo: () => any;
    static Promise: () => any;
    static Reasons: () => any;
    static ShipmentStatus: () => any;
    static ShipmentUserInfo: () => any;
    static Track: () => any;
    static TrackingDetails: () => any;
    static UserInfo: () => any;
    static ApefaceApiError: () => any;
    static Access: () => any;
    static AddMediaListRequest: () => any;
    static AddMediaRequest: () => any;
    static Attribute: () => any;
    static AttributeObject: () => any;
    static CheckEligibilityResponse: () => any;
    static Cloud: () => any;
    static CommentRequest: () => any;
    static CreateQNARequest: () => any;
    static DeviceMeta: () => any;
    static MediaCloud: () => any;
    static MediaMeta: () => any;
    static PageCursor: () => any;
    static PageNumber: () => any;
    static ReportAbuseRequest: () => any;
    static SaveAttributeRequest: () => any;
    static TagMeta: () => any;
    static UpdateAbuseStatusRequest: () => any;
    static UpdateAttributeRequest: () => any;
    static UpdateCommentRequest: () => any;
    static UpdateMediaListRequest: () => any;
    static UpdateQNARequest: () => any;
    static UpdateReviewRequest: () => any;
    static UpdateVoteRequest: () => any;
    static Url: () => any;
    static VoteRequest: () => any;
    static XCursorGetResponse: () => any;
    static XInsertResponse: () => any;
    static XNumberGetResponse: () => any;
    static XUpdateResponse: () => any;
    static UpdateCartShipmentItem: () => any;
    static UpdateCartShipmentRequest: () => any;
    static Files: () => any;
    static CartPosCheckoutRequest: () => any;
    static CartDeliveryModesResponse: () => any;
    static PickupStoreDetail: () => any;
    static StoreDetailsResponse: () => any;
    static GetPincodeCityResponse: () => any;
    static LogisticPincodeData: () => any;
    static LogisticMeta: () => any;
    static LogisticParents: () => any;
    static LogisticError: () => any;
    static GetTatProductReqBody: () => any;
    static LocationDetails: () => any;
    static TatProductArticles: () => any;
    static LogisticRequestCategory: () => any;
    static LogisticPromise: () => any;
    static LogisticTimestamp: () => any;
    static GetTatProductResponse: () => any;
    static LogisticResponseCategory: () => any;
}
