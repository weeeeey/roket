'use client';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface ProItemProps {
    title: string;
    imgSrc: number;
}

export const ProItem = ({ imgSrc, title }: ProItemProps) => {
    const pathname = usePathname();

    return (
        <div
            className={`col-span-6 flex flex-col  justify-center items-center ${
                imgSrc % 2 === 0 && 'translate-y-72'
            } ${imgSrc % 3 === 0 && '-translate-x-40 '},
            `}
        >
            <Link href={'/about'} className={`group `}>
                <Image
                    width={400}
                    height={400}
                    alt="product"
                    src={`/${pathname.slice(1)}/${imgSrc}.png`}
                    className="group-hover:scale-105 transition-all"
                />
                <div className="mt-4 text-3xl relative group-hover:text-white flex items-center overflow-hidden ">
                    <div className="z-10 group-hover:pl-5 duration-700 py-1 inline-block mr-2 font-extrabold">
                        {title}
                    </div>
                    <ArrowRight
                        className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-all z-10"
                        strokeWidth={1.5}
                    />

                    <div className="absolute w-full h-full top-0 -translate-x-[100%] group-hover:translate-x-0 transition-all bg-red-500" />
                </div>
            </Link>
        </div>
    );
};

interface ProMainProps {
    arr: string[];
}

export const ProMain = ({ arr }: ProMainProps) => {
    return (
        <div className=" pl-48 pr-10 grid grid-cols-12 gap-y-10  ">
            {arr.map((title, idx) => (
                <ProItem key={idx} imgSrc={idx + 1} title={title} />
            ))}
        </div>
    );
};
