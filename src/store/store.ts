import { configureStore } from '@reduxjs/toolkit';
import suggestionsReducer from 'store/suggestionSlice';
import filterReducer from 'store/filterSlice';
import filtersReducer from 'store/filtersSlice';
import sortReducer from 'store/sortSlice';

const store = configureStore({
  reducer: {
    suggestions: suggestionsReducer,
    filter: filterReducer,
    filters: filtersReducer,
    sort: sortReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
