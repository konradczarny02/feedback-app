import { createSlice } from '@reduxjs/toolkit';
import { type Filter } from 'store/filterSlice';

const filtersInitialState: Filter[] = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'];

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {},
});

export default filtersSlice.reducer;
