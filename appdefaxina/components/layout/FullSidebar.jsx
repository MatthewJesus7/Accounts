import { SafeAreaView, View } from 'react-native';

import { SidebarProvider } from './sidebar/SidebarContext';
import { Sidebar } from './sidebar/Sidebar';
import { SidebarHeader } from './sidebar/SidebarHeader';
import { SidebarMenu } from './sidebar/SidebarMenu';
import { SidebarToggleButton } from './sidebar/SidebarToggleButton';

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