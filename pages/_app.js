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
      {asPath.includes('-') ? null : <Navbar />}
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
