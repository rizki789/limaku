import React from 'react';
import UIModeToggle from '../Components/UIModeToggle';

export default function Guest({ className = 'bg-neutral-100 dark:bg-neutral-700', children }) {
    return (
        <div id="guest">
            <div className={`${className}`}>
                {children}
                <UIModeToggle></UIModeToggle>
            </div>
        </div>
    );
}
