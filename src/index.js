import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import store from './Redux store'
import { Provider } from 'react-redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { fbConfig } from './Database config/firebase';
import { createFirestoreInstance } from 'redux-firestore';
import firebase from 'firebase/app'


const rrfProps = {

  firebase,
  config : fbConfig,
  dispatch : store.dispatch,
  createFirestoreInstance

}


ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider{...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>

  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
