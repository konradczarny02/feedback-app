import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkBlue};
`;

export const Heading = styled.h3`
  font-size: 13px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkBlue};
`;

export const Description = styled.p`
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray};
`;

export const StyledForm = styled.form`
  height: 720px;
  width: 90%;
  margin: 55px auto;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;

  ${Title} {
    margin: 24px 0 24px;
  }

  ${Heading} {
    margin-bottom: 4px;
  }

  ${Description} {
    margin-bottom: 16px;
  }

  input[type='text'] {
    height: 48px;
    background-color: ${({ theme }) => theme.colors.darkerWhite};
    border: none;
    border-radius: 10px;
    padding: 12px 24px;
    margin-bottom: 24px;
    color: ${({ theme }) => theme.colors.darkBlue};
    font-size: 15px;
    font-weight: 400;

    &:focus {
      outline: 1px solid ${({ theme }) => theme.colors.blue};
    }
  }

  select {
    height: 48px;
    background-color: ${({ theme }) => theme.colors.darkerWhite};
    border: none;
    border-radius: 10px;
    padding: 12px 24px;
    margin-bottom: 24px;
    color: ${({ theme }) => theme.colors.darkBlue};
    font-size: 15px;
    font-weight: 400;

    &:focus {
      outline: 1px solid ${({ theme }) => theme.colors.blue};
    }
  }

  textarea {
    height: 120px;
    margin-bottom: 40px;
    padding: 12px 24px;
    background-color: ${({ theme }) => theme.colors.darkerWhite};
    border-radius: 10px;
    border: none;
    resize: none;
    font-size: 15px;
    font-weight: 400;

    &:focus {
      outline: 1px solid ${({ theme }) => theme.colors.blue};
    }
  }

  input[type='submit'] {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.white};
    font-size: 13px;
    font-weight: 700;
    background-color: ${({ theme }) => theme.colors.pink};
    border: none;
    border-radius: 10px;
    margin-bottom: 16px;
  }

  input[type='reset'] {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.white};
    font-size: 13px;
    font-weight: 700;
    background-color: ${({ theme }) => theme.colors.darkGray};
    border: none;
    border-radius: 10px;
  }
`;