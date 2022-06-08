import Layout from '../components/layout';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import ButtonLeft from '../components/button-left';
import { motion } from 'framer-motion';

const container = {
  hidden: {
    opacity: 0.5,
    transition: {
      when: 'afterChildren',
    },
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      when: 'beforeChildren',
    },
  },
};

const left = {
  hidden: { opacity: 1, x: 0 },
  show: { opacity: 0, x: -80, transition: { duration: 1.5, type: 'ease' } },
};

const right = {
  hidden: { x: 0 },
  show: { x: 20, transition: { duration: 1, type: 'spring' } },
};

const PageNotFound = () => {
  const { t } = useTranslation();
  return (
    <Layout
      title={t('common:notfound_meta_title')}
      description={t('common:notfound_meta_description')}
      keywords={t('common:notfound_meta_keywords')}
    >
      <main className="h-screen bg-bottom bg-cover sm:bg-right-top bg-about">
        <div className="px-4 py-16 mx-auto text-center max-w-7xl sm:px-6 sm:py-24 lg:px-8 lg:py-48">
          <p className="inline-flex items-center pb-4 text-xl font-light tracking-wide uppercase text-stone-500">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.1, 1] }}
              exit={{ opacity: 1 }}
              transition={{
                repeat: 7,
                repeatType: 'mirror',
                duration: 1,
              }}
              className="pr-2 text-4xl text-red-400"
            >
              {/* <FontAwesomeIcon icon={faCircleExclamation} /> */}
            </motion.div>
            404
          </p>

          <h1 className="mt-4 text-5xl tracking-tight text-brown-500 sm:text-7xl">
            {t('common:notfound_title_1')}
            <br />
            {t('common:notfound_title_2')}
          </h1>
          <p className="mt-6 text-lg font-medium text-stone-500">
            {t('common:notfound_text')}
          </p>
          <ButtonLeft href="/" />
        </div>
      </main>
    </Layout>
  );
};

export default PageNotFound;
