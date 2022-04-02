import AddButton from 'components/atoms/AddButton/AddButton';
import { SortWrapper } from 'components/organisms/Sort/Sort.styles';

const Sort = () => {
  return (
    <SortWrapper>
      <p>Sort by : Most Upvotes</p>
      <AddButton />
    </SortWrapper>
  );
};

export default Sort;
