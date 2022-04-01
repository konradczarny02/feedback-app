import { SidebarWrapper } from 'components/organisms/Sidebar/Sidebar.styles';
import { NavigationContext } from 'providers/NavigationProvider';
import { useContext } from 'react';
import Filters from 'components/molecules/Filters/Filters';

const Sidebar = () => {
  const { isOpen } = useContext(NavigationContext);
  return (
    <SidebarWrapper isOpen={isOpen}>
      <Filters />
    </SidebarWrapper>
  );
};

export default Sidebar;
