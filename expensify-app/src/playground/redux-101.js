import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
  console.log('running');
  const incrementBy =
    typeof action.incrementBy === 'number' ? action.incrementBy : 1;
  const decrementBy =
    typeof action.decrementBy === 'number' ? action.decrementBy : 1;
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + incrementBy,
      };
    case 'DECREMENT':
      return {
        count: state.count - decrementBy,
      };
    case 'RESET':
      return {
        count: 0,
      };
    case 'SET':
      return {
        count: action.count,
      };
    default:
      return state;
  }
});

const unsubscribe = store.subscribe(() => {
  console.log('TCL: store.getState()', store.getState());
});

store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5,
});

unsubscribe();

store.dispatch({
  type: 'INCREMENT',
});

store.dispatch({
  type: 'RESET',
});

store.dispatch({
  type: 'DECREMENT',
  decrementBy: 10,
});

store.dispatch({
  type: 'SET',
  count: 101,
});
