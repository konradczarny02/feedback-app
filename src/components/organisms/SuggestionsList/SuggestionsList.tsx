import Suggestion from 'components/molecules/Suggestion/Suggestion';
import { StyledList } from 'components/organisms/SuggestionsList/SuggestionsList.styles';
import { useAppSelector } from 'store/hooks';
import EmptyFeedback from 'components/molecules/EmptyFeedback/EmptyFeedback';
import { useEffect, useState } from 'react';

const SuggestionsList = () => {
  const suggestions = useAppSelector((state) => state.suggestions);
  const filter = useAppSelector((state) => state.filter);
  const sort = useAppSelector((state) => state.sort.sort);
  const [filteredSuggestions, setFilteredSuggestions] = useState(suggestions);
  const bot = [...filteredSuggestions].sort((a, b) => a.upvotes - b.upvotes);

  useEffect(() => {
    if (filter.filter === 'All') {
      setFilteredSuggestions(suggestions);
    } else {
      setFilteredSuggestions(suggestions.filter((suggestion) => suggestion.type === filter.filter));
    }
  }, [filter]);

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
