import styled from 'styled-components';

const Wrapper = styled.div`
  h3 {
    font-weight: 700;
    font-size: ${({ theme }) => theme.fonts.paragraphRegular};
    color: ${({ theme }) => theme.colors.white};
  }
  p {
    font-weight: 500;
    font-size: ${({ theme }) => theme.fonts.paragraphSmall};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const Name = () => {
  return (
    <Wrapper>
      <h3>Frontend Mentor</h3>
      <p>Feedback Board</p>
    </Wrapper>
  );
};

export default Name;
