import { configureStore } from '@reduxjs/toolkit';
import suggestionsReducer from 'store/suggestionSlice';
import filterReducer from 'store/filterSlice';
import filtersReducer from 'store/filtersSlice';

const store = configureStore({
  reducer: {
    suggestions: suggestionsReducer,
    filter: filterReducer,
    filters: filtersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
