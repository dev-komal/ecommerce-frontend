import { Component } from "react";
import { Switch, Route } from "react-router-dom";
import MainFooter from "../container/common/footer";
import MainHeader from "../container/common/header";
import MainTrendingProduct from "../container/components/trendingProducts/trendingProduct";
import MainCollectionTypes from "../container/components/CollectionType/Component/collectionTypes";
import AppContact from "../container/components/contact/component/contact";
import MainList from "../container/components/list/component/list";
import Login from "../container/components/login/component/login";
import MainMiddleBanner from "../container/components/middleBanner/Component/middleBanner";
import MainBanarasi from "../container/components/productListView/banarasi/banarasi";
import MainProductViewPage from "../container/components/productListView/productViewPage";
import Register from "../container/components/register/component/register";
import MainSlider from "../container/components/slider/component/slider";
import MainAbout from "../container/components/aboutUs/about";
import { Divider } from "antd";
import AddtoCart from "../container/components/addToCart/addcart/addtocart";
import OrderForm from "../container/components/addToCart/addcart/orderForm";
import PaymentBill from "../container/components/addToCart/addcart/paymentBill";
import Payment from "../container/components/payment/Payment";
class AppHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
    };
  }

  tokenFun = () => {
    if (!this.state.token) {
      return <Login setToken={setToken} />;
    }
  };

  render() {
    return (
      <Switch>
        <Route exact path="/">
          <MainHeader />
          <Divider />
          <MainSlider />
          <MainCollectionTypes />
          <MainList />
          <MainMiddleBanner />
          <MainTrendingProduct />
          <AppContact />
          <MainAbout />
          <MainFooter />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/collection">
          <MainHeader />
          <MainBanarasi />
          <MainFooter />
        </Route>
        <Route exact path="/productview/:id">
          <MainHeader />
          <MainProductViewPage />
          <MainFooter />
        </Route>

        <Route exact path="/cart">
          <MainHeader />
          <AddtoCart />
        </Route>
        <Route exact path="/products">
          <MainHeader />
          <MainBanarasi />
        </Route>

        <Route path="/orderForm">
          <MainHeader />
          <OrderForm />
          {/* <MainFooter /> */}
          <Route />
        </Route>

        <Route path="/payment">
          <Payment />
        </Route>

        <Route path="/paymentbill">
          <PaymentBill />
        </Route>
      </Switch>
    );
  }
}
export default AppHome;
