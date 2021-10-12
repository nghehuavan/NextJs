import '../styles/globals.css';
import { AppProps } from 'next/app';
import React from 'react';
import ContextProvider from '../context/context-provider';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
};

export default App;
