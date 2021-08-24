import { createStore } from 'redux';

//Here we create the reducer function, params are defalut
const counterReducer = (state = { counter: 0}, action) => {
    if(action.type === 'increment'){
        return ({counter: state.counter + 1});
    }

    if(action.type === 'decrement'){
        return ({counter: state.counter - 1});
    }

    return state;
}

//Here we create a store
const store = createStore(counterReducer);

export default store;