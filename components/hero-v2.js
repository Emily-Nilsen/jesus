import Image from 'next/image';
import { motion } from 'framer-motion';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function HeroV2() {
  return (
    <div className="bg-white">
      <main>
        <div className="bg-white">
          {/* Hero card */}
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 bg-white h-1/2" />
            <div className="mx-auto max-w-7xl">
              <div className="relative h-[100vh]">
                <div className="absolute inset-0">
                  <motion.div
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{
                      duration: 0.8,
                      type: 'fade',
                      ease: 'easeIn',
                    }}
                    className="object-cover w-full h-full"
                  >
                    <Image
                      src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1654796505/Jes%C3%BAs%20Reina/general/hero_gradient_is8dzp.webp"
                      alt="Jesús Reina"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                      unoptimized={true}
                    />
                  </motion.div>
                </div>
                <div className="relative flex items-end justify-center h-full px-4 pb-[16vh] sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className="text-5xl tracking-normal text-center sm:text-6xl">
                    <span className="block text-white">Jesús Reina</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// bg-gradient-to-t from-stone-900 mix-blend-multiply h-[50vh] place-self-end mt-[50vh]
