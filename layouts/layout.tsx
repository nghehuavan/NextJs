import * as React from 'react';
import { appContext } from '../contexts/context-provider';
import GlobalLoading from './components/global-loading';

export interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  const ctx = React.useContext(appContext);

  return (
    <>
      <GlobalLoading visible={ctx.contextState.isLoading} />
      {props.children}
    </>
  );
}
