import * as React from 'react';
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from 'react-google-recaptcha-v3';
import Head from 'next/head';
import { useCallback, useEffect } from 'react';

export interface reCAPTCHAProps {
  children?: React.ReactNode;
}


export default function reCAPTCHA(props: reCAPTCHAProps) {
  const { executeRecaptcha } = useGoogleReCaptcha();

  // Create an event handler so you can call the verification on button click event or form submit
  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available');
    } else {
      const token = await executeRecaptcha();
          // Do whatever you want with the token
    }
  }, []);

  // You can use useEffect to trigger the verification as soon as the component being loaded
  useEffect(() => {
    handleReCaptchaVerify();
  }, [handleReCaptchaVerify]);
  // Render alway run on both side server and client
  return (
    <>
      <Head>
        <title>reCAPTCHA demo: Simple page</title>
      </Head>
      {/* You can replace captchaDemo ref with whatever works for your component */}
      <div style={{ display: 'none' }}>
        <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA}>
          <code>
            1. Add <strong>your site key</strong> in the ReCaptcha component.{' '}
            <br />
            2. Check <strong>console</strong> to see the token.
          </code>
        </GoogleReCaptchaProvider>
      </div>
    </>
  );
}
