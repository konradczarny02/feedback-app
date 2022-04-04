import { configureStore } from '@reduxjs/toolkit';
import suggestionsReducer from 'store/suggestionSlice';

const store = configureStore({
  reducer: {
    suggestions: suggestionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
