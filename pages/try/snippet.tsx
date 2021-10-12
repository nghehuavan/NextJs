import * as React from 'react';
import axios from 'axios';

export interface MyFCAppProps {
  children: React.ReactNode;
}

const MyFC: React.FC<MyFCAppProps> = (props: MyFCAppProps) => {
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

  const [count, setCount] = React.useState<number>(0);
  const [photos, setPhotos] = React.useState<any>([]);
  const ref = React.useRef<number>(0);

  const fetchData = async () => {
    const resp = await axios.get('http://lwqg2.mocklab.io/photos');
    setPhotos(resp.data);
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
    ref.current += 1;

    if (count % 2 == 0) {
      setPhotos([]);
      fetchData();
    }
  }, [count]);
  
  // END  : ======================= CSR ======================
  
  // Render alway run on both side server and client
  return (
    <>
      {/* {props.children} */}
      useState (count) : {count}
      <br/>
      useRef (ref) : {ref.current}
      <br/>
      <button onClick={() => {setCount(count + 1);}}>
        useState +
      </button>
      <br/>
      <h2>{photos.length > 0 ? 'photos' : 'loading ....'}</h2>
      {photos.length > 0 ? jsxPhotos : null}
    </>
  );

};

export default MyFC;
