// import Head from 'next/head';
import Layout from '../components/layout';
import HeroV1 from '../components/hero-v1';
import HeroV2 from '../components/hero-v2';
import Features from '../components/features';
import TestimonialList from '../components/testimonial-list';
import ButtonRight from '../components/button-right';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { scale: 0.2, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { type: 'spring', stiffness: 150 },
  },
};

export default function Home(props) {
  const { t } = useTranslation();

  return (
    <Layout
      title={t('common:home_meta_title')}
      description={t('common:home_meta_description')}
      keywords={t('common:home_meta_keywords')}
    >
      {/* -mt-24 */}
      <main className="-mt-24">
        {/* Hero card */}
        <div className="hidden md:block">
          <HeroV1 />
        </div>

        <div className="md:hidden">
          <HeroV2 />
        </div>

        <div className="md:pt-10">
          <TestimonialList />
        </div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{
            duration: 1,
            delay: 0.2,
            type: 'spring',
            bounce: 0.1,
          }}
          className="flex items-center justify-center py-10 sm:mb-10"
        >
          <ButtonRight
            textSizeSmall="lg"
            textSizeLarge="xl"
            text={t('common:about_title')}
            href="/about"
            passHref
          />
        </motion.div>

        {/* Features */}
        <Features />
      </main>
    </Layout>
  );
}
