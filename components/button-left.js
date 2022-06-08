import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowSmLeftIcon } from '@heroicons/react/outline';

const ButtonLeft = (props) => {
  const { t } = useTranslation();

  return (
    <div className="relative z-10">
      <Link href={props.href} passHref>
        <a className="relative inline-flex items-center px-4 mt-4 text-base font-medium sm:text-lg text-brown-500 group">
          <div className="absolute flex justify-end mr-2 transition duration-300 ease-in -left-5 group group-hover:-translate-x-3 group-hover:opacity-50 group-hover:text-amber-600">
            <ArrowSmLeftIcon
              className="w-6 h-6 mr-4 text-brown-500 group-hover:text-amber-600"
              aria-hidden="true"
            />
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
