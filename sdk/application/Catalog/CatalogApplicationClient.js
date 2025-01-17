const ApplicationAPIClient = require("../ApplicationAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");
const CatalogValidator = require("./CatalogApplicationValidator");
const CatalogModel = require("./CatalogApplicationModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Catalog {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      followById:
        "/service/application/catalog/v1.0/follow/{collection_type}/{collection_id}/",
      getBrandDetailBySlug: "/service/application/catalog/v1.0/brands/{slug}/",
      getBrands: "/service/application/catalog/v1.0/brands/",
      getCategories: "/service/application/catalog/v1.0/categories/",
      getCategoryDetailBySlug:
        "/service/application/catalog/v1.0/categories/{slug}/",
      getCollectionDetailBySlug:
        "/service/application/catalog/v1.0/collections/{slug}/",
      getCollectionItemsBySlug:
        "/service/application/catalog/v1.0/collections/{slug}/items/",
      getCollections: "/service/application/catalog/v1.0/collections/",
      getComparedFrequentlyProductBySlug:
        "/service/application/catalog/v1.0/products/{slug}/similar/compared-frequently/",
      getDepartments: "/service/application/catalog/v1.0/departments/",
      getFollowIds: "/service/application/catalog/v1.0/follow/ids/",
      getFollowedListing:
        "/service/application/catalog/v1.0/follow/{collection_type}/",
      getFollowerCountById:
        "/service/application/catalog/v1.0/follow/{collection_type}/{collection_id}/count/",
      getHomeProducts: "/service/application/catalog/v1.0/home/listing/",
      getInStockLocations:
        "/service/application/catalog/v1.0/in-stock/locations/",
      getLocationDetailsById:
        "/service/application/catalog/v1.0/locations/{location_id}/",
      getProductBundlesBySlug:
        "/service/application/catalog/v1.0/product-grouping/",
      getProductComparisonBySlugs:
        "/service/application/catalog/v1.0/products/compare/",
      getProductDetailBySlug:
        "/service/application/catalog/v1.0/products/{slug}/",
      getProductPriceBySlug:
        "/service/application/catalog/v3.0/products/{slug}/sizes/{size}/price/",
      getProductSellersBySlug:
        "/service/application/catalog/v3.0/products/{slug}/sizes/{size}/sellers/",
      getProductSizesBySlug:
        "/service/application/catalog/v1.0/products/{slug}/sizes/",
      getProductStockByIds:
        "/service/application/catalog/v1.0/products/stock-status/",
      getProductStockForTimeByIds:
        "/service/application/catalog/v1.0/products/stock-status/poll/",
      getProductVariantsBySlug:
        "/service/application/catalog/v1.0/products/{slug}/variants/",
      getProducts: "/service/application/catalog/v1.0/products/",
      getSearchResults: "/service/application/catalog/v1.0/auto-complete/",
      getSimilarComparisonProductBySlug:
        "/service/application/catalog/v1.0/products/{slug}/similar/compare/",
      getStores: "/service/application/catalog/v1.0/locations/",
      unfollowById:
        "/service/application/catalog/v1.0/follow/{collection_type}/{collection_id}/",
    };
    this._urls = Object.entries(this._relativeUrls).reduce(
      (urls, [method, relativeUrl]) => {
        urls[method] = `${_conf.domain}${relativeUrl}`;
        return urls;
      },
      {}
    );
  }

  updateUrls(urls) {
    this._urls = {
      ...this._urls,
      ...urls,
    };
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.collectionType - Type of collection followed, i.e.
   *   products, brands, or collections.
   * @param {string} arg.collectionId - The ID of the collection type.
   * @returns {Promise<FollowPostResponse>} - Success response
   * @summary: Follow an entity (product/brand/collection)
   * @description: Follow a particular entity such as product, brand, collection specified by its ID.
   */
  async followById({ collectionType, collectionId } = {}) {
    const { error } = CatalogValidator.followById().validate(
      { collectionType, collectionId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogValidator.followById().validate(
      { collectionType, collectionId },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for followById",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["followById"],
        params: { collectionType, collectionId },
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = CatalogModel.FollowPostResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for followById",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a brand. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/brands/.
   * @returns {Promise<BrandDetailResponse>} - Success response
   * @summary: Get metadata of a brand
   * @description: Fetch metadata of a brand such as name, information, logo, banner, etc.
   */
  async getBrandDetailBySlug({ slug } = {}) {
    const { error } = CatalogValidator.getBrandDetailBySlug().validate(
      { slug },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogValidator.getBrandDetailBySlug().validate(
      { slug },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getBrandDetailBySlug",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getBrandDetailBySlug"],
        params: { slug },
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = CatalogModel.BrandDetailResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getBrandDetailBySlug",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.department] - The name of the department. Use this
   *   parameter to filter products by a particular department. See the list
   *   of available departments below. Also, you can get available departments
   *   from the endpoint /service/application/catalog/v1.0/departments/
   * @param {number} [arg.pageNo] - The page number to navigate through the
   *   given set of results.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @returns {Promise<BrandListingResponse>} - Success response
   * @summary: Get all the brands
   * @description: A brand is the name under which a product is sold. Use this API to list all the brands. You can also filter the brands by department.
   */
  async getBrands({ department, pageNo, pageSize } = {}) {
    const { error } = CatalogValidator.getBrands().validate(
      { department, pageNo, pageSize },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogValidator.getBrands().validate(
      { department, pageNo, pageSize },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getBrands",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["department"] = department;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getBrands"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = CatalogModel.BrandListingResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getBrands",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.department] - The name of the department. Use this
   *   parameter to filter products by a particular department. See the list
   *   of available departments below. Also, you can get available departments
   *   from the endpoint /service/application/catalog/v1.0/departments/
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @summary: Get all the brands
   * @description: A brand is the name under which a product is sold. Use this API to list all the brands. You can also filter the brands by department.
   */
  getBrandsPaginator({ department, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getBrands({
        department: department,
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.department] - The name of the department. Use this
   *   parameter to filter products by a particular department. See the list
   *   of available departments below. Also, you can get available departments
   *   from the endpoint /service/application/catalog/v1.0/departments/
   * @returns {Promise<CategoryListingResponse>} - Success response
   * @summary: List all the categories
   * @description: Use this API to list all the categories. You can also filter the categories by department.
   */
  async getCategories({ department } = {}) {
    const { error } = CatalogValidator.getCategories().validate(
      { department },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogValidator.getCategories().validate(
      { department },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getCategories",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["department"] = department;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getCategories"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = CatalogModel.CategoryListingResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getCategories",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a brand. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/brands/.
   * @returns {Promise<CategoryMetaResponse>} - Success response
   * @summary: Get metadata of a category
   * @description: Fetch metadata of a category such as name, information, logo, banner, etc.
   */
  async getCategoryDetailBySlug({ slug } = {}) {
    const { error } = CatalogValidator.getCategoryDetailBySlug().validate(
      { slug },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogValidator.getCategoryDetailBySlug().validate(
      { slug },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getCategoryDetailBySlug",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getCategoryDetailBySlug"],
        params: { slug },
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = CatalogModel.CategoryMetaResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getCategoryDetailBySlug",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a collection. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/collections/.
   * @returns {Promise<CollectionDetailResponse>} - Success response
   * @summary: Get a particular collection
   * @description: Get the details of a collection by its `slug`.
   */
  async getCollectionDetailBySlug({ slug } = {}) {
    const { error } = CatalogValidator.getCollectionDetailBySlug().validate(
      { slug },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogValidator.getCollectionDetailBySlug().validate(
      { slug },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getCollectionDetailBySlug",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getCollectionDetailBySlug"],
        params: { slug },
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = CatalogModel.CollectionDetailResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getCollectionDetailBySlug",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a collection. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/collections/.
   * @param {string} [arg.f] - The search filter parameters. Filter parameters
   *   will be passed in f parameter as shown in the example below. Double
   *   Pipe (||) denotes the OR condition, whereas Triple-colon (:::)
   *   indicates a new filter paramater applied as an AND condition.
   * @param {string} [arg.q] - The search query for entering partial or full
   *   name of product, brand, category, or collection.
   * @param {boolean} [arg.filters] - This is a boolean value, True for
   *   fetching all filter parameters and False for disabling the filter parameters.
   * @param {string} [arg.sortOn] - The order in which the list of products
   *   should be sorted, e.g. popularity, price, latest and discount, in
   *   either ascending or descending order. See the supported values below.
   * @param {string} [arg.pageId] - Page ID to retrieve next set of results.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @param {number} [arg.pageNo] - Page Number to retrieve next set of results.
   * @param {string} [arg.pageType] - Page Type to retrieve set of results can
   *   be cursor or number.
   * @returns {Promise<ProductListingResponse>} - Success response
   * @summary: Get the items in a collection
   * @description: Get items in a collection specified by its `slug`.
   */
  async getCollectionItemsBySlug({
    slug,
    f,
    q,
    filters,
    sortOn,
    pageId,
    pageSize,
    pageNo,
    pageType,
  } = {}) {
    const { error } = CatalogValidator.getCollectionItemsBySlug().validate(
      { slug, f, q, filters, sortOn, pageId, pageSize, pageNo, pageType },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogValidator.getCollectionItemsBySlug().validate(
      { slug, f, q, filters, sortOn, pageId, pageSize, pageNo, pageType },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getCollectionItemsBySlug",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["f"] = f;
    query_params["q"] = q;
    query_params["filters"] = filters;
    query_params["sort_on"] = sortOn;
    query_params["page_id"] = pageId;
    query_params["page_size"] = pageSize;
    query_params["page_no"] = pageNo;
    query_params["page_type"] = pageType;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getCollectionItemsBySlug"],
        params: { slug },
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = CatalogModel.ProductListingResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getCollectionItemsBySlug",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a collection. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/collections/.
   * @param {string} [arg.f] - The search filter parameters. Filter parameters
   *   will be passed in f parameter as shown in the example below. Double
   *   Pipe (||) denotes the OR condition, whereas Triple-colon (:::)
   *   indicates a new filter paramater applied as an AND condition.
   * @param {string} [arg.q] - The search query for entering partial or full
   *   name of product, brand, category, or collection.
   * @param {boolean} [arg.filters] - This is a boolean value, True for
   *   fetching all filter parameters and False for disabling the filter parameters.
   * @param {string} [arg.sortOn] - The order in which the list of products
   *   should be sorted, e.g. popularity, price, latest and discount, in
   *   either ascending or descending order. See the supported values below.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @summary: Get the items in a collection
   * @description: Get items in a collection specified by its `slug`.
   */
  getCollectionItemsBySlugPaginator({
    slug,
    f,
    q,
    filters,
    sortOn,
    pageSize,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "cursor";
      const data = await this.getCollectionItemsBySlug({
        slug: slug,
        f: f,
        q: q,
        filters: filters,
        sortOn: sortOn,
        pageId: pageId,
        pageSize: pageSize,
        pageNo: pageNo,
        pageType: pageType,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - The page number to navigate through the
   *   given set of results.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @param {string[]} [arg.tag] - List of tags to filter collections
   * @param {string} [arg.q] - Name of the collection to filter collection
   * @returns {Promise<GetCollectionListingResponse>} - Success response
   * @summary: List all the collections
   * @description: Collections are a great way to organize your products and can improve the ability for customers to find items quickly and efficiently.
   */
  async getCollections({ pageNo, pageSize, tag, q } = {}) {
    const { error } = CatalogValidator.getCollections().validate(
      { pageNo, pageSize, tag, q },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogValidator.getCollections().validate(
      { pageNo, pageSize, tag, q },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getCollections",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["tag"] = tag;
    query_params["q"] = q;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getCollections"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = CatalogModel.GetCollectionListingResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getCollections",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @param {string[]} [arg.tag] - List of tags to filter collections
   * @param {string} [arg.q] - Name of the collection to filter collection
   * @summary: List all the collections
   * @description: Collections are a great way to organize your products and can improve the ability for customers to find items quickly and efficiently.
   */
  getCollectionsPaginator({ pageSize, tag, q } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getCollections({
        pageNo: pageNo,
        pageSize: pageSize,
        tag: tag,
        q: q,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a product. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/products/
   * @returns {Promise<ProductFrequentlyComparedSimilarResponse>} - Success response
   * @summary: Get comparison between frequently compared products with the given product
   * @description: Use this API to compare a given product automatically with products that are frequently compared with it. Only one slug is needed.
   */
  async getComparedFrequentlyProductBySlug({ slug } = {}) {
    const {
      error,
    } = CatalogValidator.getComparedFrequentlyProductBySlug().validate(
      { slug },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogValidator.getComparedFrequentlyProductBySlug().validate(
      { slug },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message:
          "Parameter Validation warrnings for getComparedFrequentlyProductBySlug",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getComparedFrequentlyProductBySlug"],
        params: { slug },
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = CatalogModel.ProductFrequentlyComparedSimilarResponse().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message:
          "Response Validation Warnnings for getComparedFrequentlyProductBySlug",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<DepartmentResponse>} - Success response
   * @summary: List all the departments
   * @description: Departments are a way to categorise similar products. A product can lie in multiple departments. For example, a skirt can below to the 'Women's Fashion' Department while a handbag can lie in 'Women's Accessories' Department. Use this API to list all the departments. If successful, returns the list of departments specified in `DepartmentResponse`
   */
  async getDepartments({} = {}) {
    const { error } = CatalogValidator.getDepartments().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogValidator.getDepartments().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getDepartments",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getDepartments"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = CatalogModel.DepartmentResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getDepartments",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.collectionType] - Type of collection, i.e. products,
   *   brands, collections.
   * @returns {Promise<FollowIdsResponse>} - Success response
   * @summary: Get the IDs of followed products, brands and collections.
   * @description: You can get the IDs of all the followed Products, Brands and Collections. Pass collection_type as query parameter to fetch specific Ids
   */
  async getFollowIds({ collectionType } = {}) {
    const { error } = CatalogValidator.getFollowIds().validate(
      { collectionType },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogValidator.getFollowIds().validate(
      { collectionType },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getFollowIds",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["collection_type"] = collectionType;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getFollowIds"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = CatalogModel.FollowIdsResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getFollowIds",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.collectionType - Type of collection followed, i.e.
   *   products, brands, or collections.
   * @param {string} [arg.pageId] - Page ID to retrieve next set of results.
   * @param {number} [arg.pageSize] - Page ID to retrieve next set of results.
   * @returns {Promise<GetFollowListingResponse>} - Success response
   * @summary: Get a list of followed Products, Brands, Collections
   * @description: Users can follow a product they like. This API retrieves the products the user have followed.
   */
  async getFollowedListing({ collectionType, pageId, pageSize } = {}) {
    const { error } = CatalogValidator.getFollowedListing().validate(
      { collectionType, pageId, pageSize },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogValidator.getFollowedListing().validate(
      { collectionType, pageId, pageSize },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getFollowedListing",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["page_id"] = pageId;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getFollowedListing"],
        params: { collectionType },
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = CatalogModel.GetFollowListingResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getFollowedListing",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.collectionType - Type of collection followed, i.e.
   *   products, brands, or collections.
   * @param {number} [arg.pageSize] - Page ID to retrieve next set of results.
   * @summary: Get a list of followed Products, Brands, Collections
   * @description: Users can follow a product they like. This API retrieves the products the user have followed.
   */
  getFollowedListingPaginator({ collectionType, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "cursor";
      const data = await this.getFollowedListing({
        collectionType: collectionType,
        pageId: pageId,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.collectionType - Type of collection, i.e. products,
   *   brands, or collections.
   * @param {string} arg.collectionId - The ID of the collection type.
   * @returns {Promise<FollowerCountResponse>} - Success response
   * @summary: Get Follow Count
   * @description: Get the total count of followers for a given collection type and collection ID.
   */
  async getFollowerCountById({ collectionType, collectionId } = {}) {
    const { error } = CatalogValidator.getFollowerCountById().validate(
      { collectionType, collectionId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogValidator.getFollowerCountById().validate(
      { collectionType, collectionId },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getFollowerCountById",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getFollowerCountById"],
        params: { collectionType, collectionId },
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = CatalogModel.FollowerCountResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getFollowerCountById",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.sortOn] - The order in which the list of products
   *   should be sorted, e.g. popularity, price, latest and discount, in
   *   either ascending or descending order.
   * @param {string} [arg.pageId] - Page ID to retrieve next set of results.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @returns {Promise<HomeListingResponse>} - Success response
   * @summary: List the products
   * @description: List all the products associated with a brand, collection or category in a random order.
   */
  async getHomeProducts({ sortOn, pageId, pageSize } = {}) {
    const { error } = CatalogValidator.getHomeProducts().validate(
      { sortOn, pageId, pageSize },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogValidator.getHomeProducts().validate(
      { sortOn, pageId, pageSize },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getHomeProducts",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["sort_on"] = sortOn;
    query_params["page_id"] = pageId;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getHomeProducts"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = CatalogModel.HomeListingResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getHomeProducts",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.sortOn] - The order in which the list of products
   *   should be sorted, e.g. popularity, price, latest and discount, in
   *   either ascending or descending order.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @summary: List the products
   * @description: List all the products associated with a brand, collection or category in a random order.
   */
  getHomeProductsPaginator({ sortOn, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "cursor";
      const data = await this.getHomeProducts({
        sortOn: sortOn,
        pageId: pageId,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - The page number to navigate through the
   *   given set of results.
   * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
   * @param {string} [arg.q] - Search a store by its name or store_code.
   * @param {string} [arg.city] - Search stores by the city in which they are situated.
   * @param {number} [arg.range] - Use this to retrieve stores within a
   *   particular range in meters, e.g. 10000, to indicate a 10km range
   * @param {number} [arg.latitude] - Latitude of the location from where one
   *   wants to retreive the nearest stores, e.g. 72.8691788
   * @param {number} [arg.longitude] - Longitude of the location from where
   *   one wants to retreive the nearest stores, e.g. 19.1174114
   * @returns {Promise<ApplicationStoreListing>} - Success response
   * @summary: Get store meta information.
   * @description: Use this API to get a list of stores in a specific application.
   */
  async getInStockLocations({
    pageNo,
    pageSize,
    q,
    city,
    range,
    latitude,
    longitude,
  } = {}) {
    const { error } = CatalogValidator.getInStockLocations().validate(
      { pageNo, pageSize, q, city, range, latitude, longitude },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogValidator.getInStockLocations().validate(
      { pageNo, pageSize, q, city, range, latitude, longitude },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getInStockLocations",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["q"] = q;
    query_params["city"] = city;
    query_params["range"] = range;
    query_params["latitude"] = latitude;
    query_params["longitude"] = longitude;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getInStockLocations"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = CatalogModel.ApplicationStoreListing().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getInStockLocations",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
   * @param {string} [arg.q] - Search a store by its name or store_code.
   * @param {string} [arg.city] - Search stores by the city in which they are situated.
   * @param {number} [arg.range] - Use this to retrieve stores within a
   *   particular range in meters, e.g. 10000, to indicate a 10km range
   * @param {number} [arg.latitude] - Latitude of the location from where one
   *   wants to retreive the nearest stores, e.g. 72.8691788
   * @param {number} [arg.longitude] - Longitude of the location from where
   *   one wants to retreive the nearest stores, e.g. 19.1174114
   * @summary: Get store meta information.
   * @description: Use this API to get a list of stores in a specific application.
   */
  getInStockLocationsPaginator({
    pageSize,
    q,
    city,
    range,
    latitude,
    longitude,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getInStockLocations({
        pageNo: pageNo,
        pageSize: pageSize,
        q: q,
        city: city,
        range: range,
        latitude: latitude,
        longitude: longitude,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} arg.locationId - Unique Location ID.
   * @returns {Promise<StoreDetails>} - Success response
   * @summary: Get store meta information.
   * @description: Use this API to get meta details for a store.
   */
  async getLocationDetailsById({ locationId } = {}) {
    const { error } = CatalogValidator.getLocationDetailsById().validate(
      { locationId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogValidator.getLocationDetailsById().validate(
      { locationId },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getLocationDetailsById",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getLocationDetailsById"],
        params: { locationId },
      }),
      query_params,
      undefined,
      xHeaders
    );

    const { error: res_error } = CatalogModel.StoreDetails().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getLocationDetailsById",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.slug] - Product slug for which bundles need to be fetched.
   * @param {string} [arg.id] - Product uid
   * @returns {Promise<ProductBundle>} - Success response
   * @summary: Get product bundles
   * @description: Use this API to retrieve products bundles to the one specified by its slug.
   */
  async getProductBundlesBySlug({ slug, id } = {}) {
    const { error } = CatalogValidator.getProductBundlesBySlug().validate(
      { slug, id },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogValidator.getProductBundlesBySlug().validate(
      { slug, id },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getProductBundlesBySlug",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["slug"] = slug;
    query_params["id"] = id;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getProductBundlesBySlug"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );

    const { error: res_error } = CatalogModel.ProductBundle().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getProductBundlesBySlug",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string[]} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a product. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/products/.
   * @returns {Promise<ProductsComparisonResponse>} - Success response
   * @summary: Compare products
   * @description: Use this API to compare the features of products belonging to the same category. Note that at least one slug is mandatory in the request query.
   */
  async getProductComparisonBySlugs({ slug } = {}) {
    const { error } = CatalogValidator.getProductComparisonBySlugs().validate(
      { slug },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogValidator.getProductComparisonBySlugs().validate(
      { slug },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message:
          "Parameter Validation warrnings for getProductComparisonBySlugs",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["slug"] = slug;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getProductComparisonBySlugs"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = CatalogModel.ProductsComparisonResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message:
          "Response Validation Warnnings for getProductComparisonBySlugs",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a product. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/products/
   * @returns {Promise<ProductDetail>} - Success response
   * @summary: Get a product
   * @description: Use this API to retrieve a product by its slug value.
   */
  async getProductDetailBySlug({ slug } = {}) {
    const { error } = CatalogValidator.getProductDetailBySlug().validate(
      { slug },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogValidator.getProductDetailBySlug().validate(
      { slug },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getProductDetailBySlug",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getProductDetailBySlug"],
        params: { slug },
      }),
      query_params,
      undefined,
      xHeaders
    );

    const { error: res_error } = CatalogModel.ProductDetail().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getProductDetailBySlug",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a product. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/products/
   * @param {string} arg.size - A string indicating the size of the product,
   *   e.g. S, M, XL. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/products/sizes
   * @param {number} [arg.storeId] - The ID of the store that is selling the
   *   product, e.g. 1,2,3.
   * @param {string} [arg.pincode] - The PIN Code of the area near which the
   *   selling locations should be searched, e.g. 400059.
   * @param {number} [arg.moq] - An Integer indication the Minimum Order
   *   Quantity of a product, e.g. 100.
   * @returns {Promise<ProductSizePriceResponseV3>} - Success response
   * @summary: Get the price of a product size at a PIN Code
   * @description: Prices may vary for different sizes of a product. Use this API to retrieve the price of a product size at all the selling locations near to a PIN Code.
   */
  async getProductPriceBySlug({ slug, size, storeId, pincode, moq } = {}) {
    const { error } = CatalogValidator.getProductPriceBySlug().validate(
      { slug, size, storeId, pincode, moq },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogValidator.getProductPriceBySlug().validate(
      { slug, size, storeId, pincode, moq },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getProductPriceBySlug",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["store_id"] = storeId;
    query_params["pincode"] = pincode;
    query_params["moq"] = moq;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getProductPriceBySlug"],
        params: { slug, size },
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = CatalogModel.ProductSizePriceResponseV3().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getProductPriceBySlug",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a product. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/products/
   * @param {string} arg.size - A string indicating the size of the product,
   *   e.g. S, M, XL. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/products/sizes
   * @param {string} [arg.pincode] - The 6-digit PIN Code of the area near
   *   which the selling locations should be searched, e.g. 400059
   * @param {string} [arg.strategy] - Sort stores on the basis of strategy.
   *   eg, fast-delivery, low-price, optimal.
   * @param {number} [arg.pageNo] - The page number to navigate through the
   *   given set of results.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @returns {Promise<ProductSizeSellersResponseV3>} - Success response
   * @summary: Get the sellers of a product size at a PIN Code
   * @description: A product of a particular size may be sold by multiple sellers. Use this API to fetch the sellers having the stock of a particular size at a given PIN Code.
   */
  async getProductSellersBySlug({
    slug,
    size,
    pincode,
    strategy,
    pageNo,
    pageSize,
  } = {}) {
    const { error } = CatalogValidator.getProductSellersBySlug().validate(
      { slug, size, pincode, strategy, pageNo, pageSize },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogValidator.getProductSellersBySlug().validate(
      { slug, size, pincode, strategy, pageNo, pageSize },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getProductSellersBySlug",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["pincode"] = pincode;
    query_params["strategy"] = strategy;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getProductSellersBySlug"],
        params: { slug, size },
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = CatalogModel.ProductSizeSellersResponseV3().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getProductSellersBySlug",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a product. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/products/
   * @param {string} arg.size - A string indicating the size of the product,
   *   e.g. S, M, XL. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/products/sizes
   * @param {string} [arg.pincode] - The 6-digit PIN Code of the area near
   *   which the selling locations should be searched, e.g. 400059
   * @param {string} [arg.strategy] - Sort stores on the basis of strategy.
   *   eg, fast-delivery, low-price, optimal.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @summary: Get the sellers of a product size at a PIN Code
   * @description: A product of a particular size may be sold by multiple sellers. Use this API to fetch the sellers having the stock of a particular size at a given PIN Code.
   */
  getProductSellersBySlugPaginator({
    slug,
    size,
    pincode,
    strategy,
    pageSize,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getProductSellersBySlug({
        slug: slug,
        size: size,
        pincode: pincode,
        strategy: strategy,
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a product. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/products/
   * @param {number} [arg.storeId] - The ID of the store that is selling the
   *   product, e.g. 1,2,3.
   * @returns {Promise<ProductSizes>} - Success response
   * @summary: Get the sizes of a product
   * @description: A product can have multiple sizes. Use this API to fetch all the available sizes of a product.
   */
  async getProductSizesBySlug({ slug, storeId } = {}) {
    const { error } = CatalogValidator.getProductSizesBySlug().validate(
      { slug, storeId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogValidator.getProductSizesBySlug().validate(
      { slug, storeId },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getProductSizesBySlug",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["store_id"] = storeId;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getProductSizesBySlug"],
        params: { slug },
      }),
      query_params,
      undefined,
      xHeaders
    );

    const { error: res_error } = CatalogModel.ProductSizes().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getProductSizesBySlug",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.itemId] - The Item ID of the product (Max. 50 allowed)
   * @param {string} [arg.alu] - ALU of the product (limited upto 50 ALU
   *   identifier in a single request)
   * @param {string} [arg.skuCode] - Stock-keeping Unit of the product
   *   (limited upto 50 SKU Code in a single request)
   * @param {string} [arg.ean] - European Article Number of the product
   *   (limited upto 50 EAN identifier in a single request)
   * @param {string} [arg.upc] - Universal Product Code of the product
   *   (limited upto 50 UPC identifier in a single request)
   * @returns {Promise<ProductStockStatusResponse>} - Success response
   * @summary: Get the stock of a product
   * @description: Retrieve the available stock of the products. Use this API to retrieve stock of multiple products (up to 50) at a time.
   */
  async getProductStockByIds({ itemId, alu, skuCode, ean, upc } = {}) {
    const { error } = CatalogValidator.getProductStockByIds().validate(
      { itemId, alu, skuCode, ean, upc },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogValidator.getProductStockByIds().validate(
      { itemId, alu, skuCode, ean, upc },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getProductStockByIds",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["item_id"] = itemId;
    query_params["alu"] = alu;
    query_params["sku_code"] = skuCode;
    query_params["ean"] = ean;
    query_params["upc"] = upc;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getProductStockByIds"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = CatalogModel.ProductStockStatusResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getProductStockByIds",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.timestamp - Timestamp in UTC format (2020-07-23T10:27:50Z)
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @param {string} [arg.pageId] - Page ID to retrieve next set of results.
   * @returns {Promise<ProductStockPolling>} - Success response
   * @summary: Get the stock of a product
   * @description: Retrieve the available stock of the products. Use this API to get the stock status of products whose inventory is updated at the specified time
   */
  async getProductStockForTimeByIds({ timestamp, pageSize, pageId } = {}) {
    const { error } = CatalogValidator.getProductStockForTimeByIds().validate(
      { timestamp, pageSize, pageId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogValidator.getProductStockForTimeByIds().validate(
      { timestamp, pageSize, pageId },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message:
          "Parameter Validation warrnings for getProductStockForTimeByIds",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["timestamp"] = timestamp;
    query_params["page_size"] = pageSize;
    query_params["page_id"] = pageId;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getProductStockForTimeByIds"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = CatalogModel.ProductStockPolling().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message:
          "Response Validation Warnnings for getProductStockForTimeByIds",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.timestamp - Timestamp in UTC format (2020-07-23T10:27:50Z)
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @summary: Get the stock of a product
   * @description: Retrieve the available stock of the products. Use this API to get the stock status of products whose inventory is updated at the specified time
   */
  getProductStockForTimeByIdsPaginator({ timestamp, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "cursor";
      const data = await this.getProductStockForTimeByIds({
        timestamp: timestamp,
        pageSize: pageSize,
        pageId: pageId,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a product. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/products/
   * @returns {Promise<ProductVariantsResponse>} - Success response
   * @summary: Get variant of a particular product
   * @description: A product can have a different type of variants such as colour, shade, memory. Use this API to fetch all the available variants of a product using its slug.
   */
  async getProductVariantsBySlug({ slug } = {}) {
    const { error } = CatalogValidator.getProductVariantsBySlug().validate(
      { slug },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogValidator.getProductVariantsBySlug().validate(
      { slug },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getProductVariantsBySlug",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getProductVariantsBySlug"],
        params: { slug },
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = CatalogModel.ProductVariantsResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getProductVariantsBySlug",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.q] - The search query for entering partial or full
   *   name of product, brand, category, or collection.
   * @param {string} [arg.f] - The search filter parameters. Filter parameters
   *   will be passed in f parameter as shown in the example below. Double
   *   Pipe (||) denotes the OR condition, whereas Triple-colon (:::)
   *   indicates a new filter paramater applied as an AND condition.
   * @param {boolean} [arg.filters] - This is a boolean value, True for
   *   fetching all filter parameters and False for disabling the filter parameters.
   * @param {string} [arg.sortOn] - The order in which the list of products
   *   should be sorted, e.g. popularity, price, latest and discount, in
   *   either ascending or descending order. See the supported values below.
   * @param {string} [arg.pageId] - Page ID to retrieve next set of results.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @param {number} [arg.pageNo] - The page number to navigate through the
   *   given set of results.
   * @param {string} [arg.pageType] - Available pagination types are cursor or number.
   * @returns {Promise<ProductListingResponse>} - Success response
   * @summary: Get all the products
   * @description: Use this API to list all the products. You may choose a sort order or make arbitrary search queries by entering the product name, brand, category or collection.
   */
  async getProducts({
    q,
    f,
    filters,
    sortOn,
    pageId,
    pageSize,
    pageNo,
    pageType,
  } = {}) {
    const { error } = CatalogValidator.getProducts().validate(
      { q, f, filters, sortOn, pageId, pageSize, pageNo, pageType },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogValidator.getProducts().validate(
      { q, f, filters, sortOn, pageId, pageSize, pageNo, pageType },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getProducts",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["q"] = q;
    query_params["f"] = f;
    query_params["filters"] = filters;
    query_params["sort_on"] = sortOn;
    query_params["page_id"] = pageId;
    query_params["page_size"] = pageSize;
    query_params["page_no"] = pageNo;
    query_params["page_type"] = pageType;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getProducts"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = CatalogModel.ProductListingResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getProducts",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.q] - The search query for entering partial or full
   *   name of product, brand, category, or collection.
   * @param {string} [arg.f] - The search filter parameters. Filter parameters
   *   will be passed in f parameter as shown in the example below. Double
   *   Pipe (||) denotes the OR condition, whereas Triple-colon (:::)
   *   indicates a new filter paramater applied as an AND condition.
   * @param {boolean} [arg.filters] - This is a boolean value, True for
   *   fetching all filter parameters and False for disabling the filter parameters.
   * @param {string} [arg.sortOn] - The order in which the list of products
   *   should be sorted, e.g. popularity, price, latest and discount, in
   *   either ascending or descending order. See the supported values below.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @summary: Get all the products
   * @description: Use this API to list all the products. You may choose a sort order or make arbitrary search queries by entering the product name, brand, category or collection.
   */
  getProductsPaginator({ q, f, filters, sortOn, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "cursor";
      const data = await this.getProducts({
        q: q,
        f: f,
        filters: filters,
        sortOn: sortOn,
        pageId: pageId,
        pageSize: pageSize,
        pageNo: pageNo,
        pageType: pageType,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.q - The search query for entering partial or full
   *   name of a product, brand or category. For example, if the given search
   *   query `q` is _ski_, the relevant search suggestions could be _skirt_,
   *   _ski shoes_, __skin cream_ etc.
   * @returns {Promise<AutoCompleteResponse>} - Success response
   * @summary: Get relevant suggestions for a search query
   * @description: Retrieves a list of suggestions for a given search query. Each suggestion is a valid search term that's generated on the basis of query. This is particularly useful to enhance the user experience while using the search tool.
   */
  async getSearchResults({ q } = {}) {
    const { error } = CatalogValidator.getSearchResults().validate(
      { q },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogValidator.getSearchResults().validate(
      { q },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getSearchResults",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["q"] = q;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getSearchResults"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = CatalogModel.AutoCompleteResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getSearchResults",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a product. You can get slug value from the endpoint
   *   /service/application/catalog/v1.0/products/
   * @returns {Promise<ProductCompareResponse>} - Success response
   * @summary: Get comparison between similar products
   * @description: Use this API to compare a given product automatically with similar products. Only one slug is needed.
   */
  async getSimilarComparisonProductBySlug({ slug } = {}) {
    const {
      error,
    } = CatalogValidator.getSimilarComparisonProductBySlug().validate(
      { slug },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CatalogValidator.getSimilarComparisonProductBySlug().validate(
      { slug },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message:
          "Parameter Validation warrnings for getSimilarComparisonProductBySlug",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getSimilarComparisonProductBySlug"],
        params: { slug },
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = CatalogModel.ProductCompareResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message:
          "Response Validation Warnnings for getSimilarComparisonProductBySlug",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - The page number to navigate through the
   *   given set of results.
   * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
   * @param {string} [arg.q] - Search a store by its name or store_code.
   * @param {string} [arg.city] - Search stores by the city in which they are situated.
   * @param {number} [arg.range] - Use this to retrieve stores within a
   *   particular range in meters, e.g. 10000, to indicate a 10km range
   * @param {number} [arg.latitude] - Latitude of the location from where one
   *   wants to retreive the nearest stores, e.g. 72.8691788
   * @param {number} [arg.longitude] - Longitude of the location from where
   *   one wants to retreive the nearest stores, e.g. 19.1174114
   * @returns {Promise<StoreListingResponse>} - Success response
   * @summary: Get store meta information.
   * @description: Use this API to get a list of stores in a specific application.
   */
  async getStores({
    pageNo,
    pageSize,
    q,
    city,
    range,
    latitude,
    longitude,
  } = {}) {
    const { error } = CatalogValidator.getStores().validate(
      { pageNo, pageSize, q, city, range, latitude, longitude },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogValidator.getStores().validate(
      { pageNo, pageSize, q, city, range, latitude, longitude },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getStores",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["q"] = q;
    query_params["city"] = city;
    query_params["range"] = range;
    query_params["latitude"] = latitude;
    query_params["longitude"] = longitude;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getStores"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = CatalogModel.StoreListingResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getStores",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
   * @param {string} [arg.q] - Search a store by its name or store_code.
   * @param {string} [arg.city] - Search stores by the city in which they are situated.
   * @param {number} [arg.range] - Use this to retrieve stores within a
   *   particular range in meters, e.g. 10000, to indicate a 10km range
   * @param {number} [arg.latitude] - Latitude of the location from where one
   *   wants to retreive the nearest stores, e.g. 72.8691788
   * @param {number} [arg.longitude] - Longitude of the location from where
   *   one wants to retreive the nearest stores, e.g. 19.1174114
   * @summary: Get store meta information.
   * @description: Use this API to get a list of stores in a specific application.
   */
  getStoresPaginator({ pageSize, q, city, range, latitude, longitude } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getStores({
        pageNo: pageNo,
        pageSize: pageSize,
        q: q,
        city: city,
        range: range,
        latitude: latitude,
        longitude: longitude,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.collectionType - Type of collection followed, i.e.
   *   products, brands, or collections.
   * @param {string} arg.collectionId - The ID of the collection type.
   * @returns {Promise<FollowPostResponse>} - Success response
   * @summary: Unfollow an entity (product/brand/collection)
   * @description: You can undo a followed product, brand or collection by its ID. This action is referred as _unfollow_.
   */
  async unfollowById({ collectionType, collectionId } = {}) {
    const { error } = CatalogValidator.unfollowById().validate(
      { collectionType, collectionId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CatalogValidator.unfollowById().validate(
      { collectionType, collectionId },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for unfollowById",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "delete",
      constructUrl({
        url: this._urls["unfollowById"],
        params: { collectionType, collectionId },
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = CatalogModel.FollowPostResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for unfollowById",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }
}

module.exports = Catalog;
