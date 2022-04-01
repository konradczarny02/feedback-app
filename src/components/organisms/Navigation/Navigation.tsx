import styled from 'styled-components';
import Name from 'components/atoms/Name/Name';
import Hamburger from 'components/atoms/Hamburger/Hamburger';
import bg from 'assets/images/mobile/background-header.png';

export const NavWrapper = styled.nav`
  padding: 16px 10%;
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: url('${bg}');
  background-size: cover;
`;

const Navigation = () => {
  return (
    <NavWrapper>
      <Name />
      <Hamburger />
    </NavWrapper>
  );
};

export default Navigation;
