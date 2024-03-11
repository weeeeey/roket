'use client';
import { motion, useMotionValue, animate } from 'framer-motion';
import { useEffect, useState } from 'react';

const mouseLerp = (s: number, e: number, t: number) => {
    const dt = e * t + (1 - s) * t;
    return dt;
};
export function Loading() {
    const count = useMotionValue(0);
    const [loadingCount, setLoadingCount] = useState(0);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        // window.addEventListener('mousemove', (e: MouseEvent) => {});
    }, []);

    useEffect(() => {
        const unsubscribe = count.onChange((v) => {
            setLoadingCount(Math.round(v)); // 여기에서 count의 변화를 감지하고, 반올림하여 상태를 업데이트합니다.
        });

        const animation = animate(count, window.innerHeight, {
            duration: 2,
        });

        return () => {
            animation.stop();
            unsubscribe(); // 이제 구독을 해제합니다.
        };
    }, [count]);

    if (!isMounted) return null;

    return (
        <div className="pt-8 w-full h-full flex flex-col items-center bg-blue-300">
            <motion.div className="text-xl cursor-pointer text-yellow-500 font-semibold relative -top-[0.34rem] -left-[21rem]">
                loket.design
            </motion.div>
            <motion.div
                style={{
                    height: window.innerHeight,
                    y: window.innerHeight - loadingCount, // 직접 상태 값을 사용합니다.
                }}
                className="w-1 bg-red-500"
            ></motion.div>
        </div>
    );
}
