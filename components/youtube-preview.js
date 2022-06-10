import { useRouter } from 'next/router';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { motion } from 'framer-motion';
import YouTubeVideo from './youtube-video';
import videos from '../assets/videos';
import Image from 'next/image';
// To use the interceptor
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

const YoutubePreview = () => {
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  const youtubeOne = useAnimation();
  const youtubeTwo = useAnimation();
  const youtubeThree = useAnimation();
  const youtubeFour = useAnimation();
  const fadeToImage = useAnimation();

  // Youtube 1
  useEffect(() => {
    if (inView) {
      youtubeOne.start({
        opacity: 1,
        transition: {
          delay: 0.8,
          duration: 0.8,
          ease: 'easeIn',
          type: 'fade',
        },
      });
    }
    if (!inView) {
      youtubeOne.start({ opacity: 0 });
    }
  }, [inView, youtubeOne]);

  // Youtube 2
  useEffect(() => {
    if (inView) {
      youtubeTwo.start({
        opacity: 1,
        transition: {
          delay: 4,
          duration: 0.8,
          ease: 'easeIn',
          type: 'fade',
        },
      });
    }
    if (!inView) {
      youtubeTwo.start({ opacity: 0 });
    }
  }, [inView, youtubeTwo]);

  // Youtube 3
  useEffect(() => {
    if (inView) {
      youtubeThree.start({
        opacity: 1,
        transition: {
          delay: 8,
          duration: 0.8,
          ease: 'easeIn',
          type: 'fade',
        },
      });
    }
    if (!inView) {
      youtubeThree.start({ opacity: 0 });
    }
  }, [inView, youtubeThree]);

  // Youtube 4
  useEffect(() => {
    if (inView) {
      youtubeFour.start({
        opacity: 1,
        transition: {
          delay: 12,
          duration: 0.8,
          ease: 'easeIn',
          type: 'fade',
        },
      });
    }
    if (!inView) {
      youtubeFour.start({ opacity: 0 });
    }
  }, [inView, youtubeFour]);

  // Fade to image
  useEffect(() => {
    if (inView) {
      fadeToImage.start({
        opacity: 1,
        transition: {
          delay: 16,
          duration: 0.8,
          ease: 'easeIn',
          type: 'fade',
        },
      });
    }
    if (!inView) {
      fadeToImage.start({ opacity: 0 });
    }
  }, [inView, fadeToImage]);

  const { t } = useTranslation();

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: 0.7,
        type: 'fade',
        ease: 'easeIn',
      }}
      ref={ref}
    >
      <div>
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="mx-auto ">
            <dt>
              <Link href="/media" passHref>
                <div className="flex cursor-pointer">
                  <div className="relative self-center flex-shrink-0 mr-4">
                    <div className="relative flex items-center object-cover object-center w-full h-full overflow-hidden rounded-full">
                      <Image
                        src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1654769971/Jes%C3%BAs%20Reina/general/Jesus_youtube_1_jycnbe.png"
                        alt="Jesús Reina"
                        width={80}
                        height={80}
                        layout="intrinsic"
                        objectFit="cover"
                        objectPosition="center"
                        unoptimized={true}
                      />
                    </div>
                    {/* Youtube 1 */}
                    <motion.div
                      animate={youtubeOne}
                      className="absolute top-0 left-0"
                    >
                      <Image
                        className="rounded-full"
                        src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1654755464/Jes%C3%BAs%20Reina/general/Jesu%CC%81s_YouTube_vid_1_v3_jdorek.gif"
                        alt="Jesús Reina"
                        width={80}
                        height={80}
                        layout="fixed"
                        objectFit="cover"
                        objectPosition="center"
                        unoptimized={true}
                      />
                    </motion.div>
                    {/* Youtube 2 */}
                    <motion.div
                      animate={youtubeTwo}
                      className="absolute top-0 left-0"
                    >
                      <Image
                        className="rounded-full"
                        src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1654770071/Jes%C3%BAs%20Reina/general/Jesus_Youtube_2_iungco.gif"
                        alt="Jesús Reina"
                        width={80}
                        height={80}
                        layout="fixed"
                        objectFit="cover"
                        objectPosition="center"
                        unoptimized={true}
                      />
                    </motion.div>
                    {/* Youtube 3 */}
                    <motion.div
                      animate={youtubeThree}
                      className="absolute top-0 left-0"
                    >
                      <Image
                        className="rounded-full"
                        src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1654770091/Jes%C3%BAs%20Reina/general/Jesus_youtube_3_xcvrpm.gif"
                        alt="Jesús Reina"
                        width={80}
                        height={80}
                        layout="fixed"
                        objectFit="cover"
                        objectPosition="center"
                        unoptimized={true}
                      />
                    </motion.div>
                    {/* Youtube 4 */}
                    <motion.div
                      animate={youtubeFour}
                      className="absolute top-0 left-0"
                    >
                      <Image
                        className="rounded-full"
                        src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1654770110/Jes%C3%BAs%20Reina/general/Jesus_youtube_4_qo0p04.gif"
                        alt="Jesús Reina"
                        width={80}
                        height={80}
                        layout="fixed"
                        objectFit="cover"
                        objectPosition="center"
                        unoptimized={true}
                      />
                    </motion.div>
                    {/* Still image */}
                    <motion.div
                      animate={fadeToImage}
                      className="absolute top-0 left-0"
                    >
                      <Image
                        className="rounded-full"
                        src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1654604669/Jes%C3%BAs%20Reina/general/youtube-snapshot_zhrtox.jpg"
                        alt="Jesús Reina"
                        width={80}
                        height={80}
                        layout="fixed"
                        objectFit="cover"
                        objectPosition="center"
                        unoptimized={true}
                      />
                    </motion.div>
                  </div>
                  <div className="">
                    <h4 className="text-lg font-medium tracking-tight text-brown-500">
                      {t('common:media_title')}
                    </h4>
                    <p className="mt-1 text-sm text-stone-500 sm:text-base">
                      {t('home:features_media_text')}
                    </p>
                  </div>
                </div>
              </Link>
            </dt>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default YoutubePreview;
