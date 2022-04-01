import styled from 'styled-components';
import { useState } from 'react';

interface HamburgerInterface {
  isOpen: boolean;
}

export const HamburgerWrapper = styled.div<HamburgerInterface>`
  width: 20px;
  height: 17px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  overflow: hidden;

  div {
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.white};
    transition: transform 0.3s ease-in-out;
  }

  div:first-child {
    transform: translateY(${({ isOpen }) => (isOpen ? '7px' : '0')}) rotate(${({ isOpen }) => (isOpen ? '45deg' : '0')});
  }

  div:nth-child(2) {
    transform: translateX(${({ isOpen }) => (isOpen ? '-100%' : '0')});
  }

  div:last-child {
    transform: translateY(${({ isOpen }) => (isOpen ? '-7px' : '0')})
      rotate(${({ isOpen }) => (isOpen ? '-45deg' : '0')});
  }
`;

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const handleOpen = () => setIsOpen((prevState) => !prevState);
  return (
    <HamburgerWrapper onClick={handleOpen} isOpen={isOpen}>
      <div></div>
      <div></div>
      <div></div>
    </HamburgerWrapper>
  );
};

export default Hamburger;
