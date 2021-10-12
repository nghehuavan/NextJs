import React from 'react';

interface icontextState {
  isLoading?: boolean;
}

interface icontext {
  contextState: icontextState;
  setContextState: (state: icontextState) => void;
}

export const appContext = React.createContext<icontext>({
  contextState: { isLoading: false },
  setContextState: (state: icontextState) => {},
});

export interface icontextProvider {
  children?: React.ReactNode;
}

export default function ContextProvider(props: icontextProvider) {
  const [providerState, setProviderState] = React.useState<icontextState>({
    isLoading: false,
  });

  const setPartialProviderState = (partialState: icontextState) => {
    setProviderState({ ...providerState, ...partialState });
  };

  return (
    <appContext.Provider
      value={{
        contextState: providerState,
        setContextState: setPartialProviderState,
      }}
    >
      {props.children}
    </appContext.Provider>
  );
}
