import { SafeAreaView, View } from 'react-native';

import { SidebarProvider } from './sidebar/SidebarContext';
import { Sidebar } from './sidebar/Sidebar';
import { SidebarHeader } from './sidebar/SidebarHeader';
import { SidebarMenu } from './sidebar/SidebarMenu';
import { SidebarToggleButton } from './sidebar/SidebarToggleButton';


const FullSidebar = () => {
    return(
    <SidebarProvider>

      <SafeAreaView className="flex-1 flex-row-reverse">

        <Sidebar>
          <SidebarHeader title="Menu" />
          <SidebarMenu />
        </Sidebar>

        <View className="flex justify-center items-center w-10 h-10">
          <SidebarToggleButton />
        </View>

      </SafeAreaView>

    </SidebarProvider>
    );
};

export default FullSidebar;