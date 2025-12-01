'use client';

import { trackPhoneClick } from '@/lib/gtm';

interface TrackedPhoneLinkProps {
    href: string;
    className?: string;
    children: React.ReactNode;
}

export default function TrackedPhoneLink({ href, className, children }: TrackedPhoneLinkProps) {
    return (
        <a
            href={href}
            className={className}
            onClick={() => trackPhoneClick()}
        >
            {children}
        </a>
    );
}
