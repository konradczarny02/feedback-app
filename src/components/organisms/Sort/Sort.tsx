import AddButton from 'components/atoms/AddButton/AddButton';
import { SortWrapper } from 'components/organisms/Sort/Sort.styles';
import { useAppSelector } from 'store/hooks';
import { ReactComponent as SuggestionIcon } from 'assets/images/icons/suggestionsIcon.svg';

const Sort = () => {
  const suggestions = useAppSelector((state) => state.suggestions);
  return (
    <SortWrapper>
      <SuggestionIcon />
      <span>{suggestions.length} Suggestions</span>
      <p>Sort by : Most Upvotes</p>
      <AddButton />
    </SortWrapper>
  );
};

export default Sort;
