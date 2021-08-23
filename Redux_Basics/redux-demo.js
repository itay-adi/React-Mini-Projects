const redux = require('redux');

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
const store = redux.createStore(counterReducer);

//Subscription
//getState gives us the latest state after update
const counterSubscriber = () => {
    const latestState = store.getState();

    console.log(latestState); 
}

//Here we tell redux what to do when the state is changing: receives a function
store.subscribe(counterSubscriber);

//Methods which dispaches an action
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });