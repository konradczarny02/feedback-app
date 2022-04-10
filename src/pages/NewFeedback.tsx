import React from 'react';
import Form from 'components/organisms/Form/Form';
import ReturnButton from 'components/atoms/ReturnButton/ReturnButton';
import { Wrapper } from 'pages/NewFeedback.styles';

const NewFeedback = () => {
  return (
    <Wrapper>
      <ReturnButton />
      <Form />
    </Wrapper>
  );
};

export default NewFeedback;
