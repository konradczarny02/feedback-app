import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 5%;
  border-radius: 10px;
  margin-top: 24px;

  h2 {
    font-size: 18px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.darkBlue};
  }
`;

interface CommentsProps {
  commentsCount: number;
}

const CommentsSection = ({ commentsCount }: CommentsProps) => {
  return (
    <Wrapper>
      <h2>{commentsCount} Comments</h2>
    </Wrapper>
  );
};

export default CommentsSection;
