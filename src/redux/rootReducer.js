// Connects to store so you can manipulate data in store
import { combineReducers } from "redux";

import shopReducer from './shopping/shopping-reducer';

// where all the reducers go into and are combined
const rootReducer = combineReducers({
    shop: shopReducer,
});

export default rootReducer;