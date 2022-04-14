import React, { Component } from 'react';
// import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import App from './App';

export default class Root extends Component {
	render(){
		return(<>
		 <Provider store={store}>
			 <App/>
		  </Provider>
		</>);
	}
}


