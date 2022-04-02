import { StyledReturn } from 'components/atoms/ReturnButton/ReturnButton.styles';
import { ReactComponent as ReturnIcon } from 'assets/images/icons/returnIcon.svg';

const ReturnButton = () => {
  return (
    <StyledReturn to="/">
      <ReturnIcon />
      <p>Go Back</p>
    </StyledReturn>
  );
};

export default ReturnButton;
