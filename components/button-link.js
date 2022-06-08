import { LinkIcon } from '@heroicons/react/outline';
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
          <div className="group">{t('common:button_link')}</div>
          <div className="flex group">
            <LinkIcon
              className="w-5 h-5 ml-4 transition duration-300 ease-in-out text-amber-500 group-hover:text-amber-700"
              aria-hidden="true"
            />
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ButtonLink;
