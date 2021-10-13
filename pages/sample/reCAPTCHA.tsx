import * as React from 'react';
import axios from 'axios';
import ReCaptcha from '../../layouts/components/google-recaptcha';
import { Button } from '@mui/material';

export interface reCAPTHCHAProps {
  children?: React.ReactNode;
}

export default function reCAPTHCHA(props: reCAPTHCHAProps) {

  const onResolved = (token: any) => {
    console.log(token);
  };

  const ReLoadToken = () => {
    // console.log(childRef);
    // childRef.current.execute();
  };

  return (
    <>
      <Button variant='contained' color='success' onClick={ReLoadToken}>
        Re Load Token reCapthcha
      </Button>
      <ReCaptcha onResolved={onResolved} executeOnLoad={true}></ReCaptcha>
    </>
  );
}
