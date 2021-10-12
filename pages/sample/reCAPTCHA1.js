import React, { Component } from 'react';
import { ReCaptcha } from 'react-recaptcha-google';
import Head from 'next/head';

class ExampleComponent extends Component {
  constructor(props, context) {
    super(props, context);
    this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
  }

  componentDidMount() {
    if (this.captchaDemo) {
      console.log('started, just a second...');
      this.captchaDemo.reset();
      this.captchaDemo.execute();
    }
  }

  onLoadRecaptcha() {
    if (this.captchaDemo) {
      this.captchaDemo.reset();
      this.captchaDemo.execute();
    }
  }

  verifyCallback(recaptchaToken) {
    // Here you will get the final recaptchaToken!!!
    console.log(recaptchaToken, '<= your recaptcha token');
  }

  render() {
    return (
      <div>
        <Head>
          <title>reCAPTCHA demo: Simple page</title>
          <script
            src='https://www.google.com/recaptcha/api.js'
            async
            defer
          ></script>
        </Head>
        {/* You can replace captchaDemo ref with whatever works for your component */}
        <div style={{display:'none'}}>
        <ReCaptcha
          ref={(el) => {
            this.captchaDemo = el;
          }}
          size='invisible'
          render='explicit'
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA}
          onloadCallback={this.onLoadRecaptcha}
          verifyCallback={this.verifyCallback}
        />
        </div>

        <code>
          1. Add <strong>your site key</strong> in the ReCaptcha component.{' '}
          <br />
          2. Check <strong>console</strong> to see the token.
        </code>
      </div>
    );
  }
}

export default ExampleComponent;
