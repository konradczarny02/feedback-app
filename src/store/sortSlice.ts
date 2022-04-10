import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type SortType = 'Most Upvotes' | 'Least Upvotes' | 'Most Comments' | 'Least Comments';

const initialState: { sort: SortType } = {
  sort: 'Most Upvotes',
};

export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    change: (state, action: PayloadAction<SortType>) => {
      state.sort = action.payload;
    },
  },
});

export const { change } = sortSlice.actions;

export default sortSlice.reducer;
