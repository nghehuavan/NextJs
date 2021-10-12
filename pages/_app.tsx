import '../styles/globals.css';
import { AppProps } from 'next/app';
import React from 'react';
import ContextProvider from '../contexts/context-provider';
import configStore from './../redux/store/store';
import { Provider } from 'react-redux';

// create redux store
const store = configStore();

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </Provider>
  );
};

export default App;
