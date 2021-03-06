import Layout from '../components/layout';
import useTranslation from 'next-translate/useTranslation';
import YouTubeList from '../components/youtube-list';
import Gallery from '../components/gallery';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import YouTubeVideo from '../components/youtube-video';
import videos from '../assets/videos';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.4,
    },
  },
};

const itemBottom = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { type: 'fade', ease: 'easeIn', duration: 0.3 },
  },
};
const itemTop = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { type: 'fade', ease: 'easeIn', duration: 0.3 },
  },
};

const Media = () => {
  const { t } = useTranslation();
  const { locale, locales, asPath } = useRouter();
  return (
    <Layout
      title={t('common:media_meta_title')}
      description={t('common:media_meta_description')}
      keywords={t('common:media_meta_keywords')}
    >
      {/* YouTube video list */}
      <div className="relative py-16 overflow-hidden bg-white sm:pb-24">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div
            className="relative h-full mx-auto text-lg max-w-prose"
            aria-hidden="true"
          >
            <svg
              className="absolute transform translate-x-32 top-12 left-full"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={2}
                    height={2}
                    className="text-stone-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
              />
            </svg>
            <svg
              className="absolute transform -translate-x-32 -translate-y-1/2 top-1/2 right-full"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={2}
                    height={2}
                    className="text-stone-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
              />
            </svg>
            <svg
              className="absolute transform translate-x-32 bottom-12 left-full"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="d3eb07ae-5182-43e6-857d-35c643af9034"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={2}
                    height={2}
                    className="text-stone-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
              />
            </svg>
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="mx-auto text-lg max-w-7xl">
            <div>
              <h2 className="mt-2 text-4xl font-medium tracking-tight text-center sm:text-5xl text-brown-500">
                {t('common:media_title')}
              </h2>
            </div>
            <div>
              <p className="max-w-2xl mx-auto mt-5 text-sm leading-normal prose text-center sm:text-base md:text-lg text-stone-500 sm:leading-relaxed">
                {t('common:media_text')}
              </p>
            </div>
            <div className="relative px-4 pt-4 sm:px-6 lg:px-8 sm:pt-8">
              <div className="mx-auto text-lg max-w-prose">
                <ul role="list" className="divide-y divide-gray-200">
                  {videos
                    .filter((p) => p.locale === locale)
                    .map((video, i) => (
                      <motion.li
                        initial={{
                          opacity: 0,
                          transition: { delay: 2 },
                        }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          initialDelay: 2,
                          duration: 0.8,
                          delay: i * 0.3,
                          ease: 'easeIn',
                          type: 'fade',
                        }}
                        key={i}
                        className="py-4 "
                      >
                        <div className="grid w-full h-full grid-cols-1 gap-6 md:grid-cols-3">
                          <div className="col-span-1 md:col-span-2">
                            <YouTubeVideo videoId={video.videoId} />
                          </div>

                          <div>
                            <div className="flex-1">
                              <p className="text-sm font-medium text-amber-600">
                                <p className="hover:underline">{video.title}</p>
                              </p>
                              <div className="block mt-1">
                                <h3 className="pb-1 text-base font-medium tracking-tight text-stone-600">
                                  {video.description}
                                </h3>

                                <table className="text-sm table-auto">
                                  <tbody>
                                    <tr>
                                      <td className="pb-0 text-amber-600">
                                        {t('common:media_violin')}
                                      </td>
                                      <td className="text-stone-600">
                                        {video.violin}
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="pb-0 text-amber-600">
                                        {video.piano
                                          ? t('common:media_piano')
                                          : ''}
                                      </td>
                                      <td className="text-stone-600">
                                        <a
                                          target="_blank"
                                          rel="noreferrer"
                                          href={video.pianoUrl}
                                          className="underline transition duration-200 ease-in-out hover:text-amber-600 hover:underline"
                                        >
                                          {video.piano}
                                        </a>{' '}
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="pb-1 pr-6 text-amber-600">
                                        {t('common:media_recordedAt')}
                                      </td>
                                      <td className="text-stone-600">
                                        <a
                                          className="underline transition duration-200 ease-in-out hover:text-amber-600 hover:underline"
                                          target="_blank"
                                          rel="noreferrer"
                                          href={video.recordedAtUrl}
                                        >
                                          {video.recordedAt}
                                        </a>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Downloadable photos */}
      <div>
        <Gallery />
      </div>
    </Layout>
  );
};
export default Media;
