import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="es">
        <Head>
          <link
            rel="icon"
            href="https://res.cloudinary.com/dt3k2apqd/image/upload/v1654604664/Jes%C3%BAs%20Reina/SVGs/logo-path_usfoco.svg"
          />
          <link
            rel="stylesheet"
            href="https://use.typekit.net/omr0hqa.css"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
