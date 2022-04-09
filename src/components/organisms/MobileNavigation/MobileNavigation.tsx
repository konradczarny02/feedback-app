import { NavWrapper } from 'components/organisms/MobileNavigation/MobileNavigation.styles';
import Name from 'components/atoms/Name/Name';
import Hamburger from 'components/atoms/Hamburger/Hamburger';

const MobileNavigation = () => {
  return (
    <NavWrapper>
      <Name />
      <Hamburger />
    </NavWrapper>
  );
};

export default MobileNavigation;
