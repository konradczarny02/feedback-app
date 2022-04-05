import { createSlice, nanoid } from '@reduxjs/toolkit';

type SuggestionType = {
  id: string;
  title: string;
  description: string;
  type: 'Bug' | 'Enhancement' | 'UX' | 'UI' | 'Feature';
  comments: number;
  upvotes: number;
};

const initialState:SuggestionType[] = [
  {
    id: nanoid(),
    title: 'Add tags for solutions',
    description: 'Easier to search for solutions based on a specific stack.',
    type: 'Enhancement',
    comments: 2,
    upvotes: 112,
  },
  {
    id: nanoid(),
    title: 'Add a dark theme option',
    description: 'It would help people with light sensitivities and who prefer dark mode.',
    type: 'Feature',
    comments: 4,
    upvotes: 99,
  },
];

export const suggestionsSlice = createSlice({
  name: 'suggestions',
  initialState,
  reducers: {},
});

export default suggestionsSlice.reducer;
