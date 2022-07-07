import { Link } from '@inertiajs/inertia-react';
import * as React from 'react';

const ButtonAnchor = ({
    href,
    role = 'button',
    style,
    method,
    className = 'button-primary',
    children,
}) => {
    return (
        <Link role={role} href={href} className={`bg-neutral-700 text-neutral-100 py-2.5 px-5 rounded-full ${ className }`} style={style} method={method}>
            {children}
        </Link>
    );
};

export default ButtonAnchor;
