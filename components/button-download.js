import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { DownloadIcon } from '@heroicons/react/outline';

const ButtonDownload = () => {
  const { t } = useTranslation();

  return (
    <div>
      <a
        href={t('common:presskit_download')}
        download
        className={`relative inline-flex items-center text-base lg:text-lg text-amber-600 group font-medium`}
      >
        <div className="transition duration-300 group group-hover:text-amber-500 easeIn">
          {t('common:presskit_title')}
        </div>
        <div className="absolute flex justify-end mr-2 transition duration-300 ease-in -right-10 group group-hover:translate-y-2 group-hover:opacity-50 group-hover:text-amber-500">
          <DownloadIcon className="w-6 h-6" aria-hidden="true" />
        </div>
      </a>
    </div>
  );
};

export default ButtonDownload;
