import axios from "../client/rest";

class ListApi {
  static sharedInstance = new ListApi();

  constructor() {
    if (ListApi.sharedInstance !== null) {
      return ListApi.sharedInstance;
    }
  }
  async createList(body: any) {
    try {
      const res = await axios.post("List/CreateList", body);
      const { data } = res;
      if (res.status === 200) {
        return data;
      } else {
        throw res || "Something went wrong";
      }
    } catch (err) {
      throw err;
    }
  }
  async MyLists(Id: string) {
    try {
      const res = await axios.get("List/GetMyLists", {
        params: { userId: Id },
      });
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
export default ListApi.sharedInstance;
