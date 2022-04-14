import axios from "axios";
import httpRequest from "../../../../utills/httpRequest";
import API_ENDPOINTS from "../../../../core/constant/api_endpoints";

const ERR_MSG_SOMETHING_WENT_WRONG =
  " something goes worng please check your Api ";

export async function getContact(payload) {
  return httpRequest()
    .post(`${API_ENDPOINTS.contactUs}`, { ...payload })
    .then((response) => {
      if (response.status === 200) {
        return {
          message: "Success",
          success: true,
          data: response.data,
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

export async function addData(payload) {
  return httpRequest()
    .post(`${API_ENDPOINTS.contactUs}`, { ...payload })
    .then((response) => {
      if (response.status === 200) {
        return {
          message: "Success",
          success: true,
          data: response.data,
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
