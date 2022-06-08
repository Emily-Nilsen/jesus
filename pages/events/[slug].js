import { useRouter } from 'next/router';
import Image from 'next/image';
import Layout from '../../components/layout';
import ButtonLeft from '../../components/button-left';
import ButtonLink from '../../components/button-link';
import events from '../../assets/events';
import useTranslation from 'next-translate/useTranslation';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};
const item = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'fade', duration: 1 },
  },
};

export const getStaticProps = async ({ params }) => {
  const slugify = require('slugify');
  const eventslist = events.filter(
    (event) => slugify(event.title) === params.slug
  );
  return {
    props: {
      event: eventslist[0],
    },
  };
};

export const getStaticPaths = async () => {
  const slugify = require('slugify');
  const paths = events.map((event) => {
    return {
      params: { slug: slugify(event.title) },
      locale: event.locale,
    };
  });

  return { paths, fallback: false };
};

events.map((event) => ({}));

const Event = ({ event }) => {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <Layout
      title={t('common:event_meta_title')}
      description={t('common:event_meta_description')}
      keywords={t('common:event_meta_keywords')}
    >
      <div className="relative -mt-24 bg-white md:mt-0">
        <div className="lg:absolute lg:inset-0">
          <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
                delay: 0.1,
                type: 'fade',
                ease: 'easeIn',
              }}
              className="relative object-cover w-full h-96 lg:absolute lg:h-full"
            >
              <Image
                src={event.image}
                alt={event.title}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                unoptimized={true}
              />
            </motion.div>
          </div>
        </div>
        <div className="relative px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div className="lg:col-start-2 lg:pl-8 md:py-6 lg:h-[61vh]">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="mx-auto text-base max-w-prose lg:ml-auto lg:mr-0 lg:max-w-lg"
            >
              <motion.div variants={item}>
                <h3 className="text-sm font-medium sm:text-base text-amber-600">
                  {event.date || t('common:tba_long')}
                </h3>
              </motion.div>

              <motion.div variants={item}>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl text-brown-500">
                  {event.title}
                </h2>
              </motion.div>

              <motion.div variants={item}>
                <p className="my-8 text-sm sm:text-base text-stone-500">
                  {event.description}
                </p>
              </motion.div>

              <motion.div variants={item}>
                <div className="prose prose-stone max-w-none">
                  <h3 className="text-base text-amber-600 sm:text-lg">
                    {t('common:program')}
                  </h3>
                  <div className="text-sm text-stone-600 sm:text-base">
                    {event.program || t('common:details')}
                  </div>
                </div>
              </motion.div>

              <motion.div variants={item}>
                {event.link ? (
                  <div className="pl-0 my-6">
                    <ButtonLink href={event.link} passHref />
                  </div>
                ) : (
                  ''
                )}
              </motion.div>

              <motion.div variants={item}>
                <div className="pl-4 mt-4">
                  <ButtonLeft href="/events" passHref />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Event;
