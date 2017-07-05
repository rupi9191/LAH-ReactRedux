var Redux = require('redux');
var combineReducers = Redux.combineReducers;
var createStore = Redux.createStore;

const counterReducer = (state = {count: 0}, action) => {
    console.log(action);
    if (action.type == 'INCREMENT_COUNT') {
        return Object.assign({}, state, {count: state.count + 1});
    } else {
        return state;
    }
}
const store = createStore(combineReducers({counter: counterReducer}));

export default store;