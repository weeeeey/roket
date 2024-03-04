'use client';
import { Oswald } from 'next/font/google';
import Image from 'next/image';
import React from 'react';

const font = Oswald({
    subsets: ['latin'],
    weight: '700',
});

export const SecSix = () => {
    return (
        <div className="text-red-500 px-10 space-y-10 mt-20">
            <h3
                className={`${font.className} text-8xl font-extrabold text-center px-60`}
            >
                AND ALWAYS DESIGNED TO GET NOTICED
            </h3>

            <div className="flex justify-between items-center w-full h-72 ">
                <div className="w-2/5 space-y-4">
                    <div className="text-2xl font-extrabold">
                        Our products are not only designed to get made but also
                        receive (the right) attention.
                    </div>
                    <p>
                        We work with companies of all sizes and locations to
                        create proprietary and—when we{`'`}re
                        lucky—award-winning solutions. Here are just a few:
                    </p>
                </div>
                <div className="w-2/5 h-full flex justify-end items-center">
                    <div className="relative w-56 h-56 left-10">
                        <Image
                            alt="food"
                            src="/images/s6.jpg"
                            fill
                            className="rounded-xl"
                        />
                    </div>
                </div>
                <div className="w-1/6 h-full flex justify-center items-end">
                    <div className="relative w-32 h-32">
                        <Image alt="reddot" src="/images/reddot.svg" fill />
                    </div>
                </div>
            </div>
        </div>
    );
};
