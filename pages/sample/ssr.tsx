import * as React from 'react';
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next';
import Link from 'next/link';
import sampleApi from '../../apis/sampleApi';
import { Button } from '@mui/material';

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<any>> => {
  const data = await sampleApi.getData({ _limit: 5 });

  return {
    props: {
      serverProps: data,
    },
  };
};

export interface iSampleSSRProps {
  serverProps: any;
  children: React.ReactNode;
}

export default function SampleSSR(props: iSampleSSRProps) {
  const jsxPhotos = props.serverProps.map((photo: any, index: number) => {
    return (
      <React.Fragment key={index}>
        <img src={photo.thumbnailUrl} alt='BigCo Inc. logo' />

        <br />
      </React.Fragment>
    );
  });

  // Render alway run on both side server and client
  return (
    <>
      <Link href='/'>
        <Button variant='contained' color='success'>
          home
        </Button>
      </Link>
      <Link href='/sample'>
        <Button variant='contained' color='success'>
          sample
        </Button>
      </Link>
      <Link href='/sample/ssr'>
        <Button variant='contained' color='success'>
          sample-ssr
        </Button>
      </Link>
      <Link href='/sample/saga'>
        <Button variant='contained' color='success'>
          sample-saga
        </Button>
      </Link>

      <h2>This is get data run on server side</h2>
      {props.serverProps ? jsxPhotos : 'there no data'}
    </>
  );
}
