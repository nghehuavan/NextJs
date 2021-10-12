import * as React from 'react';
import { ReCaptcha } from 'react-recaptcha-google';
import Head from 'next/head';

export interface reCAPTCHAProps {
  children?: React.ReactNode;
}

interface iCaptcha {
  reset: () => {};
  execute: () => {};
}

export default function reCAPTCHA(props: reCAPTCHAProps) {
  let captchaRef = React.useRef<iCaptcha>(null);

  React.useEffect(() => {
    // = componentDidMount run fist time only (only on browser)

    console.log('props', props);

    return () => {
      // = componentDidUnmount run when component dispose (only on browser)

      console.log('component dispose');
    };
  }, []);

  const onLoadRecaptcha = () => {
    if (captchaRef.current) {
      captchaRef.current.reset();
      captchaRef.current.execute();
    }
  };

  const verifyCallback = (recaptchaToken: any) => {
    // Here you will get the final recaptchaToken!!!
    console.log(recaptchaToken, '<= your recaptcha token');
  };

  // Render alway run on both side server and client
  return (
    <>
      <Head>
        <title>reCAPTCHA demo: Simple page</title>
        <script
          src='https://www.google.com/recaptcha/api.js'
          async
          defer
        ></script>
      </Head>
      {/* You can replace captchaDemo ref with whatever works for your component */}
      <div style={{ display: 'none' }}>
        <ReCaptcha
          ref={(el: any) => {
            captchaRef = el;
          }}
          size='invisible'
          render='explicit'
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA}
          onloadCallback={onLoadRecaptcha}
          verifyCallback={verifyCallback}
        />
      </div>

      <code>
        1. Add <strong>your site key</strong> in the ReCaptcha component. <br />
        2. Check <strong>console</strong> to see the token.
      </code>
    </>
  );
}
