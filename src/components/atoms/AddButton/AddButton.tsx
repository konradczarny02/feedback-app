import styled from 'styled-components';

export const AddButtonWrapper = styled.button`
  width: 150px;
  font-size: 13px;
  font-weight: 700;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.pink};
  border: none;
  border-radius: 10px;
`;

const AddButton = () => {
  return <AddButtonWrapper>+ Add Feedback</AddButtonWrapper>;
};

export default AddButton;
