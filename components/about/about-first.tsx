import { font } from '@/lib/font';
import { Plus } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { IContent } from './about-data';

interface AboutFirstProps extends IContent {
    full?: boolean;
    bg?: string;
    idx: number;
    onClick: (idx: number, ref: React.RefObject<HTMLButtonElement>) => void;
    selectedIdx: number;
}

const calcY = (idx: number) => {
    if (idx === 0) return 0;
    if (idx === 1) return -60;
    if (idx === 2) return -260;
    if (idx === 3) return -320;
};
const calcHeight = (idx: number) => {
    let h = 0;
    if (idx === 0) h = 100;
    if (idx === 1) h = 100;
    if (idx === 2) h = 80;
    if (idx === 3) h = 20;
    return `h-[${h}vh]`;
};

export const AboutFirst = ({
    bg,
    main,
    subDescription,
    title,
    full,
    img,
    idx,
    selectedIdx,
    onClick,
}: AboutFirstProps) => {
    const ref = React.useRef<HTMLDivElement>(null);
    const hRef = React.useRef<HTMLDivElement>(null);
    const buttonRef = React.useRef<HTMLButtonElement>(null);

    return (
        <div
            ref={ref}
            style={{
                backgroundColor: bg || '#ece9e1',
                transform: `translateY(${
                    selectedIdx !== idx && `${calcY(idx)}px`
                })`,
            }}
            className={` w-full px-10 pt-5 pb-10 overflow-hidden  border-t border-red-500  ${
                bg && `${bg} text-white/95 transition-all duration-500`
            } group`}
        >
            <div
                className={`${font.className} flex justify-between items-start z-20 `}
            >
                <h1 className="text-9xl font-extrabold pr-96 ">
                    {idx + 1} {title}
                </h1>
                <button
                    ref={buttonRef}
                    onClick={() => onClick(idx, buttonRef)}
                    className={`rounded-full border mt-10 ${
                        bg ? 'border-white' : 'border-red-500 bgred500'
                    } ${selectedIdx === idx && 'bg-red-500 text-white'} p-2`}
                >
                    <Plus className=" w-8 h-8 stroke-1 group-hover:rotate-90 transition-all group-hover:" />
                </button>
            </div>

            <div
                ref={hRef}
                className={`${
                    selectedIdx === idx ? calcHeight(idx) : 'h-0'
                } transition-all duration-700`}
            >
                <div className="overflow-hidden">
                    <div className="grid grid-cols-2 gap-x-10 my-10 pr-96">
                        <div className="font-bold text-2xl">{main}</div>
                        <div className="flex flex-col space-y-10">
                            {subDescription.map((sub, idx) => (
                                <div key={idx}>{sub}</div>
                            ))}
                        </div>
                    </div>
                </div>
                {img && (
                    <Image
                        alt={title}
                        src={`/about/${img}`}
                        width={full ? 800 : 400}
                        height={full ? 300 : 400}
                    />
                )}
            </div>
        </div>
    );
};
