var Redux = require('redux');
var combineReducers = Redux.combineReducers;
var createStore = Redux.createStore;

const initialState = {
    count: 0
}
const counterReducer = (state = {count: 0}, action) => {
    if (action.type == 'INCREMENT_COUNT') {
        return Object.assign({}, state, {count: state.count + 1});
    } else  {
        return state;
    }
}

const store = createStore(combineReducers({
    counter: counterReducer, 
    decrement: decrementReducer
}));

export default store;