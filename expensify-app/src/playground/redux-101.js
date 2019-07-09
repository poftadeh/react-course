import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy,
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy,
});

const setCount = ({ setBy = 1 } = {}) => ({ type: 'SET', setBy });

// const resetCount = () => {
//   return { type: 'RESET' };
// };

console.log('foo');

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

// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5,
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch({
  type: 'INCREMENT',
});

store.dispatch({
  type: 'RESET',
});

store.dispatch(decrementCount());

store.dispatch(
  decrementCount({
    decrementBy: 10,
  }),
);

store.dispatch(setCount({ setBy: 5 }));

unsubscribe();
