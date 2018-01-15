import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
// import logger from 'redux-logger';
import reducers from './reducers';

const middleWare = applyMiddleware(ReduxThunk)(createStore);

export default middleWare(reducers);
