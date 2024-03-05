'use client';
import useParaWithRef from '@/hook/use-para-with-ref';
import { useParallas } from '@/hook/use-parallas';
import { useScroll, motion } from 'framer-motion';
import React, { useRef } from 'react';

export const SecSecond = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallas(scrollYProgress, -50);

    return (
        <div className="w-full h-full grid grid-cols-2 px-10">
            <div className="text-red-500 w-2/3 flex flex-col justify-center items-start">
                <div className="font-semibold text-3xl">
                    Stuff should work. Period. Our industrial design addresses
                    everyday behaviors and modern life.
                </div>
                <div className="font-medium mt-4">
                    By blending disciplines, we think deeply about distinctive
                    solutions, so the end-user doesn’t have to think at all.
                </div>
            </div>
            <div
                ref={ref}
                className="w-full h-1/2 my-auto overflow-hidden  rounded-xl flex items-center justify-center"
            >
                <motion.img
                    src="/images/sec.jpg"
                    alt="second logo"
                    style={{ y }}
                    className="w-full h-[150%]"
                />
            </div>
        </div>
    );
};
