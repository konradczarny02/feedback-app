import React from 'react';
import { useParams } from 'react-router-dom';
import Suggestion from 'components/molecules/Suggestion/Suggestion';
import { useAppSelector } from 'store/hooks';
import styled from 'styled-components';
import ReturnButton from 'components/atoms/ReturnButton/ReturnButton';

export const Wrapper = styled.div`
  margin: 5%;
`;

const Details = () => {
  const suggestions = useAppSelector((state) => state.suggestions);
  const { id } = useParams();
  const suggestion = suggestions.find((suggestion) => suggestion.id === id);
  return (
    <Wrapper>
      <ReturnButton />
      {suggestion ? <Suggestion data={suggestion} /> : null}
      <p>{suggestion ? suggestion.comments : 0} Comments</p>
    </Wrapper>
  );
};

export default Details;
