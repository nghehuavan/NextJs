import * as React from 'react';
import { appContext } from '../context/context-provider';
import StickyLoading from '../context/context-loading';

export interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  const ctx = React.useContext(appContext);

  return (
    <>
      <StickyLoading visible={ctx.state.isLoading} />
      {props.children}
    </>
  );
}
