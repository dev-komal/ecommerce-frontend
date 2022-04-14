import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

//import main reducer and saga here
import reducer from './reducer';
import rootSaga from './saga';

//define sagaMiddleWare
const sagaMiddleware = createSagaMiddleware();

//define store here
export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

//run rootsaga from here
sagaMiddleware.run(rootSaga);
