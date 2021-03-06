import {createStore, combineReducers} from 'redux'
import {navReducer} from './Nav'

const rootReducer = combineReducers({
    nav: navReducer
});

export default createStore(
    rootReducer
)
