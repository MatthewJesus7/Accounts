import React, { createContext, useContext, useState } from 'react';

const SidebarContext = createContext(null);

export const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const translateX = useRef(new Animated.Value(0)).current;

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Animated.timing(translateX, {
  //   toValue: isOpen ? 256 : 0, // 256 é a largura da sidebar
  //   duration: 500,
  //   useNativeDriver: true,
  // }).start();

  return (
    <SidebarContext.Provider 
    value={{ isOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  return useContext(SidebarContext);
};
