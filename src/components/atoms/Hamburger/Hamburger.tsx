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
  }

  div:first-child {
    transform: translateY(7px) rotate(45deg);
  }

  div:nth-child(2) {
  }

  div:last-child {
    transform: translateY(-7px) rotate(-45deg);
  }
`;

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <HamburgerWrapper isOpen={isOpen}>
      <div></div>
      <div></div>
      <div></div>
    </HamburgerWrapper>
  );
};

export default Hamburger;
