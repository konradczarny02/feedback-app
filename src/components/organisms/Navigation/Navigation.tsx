import { NavWrapper } from './Navigation.styles';
import Name from 'components/atoms/Name/Name';
import Hamburger from 'components/atoms/Hamburger/Hamburger';

const Navigation = () => {
  return (
    <NavWrapper>
      <Name />
      <Hamburger />
    </NavWrapper>
  );
};

export default Navigation;
