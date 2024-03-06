'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Oswald } from 'next/font/google';

const font = Oswald({
    subsets: ['latin'],
    weight: '700',
});

const Text = ({
    isHover,
    containerRef,
}: {
    isHover: boolean;
    containerRef: React.RefObject<HTMLDivElement>;
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [x, setX] = useState(0);

    useEffect(() => {
        const marqueeText = () => {
            if (!ref.current || !containerRef.current) return;

            if (x * -1 > containerRef.current?.scrollWidth! / 2) {
                ref.current!.style.transform = `translateX(0)`;
                setX(0);
            }
            ref.current!.style.transform = `translateX(${x}px)`;
        };

        const animate = () => {
            if (isHover) return;
            setX((p) => p - 5);
            marqueeText();
        };
        const animateId = window.requestAnimationFrame(() => animate());
        // animate();
        return () => {
            window.cancelAnimationFrame(animateId);
        };
    }, [x, containerRef, isHover]);

    return (
        <div ref={ref} className={`mr-2`}>
            <span className="italic mr-3">studio@</span>
            <span>loketdesign.com</span>
        </div>
    );
};

export const SecEight = () => {
    const [isHover, setIsHover] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const [isMount, setisMount] = useState(false);

    useEffect(() => {
        setisMount(true);
    }, []);

    if (!isMount) return null;

    const handlePointerEnter = () => {
        setIsHover(true);
    };
    const handlePointerLeave = () => {
        setIsHover(false);
    };

    return (
        <div
            ref={ref}
            onPointerEnter={handlePointerEnter}
            onPointerLeave={handlePointerLeave}
            className={`overflow-hidden flex mt-72 w-[100vw] py-2 pb-4 border-y border-red-500 text-red-500 font-extrabold text-9xl uppercase ${font.className} hover:bg-red-500 hover:text-white cursor-pointer `}
        >
            <Text containerRef={ref} isHover={isHover} />
            <Text containerRef={ref} isHover={isHover} />
        </div>
    );
};
