import { Component } from "react";
import { Input, Card, Dropdown, Form, Button, Space } from "antd";
import { Link } from "react-router-dom";
import "./style.css";
import { DownOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import {
  orderFormRequest,
  requestCartList,
} from "../../shoppingCart/components/redux/Shopping/shopping-actions";
import { getTokenUser } from "../../../../core/utils/appUser";
const { TextArea } = Input;
class orderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order_address: "",
      city: "",
      pincode: "",
      landmark: "",
      grand_total: "",
    };
  }

  render() {
    const listCart = this.props.cart;
    const finalTotal = Object.values(listCart).reduce(
      (total, item) => total + item.total,
      0
    );
    const orderRequest = (e) => {
      const user = getTokenUser();
      const userID = user.id;
      if (user) {
        e.preventDefault();
        const orderData = {
          user_id: userID,
          order_address: this.state.order_address,
          city: this.state.city,
          pincode: this.state.pincode,
          landmark: this.state.landmark,
          grand_total: finalTotal,
        };
        this.props.orderFormRequest(orderData);
      }
    };

    console.log("TOTAL :", finalTotal);
    return (
      <div className="mainDivDeliveryAddress">
        <div className="orderFormTop" style={{ marginBottom: "10px" }}>
          <div className="site-card-border-less-wrapper">
            <span className="addressCenter"> Shopping Address </span>
            <Card bordered={false} className="cardStyle">
              <Form name="orderForm">
                {/* <div style={{ float: "right", }}> Total : {finalTotal}</div> */}
                <div className="formCenter">
                  <div className="itemAlign">
                    <div className="col-25">Address/Street</div>
                    <div className="col-75">
                      <Form.Item
                        name="order_address"
                        rules={[
                          {
                            required: true,
                            message: "Please Enter Address",
                          },
                        ]}
                      >
                        <TextArea
                          rows={4}
                          onChange={(e) =>
                            this.setState({ order_address: e.target.value })
                          }
                          placeholder="Ex: E301 XYZ Street, new road"
                        />
                      </Form.Item>
                    </div>
                  </div>
                  <div className="itemAlign">
                    <div className="col-25">Landmark</div>
                    <div className="col-75">
                      <Input
                        type="text"
                        onChange={(e) =>
                          this.setState({ landmark: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="itemAlign">
                    <div className="col-25">City</div>
                    <div className="col-75">
                      <Form.Item
                        name="city"
                        rules={[
                          {
                            required: true,
                            message: "Please Enter City",
                          },
                        ]}
                      >
                        <Input
                          type="text"
                          onChange={(e) =>
                            this.setState({ city: e.target.value })
                          }
                        />
                      </Form.Item>
                    </div>
                  </div>
                  <div className="itemAlign">
                    <div className="col-25">Pincode</div>
                    <div className="col-75">
                      <Form.Item
                        name="pincode"
                        rules={[
                          {
                            required: true,
                            message: "Please Enter Pincode",
                          },
                        ]}
                      >
                        <Input
                          type="text"
                          maxLength={6}
                          onChange={(e) =>
                            this.setState({ pincode: e.target.value })
                          }
                        />
                      </Form.Item>
                    </div>
                  </div>

                  <div className="itemAlign">
                    <div className="col-25">Amount</div>
                    <div className="col-75">
                      <Form.Item name="grand_total">
                        <Input
                          type="text"
                          disabled={true}
                          defaultValue={finalTotal}
                          onChange={() =>
                            this.setState({ grand_total: finalTotal })
                          }
                        />
                      </Form.Item>
                    </div>
                  </div>
                </div>
                <div>
                  <Space style={{ marginTop: "50px" }}>
                    {/* <Link to="payment"> */}
                    <Button
                      className="checkoutBtn"
                      onClick={(e) => orderRequest(e)}
                    >
                      {" "}
                      Checkout
                    </Button>
                    {/* </Link> */}
                    <Link to="/">
                      <Button className="continueShoppingBtn">
                        {" "}
                        Continue Shopping
                      </Button>
                    </Link>
                  </Space>
                </div>
              </Form>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: _.get(state, "shop.cartData.data.rows", []),
    cartdataByID: _.get(state, "shop.cartdataByID", {}),
    cartProductImage: _.get(
      state,
      "shop.cartData.data.rows.Product.product_image",
      []
    ),
    deleteFlag: _.get(state, "shop.deleteFlag", false),
    updateStatus: _.get(state, "shop.updateStatus", false),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    orderFormRequest: (payload) => dispatch(orderFormRequest(payload)),
    requestCartList: (payload) => dispatch(requestCartList(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(orderForm);
