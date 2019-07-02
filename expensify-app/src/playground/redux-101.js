import { createStore } from 'redux';

const store = createStore((state = { count: 0 }) => {
  return state;
});

console.log('TCL: store.getState()', store.getState());
