import '../styles/globals.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { useRouter } from 'next/router';
import Script from 'next/script';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function MyApp({ Component, pageProps }) {
  const { locale, locales, defaultLocale, asPath } = useRouter();

  return (
    <div>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
      </Script>
      {asPath.includes('-') ? null : <Navbar />}

      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
