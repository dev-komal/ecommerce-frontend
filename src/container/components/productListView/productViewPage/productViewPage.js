import React, { Component } from "react";
import { Button, InputNumber, Image, Input, Space } from "antd";
import share from "../../../../assets/images/share.png";
import "./productStyle.css";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { requestListbyId } from "../../list/actions/list";
import { isUndefined, get } from "lodash";

const _ = { isUndefined, get };
function onChange(value) {
  console.log("changed", value);
}

class ProductViewPage extends Component {
  state = {
    products: [
      {
        _id: "1",
        title: "Chiknichameli",
        img: "https://static.peachmode.com/media/images/product/45937/original/1582115158_4_SSTSU-4987-BLUE-Blue-Brown-Art_Silk-Saree-PEACHMODE.jpg",
        description:
          "EXTRA 10% OFF: ROYAL PRINCESS GOLDEN WHITE WOVEN DEEP JYOTI SAREE",
        content: "new material",
        price: 16000,
        color: "orange",
        count: 1,
      },
    ],
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    if (!_.isUndefined(id)) {
      this.props.GetListById(id);
    }
  }
  render() {
    const data = this.props.listDataById;
    console.log("DATA", data);
    const productColor = this.props.colorName;
    const { products } = this.state;
    return (
      <>
        <div>
          <div className="container">
            <div className="card-container">
              <div className="product-area">
                <Image
                  className="ProductImg"
                  src={`${process.env.REACT_APP_ASSETS_END_POINT}/products/${data.product_image}`}
                  alt="laxmitara Sarees"
                />
              </div>
              <div className="text-area">
                <div className="heading-area">
                  <h2 style={{ color: "#d84661" }}>
                    {data.title}{" "}
                    {
                      <img
                        height="20"
                        width="20"
                        alt=" not found"
                        src={share}
                      />
                    }
                  </h2>
                  <h4 style={{ fontWeight: 900 }}>Product Details:</h4>
                </div>
                <p className="paragraph-area">
                  <label
                    style={{ fontWeight: 900, fontSize: 14, color: "#d84661" }}
                  >
                    Type:-
                  </label>{" "}
                  {data.type}{" "}
                  <label
                    style={{ fontWeight: 900, fontSize: 14, color: "#d84661" }}
                  >
                    Length:-
                  </label>{" "}
                  {data.length} Mtr
                  <br />
                  {data.description}
                </p>
                <div className="color-selection">
                  <div className="h5-text">
                    <h5
                      style={{
                        color: "black",
                        fontWeight: 600,
                        fontSize: 14,
                        color: "#d84661",
                      }}
                    >
                      Qty:{" "}
                    </h5>
                  </div>
                  <InputNumber
                    min={1}
                    max={10}
                    defaultValue={1}
                    size="small"
                    onChange={onChange}
                  />
                  <div className="h5-text" style={{ display: "flex" }}>
                    <h5
                      style={{
                        color: "#d84661",
                        fontWeight: 600,
                        fontSize: 14,
                      }}
                    >
                      <label>Color:- </label>
                    </h5>
                    {productColor}
                  </div>
                </div>
                <div className="color-selection">
                  <div className="h5-text">
                    <h5
                      style={{ color: "green", fontWeight: 600, fontSize: 14 }}
                    >
                      Price: ₹ {data.price}{" "}
                    </h5>
                  </div>
                </div>
                <Button
                  shape="round"
                  style={{
                    color: "white",
                    backgroundColor: "#d84661",
                    width: "70%",
                    margin: "auto",
                    fontWeight: 700,
                  }}
                  type="default"
                >
                  Add To Cart
                </Button>
                <div className="color-selection"></div>
                {/* <div className="price-and-buy-btn">
                  <button className="buy-btn">BUY NOW</button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    listDataById: _.get(state, "list.listDetails", []),
    colorName: _.get(state, "list.listDetails.Color.color_name", []),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    GetListById: (id) => dispatch(requestListbyId(id)),
    handleAddToCart: (id) => dispatch(addToCart(id)),
    handleAddInCart: (payload) => dispatch(addInCart(payload)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProductViewPage));
