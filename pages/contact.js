import Layout from '../components/layout';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import { motion } from 'framer-motion';

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

const mailto = {
  rest: {
    color: '#d97706',

    transition: {
      duration: 2,
      type: 'tween',
      ease: 'easeIn',
    },
  },
  hover: {
    color: '#f59e0b',
    transition: {
      duration: 0.4,
      type: 'tween',
      ease: 'easeOut',
    },
  },
};

const paperplane = {
  rest: { opacity: 0, ease: 'easeOut', duration: 0.2, type: 'tween' },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.4,
      type: 'tween',
      ease: 'easeIn',
    },
  },
};

const envelope = {
  rest: { opacity: 1, ease: 'easeIn', duration: 0.2, type: 'tween' },
  hover: {
    opacity: 0,
    transition: {
      duration: 0.4,
      type: 'tween',
      ease: 'easeOut',
    },
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
      <div className="pb-16 -mt-24 bg-white lg:pb-24">
        <div aria-hidden="true" className="relative">
          <Image
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1654630163/Jes%C3%BAs%20Reina/general/contact_jff6z0.webp"
            alt="Jesús Reina"
            className="relative object-cover object-center w-full h-96"
            width={1536}
            height={860}
            layout="responsive"
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
              <h2 className="text-4xl font-semibold tracking-tight text-center sm:text-5xl md:text-6xl text-brown-500">
                <span className="block">{t('contact:title')}</span>
              </h2>
            </motion.div>

            <motion.div variants={item}>
              <p className="w-4/6 mx-auto mt-5 text-sm leading-normal prose text-center md:text-lg lg:w-full sm:text-base text-stone-500 max-w-prose sm:leading-relaxed">
                {t('contact:text')}
              </p>
            </motion.div>
            {/* Contact Info */}
            <motion.dl
              variants={item}
              className="grid max-w-2xl grid-cols-1 mx-auto mt-16 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:gap-x-8"
            >
              <div className="pt-4 border-t border-stone-200">
                <dt className="font-medium text-stone-700">Email</dt>
                <dd className="mt-2 text-sm text-stone-500">
                  <a
                    className="underline transition duration-300 ease-in-out hover:text-amber-600"
                    target="_blank"
                    rel="noreferrer"
                    href="mailto:info@jesusreina.es"
                  >
                    {/* <FontAwesomeIcon
                      className="pr-1 text-amber-600"
                      icon={faEnvelope}
                    /> */}
                    info@jesusreina.es
                  </a>
                </dd>
              </div>
              <div className="pt-4 border-t border-stone-200">
                <dt className="font-medium text-stone-700">
                  {t('contact:representive')}
                </dt>
                <dd className="mt-2 text-sm font-semibold text-stone-500">
                  Beatrice Altobelli
                </dd>
                <dd className="mt-2 text-sm italic text-stone-500">
                  Conciertos Vitoria
                </dd>
                <dd className="mt-5 text-sm text-stone-500">
                  Calle Santa Engracia, 17, 3° Ofc. 11 28010 Madrid, España
                </dd>
                <dd className="mt-2 text-sm text-stone-500">
                  <a
                    className="underline transition duration-300 ease-in-out hover:text-amber-600"
                    rel="noreferrer"
                    href="tel:+34910182978"
                  >
                    {/* <FontAwesomeIcon
                      className="pr-1 text-amber-600"
                      icon={faPhone}
                    /> */}
                    +34 91 0182978
                  </a>
                </dd>
                <dd className="mt-2 text-sm text-stone-500">
                  <a
                    className="underline transition duration-300 ease-in-out hover:text-amber-600"
                    target="_blank"
                    rel="noreferrer"
                    href="mailto:info@conciertosvitoria.com"
                  >
                    {/* <FontAwesomeIcon
                      className="pr-1 text-amber-600"
                      icon={faEnvelope}
                    /> */}
                    info@conciertosvitoria.com
                  </a>
                </dd>
              </div>
            </motion.dl>
            {/* <motion.div variants={item} className="text-center">
              <div className="inline-flex items-center justify-center w-full mt-8 text-base font-medium tracking-normal transition duration-300 ease-in-out cursor-pointer sm:text-lg text-amber-600 sm:w-auto group hover:text-amber-500">
                <motion.a
                  variants={mailto}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  className="relative inline-flex items-center justify-center"
                  target="_blank"
                  rel="noreferrer"
                  href="mailto:info@jesusreina.es"
                >
                  <motion.div
                    variants={envelope}
                    className="absolute left-0 pr-2 text-xl sm:text-2xl"
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                  </motion.div>
                  <motion.div
                    variants={paperplane}
                    className="absolute left-0 pr-2 text-xl sm:text-2xl"
                  >
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </motion.div>

                  <a className="ml-10 underline">info@jesusreina.es</a>
                </motion.a>
              </div>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
