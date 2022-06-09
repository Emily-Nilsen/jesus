// import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowSmRightIcon } from '@heroicons/react/outline';

const ButtonRight = (props) => {
  const { t } = useTranslation();

  return (
    <div>
      <Link href={props.href}>
        <a
          className={`relative inline-flex items-center text-${props.textSizeSmall} lg:text-${props.textSizeLarge} font-medium text-amber-600 group`}
        >
          <div className="transition duration-300 group easeIn">
            {props.text}
          </div>
          <div className="flex justify-end mr-2 transition duration-300 ease-in group group-hover:translate-x-3 group-hover:opacity-50 group-hover:text-amber-600">
            <ArrowSmRightIcon
              className="w-6 h-6 ml-2 text-amber-500 group-hover:text-amber-600"
              aria-hidden="true"
            />
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ButtonRight;
