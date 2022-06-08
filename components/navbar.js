import Router, { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import LanguageSwitcher from './language-switcher';
import Logo from './logo';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const navLinks = [
    { title: t('common:link_1'), path: '/about' },
    { title: t('common:link_2'), path: '/events' },
    { title: t('common:link_3'), path: '/media' },
    { title: t('common:link_5'), path: '/contact' },
  ];

  return (
    <Popover className="relative z-20 bg-t h-[12vh] text-stone-500">
      <div className="px-4 mx-auto max-w-7xl sm:px-6">
        <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            {/* Logo */}
            <Logo />
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center p-2 transition duration-300 ease-in-out text-stone-500 hover:text-amber-500 focus:outline-none focus:ring-0">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="w-6 h-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <ul className="inline-flex space-x-10 text-sm lg:text-base text-stone-500">
              {navLinks.map((link) => (
                <motion.li
                  whileHover={{ color: '#f97316', y: -2, scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 50 }}
                  key={link.title}
                >
                  <Link href={link.path} passHref>
                    <a>{link.title}</a>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </Popover.Group>
          <div className="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
            {/* To select language */}
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <Transition
        as={Fragment}
        enter="duration-100 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-30 transition origin-top-right transform md:hidden"
        >
          <div className="bg-white shadow h-fit">
            <div className="px-5 py-4">
              <div className="flex items-center justify-between">
                <div>
                  {/* Logo */}
                  <Logo />
                </div>

                {/* To select language */}
                <LanguageSwitcher />

                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center p-2 transition duration-300 ease-in-out text-stone-500 hover:text-amber-500 focus:outline-none focus:ring-0">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="w-6 h-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="flex justify-center w-full mx-auto mt-6 mb-3">
                <nav className="text-stone-500">
                  <div>
                    {navLinks.map((link) => (
                      <Link key={link.title} href={link.path} passHref>
                        <Popover.Button>
                          <a className="my-1 mr-5 text-sm transition duration-300 ease-in-out sm:mr-8 hover:text-amber-600">
                            {link.title}
                          </a>
                        </Popover.Button>
                      </Link>
                    ))}
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
