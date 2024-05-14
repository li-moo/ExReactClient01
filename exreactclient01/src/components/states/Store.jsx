import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import Reducer from './Reducers';

const store = createStore(Reducer); // thunk를 사용하지 않음

export default store;
