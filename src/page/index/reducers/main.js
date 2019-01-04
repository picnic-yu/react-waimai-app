import tabReducer from './tabReducers.js';
import {combineReducers} from 'redux';
import categoryReducer from './categoryReducer.js'
import contentListReducer from './contentListReducer.js'
import orderReducer from './orderReducer.js'

const reducers = combineReducers({
    tabReducer,
    categoryReducer,
    contentListReducer,
    orderReducer
})
export default reducers;
