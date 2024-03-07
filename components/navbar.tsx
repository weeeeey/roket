'use client';

import { cn } from '@/lib/utils';
import { Oswald } from 'next/font/google';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const font = Oswald({
    subsets: ['latin'],
    weight: '400',
});

const contents = ['product', 'packaging', 'about'];

export const Navbar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [active, setActive] = useState('');
    const [isTop, setisTop] = useState(true);

    useEffect(() => {
        if (window.scrollY !== 0) setisTop(false);

        window.addEventListener('scroll', () => {
            setisTop(window.scrollY <= 50);
        });
    }, []);

    useEffect(() => {
        setActive(pathname.slice(1));
    }, [pathname]);

    const handleClick = (content: string) => {
        router.push(`/${content}`, {
            scroll: true,
        });
    };

    return (
        <>
            <div
                className={cn(
                    'w-full h-20  fixed top-0 inset-x-0    text-red-500 flex justify-between items-center px-10 py-1 font-semibold transition-all duration-700',
                    !isTop && ' text-white z-50 bg-transparent shadow'
                )}
            >
                <Link href="/" className="text-xl">
                    loket.design
                </Link>
                <div
                    className={`flex justify-between items-center space-x-6  uppercase ${font.className}`}
                >
                    {contents.map((content, idx) => (
                        <Link href={`/${content}`} key={idx}>
                            <div
                                className={`px-3 py-1 ${
                                    isTop ? 'border-red-500' : 'border-white'
                                } ${
                                    content === active &&
                                    'rounded-full border-2 '
                                }`}
                            >
                                {content}
                                {content === 'about' && ' us'}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <div
                className={cn(
                    'w-full fixed top-0 h-20 inset-x-0 bg-red-500 transition-all duration-700 z-40',
                    isTop ? '-translate-y-20' : 'translate-y-0'
                )}
            />
        </>
    );
};
