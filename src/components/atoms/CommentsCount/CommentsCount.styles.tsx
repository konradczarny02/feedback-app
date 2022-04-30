import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledCommentCount = styled(Link)`
  height: 32px;
  display: flex;
  align-items: center;
  padding: 6px 2px;
  text-decoration: none;
  cursor: pointer;

  p {
    font-size: 13px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.darkBlue};
    margin: 0 0 0 6px;
  }
`;
