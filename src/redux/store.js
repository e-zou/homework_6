// Where all data is place together

import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from "./rootReducer";

const store = createStore(rootReducer, composeWithDevTools());

// to import into react app
export default store;