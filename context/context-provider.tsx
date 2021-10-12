import React from 'react';

interface icontextState {
  isLoading?: boolean;
}

interface icontext {
  state: icontextState;
  setState: (state: icontextState) => void;
}

export const appContext = React.createContext<icontext>({
  state: { isLoading: false },
  setState: (state: icontextState) => {},
});

export interface icontextProvider {
  children?: React.ReactNode;
}

export default function ContextProvider(props: icontextProvider) {
  const [state, setState] = React.useState<icontextState>({
    isLoading: false,
  });

  return (
    <appContext.Provider value={{ state, setState }}>
      {props.children}
    </appContext.Provider>
  );
}
