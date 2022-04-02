import { SidebarWrapper } from 'components/organisms/Sidebar/Sidebar.styles';
import { NavigationContext } from 'providers/NavigationProvider';
import { useContext } from 'react';
import Filters from 'components/molecules/Filters/Filters';
import Roadmap from 'components/molecules/Roadmap/Roadmap';

const Sidebar = () => {
  const { isOpen } = useContext(NavigationContext);
  return (
    <SidebarWrapper isOpen={isOpen}>
      <Filters />
      <Roadmap />
    </SidebarWrapper>
  );
};

export default Sidebar;
