type SuggestionType = {
  id: number;
  title: string;
  description: string;
  type: 'Bug' | 'Enhancement' | 'UX' | 'UI' | 'Feature';
  comments: number;
  upvotes: number;
};

export const suggestions: SuggestionType[] = [
  {
    id: 1,
    title: 'Add tags for solutions',
    description: 'Easier to search for solutions based on a specific stack.',
    type: 'Enhancement',
    comments: 2,
    upvotes: 112,
  },
  {
    id: 2,
    title: 'Add a dark theme option',
    description: 'It would help people with light sensitivities and who prefer dark mode.',
    type: 'Feature',
    comments: 4,
    upvotes: 99,
  },
  {
    id: 3,
    title: 'Q&A within the challenge hubs',
    description: 'Challenge-specific Q&A would make for easy reference.',
    type: 'Feature',
    comments: 2,
    upvotes: 65,
  },
  {
    id: 4,
    title: 'Allow image/video upload ',
    description: 'Images and screencasts can enhance comments on solutions.',
    type: 'Enhancement',
    comments: 2,
    upvotes: 51,
  },
  {
    id: 5,
    title: 'Ability to follow others',
    description: 'Stay updated on comments and solutions other people post.',
    type: 'Feature',
    comments: 3,
    upvotes: 42,
  },
  {
    id: 6,
    title: 'Preview images not loading',
    description: 'Challenge preview images are missing when you apply a filter.',
    type: 'Bug',
    comments: 0,
    upvotes: 3,
  },
];
