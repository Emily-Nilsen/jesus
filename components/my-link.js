import { forwardRef } from 'react';
import Link from 'next/link';
import { Menu } from '@headlessui/react';

export default function MyLink(props, rest, children) {
  return (
    <Link href={props.href} ref={props.ref} {...rest}>
      {children}
    </Link>
  );
}
