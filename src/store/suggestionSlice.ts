import { createSlice, nanoid } from '@reduxjs/toolkit';

type SuggestionType = {
  id: number;
  title: string;
  description: string;
  type: 'Bug' | 'Enhancement' | 'UX' | 'UI' | 'Feature';
  comments: number;
  upvotes: number;
};

interface SuggestionsState {
  suggestions: SuggestionType[];
}

const initialState = {
  suggestions: [
    {
      id: nanoid(),
      title: 'Add tags for solutions',
      description: 'Easier to search for solutions based on a specific stack.',
      type: 'Enhancement',
      comments: 2,
      upvotes: 112,
    },
  ],
};

export const suggestionsSlice = createSlice({
  name: 'suggestions',
  initialState,
  reducers: {},
});

export default suggestionsSlice.reducer;
