import React, { Fragment } from 'react';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

import Client from '../components/Client';
import Header from '../components/Header';
import '../styles/App.css';
import reducers from '../store/reducers';


const store = createStore(reducers, applyMiddleware(logger));

const App = () => (
  <Provider store={store}>
    <Fragment>
      <Header />
      <Client />
    </Fragment>
  </Provider>
);

export default App;
