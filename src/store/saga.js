import { all } from "redux-saga/effects";
import slider from "../container/components/slider/sagas/slider";
import list from "../container/components/list/sagas/list";
import register from "../container/components/register/sagas/register";
import contact from "../container/components/contact/sagas/contact";
import collectionType from "../container/components/CollectionType/sagas/collectionType";
import sagas from "../container/components/shoppingCart/components/redux/Shopping/sagas";
import login from "../container/components/login/sagas/login";
import cartList from "../container/components/addToCart/saga/cartitem";
export default function* rootSaga() {
  yield all(slider);
  yield all(list);
  yield all(register);
  yield all(login);
  yield all(contact);
  yield all(collectionType);
  yield all(sagas);
  yield all(cartList);
}
