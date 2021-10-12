import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { iSampleReducerStore } from '../../redux/reducer/sample-reducer';
import SampleSagaAction from '../../redux/saga/sample/sample-saga-action';

export interface iSampleSagaProps {
  children: React.ReactNode;
}

export default function SampleSaga(props: iSampleSagaProps) {
  const photos = useSelector(
    (state: iSampleReducerStore) => state.sampleStore.photos
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

  // END  : ======================= CSR ======================

  // Render alway run on both side server and client
  return (
    <>
      <h2>{photos.length > 0 ? 'photos' : 'loading ....'}</h2>
      {photos.length > 0 ? jsxPhotos : null}
    </>
  );
}
