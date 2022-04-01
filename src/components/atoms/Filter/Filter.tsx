import { FilterWrapper } from 'components/atoms/Filter/Filter.styles';

type FilterProps = {
  filterName: string;
};

const Filter = ({ filterName }: FilterProps) => {
  return <FilterWrapper>{filterName}</FilterWrapper>;
};

export default Filter;
