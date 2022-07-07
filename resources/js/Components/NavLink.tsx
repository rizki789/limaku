import React from 'react';
import { Link } from '@inertiajs/inertia-react';

export default function NavLink({ className, href, active, method='get', children }) {
    const styles = {
        width: 186,
        height: 46,
        // textAlign: 'center' as const,
        padding: '10px',
    };
    return (
        <Link
            href={href}
            className={`${
                active ? 'text-center' : 'text-center'
            } ${className}`}
            style={styles}
            method={method}
        >
            {children}
        </Link>
    );
}
