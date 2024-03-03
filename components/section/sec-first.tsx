'use client';

import { Oswald } from 'next/font/google';

import { useParallas } from '@/hook/use-parallas';
import { useScroll, motion, useInView } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';
import { cn } from '@/lib/utils';

const font = Oswald({
    subsets: ['latin'],
    weight: '400',
});

const SecFirst = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const y = useParallas(scrollYProgress, -100);

    const ref = useRef(null);
    const isInview = useInView(ref, { amount: 0.5 });

    return (
        <div ref={containerRef} className=" px-10 text-red-500 flex-1">
            <div className="flex flex-col justify-center items-center space-y-10 font-medium ">
                <Image
                    className="rounded-xl"
                    src="/images/top.png"
                    alt="top logo"
                    width={100}
                    height={100}
                />
                <div className="flex justify-between items-start text-sm w-full ">
                    <div className="w-72">
                        We are a New York-based design studio—with roots in the
                        Netherlands—specializing in designing consumer products
                        and brands.
                    </div>
                    <div className="w-72">
                        From initial idea to final production, we work with you
                        to craft products that blend both form and function with
                        exceptional elegance. We design. We develop. We get it
                        done—nicely.
                    </div>
                    <div className="w-72">
                        68 Jay Street, Suite 1006 Brooklyn, NY 11201
                        +1.347.546.7865 studio@loketdesign.com
                    </div>
                </div>
                <div className={cn('relative  w-full ', font.className)}>
                    <div className="text-[30rem] font-extrabold text-center text-nowrap ">
                        <span className="rotate-[18deg] inline-block">I</span>
                        CONIC
                    </div>

                    {!isInview ? (
                        <motion.div className="absolute z-10 top-0 left-0 w-full h-[1000px] flex justify-center items-center ">
                            <Image
                                alt="bottle"
                                src="/images/bottle.png"
                                width={600}
                                height={1000}
                            />
                        </motion.div>
                    ) : (
                        <motion.div className="absolute z-10 top-0 left-0 w-full h-[1000px] flex justify-center items-end -translate-y-48 ">
                            <Image
                                alt="bottle"
                                src="/images/half-bottle.png"
                                width={720}
                                height={1000}
                            />
                        </motion.div>
                    )}

                    <motion.div
                        ref={ref}
                        style={{ y }}
                        className="relative font-extrabold z-30 text-center text-[14rem] bg-transparent  "
                    >
                        FUNCTIONALISM
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default SecFirst;
