import styled from 'styled-components';
import Name from 'components/atoms/Name/Name';
import Hamburger from 'components/atoms/Hamburger/Hamburger';

export const NavWrapper = styled.nav`
  padding: 16px 10%;
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: radial-gradient(circle, rgba(232, 77, 112, 1) 0%, rgba(163, 55, 246, 1) 50%, rgba(40, 167, 237, 1) 100%);
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
