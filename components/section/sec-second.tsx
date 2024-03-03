'use client';
import { useParallas } from '@/hook/use-parallas';
import { useScroll, motion, useInView, inView } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

export const SecSecond = () => {
    const ref = useRef<HTMLDivElement>(null);

    const isInview = useInView(ref);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallas(scrollYProgress, -200);
    return (
        <div ref={ref} className="w-full h-full grid grid-cols-2 px-10">
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
            <motion.div className="w-full h-1/2 my-auto overflow-hidden bg-red-200 rounded-xl">
                {/* <motion.image
                    style={{ y }}
                    href="@/public/images/sec.jpg"
                    width={400}
                    height={3}
                /> */}
                <motion.div className="w-full h-full relative overflow-hidden ">
                    <motion.img
                        // style={{ y }}
                        className={`rounded-lg transition-all duration-[3s] scale-y-150  
                            
                       `}
                        src="/images/sec.jpg"
                        alt="second logo"
                        width={4000}
                        height={4000}
                    />
                </motion.div>
            </motion.div>
        </div>
    );
};
