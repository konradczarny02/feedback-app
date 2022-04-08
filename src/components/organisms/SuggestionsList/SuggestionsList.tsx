import Suggestion from 'components/molecules/Suggestion/Suggestion';
import { StyledList } from 'components/organisms/SuggestionsList/SuggestionsList.styles';
import { useAppSelector } from 'store/hooks';
import EmptyFeedback from 'components/molecules/EmptyFeedback/EmptyFeedback';
import { useEffect, useState } from 'react';

const SuggestionsList = () => {
  const suggestions = useAppSelector((state) => state.suggestions);
  const filter = useAppSelector((state) => state.filter);
  const [filteredSuggestions, setFilteredSuggestions] = useState(suggestions);

  useEffect(() => {
    if (filter.filter === 'All') {
      setFilteredSuggestions(suggestions);
    } else {
      setFilteredSuggestions(suggestions.filter((suggestion) => suggestion.type === filter.filter));
    }
  }, [filter]);

  console.log(filteredSuggestions, filter);
  return (
    <>
      {filteredSuggestions.length < 1 ? (
        <EmptyFeedback />
      ) : (
        <StyledList>
          {filteredSuggestions.map((suggestion) => (
            <Suggestion key={suggestion.id} data={suggestion} />
          ))}
        </StyledList>
      )}
    </>
  );
};

export default SuggestionsList;
