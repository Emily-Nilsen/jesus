import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { DownloadIcon } from '@heroicons/react/outline';

const photos = [
  {
    id: 1,
    href: '/static/jesus_reina_1.jpg',
    imageSrc:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1654604657/Jes%C3%BAs%20Reina/general/image-03-small_ccpydm.jpg',
    imageAlt: 'Jesús Reina',
  },
  {
    id: 2,
    href: '/static/jesus_reina_2.jpg',
    imageSrc:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1654604657/Jes%C3%BAs%20Reina/general/image-04-small_irym76.jpg',
    imageAlt: 'Jesús Reina',
  },
  {
    id: 3,
    href: '/static/jesus_reina_3.jpg',
    imageSrc:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1654604654/Jes%C3%BAs%20Reina/general/image-02-small_dqgrht.jpg',
    imageAlt: 'Jesús Reina',
  },
];

export default function Gallery() {
  const { t } = useTranslation();
  return (
    <div className="bg-white">
      <div className="max-w-2xl px-4 pb-16 mx-auto sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{
            duration: 1,
            delay: 0.4,
            type: 'spring',
          }}
          className="sm:flex sm:items-baseline sm:justify-between"
        >
          <h2 className="pb-4 text-4xl font-medium tracking-tight sm:text-5xl text-brown-500">
            {t('common:gallery_title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
          {photos.map((photo) => (
            <motion.a
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{
                duration: 1,
                delay: 0.4,
                type: 'spring',
              }}
              download
              key={photo.id}
              href={photo.href}
              className="group"
            >
              <div className="w-full overflow-hidden rounded-lg aspect-w-1 aspect-h-1 sm:aspect-w-2 sm:aspect-h-3">
                <div className="object-cover object-center w-full h-full transition duration-200 ease-in-out group-hover:opacity-75">
                  <Image
                    src={photo.imageSrc}
                    alt={photo.imageAlt}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    unoptimized={true}
                  />
                </div>
              </div>
              <div className="flex items-center mt-4 text-base font-medium text-stone-700 group">
                <p className="mt-1 text-sm italic text-stone-500">
                  {t('common:photographer')}{' '}
                </p>
                <DownloadIcon
                  className="w-6 h-6 ml-4 text-stone-400 group-hover:text-amber-600"
                  aria-hidden="true"
                />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
