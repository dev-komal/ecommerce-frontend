import { combineReducers } from "redux";
import { list } from "../container/components/list/reducers/list";
import { slider } from "../container/components/slider/reducers/slider";
import { register } from "../container/components/register/reducers/register";
import { contact } from "../container/components/contact/reducers/contact";
import { collectionType } from "../container/components/CollectionType/reducers/collectionType";
import ShopReducer from "../container/components/shoppingCart/components/redux/Shopping/shopping-reducer";
import login from "../container/components/login/reducers/login";
import { cartList } from "../container/components/addToCart/reducer/cartitem";
export default combineReducers({
  slider,
  list,
  login,
  register,
  contact,
  collectionType,
  shop: ShopReducer,
  cartList,
});
