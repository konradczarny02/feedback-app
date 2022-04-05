import NavigationProvider from 'providers/NavigationProvider';
import Navigation from 'components/organisms/Navigation/Navigation';
import Background from 'components/atoms/Background/Background';
import Sidebar from 'components/organisms/Sidebar/Sidebar';
import Sort from 'components/organisms/Sort/Sort';
import SuggestionsList from 'components/organisms/SuggestionsList/SuggestionsList';

const Homepage = () => {
  return (
    <>
      <NavigationProvider>
        <Navigation />
        <Background />
        <Sidebar />
      </NavigationProvider>
      <Sort />
      <SuggestionsList />
    </>
  );
};

export default Homepage;
