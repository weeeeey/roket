'use client';

import { Oswald } from 'next/font/google';

import { useParallas } from '@/hook/use-parallas';
import { useScroll, motion, useInView } from 'framer-motion';
import Image from 'next/image';
import React, { ReactNode, useRef } from 'react';
import { cn } from '@/lib/utils';

const font = Oswald({
    subsets: ['latin'],
    weight: '400',
});

const Text = ({
    children,
    delay = 0,
}: {
    delay?: number;
    children: ReactNode;
}) => {
    return (
        <motion.div
            initial={{ y: 100, rotateX: 90 }}
            animate={{ y: 0, rotateX: 0 }}
            transition={{ duration: 1, delay }}
            className="w-72 "
        >
            {children}
        </motion.div>
    );
};

const SecFirst = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const y = useParallas(scrollYProgress, -200);

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
                    <Text>
                        We are a New York-based design studio—with roots in the
                        Netherlands—specializing in designing consumer products
                        and brands.
                    </Text>
                    <Text delay={0.3}>
                        From initial idea to final production, we work with you
                        to craft products that blend both form and function with
                        exceptional elegance. We design. We develop. We get it
                        done—nicely.
                    </Text>
                    <Text delay={0.6}>
                        68 Jay Street, Suite 1006 Brooklyn, NY 11201
                        +1.347.546.7865 studio@loketdesign.com
                    </Text>
                </div>
                <div className={cn('relative  w-full ', font.className)}>
                    <motion.div className="text-[30rem] font-extrabold text-center text-nowrap  ">
                        <motion.div
                            animate={{
                                rotate: [0, 30, 10, 25, 12, 16, 14, 15],
                            }}
                            transition={{
                                duration: 2,
                                delay: 1,
                                times: [
                                    0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 1,
                                ],
                            }}
                            className=" inline-block"
                        >
                            I
                        </motion.div>
                        <motion.div
                            animate={{ rotate: [0, 10, 3.5, 7, 0] }}
                            transition={{ duration: 1, delay: 1.125 }}
                            className="inline-block"
                        >
                            C
                        </motion.div>
                        ONIC
                    </motion.div>

                    {!isInview ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="absolute z-10 top-0 left-0 w-full h-[1000px] flex justify-center items-center "
                        >
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
