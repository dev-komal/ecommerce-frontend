import httpRequest from "../../../../utills/httpRequest";
import API_ENDPOINTS from "../../../../core/constant/api_endpoints";

const ERR_MSG_SOMETHING_WENT_WRONG =
  "something goes worng please check your Api ";

export async function addUserData(payload) {
  return httpRequest()
    .post(`${API_ENDPOINTS.user}`, { ...payload })
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
