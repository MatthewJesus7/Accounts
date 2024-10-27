import { SafeAreaView, View } from 'react-native';

import { SidebarProvider } from './SidebarContext';
import { Sidebar } from './Sidebar';
import { SidebarHeader } from './SidebarHeader';
import { SidebarMenu } from './SidebarMenu';
import { SidebarToggleButton } from './SidebarToggleButton';

const FullSidebar = () => {
  
    return(
    <SidebarProvider>

      <SafeAreaView className="flex-1 flex-row-reverse z-50">

        <Sidebar>
          <SidebarHeader title="Menu" />
          <SidebarMenu />
        </Sidebar>

        <SidebarToggleButton />

      </SafeAreaView>

    </SidebarProvider>
    );
};

export default FullSidebar;