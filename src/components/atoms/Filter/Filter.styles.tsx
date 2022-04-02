import styled from 'styled-components';

export const FilterWrapper = styled.button`
  background-color: ${({ theme }) => theme.colors.lightGray};
  font-size: ${({ theme }) => theme.fonts.paragraphSmall};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.blue};
  border: none;
  border-radius: 12px;
  padding: 5px 16px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }
`;
