import * as React from 'react';
import axios from 'axios';
import ReCaptcha from '../../layouts/components/google-recaptcha';
import { Button } from '@mui/material';

export interface reCAPTHCHAProps {
  children?: React.ReactNode;
}

export default function reCAPTHCHA(props: reCAPTHCHAProps) {
  const reCaptchaRef = React.useRef({});

  const onResolved = (token: any) => {
    console.log(token);
  };

  const ReLoadToken = () => {
    console.log(reCaptchaRef);
    reCaptchaRef.current.execute();
  };

  return (
    <>
      <Button variant='contained' color='success' onClick={ReLoadToken}>
        Re Load Token reCapthcha
      </Button>
      <ReCaptcha
        ref={reCaptchaRef}
        onResolved={onResolved}
        executeOnLoad={true}
      ></ReCaptcha>
    </>
  );
}
