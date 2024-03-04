'use client';
import React, { useRef } from 'react';
import { Oswald } from 'next/font/google';
import Image from 'next/image';
import {
    useScroll,
    motion,
    useVelocity,
    useSpring,
    useTransform,
    useAnimationFrame,
    useMotionValue,
} from 'framer-motion';
import { wrap } from '@motionone/utils';

const font = Oswald({
    subsets: ['latin'],
    weight: '400',
});

export const SecFive = () => {
    let baseVelocity = 5;
    const baseX = useMotionValue(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll({ target: containerRef });
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400,
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false,
    });

    const x = useTransform(baseX, (v) => `${wrap(-100, 200, v)}%`);

    const directionFactor = useRef<number>(1);
    useAnimationFrame((t: any, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        /**
         * This is what changes the direction of the scroll once we
         * switch scrolling directions.
         */
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div
            ref={containerRef}
            className={`flex flex-col justify-center items-center ${font.className} space-y-20`}
        >
            <h3 className="text-8xl text-red-500 px-72 text-center font-extrabold">
                READY FOR MASS PRODUCTION
            </h3>
            <motion.div
                className="relative w-full h-96 overflow-hidden "
                // style={{ x }}
            >
                <Image alt="five" src="/images/five.webp" fill />
                <Image alt="five" src="/images/five.webp" fill />
                <Image alt="five" src="/images/five.webp" fill />
            </motion.div>
        </div>
    );
};
