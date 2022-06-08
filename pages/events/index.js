import Layout from '../../components/layout';
import ButtonRight from '../../components/button-right';
import events from '../../assets/events';
import slugify from 'slugify';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import { motion } from 'framer-motion';

const containerBig = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.3,
    },
  },
};

const itemTop = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: { duration: 0.5, type: 'fade', ease: 'easeIn' },
  },
};
const itemBottom = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: { duration: 0.5, type: 'fade', ease: 'easeIn' },
  },
};

const EventsPage = (props) => {
  const slugify = require('slugify');
  const { t } = useTranslation();
  const { locale, locales, asPath } = useRouter();

  return (
    <Layout
      title={t('common:events_meta_title')}
      description={t('common:events_meta_description')}
      keywords={t('common:events_meta_keywords')}
    >
      <div className="pb-16 -mt-24 bg-white lg:pb-24">
        <div aria-hidden="true" className="relative">
          <Image
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1654604660/Jes%C3%BAs%20Reina/general/events_rhhqq7.jpg"
            alt="Jesús Reina"
            className="relative object-cover object-center w-full h-96"
            width={1920}
            height={724}
            layout="responsive"
            objectFit="cover"
            objectPosition="top"
            unoptimized={true}
          />
          <div className="absolute inset-0 mt-12 bg-gradient-to-t from-white" />
        </div>

        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="relative z-0 pb-10 sm:pb-20 lg:pb-32">
            <motion.div
              variants={containerBig}
              initial="hidden"
              animate="show"
              className="max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8"
            >
              <motion.div variants={itemTop}>
                <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl text-brown-500">
                  {t('common:post_title')}
                </h2>
              </motion.div>

              <motion.div variants={itemBottom}>
                <p className="w-5/6 mx-auto mt-5 text-sm leading-normal prose md:text-lg sm:text-base text-stone-500 max-w-prose sm:leading-relaxed">
                  {t('common:events_text')}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
        {/* List of events */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{
            duration: 1,
            delay: 0.6,
            type: 'spring',
          }}
          className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:pb-20 md:pb-16"
        >
          <div className="max-w-3xl mx-auto">
            <div>
              <div className="flow-root mt-6">
                <ul role="list" className="-my-5 divide-y divide-gray-200">
                  {events
                    .filter((p) => p.locale === locale)
                    .map((event, i) => (
                      <li key={event.title} className="py-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-medium sm:text-sm text-amber-600">
                              <p>{event.date || t('common:tba')}</p>
                            </p>
                            <p className="text-sm font-medium truncate text-stone-600">
                              {event.title}
                            </p>
                            <p className="text-sm truncate text-stone-500">
                              {event.description}
                            </p>
                          </div>
                          <div>
                            <Link
                              href={`/events/${slugify(event.title)}`}
                              passHref
                            >
                              <a className="inline-flex items-center px-2.5 py-0.5 text-sm leading-5 font-medium rounded-full text-brown-500  hover:text-amber-600 transition duration-200 ease-in-out hover:border-amber-400">
                                {t('common:read_more')}
                              </a>
                            </Link>
                          </div>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default EventsPage;
