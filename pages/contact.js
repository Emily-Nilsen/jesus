import Layout from '../components/layout';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import { motion } from 'framer-motion';
import { MailIcon, PhoneIcon } from '@heroicons/react/outline';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.3,
    },
  },
};
const item = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'fade', duration: 0.5 },
  },
};

const Contact = () => {
  const { t } = useTranslation();
  return (
    <Layout
      title={t('common:contact_meta_title')}
      description={t('common:contact_meta_description')}
      keywords={t('common:contact_meta_keywords')}
    >
      <div className="pb-6 -mt-[12vh] bg-white lg:pb-16">
        <div
          aria-hidden="true"
          className="relative object-cover object-center w-full h-[60vh]"
        >
          <Image
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1654692925/Jes%C3%BAs%20Reina/general/contact-page_ciiqcd.webp"
            alt="Jesús Reina"
            className=""
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            unoptimized={true}
          />
          <div className="absolute inset-0 mt-48 bg-gradient-to-t from-white" />
        </div>

        <div className="relative px-4 pb-6 sm:px-6 lg:px-8">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="mx-auto text-lg max-w-prose"
          >
            <motion.div variants={item}>
              <h2 className="text-4xl font-medium tracking-tight text-center sm:text-5xl text-brown-500">
                <span className="block">{t('contact:title')}</span>
              </h2>
            </motion.div>

            <motion.div variants={item}>
              <p className="max-w-xl mx-auto mt-5 text-sm leading-normal prose text-center md:text-lg lg:w-full sm:text-base text-stone-500 sm:leading-relaxed">
                {t('contact:text')}
              </p>
            </motion.div>
            {/* Contact Info */}
            <motion.dl
              variants={item}
              className="grid max-w-2xl grid-cols-1 mx-auto mt-16 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-y-12 lg:max-w-none lg:gap-x-8"
            >
              <div className="pt-4 border-t border-stone-200">
                <dl className="mt-6 text-sm sm:text-base text-stone-500">
                  <div className="my-3">
                    <dt className="pb-2 font-medium tracking-tight text-stone-700">
                      Email
                    </dt>
                    <dd className="flex group">
                      <MailIcon
                        className="flex-shrink-0 w-6 h-6 transition duration-300 ease-in-out text-stone-400 group-hover:text-amber-500"
                        aria-hidden="true"
                      />
                      <span className="ml-3">
                        <a
                          className="transition duration-300 ease-in-out hover:text-amber-600"
                          target="_blank"
                          rel="noreferrer"
                          href="mailto:info@jesusreina.es"
                        >
                          info@jesusreina.es
                        </a>
                      </span>
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="pt-4 border-t border-stone-200">
                <dl className="mt-6 text-sm sm:text-base text-stone-500">
                  <div div className="my-3">
                    <dt className="font-medium text-stone-700">
                      {t('contact:representive')}
                    </dt>
                    <dd className="mt-2 font-medium text-amber-600">
                      Beatrice Altobelli
                    </dd>
                    <dd className="my-2 font-medium text-stone-500">
                      Conciertos Vitoria
                    </dd>
                    <dd>
                      <p>Calle Santa Engracia, 17, 3° Ofc. 11</p>
                      <p>28010 Madrid, España</p>
                    </dd>
                  </div>
                  <div className="mt-6">
                    <dt className="sr-only">Phone number</dt>
                    <dd className="flex group">
                      <PhoneIcon
                        className="flex-shrink-0 w-6 h-6 transition duration-300 ease-in-out text-stone-400 group-hover:text-amber-500"
                        aria-hidden="true"
                      />
                      <span className="ml-3">
                        <a
                          className="transition duration-300 ease-in-out hover:text-amber-600"
                          rel="noreferrer"
                          href="tel:+34910182978"
                        >
                          +34 91 0182978
                        </a>
                      </span>
                    </dd>
                  </div>
                  <div className="mt-3">
                    <dt className="sr-only">Email</dt>
                    <dd className="flex group">
                      <MailIcon
                        className="flex-shrink-0 w-6 h-6 transition duration-300 ease-in-out text-stone-400 group-hover:text-amber-500"
                        aria-hidden="true"
                      />
                      <span className="ml-3">
                        <a
                          className="transition duration-300 ease-in-out hover:text-amber-600"
                          target="_blank"
                          rel="noreferrer"
                          href="mailto:info@conciertosvitoria.com"
                        >
                          info@conciertosvitoria.com
                        </a>
                      </span>
                    </dd>
                  </div>
                </dl>
              </div>
            </motion.dl>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
