import {applyMiddleware, createStore} from 'redux'
import rootReducer from './rootreducer';
import productSaga from '../redux/productSaga';
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(productSaga)
export default store;