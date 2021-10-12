import * as React from 'react';
import { appContext } from '../contexts/context-provider';
import Layout from '../layouts/layout';
import { Button } from '@mui/material';
import Link from 'next/link';

export interface iHomeProps {
  children: React.ReactNode;
}

export default function Home(props: iHomeProps) {
  const ctx = React.useContext(appContext);
  const setCtx = () => {
    console.log(ctx.contextState);
    ctx.setContextState({ isLoading: !ctx.contextState.isLoading });
  };

  // Render alway run on both side server and client
  return (
    <>
      <Layout>
        <Link href='/sample'>
          <Button variant='contained' color='success'>
            sample
          </Button>
        </Link>
        <Link href='/sample/saga'>
          <Button variant='contained' color='success'>
            sample-saga
          </Button>
        </Link>
        <br />
        <br />
        <br />
        <Button variant='contained' color='primary' onClick={setCtx}>
          setCtx
        </Button>
        <br />
        isLoading: {ctx.contextState.isLoading === true ? 'true' : 'false'}
      </Layout>
    </>
  );
}
