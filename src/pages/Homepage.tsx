import NavigationProvider from 'providers/NavigationProvider';
import MobileNavigation from 'components/organisms/MobileNavigation/MobileNavigation';
import Background from 'components/atoms/Background/Background';
import Sidebar from 'components/organisms/Sidebar/Sidebar';
import Sort from 'components/organisms/Sort/Sort';
import SuggestionsList from 'components/organisms/SuggestionsList/SuggestionsList';
import DesktopNavigation from 'components/organisms/DesktopNavigation/DesktopNavigation';
import { Wrapper } from 'pages/Homepage.styles';

const Homepage = () => {
  return (
    <Wrapper>
      <NavigationProvider>
        <MobileNavigation />
        <Background />
        <Sidebar />
      </NavigationProvider>
      <DesktopNavigation />
      <Sort />
      <SuggestionsList />
    </Wrapper>
  );
};

export default Homepage;
