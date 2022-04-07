import { FilterWrapper } from 'components/atoms/Filter/Filter.styles';

type FilterProps = {
  filterName: string;
};

const Filter = ({ filterName }: FilterProps) => {
  return (
    <FilterWrapper
      onClick={(e) => {
        const target = e.target as HTMLButtonElement;
        console.log(target.textContent);
      }}
    >
      {filterName}
    </FilterWrapper>
  );
};

export default Filter;
