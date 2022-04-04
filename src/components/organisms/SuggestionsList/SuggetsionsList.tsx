import Suggestion from 'components/molecules/Suggestion/Suggestion';
import { suggestions } from 'data/suggestionsData';
import { StyledList } from 'components/organisms/SuggestionsList/SuggestionsList.styles';
import { useAppSelector } from 'store/hooks';

const SuggestionsList = () => {
  const suggestionsList = useAppSelector((state) => state.suggestions);
  return (
    <StyledList>
      {suggestions.map((suggestion) => (
        <Suggestion key={suggestion.id} data={suggestion} />
      ))}
    </StyledList>
  );
};

export default SuggestionsList;
