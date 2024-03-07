'use client';
import { useParallas } from '@/hook/use-parallas';
import { font } from '@/lib/font';
import { useScroll, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';

interface TitleProps {
    img?: boolean;
}

export const Title = ({ img = true }: TitleProps) => {
    const pathname = usePathname();
    const [isMount, setisMount] = useState(false);

    const [title, settitle] = useState<string[]>();

    useEffect(() => {
        setisMount(true);
    }, []);
    useEffect(() => {
        settitle(() => {
            if (pathname === '/about') {
                return 'about us'.split('');
            } else {
                return pathname.slice(1).split('');
            }
        });
    }, [pathname]);

    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const y = useParallas(scrollYProgress, 200);

    if (!isMount) return null;

    return (
        <div
            ref={containerRef}
            className={`w-full  ${img && 'mb-[30rem] h-full'}`}
        >
            {/* <motion.h1
                initial={{ opacity: 0, rotateX: -90 }}
                animate={{ opacity: 100, rotateX: 0 }}
                transition={{ duration: 2 }}
                
            >
                {pathname.slice(1)} {pathname === '/about' && 'us'}
            </motion.h1> */}
            <motion.div
                className={`text-[19rem] overflow-hidden font-extrabold uppercase text-center ${font.className}`}
            >
                {title?.map((letter: string, idx) => (
                    <motion.span
                        key={idx}
                        initial={{ opacity: 0, rotateX: 90 }}
                        animate={{ opacity: 1, rotateX: 0 }}
                        transition={{
                            duration: 1.2,
                            delay: idx * 0.02,
                        }}
                        className="inline-block origin-bottom "
                    >
                        {letter}
                    </motion.span>
                ))}
            </motion.div>
            {img && (
                <motion.div
                    initial={{ opacity: 0, rotateX: 90 }}
                    animate={{ opacity: 1, rotateX: 0 }}
                    transition={{
                        duration: 1.2,
                    }}
                    className="w-full h-full  overflow-hidden"
                >
                    <motion.img
                        alt="board"
                        initial={{ y: -40 }}
                        style={{ y, scaleY: 1.5 }}
                        src={`${pathname.slice(1)}/header.webp`}
                        className="w-full h-screen "
                    />
                </motion.div>
            )}
        </div>
    );
};
