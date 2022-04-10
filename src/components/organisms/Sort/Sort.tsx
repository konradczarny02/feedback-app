import AddButton from 'components/atoms/AddButton/AddButton';
import { SortWrapper } from 'components/organisms/Sort/Sort.styles';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { ReactComponent as SuggestionIcon } from 'assets/images/icons/suggestionsIcon.svg';
import { change, SortType } from 'store/sortSlice';

const Sort = () => {
  const suggestions = useAppSelector((state) => state.suggestions);
  const dispatch = useAppDispatch();
  return (
    <SortWrapper>
      <SuggestionIcon />
      <span>{suggestions.length} Suggestions</span>
      <p>Sort by : </p>
      <select
        onChange={(event) => {
          const target = event.target as HTMLSelectElement;
          let value = target.value as SortType;
          dispatch(change(value));
        }}
      >
        <option value="Most Upvotes">Most Upvotes</option>
        <option value="Least Upvotes">Least Upvotes</option>
        <option value="Most Comments">Most Comments</option>
        <option value="Least Comments">Least Comments</option>
      </select>
      <AddButton />
    </SortWrapper>
  );
};

export default Sort;
