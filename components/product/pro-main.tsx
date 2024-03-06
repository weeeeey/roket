import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const images = [
    'Cleverpup',
    'Ullo Open',
    'Eku Tools',
    'Eku Slices',
    'Stojo',
    'True Places',
    'Bowl',
    'Buoy',
    'Float',
    'Bottle',
    'Double Twelve',
    'Glow Bento',
];
interface ProItemProps {
    title: string;
    imgSrc: number;
}

export const ProItem = ({ imgSrc, title }: ProItemProps) => {
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
                    src={`/product/${imgSrc}.png`}
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

export const ProMain = () => {
    return (
        <div className=" px-10 grid grid-cols-12 gap-y-10  ">
            {images.map((title, idx) => (
                <ProItem key={idx} imgSrc={idx + 1} title={title} />
            ))}
        </div>
    );
};
