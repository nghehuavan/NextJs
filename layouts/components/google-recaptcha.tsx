import * as React from 'react';
import { useEffect } from 'react';

declare var window: any;

export interface ReCaptchaProps {
  children?: React.ReactNode;
  onResolved: (token: any) => void;
}

export default function ReCaptcha(props: ReCaptchaProps) {
  const injectScript = () => {
    if (window && document) {
      window.___reCapthchaScriptLoaded = () => {
        window.grecaptcha.render('___reCapthchaContainer', {
          sitekey: process.env.NEXT_PUBLIC_RECAPTCHA,
          callback: props.onResolved,
        });

        if (window && window.grecaptcha) {
          window.grecaptcha.reset();
          window.grecaptcha.execute();
        }
      };

      const scriptId = '___reCapthchaScript';
      const isScriptExist = document.getElementById(scriptId);
      if (isScriptExist) return;

      const script = document.createElement('script');
      script.async = true;
      script.defer = true;
      script.id = scriptId;
      script.onerror = function (error) {
        throw error;
      };
      script.src = `https://www.google.com/recaptcha/api.js?onload=___reCapthchaScriptLoaded&render=explicit`;
      script.type = 'text/javascript';
      document.body.appendChild(script);
    }
  };

  useEffect(() => {
    injectScript();
  }, []);

  // Render alway run on both side server and client
  return (
    <>
      <div
        id='___reCapthchaContainer'
        style={{ display: 'none' }}
        data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA}
        data-size='invisible'
      ></div>
    </>
  );
}
