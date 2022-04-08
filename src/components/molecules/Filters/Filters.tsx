import Filter from 'components/atoms/Filter/Filter';
import { FiltersWrapper } from 'components/molecules/Filters/Filters.styles';
import { useAppSelector } from 'store/hooks';

const Filters = () => {
  const filters = useAppSelector((state) => state.filters);
  return (
    <FiltersWrapper>
      {filters.map((filter) => (
        <Filter key={filter} filterName={filter} />
      ))}
    </FiltersWrapper>
  );
};

export default Filters;
