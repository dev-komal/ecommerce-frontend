// import omit from "lodash/omit";
// import get from "lodash/get";
// import isEmpty from "lodash/isEmpty";
// import filter from "lodash/filter";
import API_ENDPOINTS from "../../../../core/constant/api_endpoints";
import axios from "axios";
import httpRequest from "../../../../utills/httpRequest";
// const _ = { omit, get, isEmpty, filter };
const ERR_MSG_SOMETHING_WENT_WRONG =
  " something goes worng please check your Api ";

export async function getSlider(payload) {
  return httpRequest()
    .get(`${API_ENDPOINTS.banners}`)
    .then((response) => {
      if (true) {
        return {
          message: "Success",
          success: true,
          data: response.data.data,
        };
      } else {
        return {
          success: false,
          message: ERR_MSG_SOMETHING_WENT_WRONG,
          data: "",
          error: "",
        };
      }
    });
}
