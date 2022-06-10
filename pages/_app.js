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
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "birthPlace": "Málaga, Spain",
          "nationality": "Spanish",
          "description": "Official website of the Spanish violinist Jesús Reina.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Madrid",
            "addressRegion": "Madrid",
            "postalCode": "28010",
            "streetAddress": "Calle Santa Engracia, 17, 3° Ofc. 11"
          },
          "logo": "https://res.cloudinary.com/dt3k2apqd/image/upload/v1654604664/Jes%C3%BAs%20Reina/SVGs/logo-path_usfoco.svg", 
          "email": "info@jesusreina.es",
          "image": "https://res.cloudinary.com/dt3k2apqd/image/upload/v1653712685/Galamian/professors/jesus-photo-01_loefpu.webp",
          "jobTitle": "Principal Violin Professor",
          "name": "Jesús Reina",
          "telephone": "+34 91 0182978",
          "url": "https://www.jesusreina.es"
        }
    `,
        }}
      ></script>
      {asPath.includes('-') ? null : <Navbar />}
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
