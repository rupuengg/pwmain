import { applyMiddleware, createStore, Store } from "redux";
import thunk from "redux-thunk";
import logger from 'redux-logger';
import reducers, { IApplicationState } from './reducers';
import { composeWithDevTools } from "redux-devtools-extension";

const middlewares = [thunk, logger];

const store: Store<IApplicationState> = createStore(reducers, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;