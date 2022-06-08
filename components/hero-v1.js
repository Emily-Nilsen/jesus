import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroV1 = () => {
  return (
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
        <div className="absolute inset-x-0 bottom-0 bg-gray-100 h-1/2" />
        <div className="relative h-[100vh]">
          <div className="absolute inset-0">
            {/* Desktop screens */}
            <div className="object-cover w-full h-full lg:block">
              <Image
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1654604662/Jes%C3%BAs%20Reina/general/hero-large-v2_nixfj1.jpg"
                alt="Jesús Reina"
                layout="fill"
                objectFit="cover"
                objectPosition="top"
                unoptimized={true}
              />
            </div>
            <div className="absolute inset-0" />
          </div>
          <div className="relative h-[100vh]">
            <div className="flex items-center h-full max-w-7xl">
              <div className="w-full pr-10 2xl:pr-0">
                <h1 className="tracking-tight text-right md:text-7xl lg:text-8xl text-brown-500">
                  Jesús Reina
                </h1>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroV1;
