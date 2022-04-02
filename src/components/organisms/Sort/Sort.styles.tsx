import styled from 'styled-components';

export const SortWrapper = styled.div`
  width: 100%;
  height: 56px;
  padding: 0 24px;
  background-color: ${({ theme }) => theme.colors.darkGray};
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-weight: 400;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.white};
  }
`;
