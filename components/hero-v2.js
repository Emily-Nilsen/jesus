import Image from 'next/image';
import { motion } from 'framer-motion';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function HeroV2() {
  return (
    <div className="bg-white">
      <main>
        <div className="bg-stone-300">
          {/* Hero card */}
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              duration: 0.8,
              type: 'fade',
              ease: 'easeIn',
            }}
            className="relative"
          >
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-stone-100" />
            <div className="mx-auto max-w-7xl">
              <div className="relative h-[100vh]">
                <div className="absolute inset-0">
                  <div className="object-cover w-full h-full">
                    <Image
                      src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1654604664/Jes%C3%BAs%20Reina/general/hero_s2lc5b.jpg"
                      alt="Jesús Reina"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                      unoptimized={true}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900 mix-blend-multiply h-[50vh] place-self-end mt-[50vh]" />
                </div>
                <div className="relative flex items-end justify-center h-full px-4 pb-[13vh] sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className="text-6xl tracking-tight text-center sm:text-7xl">
                    <span className="block text-white">Jesús Reina</span>
                  </h1>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
