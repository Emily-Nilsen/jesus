import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import { motion } from 'framer-motion';
import testimonials from '../assets/testimonials';

const TestimonialList = () => {
  const { t } = useTranslation();
  const { locale, locales, asPath } = useRouter();

  return (
    <div className="max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid max-w-lg gap-5 mx-auto mt-6 md:mt-8 lg:grid-cols-2 lg:max-w-none">
        {testimonials
          .filter((p) => p.locale === locale)
          .map((testimonial, i) => {
            return (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 100,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.2,
                  delay: i * 0.3,
                  type: 'spring',
                  bounce: 0.1,
                }}
                key={i}
                className="py-4 overflow-hidden rounded-lg bg-stone-50 md:py-8"
              >
                <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                  <div className="w-1/3">
                    <Image
                      src={testimonial.logo || ''}
                      height={71}
                      width={200}
                      alt={testimonial.author}
                      layout="responsive"
                      objectFit="contain"
                      objectPosition="center"
                      unoptimized={true}
                    ></Image>
                  </div>

                  <div className="relative">
                    <blockquote className="mt-10">
                      <div className="max-w-3xl mx-auto text-lg text-center text-stone-600">
                        <div className="relative text-xl leading-9 text-stone-600 md:flex-grow">
                          <svg
                            className="absolute top-0 left-0 w-16 h-16 transform -translate-x-3 -translate-y-2 text-stone-200"
                            fill="currentColor"
                            viewBox="0 0 32 32"
                            aria-hidden="true"
                          >
                            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                          </svg>
                          <p className="relative text-base lg:text-lg">
                            {testimonial.text}
                          </p>
                        </div>
                      </div>
                      <footer className="mt-8">
                        <div className="flex-col items-center justify-center mt-3 text-xs font-normal text-center sm:text-sm md:text-base">
                          <div className="text-brown-500">
                            {testimonial.author ? (
                              <>{testimonial.author}</>
                            ) : (
                              ''
                            )}
                          </div>
                          <div className="text-amber-600">
                            {testimonial.source}
                          </div>
                        </div>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </motion.div>
            );
          })}
      </div>
    </div>
  );
};

export default TestimonialList;
