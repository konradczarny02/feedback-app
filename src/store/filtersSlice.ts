import { createSlice } from '@reduxjs/toolkit';
import { FilterType } from 'store/filterSlice';

const filtersInitialState: FilterType[] = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'];

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {},
});

export default filtersSlice.reducer;
