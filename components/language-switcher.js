import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Link from 'next/link';

const LanguageSwitcher = () => {
  const { locale, locales, defaultLocale, asPath } = useRouter();

  return (
    //
    <div className="relative flex items-center tracking-wider ">
      <div className="container flex items-center justify-between w-1/5 pl-0">
        <Link
          href={asPath}
          locale="es"
          className="px-2 transition duration-300 ease-in-out text-stone-600 hover:text-amber-600 focus:outline-none"
        >
          ES
        </Link>

        <p className="text-amber-600">|</p>
        <Link
          href={asPath}
          locale="en"
          className="px-2 transition duration-300 ease-in-out text-stone-600 hover:text-amber-600 focus:outline-none"
        >
          EN
        </Link>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
