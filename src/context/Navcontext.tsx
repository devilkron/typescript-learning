// src/context/NavContext.tsx
import  { createContext, useState, useContext, FC, ReactNode } from 'react';

interface NavContextType {
  selectedKey: string;
  setSelectedKey: (key: string) => void;
}

const NavContext = createContext<NavContextType | undefined>(undefined);

interface NavProviderProps {
  children: ReactNode; // เพิ่มประเภท ReactNode สำหรับ children
}

export const NavProvider: FC<NavProviderProps> = ({ children }) => {
  const [selectedKey, setSelectedKey] = useState<string>("");

  return (
    <NavContext.Provider value={{ selectedKey, setSelectedKey }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNavContext = () => {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error('useNavContext must be used within a NavProvider');
  }
  return context;
};
