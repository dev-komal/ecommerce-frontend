import React, { Component, useCallback } from "react";
import { Card, List, Button, Skeleton } from "antd";
import { BackTop, Image } from "antd";
import {
  ContactsOutlined,
  LoadingOutlined,
  UpOutlined,
  WindowsFilled,
} from "@ant-design/icons";
import "../style.css";
import { connect } from "react-redux";
import { requestList } from "../actions/list";
import get from "lodash/get";
import find from "lodash/find";
import isEmpty from "lodash/isEmpty";
import remove from "lodash/remove";
import isUndefined from "lodash/isUndefined";
import ShowMoreText from "react-show-more-text";
import BestSallerTitle from "../../allTitles/bestSallerTitle/bestSallerTitle";
import { getTokenUser } from "../../../../core/utils/appUser";
import { Link } from "react-router-dom";
import {
  loadCurrentItem,
  addToCart,
  addInCart,
  requestCartList,
} from "../../../components/shoppingCart/components/redux/Shopping/shopping-actions";
const _ = { get, remove, isEmpty, isUndefined, find };

const { Meta } = Card;

class MainList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product_image: "",
      product_name: "",
      description: "",
      loading: false,
      quantity: 1,
      disableButton: false,
    };
  }

  componentDidMount() {
    this.props.onGetAllList();
    this.props.requestCartList();
  }

  // new data //
  onAddToCart = (id, price) => {
    const myData = localStorage.getItem("token");
    const user = getTokenUser();

    if (myData) {
      window.location.reload();
      this.props.handleAddInCart({
        user_id: user.id,
        product_id: id,
        quantity: 1,
        price: price,
      });
    } else {
      alert("Please login !");
    }
  };

  onChange = () => {
    const datalength = Object.values(this.props.listData);
    if (datalength.length === 0) this.setState({ loading: true });
  };
  render() {
    const data1 = Object.values(this.props.listData);
    const { loading } = this.state;
    const cartData = this.props.cartData;
    const bucket = _.get(cartData, "data.rows", []);

    return data1.length ? (
      <>
        <BestSallerTitle />
        <div className="mainDiv">
          <List
            pagination={{
              onChange: (page) => {},
              pageSize: 10,
            }}
            grid={{
              gutter: 10,
              xs: 1,
              sm: 1,
              md: 2,
              lg: 2,
              xl: 5,
              xxl: 5,
            }}
            dataSource={data1}
            renderItem={(item) => (
              <List.Item align="middle">
                <div className="listPadding">
                  <Card
                    hoverable
                    cover={
                      <Link to={`/productview/${item.id}`}>
                        <img
                          // preview={false}
                          className="product-Image"
                          fallback={<Skeleton active />}
                          src={
                            `${process.env.REACT_APP_ASSETS_END_POINT}/products/${item.product_image}` || (
                              <Skeleton active />
                            )
                          }
                          alt="not found"
                          preview={{
                            src: item.image,
                          }}
                        />
                      </Link>
                    }
                  >
                    <Meta
                      className="largeFont"
                      title={item.product_name}
                      description={
                        (
                          <ShowMoreText
                            expanded={false}
                            more="Read more"
                            width={410}
                            less="Show less"
                            lines={1}
                          >
                            {item.description}
                          </ShowMoreText>
                        ) || (
                          <ShowMoreText
                            expanded={false}
                            more="Show more"
                            width={410}
                            less="Show less"
                            lines={1}
                          >
                            Discription is not available for this product right
                            now ... |
                          </ShowMoreText>
                        )
                      }
                    />
                    <span style={{ color: "green", fontWeight: 600 }}>
                      ₹ {item.price}/- Only
                    </span>

                    <Button
                      onClick={() => this.onAddToCart(item.id, item.price)}
                      className="cart-button"
                      type="primary"
                      disabled={bucket.find(
                        (bkt) => bkt.product_id === item.id
                      )}
                    >
                      {bucket.find((bkt) => bkt.product_id === item.id)
                        ? "Added In Bucket"
                        : "Add To Cart"}
                    </Button>
                  </Card>
                </div>
              </List.Item>
            )}
          />
          <BackTop>
            <Button type="dashed" size="small" className="backToTop">
              <UpOutlined />
            </Button>
          </BackTop>
        </div>
      </>
    ) : (
      <>
        <div style={{ width: "auto", height: "auto", display: "flex" }}>
          <Skeleton.Input
            loading={loading}
            style={{ width: "100vw", height: 210 }}
            active
          />
          <Skeleton active avatar loading={loading} />
        </div>

        <div style={{ width: "100%", height: "auto", display: "flex" }}>
          <Skeleton.Input
            loading={loading}
            style={{ width: "100vw", height: 210 }}
            active
          />
          <Skeleton active avatar loading={loading} />
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    listData: _.get(state, "list.listData", []),
    cartData: _.get(state, "shop.cartData", []),
    updateCart: _.get(state, "shop.updateCart", false),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onGetAllList: (payload) => dispatch(requestList(payload)),
    handleAddToCart: (id) => dispatch(addToCart(id)),
    handleAddInCart: (payload) => dispatch(addInCart(payload)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
    requestCartList: (payload) => dispatch(requestCartList(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainList);
