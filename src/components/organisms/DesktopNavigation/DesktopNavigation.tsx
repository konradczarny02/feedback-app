import styled from 'styled-components';
import DesktopHeader from 'components/molecules/DesktopHeader/DesktopHeader';
import Filters from 'components/molecules/Filters/Filters';
import Roadmap from 'components/molecules/Roadmap/Roadmap';

export const DesktopNavWrapper = styled.nav`
  display: none;

  @media (min-width: 768px) {
    width: 90%;
    height: 180px;
    margin: 60px auto 0;
    display: flex;
    justify-content: space-between;

    & > * {
      flex-basis: 32%;
    }
  }
`;

const DesktopNavigation = () => {
  return (
    <DesktopNavWrapper>
      <DesktopHeader />
      <Filters />
      <Roadmap />
    </DesktopNavWrapper>
  );
};

export default DesktopNavigation;
