import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import MarketData from "./components/MarketData/MarketData"

import { Provider } from 'react-redux';
import store from "./redux/store"



ReactDOM.render(


  <Provider store = {store}>
    <React.Fragment>
      <MarketData />
      <App />
    </React.Fragment>
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
