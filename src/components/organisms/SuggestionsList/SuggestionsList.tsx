import Suggestion from 'components/molecules/Suggestion/Suggestion';
import { StyledList } from 'components/organisms/SuggestionsList/SuggestionsList.styles';
import { useAppSelector } from 'store/hooks';
import EmptyFeedback from 'components/molecules/EmptyFeedback/EmptyFeedback';

const SuggestionsList = () => {
  const suggestions = useAppSelector((state) => state.suggestions);
  return (

    <>
      {suggestions.length < 1 ? (<EmptyFeedback />) : (
    <StyledList>
      {suggestions.map((suggestion) => (
        <Suggestion key={suggestion.id} data={suggestion} />
      ))}
    </StyledList>
      )}
    </>
  );
};

export default SuggestionsList;
