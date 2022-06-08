import { useRouter } from 'next/router';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { motion } from 'framer-motion';
import YouTubeVideo from './youtube-video';
import videos from '../assets/videos';

const YouTubeList = () => {
  const { t } = useTranslation();
  const { locale, locales, asPath } = useRouter();

  return (
    <>
      {videos
        .filter((p) => p.locale === locale)
        .map((video, i) => {
          return (
            <motion.div
              initial={{
                opacity: 0,
                y: 100,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: i * 0.5,
                type: 'spring',
                bounce: 0.35,
              }}
              key={i}
              className="flex flex-col overflow-hidden rounded-lg"
            >
              <div className="flex-shrink-0">
                <YouTubeVideo videoId={video.videoId} className="" />
              </div>
              <div>
                <div className="flex flex-col justify-between flex-1 p-6 text-left bg-stone-100">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-amber-600">
                      <p className="hover:underline">{video.title}</p>
                    </p>
                    <div className="block mt-2">
                      <h2 className="pb-6 text-2xl font-semibold tracking-tight sm:text-3xl text-brown-500">
                        {video.description}
                      </h2>

                      <table className="text-sm table-auto sm:text-base">
                        <tbody>
                          <tr>
                            <td className="pb-1 text-amber-600">
                              {t('common:media_violin')}
                            </td>
                            <td className="text-stone-600">{video.violin}</td>
                          </tr>
                          <tr>
                            <td className="pb-1 text-amber-600">
                              {video.piano ? t('common:media_piano') : ''}
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
            </motion.div>
          );
        })}
    </>
  );
};
export default YouTubeList;
