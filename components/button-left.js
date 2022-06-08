import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ButtonLeft = (props) => {
  const { t } = useTranslation();

  return (
    <div className="relative z-10">
      <Link href={props.href} passHref>
        <a className="relative inline-flex items-center px-4 mt-8 text-base font-medium sm:text-lg text-brown-500 group">
          <div className="absolute flex justify-end mr-2 transition duration-500 ease-in -left-5 group group-hover:-translate-x-36 group-hover:opacity-0 group-hover:text-amber-600">
            {/* <FontAwesomeIcon icon={faAnglesLeft} /> */}
          </div>
          <div className="transition duration-300 group group-hover:text-amber-600 easeIn">
            {t('common:notfound_back')}
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ButtonLeft;
