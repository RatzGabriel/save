import { reducer } from './bugs/reducer';

function createStore(reducer) {
  let state;
  let listeners = [];

  function subscribe(listener) {
    listeners.push(listener);
  }

  function getState() {
    return state;
  }

  function dispatch(action) {
    //call the reducer to get new state
    state = reducer(state, action);
    //Notify subscribers
    for (let i = 0; i < listeners.length; i++) {
      listeners[i]();
    }
  }

  return {
    getState,
    dispatch,
    subscribe,
  };
}

export default createStore(reducer);
