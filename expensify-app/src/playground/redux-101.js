import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
  console.log('running');
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        count: state.count - 1,
      };
    case 'RESET':
      return {
        count: 0,
      };
    default:
      return state;
  }
});

console.log('TCL: store.getState()', store.getState());

store.dispatch({
  type: 'INCREMENT',
});

store.dispatch({
  type: 'INCREMENT',
});

store.dispatch({
  type: 'RESET',
});

store.dispatch({
  type: 'DECREMENT',
});

console.log('TCL: store.getState()', store.getState());
