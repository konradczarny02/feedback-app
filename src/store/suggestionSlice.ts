import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';

export type SortType = 'Bug' | 'Enhancement' | 'UX' | 'UI' | 'Feature';

type SuggestionType = {
  id: string;
  title: string;
  description: string;
  type: SortType;
  comments: number;
  upvotes: number;
  suggestionStatus: 'Planned' | 'In-Progress' | 'Live';
};

type Payload = {
  title: string;
  description: string;
  type: SortType;
};

const addSuggestion = ({ title, description, type }: Payload): SuggestionType => ({
  id: nanoid(),
  title,
  description,
  type,
  comments: 0,
  upvotes: 0,
  suggestionStatus: 'Planned',
});

const initialState: SuggestionType[] = [
  {
    id: nanoid(),
    title: 'Add tags for solutions',
    description: 'Easier to search for solutions based on a specific stack.',
    type: 'Enhancement',
    comments: 2,
    upvotes: 112,
    suggestionStatus: 'Planned',
  },
  {
    id: nanoid(),
    title: 'Add a dark theme option',
    description: 'It would help people with light sensitivities and who prefer dark mode.',
    type: 'Feature',
    comments: 4,
    upvotes: 99,
    suggestionStatus: 'Live',
  },
  {
    id: nanoid(),
    title: 'Q&A within the challenge hubs',
    description: 'Challenge-specific Q&A would make for easy reference.',
    type: 'Feature',
    comments: 2,
    upvotes: 65,
    suggestionStatus: 'In-Progress',
  },
  {
    id: nanoid(),
    title: 'Allow image/video upload ',
    description: 'Images and screencasts can enhance comments on solutions.',
    type: 'Enhancement',
    comments: 2,
    upvotes: 51,
    suggestionStatus: 'Planned',
  },
  {
    id: nanoid(),
    title: 'Ability to follow others',
    description: 'Stay updated on comments and solutions other people post.',
    type: 'Feature',
    comments: 3,
    upvotes: 42,
    suggestionStatus: 'Live',
  },
  {
    id: nanoid(),
    title: 'Preview images not loading',
    description: 'Challenge preview images are missing when you apply a filter.',
    type: 'Bug',
    comments: 0,
    upvotes: 3,
    suggestionStatus: 'Planned',
  },
];

export const suggestionsSlice = createSlice({
  name: 'suggestions',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Payload>) => {
      const suggestion = addSuggestion(action.payload);
      state.push(suggestion);
    },
  },
});

export const { add } = suggestionsSlice.actions;

export default suggestionsSlice.reducer;
