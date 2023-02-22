import axios from "../client/rest";

class ProductApi {
  static sharedInstance = new ProductApi();

  constructor() {
    if (ProductApi.sharedInstance !== null) {
      return ProductApi.sharedInstance;
    }
  }

  async GetAllProducts() {
    try {
      const res = await axios.get("Products/GetAllProducts");
      if (res.status === 200) {
        return res.data;
      } else {
        throw "Something went wrong";
      }
    } catch (err) {
      throw err;
    }
  }

  async getAspenGraph() {
    try {
      const res = await axios.get("");
      if (res.status === 200) {
        return res.data;
      } else {
        throw "Something went wrong";
      }
    } catch (err) {
      throw err;
    }
  }
}

export default ProductApi.sharedInstance;
