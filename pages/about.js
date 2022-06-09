import Head from 'next/head';
import Layout from '../components/layout';
import ButtonRight from '../components/button-right';
import ButtonDownload from '../components/button-download';
import Image from 'next/image';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import { motion } from 'framer-motion';

const About = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const aboutParagraphs = [
    { paragraph: t('about:para_2') },
    { paragraph: t('about:para_3') },
    { paragraph: t('about:para_4') },
    { paragraph: t('about:para_5') },
    { paragraph: t('about:para_6') },
    { paragraph: t('about:para_7') },
  ];
  return (
    <Layout
      title={t('common:about_meta_title')}
      description={t('common:about_meta_description')}
      keywords={t('common:about_meta_keywords')}
    >
      <div className="pb-8 -mt-[12vh] bg-white lg:pb-24">
        <motion.div
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{
            duration: 0.8,
            type: 'fade',
            ease: 'easeIn',
          }}
          aria-hidden="true"
          className="relative object-cover object-center w-full h-[40vh] sm:h-[40vh]"
        >
          <Image
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1654604654/Jes%C3%BAs%20Reina/general/about_hn44zk.jpg"
            alt="Jesús Reina"
            className=""
            width={1920}
            height={724}
            layout="fill"
            objectFit="cover"
            objectPosition="top right"
            unoptimized={true}
          />
          <div className="absolute inset-0 opacity-100 bg-gradient-to-t from-white" />
        </motion.div>

        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-lg">
            <div className="text-base leading-loose sm:leading-loose md:leading-loose text-stone-600 md:text-lg">
              <motion.div
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 0.8,
                  type: 'fade',
                  ease: 'easeIn',
                }}
              >
                <h1 className="pb-8 -mt-16 text-4xl tracking-tight sm:mt-0 sm:text-5xl md:text-6xl text-brown-500">
                  Jesús Reina
                </h1>
              </motion.div>

              {/* Download button */}
              <motion.div
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                  type: 'fade',
                  ease: 'easeIn',
                }}
              >
                <ButtonDownload />
              </motion.div>

              {/* Paragraph 1 */}
              <motion.div
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{
                  delay: 0.4,
                  duration: 0.8,
                  type: 'fade',
                  ease: 'easeIn',
                }}
              >
                <div>
                  <div>
                    <p className="pb-4 mt-8 text-base leading-8 sm:text-lg prose-amber text-stone-600">
                      <span>{t('about:sentence_1')}</span>

                      <span className="italic font-medium">
                        {t('about:quote_1')}
                      </span>

                      <span className="text-amber-600">
                        {t('about:source_1')}
                      </span>
                      <span>{t('about:sentence_2')}</span>

                      <span className="italic font-medium">
                        {t('about:quote_2')}
                      </span>

                      <span>{t('about:sentence_3')}</span>

                      <span className="italic font-medium">
                        {t('about:quote_3')}
                      </span>

                      <span className="text-amber-600">
                        {t('about:source_2')}
                      </span>
                      <span>{t('about:sentence_4')}</span>
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 0.8,
                  type: 'fade',
                  ease: 'easeIn',
                }}
              >
                <div className="mx-auto mt-6 prose prose-md text-stone-600 prose-amber">
                  {aboutParagraphs.map((para, i) => (
                    <div key={i}>
                      <p className="pb-6">{para.paragraph}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Paragraph 8 */}
              <div>
                <div>
                  <div>
                    <p className="mx-auto mt-6 prose prose-md text-stone-600 prose-amber">
                      <span>{t('about:sentence_5')}</span>

                      <span className="font-medium">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.canalsur.es/Tierra_de_talento-3513.html"
                        >
                          {t('about:link_1')}
                        </a>
                      </span>
                      <span>{t('about:sentence_6')}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default About;
