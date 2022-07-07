import React from 'react';

export default function Button({
    type = 'submit',
    className = 'btn',
    styles,
    processing,
    onClick,
    children,
}) {
    return (
        <button
            type={type}
            className={`py-2.5 px-5 bg-neutral-700 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-700 rounded-full ${className}`}
            onClick={onClick}
            disabled={processing}
            style={styles}
        >
            {children}
        </button>
    );
}
