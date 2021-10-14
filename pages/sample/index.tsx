import * as React from 'react';
import Link from 'next/link';
import { Button, Grid } from '@mui/material';
import { appContext } from '../../contexts/context-provider';
import Layout from '../../layouts/layout';
import { useRouter } from 'next/router'
import sampleApi from '../../apis/sampleApi';
import StickyLoading from '../../layouts/components/sticky-loading';

export interface iSampleProps {
  children: React.ReactNode;
}

export default function Sample(props: iSampleProps) {
  // React-Router
  // const history = useHistory();
  // const location = useLocation();
  // const { slug } = useParams();
  // Next-Router
  // const router = useRouter()

  // Check is running on Node.js server
  // const isServer = process.version ? true : false;
  // console.log('isServer=', isServer);

  // BEGIN: ==================== SSR + CSR ===================
  // alway run on both side server and client

  const [count, setCount] = React.useState(0);
  const [photos, setPhotos] = React.useState<any>([]);
  const [sticky, setSticky] = React.useState<any>(false);
  const ref = React.useRef(0);

  const ctx = React.useContext(appContext);

  const fetchData = async () => {
    ctx.setContextState({ isLoading: true });
    setSticky(true);
    const data = await sampleApi.getData({ _limit: 5 });
    setPhotos(data);
    ctx.setContextState({ isLoading: false });
    setSticky(false);
  };

  const router = useRouter();
  const shadowLink = () => {
    router.push('/sample/ssr', undefined, { shallow: true });
  };

  const jsxPhotos = photos.map((photo: any, index: number) => {
    return (
      <React.Fragment key={index}>
        <img src={photo.thumbnailUrl} alt={photo.title} />

        <br />
      </React.Fragment>
    );
  });

  // END  : ==================== SSR + CSR ===================
  // BEGIN: ======================= CSR ======================

  React.useEffect(() => {
    // = componentDidMount run fist time only (only on browser)
    ref.current += 1;

    console.log('props', props);

    fetchData();

    return () => {
      // = componentDidUnmount run when component dispose (only on browser)

      console.log('component dispose');
    };
  }, []);

  React.useEffect(() => {
    // = componentDidUpdate run after changed variable 'count' (only on browser)
    console.log('componentDidUpdate');

    if (count % 2 == 0) {
      setPhotos([]);
      fetchData();
      ref.current += 1;
    }
  }, [count]);

  // END  : ==================== CSR ===================

  // Render alway run on both side server and client
  return (
    <Layout>
      {props.children}
      useState (count) : {count}
      useRef (ref) : {ref.current}
      <br />
      <Button
        variant='contained'
        color='primary'
        onClick={() => {
          setCount(count + 1);
        }}
      >
        useState +
      </Button>
      <Button
        variant='contained'
        color='primary'
        onClick={() => {
          ref.current += 1;
        }}
      >
        useRef +
      </Button>
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
      <Button variant='contained' color='success' onClick={shadowLink}>
        sample-ssr-shadow
      </Button>
      <Link href='/sample/saga'>
        <Button variant='contained' color='success'>
          sample-saga
        </Button>
      </Link>
      <Grid container justifyContent='center' spacing={2}>
        <Grid item xs={6} md={12}></Grid>
        <Grid item xs={6} md={12}>
          {photos.length > 0 ? jsxPhotos : <StickyLoading visible={sticky} />}
        </Grid>
      </Grid>
    </Layout>
  );
}
