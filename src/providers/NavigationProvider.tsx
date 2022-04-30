import { createContext, useState, ReactNode } from 'react';

interface NavigationContextInterface {
  isOpen: boolean;
  handleOpen: () => void;
}

type NavigationProviderProps = {
  children: ReactNode[];
};

export const NavigationContext = createContext<NavigationContextInterface>({ isOpen: false, handleOpen: () => {} });

const NavigationProvider = ({ children }: NavigationProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen((prevState) => !prevState);

  return <NavigationContext.Provider value={{ isOpen, handleOpen }}>{children}</NavigationContext.Provider>;
};

export default NavigationProvider;
