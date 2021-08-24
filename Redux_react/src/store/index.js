import { createStore } from 'redux';

const initialState = { counter: 0, showCounter: true }; 

//Here we create the reducer function, params are defalut
const counterReducer = (state = initialState, action) => {
    if(action.type === 'increment'){
        return ({
            counter: state.counter + 1,
            showCounter: state.showCounter
        });
    }

    if(action.type === 'increase'){
        return ({
            counter: state.counter + action.amount,
            showCounter: state.showCounter
        });
    }

    if(action.type === 'decrement'){
        return ({
            counter: state.counter - 1,
            showCounter: state.showCounter
        });
    }

    if(action.type === 'toggle'){
        return ({
            counter: state.counter,
            showCounter: !state.showCounter
        });
    }

    return state;
}

//Here we create a store
const store = createStore(counterReducer);

export default store;