import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import dataStore from './stores/dataStore';

import App from './components/App';


ReactDOM.render(
  // this tag to make react understand redux and handle whenever stage change
  <Provider store={dataStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);