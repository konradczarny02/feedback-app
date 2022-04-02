import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledReturn = styled(Link)`
  margin-left: 5%;
  padding-top: 32px;
  display: flex;
  align-items: center;
  text-decoration: none;

  svg {
    margin-right: 16px;
  }

  p {
    font-size: 13px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.gray};
  }
`;
