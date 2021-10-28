import * as React from 'react';
import { useEffect } from 'react';

declare var window: any;

export interface ReCaptchaProps {
    children?: React.ReactNode;
    onResolved: (token: any) => void;
    executeOnLoad?: boolean;
}

const ReCaptcha = (props: ReCaptchaProps, ref: any) => {
    const injectScript = () => {
        if (window && document) {
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
            script.src = `https://www.google.com/recaptcha/api.js?render=explicit`;
            script.type = 'text/javascript';
            document.head.appendChild(script);
        }
    };

    const execute = () => {
        if (window && window.grecaptcha) {
            window.grecaptcha.reset();
            window.grecaptcha.execute();
        }
    };

    useEffect(() => {
        injectScript();
        if (ref) ref.current.execute = execute;

        var waitForReady = setInterval(() => {
            if (window && window.grecaptcha) {
                clearInterval(waitForReady);

                var container = document.getElementById(
                    '___reCapthchaContainer'
                );
                if (container && container.childNodes.length === 0) {
                    window.grecaptcha.render('___reCapthchaContainer', {
                        sitekey: process.env.NEXT_PUBLIC_RECAPTCHA,
                        callback: props.onResolved,
                    });
                }

                if (props.executeOnLoad === true) {
                    window.grecaptcha.ready(function () {
                        window.grecaptcha.execute();
                    });
                }
            }
        }, 200);
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
};

export default React.forwardRef(ReCaptcha);
