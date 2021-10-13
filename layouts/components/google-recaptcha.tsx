import * as React from 'react';
import { useEffect } from 'react';

declare var window: any;

export interface ReCaptchaProps {
  children?: React.ReactNode;
  onResolved: (token: any) => void;
}

export default function ReCaptcha(props: ReCaptchaProps) {
  var isRendered = React.useRef(false);

  const injectScript = () => {
    if (window && document) {
      window.___reCapthchaScriptLoaded = () => {
        window.grecaptcha.render('___reCapthchaContainer', {
          sitekey: process.env.NEXT_PUBLIC_RECAPTCHA,
          callback: props.onResolved,
        });

        isRendered.current = true;
      };

      const isScriptExist = document.getElementById('recaptcha');
      if (isScriptExist) return;

      const script = document.createElement('script');
      script.async = true;
      script.defer = true;
      script.id = 'recaptcha';
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

  useEffect(() => {
    if (window && window.grecaptcha) window.grecaptcha.execute();
  }, [isRendered]);

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
