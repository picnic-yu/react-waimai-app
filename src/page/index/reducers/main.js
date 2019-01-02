import tabReducer from './tabReducers.js';
import {combineReducers} from 'redux';
import categoryReducer from './categoryReducer.js'

const reducers = combineReducers({
    tabReducer,
    categoryReducer
})
export default reducers;
