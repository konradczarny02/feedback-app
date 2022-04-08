import { FilterWrapper } from 'components/atoms/Filter/Filter.styles';
import { useAppDispatch } from 'store/hooks';
import { change, FilterType } from 'store/filterSlice';

const Filter = ({ filterName }: { filterName: FilterType }) => {
  const dispatch = useAppDispatch();
  return <FilterWrapper onClick={() => dispatch(change(filterName))}>{filterName}</FilterWrapper>;
};

export default Filter;
