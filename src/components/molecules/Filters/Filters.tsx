import Filter from 'components/atoms/Filter/Filter';
import { filtersData } from 'data/filtersData';
import { FiltersWrapper } from 'components/molecules/Filters/Filters.styles';

const Filters = () => {
  return (
    <FiltersWrapper>
      {filtersData.map(({ filterName }) => (
        <Filter key={filterName} filterName={filterName} />
      ))}
    </FiltersWrapper>
  );
};

export default Filters;
