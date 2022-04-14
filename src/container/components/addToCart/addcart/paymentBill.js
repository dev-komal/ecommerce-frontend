import React, { Component } from "react";
import { Button, Space, Table } from "antd";
import "./invoice.css";
import { Link } from "react-router-dom";
import laxmitara from "../../../../assets/images/laxmitara.png";
import { connect } from "react-redux";
import {
  paymentBillRequest,
  requestCartList,
  orderGetDetailsRequest,
} from "../../shoppingCart/components/redux/Shopping/shopping-actions";
import { getTokenUser } from "../../../../core/utils/appUser";
import reduce from "lodash/reduce";
import get from "lodash/get";
const _ = { reduce, get };

const __DEV__ = document.domain === "localhost";
const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};
class paymentBill extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const user = getTokenUser();
    const userID = user.id;

    this.props.requestCartList();

    this.props.orderGetDetailsRequest({ user_id: userID });
  }

  displayRazorpay() {
    const res = loadScript("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      console.log("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const data = fetch("http://192.168.0.111:3001/api/payment/razorpay", {
      method: "POST",
    }).then((t) => t.json());

    console.log(data);
    const amount = 499;
    const options = {
      key: __DEV__ ? "rzp_test_HrdPTvMC9edXG5" : "PRODUCTION_KEY",
      currency: data.currency,
      amount: 499,
      order_id: data.id,
      name: "Laxmitara Fashion",
      description: "Thank your for Shopping... ",
      image:
        "data:image/png;base64,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",
      handler: function (response) {
        console.log("Payment ID", response.razorpay_payment_id);
        console.log("Order ID", response.razorpay_order_id);
        console.log("Signature", response.razorpay_signature);
      },
      prefill: {
        name,
        email: "komalsuthar@whatsadeal.com",
        phone_number: "9899999999",
      },
    };
    const paymentObject = new window.Razorpay(options);
    console.log("payment razorpay", paymentObject);
    paymentObject.open();
  }
  render() {
    const cartData = this.props.cart;
    const orderData = cartData.reduce((a, i) => [...a, i], []);
    const orderID = _.reduce(this.props.orderData, "");

    const orderAdd = () => {
      Object.keys(orderData).map((key) => {
        this.props.paymentBillRequest({
          order_id: orderID.id,
          product_id: orderData[key].product_id,
          quantity: orderData[key].quantity,
        });
      });
    };

    const totalQty = Object.values(cartData).reduce(
      (total, item) => total + item.quantity,
      0
    );

    const finalTotal = Object.values(cartData).reduce(
      (total, item) => total + item.total,
      0
    );
    let newDate = new Date();
    let date_raw = newDate.getDate();
    let month_raw = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    const column = [
      {
        key: "product_id",
        title: "Product Name",
        dataIndex: "attribute",
        render: (text, record) => <span>{record.Product.title}</span>,

        field_type: "string",
        input_type: "TextBox",
      },
      {
        key: "quantity",
        title: "QTY",
        dataIndex: "quantity",
        field_type: "string",
        input_type: "TextBox",
      },
      {
        key: "price",
        title: "Price",
        dataIndex: "total",
        field_type: "string",
        input_type: "TextBox",
      },
    ];

    return (
      <>
        {Object.values(cartData).length ? (
          <div className="mainInvoiceContainer">
            <div>
              <center>
                <h1>
                  <img src={laxmitara} className="logoInvoice" />
                </h1>
              </center>

              <div>
                <div style={{ float: "right" }}>
                  <h4>
                    <b>Order ID</b>: {"#LT00" + orderID?.id}
                    <br />
                    <b>Date</b>:- {date_raw + "/" + month_raw + "/" + year}
                  </h4>
                </div>
                <br />
                <div style={{ float: "left" }}>
                  <h4>
                    <b>Shipping Address</b> -<br />
                    {orderID?.order_address}
                    <br />
                    {orderID?.pincode}
                    <br />
                    {orderID?.city}
                  </h4>
                </div>
              </div>
            </div>
            <div style={{ border: 2, borderColor: "black" }}>
              <Table
                pagination={false}
                columns={column}
                dataSource={cartData}
                size="middle"
              />
            </div>
            <div>
              <div style={{ fontWeight: 700 }}>
                <div style={{ float: "left" }}>Total ({totalQty} items ) </div>
                <div style={{ float: "right" }}> Amount ₹{finalTotal} </div>
              </div>
              <br />
              <div
                style={{
                  padding: 25,
                  display: "flex",
                  textAlign: "center",
                  float: "right",
                }}
              >
                <div>
                  {/* <Link to="/payment"> */}
                  <Button
                    // onClick={() => this.orderDetails()}
                    onClick={() => {
                      orderAdd();
                      // this.displayRazorpay();
                    }}
                    style={{
                      backgroundColor: "#00a9db",
                      color: "white",
                      fontWeight: 600,
                    }}
                  >
                    <a
                      // onClick={(() => this.displayRazorpay(), orderAdd())}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Pay now
                    </a>
                  </Button>
                  {/* </Link> */}
                </div>
              </div>
            </div>
          </div>
        ) : (
          "No DATA"
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: _.get(state, "shop.cartData.data.rows", []),
    product: _.get(state, "shop.cartData.data.rows.Product", []),
    orderData: _.get(state, "shop.orderData.data", []),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    paymentBillRequest: (payload) => dispatch(paymentBillRequest(payload)),
    requestCartList: (payload) => dispatch(requestCartList(payload)),
    orderGetDetailsRequest: (payload) =>
      dispatch(orderGetDetailsRequest(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(paymentBill);
