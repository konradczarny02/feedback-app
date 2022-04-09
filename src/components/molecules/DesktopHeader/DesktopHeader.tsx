import styled from 'styled-components';
import Name from 'components/atoms/Name/Name';
import bg from 'assets/images/desktop/background-header.png';

export const DesktopHeaderWrapper = styled.header`
  height: 100%;
  width: 230px;
  border-radius: 10px;
  background-image: url('${bg}');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 24px;
`;

const DesktopHeader = () => {
  return (
    <DesktopHeaderWrapper>
      <Name />
    </DesktopHeaderWrapper>
  );
};

export default DesktopHeader;
