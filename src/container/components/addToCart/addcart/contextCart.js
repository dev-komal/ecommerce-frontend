import React, { Component } from "react";
import { connect } from "react-redux";
import history from "../../../../core/utils/history";
import { Button, Form, Input, Result, Modal } from "antd";
import { Scrollbars } from "react-custom-scrollbars-2";
import rupees from "../../../../assets/images/rupees.jpg";
import "./style.css";
import { Link } from "react-router-dom";
import {
  requestCartList,
  getInCartByID,
  updateInCart,
  deleteInCartByID,
  resetFieldStatus,
} from "../../shoppingCart/components/redux/Shopping/shopping-actions";
import { DeleteOutlined } from "@ant-design/icons";
import { getTokenUser } from "../../../../core/utils/appUser";
import { ToastContainer, toast } from "react-toastify";
const confirm = Modal.confirm;
class ContextCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartdataByID: this.props.cartdataByID,
      setFlag: false,
    };
  }
  componentDidMount() {
    this.props.requestCartList();
  }

  componentDidUpdate(prevProps) {
    const { deleteFlag, updateStatus } = this.props;
    if (prevProps.deleteFlag !== deleteFlag) {
      if (deleteFlag === true) {
        toast("Deleted items from Cart !");
        this.props.requestCartList();
        this.props.resetStatus();
      }
    }

    if (prevProps.updateStatus !== updateStatus) {
      if (updateStatus) {
        this.props.requestCartList();
        toast("Update Item from Cart !");
        this.props.resetStatus();
      }
    }
  }

  onChangeHandler = (id, values, product_id, price) => {
    this.props.getInCartByID(id);
    const user = getTokenUser();
    const userID = user.id;

    this.props.updateInCart({
      id,
      user_id: userID,
      product_id: product_id,
      quantity: values.target.value,
      price: price,
    });
  };

  removeFromCart = (id) => {
    return new Promise((resolve, reject) => {
      confirm({
        title: "Are you sure you want to delete this record?",
        onOk: async () => {
          this.props.deleteInCartByID(id);
        },
      });
    });
  };

  // saveCartData = (finalTotal) => {
  //   history.push("/OrderForm");
  // };

  render() {
    const listCart = this.props.cart;
    const finalTotal = Object.values(listCart).reduce(
      (total, item) => total + item.total,
      0
    );

    const totalQty = Object.values(listCart).reduce(
      (total, item) => total + item.quantity,
      0
    );

    return Object.values(listCart).length ? (
      <>
        <section className="main-cart-section">
          <ToastContainer position="top-center" />
          <h1 style={{ color: "black", marginTop: 20 }}>shopping cart</h1>
          <p className="total-items">
            you have <span className="total-items-count">{totalQty}</span> items
          </p>
          <div className="cart-items-container">
            <div className="card-total">
              <h3>
                Total Amount:
                <span>
                  {finalTotal}
                  <img height="27" width="27" src={rupees} />
                </span>
              </h3>
              <Link to="/OrderForm">
                {" "}
                <Button type="primary" style={{ backgroundColor: "orange" }}>
                  PLACE ORDER
                </Button>
              </Link>
            </div>
            <Scrollbars
              className="scrollbarItem"
              style={{ width: "100%", height: 600 }}
            >
              {Object.values(listCart).map((listCart) => (
                <Form initialValues={{ username: listCart.quantity }}>
                  <div className="items-info">
                    <Form.Item className="product-img">
                      <img
                        src={`${process.env.REACT_APP_ASSETS_END_POINT}products/${listCart.Product.product_image}`}
                        alt="image not found"
                      />
                    </Form.Item>
                    <div className="title">
                      <p>{listCart.Product.title}</p>
                    </div>

                    <Form.Item
                      className="add-minus-quantity"
                      label="Qty"
                      name="quantity"
                    >
                      <Input
                        min="1"
                        type="number"
                        id="quantity"
                        defaultValue={listCart.quantity}
                        onChange={(values) =>
                          this.onChangeHandler(
                            listCart.id,
                            values,
                            listCart.product_id,
                            listCart.price
                          )
                        }
                      />
                    </Form.Item>
                    <Form.Item
                      className="price"
                      label={<img src={rupees} height="15" width="15" />}
                    >
                      <p>{listCart.total}</p>
                    </Form.Item>
                    <Form.Item className="remove-item">
                      <Button
                        type="default"
                        style={{ background: "red", color: "white" }}
                        onClick={() => this.removeFromCart(listCart.id)}
                      >
                        <DeleteOutlined style={{ fontSize: 18 }} />
                      </Button>
                    </Form.Item>
                  </div>
                  <hr />
                </Form>
              ))}
            </Scrollbars>
          </div>
        </section>
      </>
    ) : (
      <Result
        style={{ marginTop: 40 }}
        status="404"
        title="Your cart is empty"
        extra={
          <Link to="/">
            <Button
              style={{ backgroundColor: "#f83656 ", border: "#f83656 " }}
              type="primary"
            >
              Back Home
            </Button>{" "}
          </Link>
        }
      />
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
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    requestCartList: (payload) => dispatch(requestCartList(payload)),
    getInCartByID: (payload) => dispatch(getInCartByID(payload)),
    updateInCart: (payload) => dispatch(updateInCart(payload)),
    deleteInCartByID: (payload) => dispatch(deleteInCartByID(payload)),
    resetStatus: () => dispatch(resetFieldStatus()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContextCart);
