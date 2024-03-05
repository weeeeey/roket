'use client';
import { useParallas } from '@/hook/use-parallas';
import { useScroll, motion, useTransform } from 'framer-motion';
import { Oswald } from 'next/font/google';
import Image from 'next/image';
import React, { useCallback, useEffect, useRef, useState } from 'react';

const font = Oswald({
    subsets: ['latin'],
    weight: '700',
});

const array = Array.from({ length: 13 }, (_, i) =>
    (i + 1 + '').padStart(2, '0')
);

export const SecThired = () => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const { scrollYProgress: containerY } = useScroll({ target: containerRef });
    const y = useParallas(scrollYProgress, -30);
    const x = useTransform(containerY, [0, 1], [-70, 50]);

    const [selectedImage, setSelectedImage] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSelectedImage((p) => (p % 13) + 1);
        }, 100);

        return () => clearInterval(intervalId);
    }, []);

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
                        A life-enhancing product that{`'`}s easy to use and
                        love.
                    </p>
                </div>
                <div ref={ref} className="w-1/3">
                    <div className="relative w-full h-[30rem] top-5 ">
                        {array.map((text, idx) => (
                            <Image
                                key={text}
                                alt="aa"
                                src={`/images/c-${text}.png`}
                                fill
                                className={`absolute top-0 left-0 opacity-0 ${
                                    selectedImage === idx + 1
                                        ? 'opacity-100'
                                        : 'opacity-0'
                                }`}
                            />
                        ))}
                    </div>
                </div>
                <div className="w-1/3  flex justify-end items-end pt-20">
                    <div className="w-52 h-52  overflow-hidden rounded-xl flex justify-center items-center">
                        <motion.img
                            alt="night"
                            src={`/images/s4-night.jpg`}
                            style={{ y }}
                            className="w-64 h-72 "
                        />
                    </div>
                </div>
            </div>
            <div
                ref={containerRef}
                className="w-1/3 h-[50vh] relative -top-20 rounded- overflow-hidden  justify-center flex items-center"
            >
                <motion.img
                    alt="day"
                    src="/images/s4-day.jpg"
                    style={{ x, scaleX: 1.3 }}
                    className=" w-[30rem] h-96 rounded-lg  "
                />
            </div>
        </div>
    );
};
