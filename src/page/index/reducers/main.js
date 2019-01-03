import tabReducer from './tabReducers.js';
import {combineReducers} from 'redux';
import categoryReducer from './categoryReducer.js'
import contentListReducer from './contentListReducer.js'

const reducers = combineReducers({
    tabReducer,
    categoryReducer,
    contentListReducer
})
export default reducers;
