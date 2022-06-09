import EventItem from './event-item';
import YouTubeList from './youtube-list';
import Link from 'next/link';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import { motion } from 'framer-motion';
import ButtonRight from './button-right';

export default function Features({ events }) {
  const { t } = useTranslation();
  const features = [
    {
      title: t('common:about_title'),
      description: t('home:features_about_text'),
      imageUrl:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/v1654604667/Jes%C3%BAs%20Reina/general/presskit_yuc4d9.jpg',
      href: '/about',
      category: t('common:category_about'),
    },
    {
      title: t('common:post_title'),
      description: t('home:features_events_text'),
      imageUrl:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/v1654604657/Jes%C3%BAs%20Reina/general/image-04-small_irym76.jpg',
      href: '/events',
      category: t('common:category_events'),
    },
    {
      title: t('common:media_title'),
      description: t('home:features_media_text'),
      imageUrl:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/v1654604658/Jes%C3%BAs%20Reina/general/image-09-small_big7ty.jpg',
      href: '/media',
      category: t('common:category_media'),
    },
  ];
  return (
    <div className="relative pb-16 sm:pb-24 lg:pb-32">
      <div className="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <motion.div
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          transition={{
            duration: 1,
            type: 'fade',
            ease: 'easeIn',
          }}
        >
          <h2 className="mt-2 text-4xl font-semibold tracking-tight text-center sm:text-5xl md:text-6xl text-brown-500">
            {t('home:features_title')}
          </h2>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          transition={{
            duration: 1,
            delay: 0.4,
            type: 'fade',
            ease: 'easeIn',
          }}
        >
          <p className="w-5/6 mx-auto mt-5 text-base leading-normal prose text-center sm:text-base md:text-lg text-stone-500 max-w-prose sm:leading-relaxed">
            {t('home:features_text')}
          </p>
        </motion.div>
        <dl className="pt-10 space-y-10">
          {features.map((feature, i) => (
            <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.2,
                delay: i * 0.6,
                type: 'fade',
                ease: 'easeIn',
              }}
              key={i}
            >
              <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                  <dt>
                    <Link href={feature.href} passHref>
                      <div className="flex cursor-pointer">
                        <div className="self-center flex-shrink-0 mr-4">
                          <Image
                            className="object-cover rounded-full"
                            src={feature.imageUrl}
                            alt={feature.title}
                            width={80}
                            height={80}
                            layout="fixed"
                            objectFit="cover"
                            objectPosition="center"
                            unoptimized={true}
                          />
                        </div>
                        <div className="">
                          <h4 className="text-lg font-medium tracking-tight text-brown-500">
                            {feature.title}
                          </h4>
                          <p className="mt-1 text-sm text-stone-500 sm:text-base">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </dt>
                </div>
              </div>
            </motion.div>
          ))}
        </dl>
        <motion.div
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{
            duration: 1,
            delay: 0.5,
            type: 'fade',
            ease: 'easeIn',
          }}
          className="flex items-center justify-center pt-10"
        >
          <ButtonRight
            textSizeSmall="lg"
            textSizeLarge="xl"
            textColour="brown"
            text={t('common:button_contact')}
            href="/contact"
            passHref
          />
        </motion.div>
      </div>
    </div>
  );
}
