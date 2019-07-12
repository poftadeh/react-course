import { createStore, combineReducers } from 'redux';

const demoState = {
  expenses: [
    {
      id: 'qweqwe',
      description: 'January Rent',
      note: 'This is a note',
      amount: 54500,
      createdAt: 0,
    },
  ],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined,
  },
};
