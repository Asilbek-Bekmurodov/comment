export function createStore(reducer) {
  let state;
  let listeners = [];

  function dispatch(action) {
    state = reducer(state, action);
    for (let listener of listeners) {
      listener();
    }
  }

  function getState() {
    return state;
  }

  function subscribe(listener) {
    if (typeof listener === "function") {
      listeners.push(listener);
    }
  }

  return { getState, dispatch, subscribe };
}
