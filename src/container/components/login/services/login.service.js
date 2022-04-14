// import axios from "../../../core/helpers/api";
// import API_ENDPOINTS from "../../../constants/api_endpoints";
import axios from "axios";

const ERR_MSG_SOMETHING_WENT_WRONG =
  "Something went wrong, please try again later";

export function authentication(payload) {
  const url = `${process.env.REACT_APP_API_END_POINT_AUTH_API}`;
  return axios.post(url, { ...payload }).then((response) => {
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
        error: response.data,
      };
    }
  });
}
