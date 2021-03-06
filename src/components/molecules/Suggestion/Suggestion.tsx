import Filter from 'components/atoms/Filter/Filter';
import Upvotes from 'components/atoms/Upvotes/Upvotes';
import CommentsCount from 'components/atoms/CommentsCount/CommentsCount';
import { StyledSuggestion, StyledDescription } from 'components/molecules/Suggestion/Suggestion.styles';

type SuggestionProps = {
  data: {
    title: string;
    description: string;
    type: 'Bug' | 'Enhancement' | 'UX' | 'UI' | 'Feature';
    comments: number;
    upvotes: number;
  };
};

const Suggestion = ({ data: { title, description, type, upvotes, comments } }: SuggestionProps) => {
  return (
    <StyledSuggestion>
      <h3>{title}</h3>
      <StyledDescription>{description}</StyledDescription>
      <span>
        <Filter filterName={type} />
      </span>
      <Upvotes upvotesNumber={upvotes} />
      <CommentsCount commentsNumber={comments} />
    </StyledSuggestion>
  );
};

export default Suggestion;
