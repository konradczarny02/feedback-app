import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type FilterType = 'All' | 'Bug' | 'Feature' | 'Enhancement' | 'UI' | 'UX';

const initialState: { filter: FilterType } = {
  filter: 'All',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    change: (state, action: PayloadAction<FilterType>) => {
      state.filter = action.payload;
    },
  },
});

export const { change } = filterSlice.actions;

export default filterSlice.reducer;
