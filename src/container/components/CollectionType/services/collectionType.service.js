import httpRequest from "../../../../utills/httpRequest";
import axios from "axios";
import API_ENDPOINTS from "../../../../core/constant/api_endpoints";

const ERR_MSG_SOMETHING_WENT_WRONG =
  " something goes worng please check your Api ";

export async function getCollectionType(payload) {
  return httpRequest()
    .get(`${API_ENDPOINTS.categories}`)
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