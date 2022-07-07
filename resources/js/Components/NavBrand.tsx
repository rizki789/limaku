import React from 'react';
import { Link } from '@inertiajs/inertia-react';

export default function NavBrand(props) {
    const styles = {
        fontWeight: 'bolder',
        fontSize: '1.5rem',
    };
  return (
    <Link href={props.href} className={`dark:text-neutral-100 ${props.className}`} style={styles}>
      {props.children}
    </Link>
  );
}
