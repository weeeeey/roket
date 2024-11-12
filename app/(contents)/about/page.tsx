'use client';
import { contens } from '@/components/about/about-data';
import { AboutFooter } from '@/components/about/about-footer';
import { Title } from '@/components/title';
import { Plus } from 'lucide-react';
import Image from 'next/image';
import React, { RefObject, useEffect, useRef, useState } from 'react';
import { cn } from 'zero-cnn';

const AboutPage = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [clickNumber, setClickNumber] = useState(-1);
    useEffect(() => {
        containerRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }, []);
    const handleClick = (num: number, ref: RefObject<HTMLHeadElement>) => {
        if (clickNumber !== num) {
            setTimeout(() => {
                ref.current?.scrollIntoView({
                    behavior: 'smooth',
                });
            }, 700);
        }
        setClickNumber((p) => (p === num ? -1 : num));
    };

    return (
        <div className="flex flex-col" ref={containerRef}>
            <div className="min-h-[50vh] h-full flex items-center justify-center">
                <Title img={false} />
            </div>

            <div className="flex-1 bg-[#ece9e1] flex divide-y-2 flex-col divide-red-500">
                {contens.map((_, idx) => (
                    <Content
                        key={idx}
                        num={idx}
                        clickNumber={clickNumber}
                        handleClick={handleClick}
                    />
                ))}
                <AboutFooter />
            </div>
        </div>
    );
};

const getTranslatY = (num: number) => (num < 2 ? num * 25 : num * 25 + 125);

export default AboutPage;

function Content({
    num,
    clickNumber,
    handleClick,
}: {
    num: number;
    handleClick: (v: number, ref: RefObject<HTMLHeadElement>) => void;
    clickNumber: number;
}) {
    const { main, subDescription, title, bg, img } = contens[num];
    const headerRef = useRef<HTMLHeadElement>(null);
    return (
        <article
            style={{
                backgroundColor: bg || '#ece9e1',
                color: bg ? '#ece9e1' : 'var(--red)',
                transform: `translateY(-${getTranslatY(num)}px)`,
            }}
            className={cn('flex flex-col')}
        >
            <header
                ref={headerRef}
                className="flex justify-between items-start group px-4"
            >
                <h1 className="text-9xl font-extrabold">
                    {num + 1} {title}
                </h1>
                <button
                    onClick={() => {
                        handleClick(num, headerRef);
                    }}
                    className={`rounded-full mt-6 border size-20 shrink-0 flex items-center justify-center ${
                        bg ? 'border-white' : 'border-red-500'
                    }`}
                >
                    <Plus className="stroke-1 group-hover:rotate-90 transition-all size-full" />
                </button>
            </header>
            <div
                className={cn(
                    'px-10 flex flex-col gap-y-10 h-0 overflow-hidden duration-500 py-0',
                    clickNumber === num && 'h-full pt-10 pb-32'
                )}
            >
                <div className="grid grid-cols-9 gap-x-10">
                    <div className="font-bold text-2xl col-span-3">{main}</div>
                    <div className="flex flex-col gap-y-5 col-span-3">
                        {subDescription.map((des, idx) => (
                            <div key={`${idx}-sub`} className="">
                                {des}
                            </div>
                        ))}
                    </div>
                </div>
                {img && (
                    <div className="grid grid-cols-9 ">
                        <div
                            className={`relative h-[50vh] ${
                                num === 0 ? 'col-span-5' : 'col-span-3'
                            }`}
                        >
                            <Image alt={title} src={`/about/${img}`} fill />
                        </div>
                    </div>
                )}
            </div>
        </article>
    );
}
