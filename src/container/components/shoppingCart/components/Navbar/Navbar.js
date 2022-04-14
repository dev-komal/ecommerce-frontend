import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { MenuOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { Badge } from "antd";
import { requestCartList } from "../redux/Shopping/shopping-actions";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: 1,
    };
  }

  // componentDidUpdate(prevProps) {
  //   let cartUpdate = this.props.updateCart;
  //   let quantity = this.props.qty + 1;
  //   console.log("cartupdate value", cartUpdate);
  //   if (cartUpdate === true) {
  //     console.log("Added item", this.props.cartCount);
  //     this.setState({ qty: quantity });
  //     this.props.requestCartList();
  //   } else {
  //     console.log("not update");
  //   }
  // }
  componentDidMount() {
    this.props.requestCartList();
  }
  render() {
    // console.log("cart count", this.props.cartData.data);
    let cartCount = this.props.cartData;

    return (
      <div>
        <Link to="/">
          <h2 className=""> </h2>
        </Link>
        <Link to="/cart">
          <Badge count={cartCount}>
            {" "}
            <ShoppingCartOutlined style={{ fontSize: 25 }} />{" "}
          </Badge>
        </Link>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
    cartData: _.get(state, "shop.cartData.data.count", []),
    updateCart: _.get(state, "shop.updateCart", false),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestCartList: (payload) => dispatch(requestCartList(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
