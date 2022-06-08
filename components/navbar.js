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
  const navigation = [
    { name: t('common:link_1'), href: '/about' },
    { name: t('common:link_2'), href: '/events' },
    { name: t('common:link_3'), href: '/media' },
    { name: t('common:link_5'), href: '/contact' },
  ];

  return (
    <header className="absolute top-0 left-0 z-20 pb-1 lg:pb-0 bg-t">
      <nav
        className="relative w-screen px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"
        aria-label="Top"
      >
        <div className="flex items-center justify-between w-full py-6 border-b border-stone-200 lg:border-none">
          <div className="flex items-center">
            {/* Logo */}
            <Logo />
            <div className="hidden ml-10 space-x-8 lg:block">
              {navigation.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base transition duration-300 ease-in-out text-stone-500 font-regular hover:text-amber-500"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <LanguageSwitcher />
          </div>
        </div>
        <div className="flex flex-wrap justify-center py-4 space-x-6 lg:hidden">
          {navigation.map((link) => (
            <Link key={link.name} href={link.href} passHref>
              <a className="text-sm transition duration-300 ease-in-out text-stone-500 font-regular hover:text-amber-500">
                {link.name}
              </a>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
