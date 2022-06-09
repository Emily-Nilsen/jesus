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

  const personStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Jesús Reina',
    jobTitle: 'Principal Violin Professor',
    email: 'info@jesusreina.es',
    telephone: '+34 91 0182978',
    url: 'https://www.jesusreina.es',
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1653712685/Galamian/professors/jesus-photo-01_loefpu.webp',
    logo: 'https://res.cloudinary.com/dt3k2apqd/image/upload/v1654604664/Jes%C3%BAs%20Reina/SVGs/logo-path_usfoco.svg',
    birthPlace: 'Málaga, Spain',
    nationality: 'Spanish',
    description: 'Official website of the Spanish violinist Jesús Reina.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/40/JSON-LD.svg',
  };

  return (
    <div>
      <script type="application/ld+json">
        {JSON.stringify(personStructuredData)}
      </script>
      {asPath.includes('-') ? null : <Navbar />}
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
