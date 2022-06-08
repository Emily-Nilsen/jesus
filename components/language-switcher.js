import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Link from 'next/link';

const LanguageSwitcher = () => {
  const { locale, locales, defaultLocale, asPath } = useRouter();

  return (
    //
    <div className="relative flex items-center tracking-wider">
      <div className="container flex items-center justify-between w-1/5 pl-8">
        <motion.button
          whileHover={{ color: '#f97316' }}
          transition={{ type: 'spring', stiffness: 150 }}
          className="px-2"
        >
          <Link activeClassName={locale === 'es'} href={asPath} locale="es">
            ES
          </Link>
        </motion.button>

        <p className="text-amber-600">|</p>
        <motion.button
          whileHover={{ color: '#f97316' }}
          transition={{ type: 'spring', stiffness: 150 }}
          className="px-2"
        >
          <Link activeClassName={locale === 'en'} href={asPath} locale="en">
            EN
          </Link>
        </motion.button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
