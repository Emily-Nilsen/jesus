import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Link from 'next/link';

const LanguageSwitcher = () => {
  const { locale, locales, defaultLocale, asPath } = useRouter();

  return (
    //
    <div className="relative flex items-center tracking-wider ">
      <div className="container flex items-center justify-between w-1/5 pl-0">
        <button className="px-2 focus:outline-none">
          <Link activeClassName={locale === 'es'} href={asPath} locale="es">
            <p className="transition duration-300 ease-in-out text-stone-600 hover:text-amber-600 focus:outline-none">
              ES
            </p>
          </Link>
        </button>

        <p className="text-amber-600">|</p>
        <button className="px-2 focus:outline-none">
          <Link activeClassName={locale === 'en'} href={asPath} locale="en">
            <p className="transition duration-300 ease-in-out text-stone-600 hover:text-amber-600 focus:outline-none">
              EN
            </p>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
