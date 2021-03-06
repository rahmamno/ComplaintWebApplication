import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk'; //to inspict whatever value returnes from the action creater

const dataStore = createStore(reducers, {}, applyMiddleware(thunk));

export default dataStore;