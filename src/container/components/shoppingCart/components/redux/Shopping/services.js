import httpRequest from "../../../../../../utills/httpRequest";
import API_ENDPOINTS from "../../../../../../core/constant/api_endpoints";
import { getTokenUser } from "../../../../../../core/utils/appUser";
import { objectToParams } from "../../../../../../store/helper/helper";
import omit from "lodash/omit";
const ERR_MSG_SOMETHING_WENT_WRONG =
  " something goes worng please check your Api ";
//Fetch Stores
const _ = { omit };
const user = getTokenUser();
const userID = user.id;
export async function getCartData(payload) {
  return httpRequest()
    .get(`${API_ENDPOINTS.products}/${payload.id}`, { ...payload })

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

export async function getInCart(payload) {
  return httpRequest()
    .get(`${API_ENDPOINTS.addtocart}` + "?" + "user_id" + "=" + `${userID}`, {
      ...payload,
    })

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

export async function addInCart(payload) {
  return httpRequest()
    .post(`${API_ENDPOINTS.addtocart}`, { ...payload })
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

export async function getInCartByID(payload) {
  return httpRequest()
    .get(`${API_ENDPOINTS.addtocart}/${payload}`, { ...payload })

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

export async function updateInCart(payload) {
  return httpRequest()
    .patch(`${API_ENDPOINTS.addtocart}/${payload.id}`, { ...payload })

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

export async function deleteInCartByID(payload) {
  return httpRequest()
    .delete(`${API_ENDPOINTS.addtocart}/${payload}`, { ...payload })

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

export async function orderForm(payload) {
  return httpRequest()
    .post(`${API_ENDPOINTS.order}`, { ...payload })
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

export async function paymentBillForm(payload) {
  return httpRequest()
    .post(`${API_ENDPOINTS.orderdetails}`, { ...payload })
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

export async function getOrderData(payload) {
  console.log("PAYLOAD :", payload);
  const queryString = await objectToParams(payload);
  return httpRequest()
    .get(`${API_ENDPOINTS.order}/orderid?` + queryString, {
      ...payload,
    })
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
