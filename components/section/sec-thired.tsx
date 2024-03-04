'use client';
import { Oswald } from 'next/font/google';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const font = Oswald({
    subsets: ['latin'],
    weight: '700',
});

export const SecThired = () => {
    const [selectedImage, setselectedImage] = useState('01');

    useEffect(() => {
        const interval = setTimeout(() => {
            const nextImageNumber = (+selectedImage % 13) + 1 + '';
            setselectedImage(nextImageNumber.padStart(2, '0'));
        }, 100);

        return () => clearTimeout(interval);
    }, [selectedImage]);

    return (
        <div className="px-5 h-full">
            <h3
                className={`text-red-500 font-extrabold text-8xl text-center pb-10 ${font.className}`}
            >
                DYNAMICS INCLUDED
            </h3>
            <div className="w-full flex justify-between items-start ">
                <div className="w-1/3 text-red-500 space-y-4 pt-5">
                    <div className="pr-20 text-2xl font-extrabold">
                        Moving parts can add complexity, and also functionality.
                    </div>
                    <p className="pr-24">
                        Our design approach always weighs both. The end result?
                        A life-enhancing product that{`'s`} easy to use and
                        love.
                    </p>
                </div>
                <div className="w-1/3">
                    <div className="relative w-full h-[30rem] top-5 ">
                        <Image
                            alt="aa"
                            src={`/images/c-${selectedImage}.png`}
                            fill
                        />
                    </div>
                </div>
                <div className="w-1/3  flex justify-end items-center ">
                    <div className="relative w-52 h-52 top-16 overflow-hidden rounded-xl right-5 ">
                        <Image
                            alt="night"
                            src={`/images/s4-night.jpg`}
                            fill
                            className="scale-y-125 scale-x-150 translate-x-5"
                        />
                    </div>
                </div>
            </div>
            <div className="w-1/3 h-[50vh] overflow-hidden relative -top-20 rounded-xl ">
                <Image
                    alt="day"
                    src="/images/s4-day.jpg"
                    width={1000}
                    height={1000}
                    className="scale-150 "
                />
            </div>
        </div>
    );
};
