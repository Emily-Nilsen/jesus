// import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ButtonLink = (props) => {
  const { t } = useTranslation();

  return (
    <div>
      <Link href={props.href} target="_blank" rel="noopener noreferrer">
        <a
          className={`relative inline-flex items-center text-${props.textSizeSmall} lg:text-${props.textSizeLarge} font-medium text-amber-600 group underline`}
        >
          <div className="transition duration-300 group group-hover:text-brown-500 easeIn">
            {t('common:button_link')}
          </div>
          {/* <div className="absolute flex justify-end mr-2 transition duration-500 ease-in -right-10 group group-hover:translate-x-36 group-hover:opacity-0 group-hover:text-amber-500">
            <FontAwesomeIcon icon={faAnglesRight} />
          </div> */}
        </a>
      </Link>
    </div>
  );
};

export default ButtonLink;
