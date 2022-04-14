import httpRequest from "../../../../utills/httpRequest";
import API_ENDPOINTS from "../../../../core/constant/api_endpoints";
const ERR_MSG_SOMETHING_WENT_WRONG =
  " something goes worng please check your Api ";
//Fetch Stores

export async function getCartData(payload) {
  console.log("Payload", payload);
  return httpRequest()
    .get(`${API_ENDPOINTS.addtocart}` + "?" + "user_id=2")

    .then((response) => {
      if (response.status === 200) {
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
