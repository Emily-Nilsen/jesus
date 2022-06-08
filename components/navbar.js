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
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';

const solutions = [
  {
    name: 'Analytics',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorClickIcon,
  },
  {
    name: 'Security',
    description: "Your customers' data will be safe and secure.",
    href: '#',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: ViewGridIcon,
  },
  {
    name: 'Automations',
    description:
      'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: RefreshIcon,
  },
];
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
];
const resources = [
  {
    name: 'Help Center',
    description:
      'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: SupportIcon,
  },
  {
    name: 'Guides',
    description:
      'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: BookmarkAltIcon,
  },
  {
    name: 'Events',
    description:
      'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
  },
  {
    name: 'Security',
    description: 'Understand how we take your privacy seriously.',
    href: '#',
    icon: ShieldCheckIcon,
  },
];
const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  {
    id: 2,
    name: 'How to use search engine optimization to drive traffic to your site',
    href: '#',
  },
  { id: 3, name: 'Improve your customer experience', href: '#' },
];

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
    <Popover className="relative z-20 bg-transparent text-stone-500">
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
          <div className="h-screen bg-white divide-y-2 divide-stone-50">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  {/* Logo */}
                  <Logo />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center p-2 transition duration-300 ease-in-out text-stone-500 hover:text-amber-500 focus:outline-none focus:ring-0">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="w-6 h-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8 text-stone-500">
                  <div>
                    <ul>
                      {navLinks.map((link) => (
                        <motion.li
                          className="p-6"
                          whileHover={{
                            color: '#f97316',
                            originX: 0,
                            scale: 1.03,
                          }}
                          transition={{ type: 'ease', duration: 0.2 }}
                          key={link.title}
                        >
                          <Popover.Button>
                            <Link
                              className="my-4 text-lg font-medium"
                              href={link.path}
                              passHref
                            >
                              <a>{link.title}</a>
                            </Link>
                          </Popover.Button>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
            <div className="py-6 space-y-6">
              <div className="flex items-center w-full">
                <Popover.Button>
                  {/* To select language */}
                  <LanguageSwitcher />
                </Popover.Button>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
