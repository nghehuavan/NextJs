import * as React from 'react';
import axios from 'axios';
import ReCaptcha from '../../layouts/components/google-recaptcha';

export interface reCAPTHCHAProps {
  children?: React.ReactNode;
}

export default function reCAPTHCHA(props: reCAPTHCHAProps) {
  const onResolved = (token: any) => {
    console.log(token);
  };

  return (
    <>
      <ReCaptcha onResolved={onResolved}></ReCaptcha>
    </>
  );
}
