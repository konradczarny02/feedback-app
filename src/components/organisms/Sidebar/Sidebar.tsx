import { SidebarWrapper } from 'components/organisms/Sidebar/Sidebar.styles';
import { NavigationContext } from 'providers/NavigationProvider';
import { useContext } from 'react';

const Sidebar = () => {
  const { isOpen } = useContext(NavigationContext);
  return (
    <SidebarWrapper isOpen={isOpen}>
      <h1>hi</h1>
    </SidebarWrapper>
  );
};

export default Sidebar;
