// import { SocialIcon } from 'react-social-icons';
import { useRouter } from 'next/router';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import LanguageList from './language-list';
import { motion } from 'framer-motion';

const Footer = () => {
  const { t } = useTranslation();
  const navLinks = [
    { title: t('common:link_6'), path: '/' },
    // { title: t('common:link_1'), path: '/about' },
    { title: t('common:link_2'), path: '/events' },
    // { title: t('common:link_3'), path: '/media' },
    // { title: t('common:link_4'), path: '/press-kit' },
    { title: t('common:link_5'), path: '/contact' },
  ];

  const socialIcons = [
    { url: 'https://twitter.com/jreinaviolin' },
    { url: 'https://www.instagram.com/jesusreinaviolin/?hl=en' },
    { url: 'https://www.facebook.com/jesusreinaviolin/photos' },
  ];

  return (
    <footer className="bg-stone-100">
      <div className="px-4 py-12 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{
            duration: 1,
            delay: 0.3,
            type: 'spring',
          }}
        >
          <nav
            className="flex flex-wrap justify-center -mx-5 -my-2"
            aria-label="Footer"
          >
            {navLinks.map((link) => (
              <div
                key={link.title}
                className="px-5 py-2 text-sm sm:text-base text-stone-500"
              >
                <motion.a
                  whileHover={{ color: '#f97316', y: -4, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 150 }}
                >
                  <Link href={link.path} passHref>
                    <a>{link.title}</a>
                  </Link>
                </motion.a>
              </div>
            ))}
          </nav>
          <div>
            <div className="flex justify-center mt-8 space-x-6">
              {/* <ul className="inline-flex gap-2">
                {socialIcons.map((icon) => (
                  <li key={icon.url}>
                    <SocialIcon
                      url={icon.url}
                      className="mr-4 transition duration-200 ease-in-out hover:brightness-125"
                      target="_blank"
                      fgColor="#fff"
                      style={{ height: 35, width: 35 }}
                    />
                  </li>
                ))}
              </ul> */}
            </div>
            <hr className="my-6 border-stone-300" />
            <div className="flex flex-wrap items-center justify-center md:justify-between">
              <div className="w-full px-4 mx-auto text-center md:w-4/12">
                <p className="py-1 text-xs font-light md:text-sm text-stone-400">
                  Copyright © {new Date().getFullYear()}{' '}
                  <span> Jesús Reina.</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
