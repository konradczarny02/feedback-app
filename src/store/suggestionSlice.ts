import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';

type SuggestionType = {
  id: string;
  title: string;
  description: string;
  type: 'Bug' | 'Enhancement' | 'UX' | 'UI' | 'Feature';
  comments: number;
  upvotes: number;
};

const initialState: SuggestionType[] = [
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
  {
    id: nanoid(),
    title: 'Q&A within the challenge hubs',
    description: 'Challenge-specific Q&A would make for easy reference.',
    type: 'Feature',
    comments: 2,
    upvotes: 65,
  },
  {
    id: nanoid(),
    title: 'Allow image/video upload ',
    description: 'Images and screencasts can enhance comments on solutions.',
    type: 'Enhancement',
    comments: 2,
    upvotes: 51,
  },
  {
    id: nanoid(),
    title: 'Ability to follow others',
    description: 'Stay updated on comments and solutions other people post.',
    type: 'Feature',
    comments: 3,
    upvotes: 42,
  },
  {
    id: nanoid(),
    title: 'Preview images not loading',
    description: 'Challenge preview images are missing when you apply a filter.',
    type: 'Bug',
    comments: 0,
    upvotes: 3,
  },
];

export const suggestionsSlice = createSlice({
  name: 'suggestions',
  initialState,
  reducers: {},
});

export default suggestionsSlice.reducer;
