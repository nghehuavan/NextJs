import * as React from 'react';
import { appContext } from '../context/context-provider';
import Layout from '../layouts/layout';
import { Button } from '@mui/material';
import Link from 'next/link';

export interface HomeAppProps {
  children: React.ReactNode;
}

export default function Home(props: HomeAppProps) {
  const ctx = React.useContext(appContext);
  const setCtx = () => {
    console.log(ctx.state);
    ctx.setState({ isLoading: !ctx.state.isLoading });
  };

  // Render alway run on both side server and client
  return (
    <>
      <Layout>
        <Link href='/try'>
          <Button variant="contained" color="success">Try</Button>
        </Link>
        <Button variant="contained" color="primary" onClick={setCtx}>setCtx</Button>
        <br />
        isLoading: {ctx.state.isLoading === true ? 'true' : 'false'}
      </Layout>
    </>
  );
}
