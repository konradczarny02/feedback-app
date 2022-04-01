import { NavigationContext } from 'providers/NavigationProvider';
import { useContext } from 'react';
import { BackgroundWrapper } from 'components/atoms/Background/Background.styles';

const Background = () => {
  const { isOpen } = useContext(NavigationContext);
  return <BackgroundWrapper isOpen={isOpen}></BackgroundWrapper>;
};

export default Background;
