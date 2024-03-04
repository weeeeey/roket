'use client';
import React, {
    ReactNode,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
import { Oswald } from 'next/font/google';

const font = Oswald({
    subsets: ['latin'],
    weight: '700',
});

const Text = ({
    isHover,
    color,
    num,
}: {
    isHover: boolean;
    color: string;
    num: number;
}) => {
    const [x, setX] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    window.requestAnimationFrame(() => {
        if (isHover) return;
        if (!isHover) {
            setX((prevX) => prevX - 5);
        }
        if (ref.current?.getBoundingClientRect().right! < 0) {
            setX(window.innerWidth + 100);
        }
    });

    return (
        <>
            <div
                ref={ref}
                className={`mr-2  ${
                    color === 'red' ? 'text-red-500' : 'text-blue-500'
                }`}
                style={{
                    transform: `translateX(${x}px)`,
                }}
            >
                <span className="italic mr-3">studio@</span>
                <span>loketdesign.com</span>
            </div>
        </>
    );
};

export const SecEight = () => {
    const [isHover, setIsHover] = useState(false);
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
            onPointerEnter={handlePointerEnter}
            onPointerLeave={handlePointerLeave}
            className={`overflow-hidden flex mt-20 w-[100vw] py-2 pb-4 border-y border-red-500 text-red-500 font-extrabold text-9xl uppercase ${font.className} hover:bg-red-500 hover:text-white cursor-pointer `}
        >
            <Text num={1} isHover={isHover} color="red" />
            <Text num={2} isHover={isHover} color="blue" />
        </div>
    );
};
