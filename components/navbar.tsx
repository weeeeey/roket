'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

const contents = ['product', 'packaging', 'about'];

export const Navbar = () => {
    const [isTop, setisTop] = useState(true);

    useEffect(() => {
        if (window.scrollY !== 0) setisTop(false);

        window.addEventListener('scroll', () => {
            setisTop(window.scrollY === 0);
        });
    }, []);

    return (
        <>
            <div
                className={cn(
                    'w-full h-20  fixed top-0 inset-x-0   text-red-500 flex justify-between items-center px-10 py-3 font-semibold transition-all duration-700',
                    !isTop && ' text-white z-50 bg-transparent'
                )}
            >
                <h1 className="text-xl">loket.design</h1>
                <div className="flex justify-between items-center space-x-4 text-sm uppercase">
                    {contents.map((content, idx) => (
                        <Link href={`/${content}`} key={idx}>
                            {content}
                            {content === 'about' && ' us'}
                        </Link>
                    ))}
                    {/* <div>PRODUCT</div>
                    <div>PACKAGING</div>
                    <div>ABOUT US</div> */}
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
