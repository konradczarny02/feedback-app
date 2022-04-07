import { createSlice } from '@reduxjs/toolkit';

export type Filter = 'All' | 'Bug' | 'Feature' | 'Enhancement' | 'UI' | 'UX';

const initialState: Filter = 'All';

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {},
});

export default filterSlice.reducer;
