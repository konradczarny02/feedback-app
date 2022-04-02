import styled from 'styled-components';
import bg from 'assets/images/mobile/background-header.png';

export const Wrapper = styled.div`
  height: 40px;
  width: 40px;
  background-image: url('${bg}');
  background-position: center;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -20px;
`;
