import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0,
} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt,
  },
});

const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id,
});

const expensesReducerDefaultState = [];

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined,
};

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      console.log('action', action);
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
  }),
);

store.subscribe(() => {
  console.log('subscribe', store.getState());
});

const expenseOne = store.dispatch(
  addExpense({ description: 'Rent', amount: 100 }),
);
// const expenseTwo = store.dispatch(
//   addExpense({ description: 'Coffee', amount: 500 }),
// );

store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// const demoState = {
//   expenses: [
//     {
//       id: 'qweqwe',
//       description: 'January Rent',
//       note: 'This is a note',
//       amount: 54500,
//       createdAt: 0,
//     },
//   ],
//   filters: {
//     text: 'rent',
//     sortBy: 'amount',
//     startDate: undefined,
//     endDate: undefined,
//   },
// };
