import React, { Component } from "react";
import { connect } from "react-redux";
import {
  adjustItemQty,
  removeFromCart,
} from "../../shoppingCart/components/redux/Shopping/shopping-actions";
import { DeleteOutlined } from "@ant-design/icons";
import "./style.css";
import { Button, Form, Input } from "antd";
import rupees from "../../../../assets/images/rupees.jpg";
import { requestCartList } from "../../shoppingCart/components/redux/Shopping/shopping-actions";

class CartItem extends Component {
  componentDidMount() {
    this.props.requestCartList();
  }
  render() {
    const listCart = this.props.cartData;
    console.log("listData", listCart.data.rows);
    return (
      <>
        <Form>
          <div className="items-info">
            <Form.Item className="product-img">
              <img
                src={`${process.env.REACT_APP_ASSETS_END_POINT}/products/${listCart.product_image}`}
                alt="image not found"
              />
            </Form.Item>
            <div className="title">
              <p>{listCart.title}</p>
            </div>

            <Form.Item className="add-minus-quantity" label="Qty">
              {/* <label htmlFor="qty">Qty</label> */}
              <Input
                min="1"
                type="number"
                id="qty"
                name="qty"
                // value={input}
                // onChange={onChangeHandler}
              />
            </Form.Item>
            <Form.Item
              className="price"
              label={<img src={rupees} height="15" width="15" />}
            >
              <p>{listCart.price}</p>
            </Form.Item>
            <Form.Item className="remove-item">
              <Button
                type="default"
                style={{ background: "red", color: "white" }}
                onClick={() => removeFromCart(listCart.id)}
              >
                <DeleteOutlined style={{ fontSize: 18 }} />
              </Button>
            </Form.Item>
          </div>
          <hr />
        </Form>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cartData: _.get(state, "shop.cartData", []),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    requestCartList: (payload) => dispatch(requestCartList(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
