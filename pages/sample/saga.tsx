import { Button, Grid } from '@mui/material';
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { appContext } from '../../contexts/context-provider';
import StickyLoading from '../../layouts/components/sticky-loading';
import Layout from '../../layouts/layout';
import { iLoadingReducerStore } from '../../redux/reducer/loading-reducer';
import { iSampleReducerStore } from '../../redux/reducer/sample-reducer';
import SampleSagaAction from '../../redux/saga/sample/sample-saga-action';

export interface iSampleSagaProps {
  children: React.ReactNode;
}

export default function SampleSaga(props: iSampleSagaProps) {
  const ctx = React.useContext(appContext);

  const photos = useSelector(
    (state: iSampleReducerStore) => state.sampleStore.photos
  );

  const isLoading = useSelector(
    (state: iLoadingReducerStore) => state.LoadingStore.isLoading
  );

  const dispatch = useDispatch();
  const jsxPhotos = photos.map((photo: any, index: number) => {
    return (
      <React.Fragment key={index}>
        <img src={photo.thumbnailUrl} alt={photo.title} />
        <br />
      </React.Fragment>
    );
  });

  React.useEffect(() => {
    // = componentDidMount

    dispatch({
      type: SampleSagaAction.SAGA_FETCH_LIST,
      payload: {},
    });

    return () => {
      // = componentDidUnmount
    };
  }, []);

  React.useEffect(() => {
    // Watch redux for set to context isLoading
    ctx.setContextState({ isLoading: isLoading });
  }, [isLoading]);

  const ReDispatch = () => {
    dispatch({
      type: SampleSagaAction.SAGA_FETCH_LIST,
      payload: { reload: true },
    });
  };

  // END  : ======================= CSR ======================

  // Render alway run on both side server and client
  return (
    <Layout>
      <Button variant='contained' color='success' onClick={ReDispatch}>
        Re-Dispatch
      </Button>
      <Grid container justifyContent='center' spacing={2}>
        <Grid item xs={6} md={12}></Grid>
        <Grid item xs={6} md={12}>
          {photos.length > 0 ? (
            jsxPhotos
          ) : (
            <StickyLoading visible={isLoading} />
          )}
        </Grid>
      </Grid>
    </Layout>
  );
}
