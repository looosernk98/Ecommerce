class ApiFeatures {
  constructor(query, quereyStr) {
    // console.log("*********", query);
    this.query = query;
    this.quereyStr = quereyStr;
  }

  search() {
    // console.log(this.quereyStr);

    let keyword = this.quereyStr.keyword
      ? {
          name: {
            $regex: this.quereyStr.keyword,
            $options: "i"
          }
        }
      : {};

    console.log(keyword);

    this.query = this.query.find({ ...keyword });

    return this;
  }

  filter() {
    const queryCopy = { ...this.quereyStr };

    //remove some fields for category
    const removeFields = ["keyword", "page", "limit"];

    removeFields.forEach(key => delete queryCopy[key]);
    // filter for price and rating
    let queryStr = JSON.stringify(queryCopy); // converting intio string for adding lt, gt, gte,lte filters

    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, key => `$${key}`);
    this.query = this.query.find(JSON.parse(queryStr));
    return this;
  }

  pagination(resultPerPage) {
    const currPage = Number(this.queryStr.page) || 1;
    const skip = resultPerPage * (currPage - 1);
    this.query = this.query.limit(resultPerPage).skip(skip);

    return this;
  }
}

module.exports = ApiFeatures;
