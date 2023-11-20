import React, { createContext, useContext, useState, ReactNode } from "react";

interface StateGlobalContextProps {
  stateSidebar: string;
  setStateSidebar: React.Dispatch<React.SetStateAction<string>>;
}

const StateGlobalContext = createContext<StateGlobalContextProps | undefined>(
  undefined
);

interface StateGlobalProviderProps {
  children: ReactNode;
}

export const StateGlobalProvider: React.FC<StateGlobalProviderProps> = ({
  children,
}) => {
  const [stateSidebar, setStateSidebar] = useState<string>("blog");

  return (
    <StateGlobalContext.Provider value={{ stateSidebar, setStateSidebar }}>
      {children}
    </StateGlobalContext.Provider>
  );
};

export const useSidebarContext = () => {
  const context = useContext(StateGlobalContext);
  if (!context) {
    throw new Error(
      "useSidebarContext debe ser usado dentro de un StateGlobalProvider"
    );
  }
  return context;
};
