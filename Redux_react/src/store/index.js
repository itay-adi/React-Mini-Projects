//import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import authReducer from './auth'; 

/****************************************************************/

//Here we create a store. We create only one!
const store = configureStore({
    //reducer here is a map of reducers
    reducer: { 
        counter: counterReducer,
        auth: authReducer
    }
});

export default store;

/****************************************************************/

//Here we create the reducer function, params are defalut
/*const counterReducer = (state = initialState, action) => {
    if(action.type === 'increment'){
        return ({
            ...state,
            counter: state.counter + 1,
            //showCounter: state.showCounter
        });
    }

    if(action.type === 'increase'){
        return ({
            ...state,
            counter: state.counter + action.amount,
            //showCounter: state.showCounter
        });
    }

    if(action.type === 'decrement'){
        return ({
            ...state,
            counter: state.counter - 1,
            //showCounter: state.showCounter
        });
    }

    if(action.type === 'toggle'){
        return ({
            ...state,
            //counter: state.counter,
            showCounter: !state.showCounter
        });
    }

    return state;
}*/

//Here we create a store
/*const store = createStore(counterReducer);

export default store;*/