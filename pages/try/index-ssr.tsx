import * as React from 'react';
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next';
import Link from 'next/link';
import mocklasbApis from '../../apis/mocklabApis';
import { Button } from '@mui/material';

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<any>> => {
  const data = await mocklasbApis.getData({ _limit: 5 });

  return {
    props: {
      serverProps: data,
    },
  };
};

export interface IndexSSRProps {
  serverProps: any;
  children: React.ReactNode;
}

export default function IndexSSR(props: IndexSSRProps) {
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
      <Link href='/try'>
        <Button variant='contained' color='success'>
          index
        </Button>
      </Link>
      <Link href='/try/index-ssr'>
        <Button variant='contained' color='success'>
          index-ssr
        </Button>
      </Link>

      <h2>This is get data run on server side</h2>
      {props.serverProps ? jsxPhotos : 'there no data'}
    </>
  );
}
