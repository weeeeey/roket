'use client';
import { useParallas } from '@/hook/use-parallas';
import { font } from '@/lib/font';
import { useScroll, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React, { useRef } from 'react';

interface TitleProps {
    img?: boolean;
}

export const Title = ({ img = true }: TitleProps) => {
    const pathname = usePathname();

    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const y = useParallas(scrollYProgress, -30);

    return (
        <div className={`w-full  ${img && 'mb-[30rem] h-full'}`}>
            <h1
                className={`text-[19rem] font-extrabold uppercase text-center ${font.className}`}
            >
                {pathname.slice(1)} {pathname === '/about' && 'us'}
            </h1>
            {img && (
                <div
                    ref={containerRef}
                    className="w-full h-full bg-red-300 overflow-hidden"
                >
                    <motion.img
                        alt="board"
                        initial={{ y: -40 }}
                        style={{ y }}
                        src={`${pathname.slice(1)}/header.webp`}
                        className="w-full h-screen "
                    />
                </div>
            )}
        </div>
    );
};
