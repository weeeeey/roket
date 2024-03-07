import { IContent } from '@/app/(contents)/about/page';
import { font } from '@/lib/font';
import { Plus } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

interface AboutFirstProps extends IContent {
    full?: boolean;
    bg?: string;
    idx: number;
    onClick: (idx: number) => void;
    selectedIdx: number;
}

const returnTransY = (idx: number) => {
    if (idx <= 2) return 60 * (idx - 1);
    if (idx === 3) return 250;
    if (idx === 4) return 300;
    // else return  * (idx - 1);
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
    return (
        <div
            style={{
                transform: `translateY(-${returnTransY(idx)}px)`,
                zIndex: idx * 5,
                backgroundColor: bg || '#ece9e1',
            }}
            className={`w-full px-10 pt-5 pb-10 overflow-y-hidden relative border-t border-red-500  ${
                bg && `${bg} text-white/95`
            } group`}
        >
            <div
                className={`${font.className} flex justify-between items-start z-20 `}
            >
                <h1 className="text-9xl font-extrabold pr-96 ">
                    {idx} {title}
                </h1>
                <button
                    onClick={() => onClick(idx)}
                    className={`rounded-full border mt-10 ${
                        bg ? 'border-white' : 'border-red-500 bgred500'
                    } ${selectedIdx === idx && 'bg-red-500 text-white'} p-2`}
                >
                    <Plus className=" w-8 h-8 stroke-1 group-hover:rotate-90 transition-all group-hover:" />
                </button>
            </div>
            {selectedIdx === idx && (
                <div
                    className={`${
                        selectedIdx === idx
                            ? 'translate-y-0'
                            : '-translate-y-[200%]'
                    }  transition-all duration-1000`}
                >
                    <div>
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
                            width={full ? 1000 : 400}
                            height={full ? 1000 : 400}
                            // className={`${
                            // full ? 'w-full h-[30rem]' : 'w-1/4 h-72'
                            // }   relative `}
                        />
                        // <div
                        //     className={`${
                        //         full ? 'w-full h-[30rem]' : 'w-1/4 h-72'
                        //     }   relative `}
                        // >
                        //     <Image alt={title} src={`/about/${img}`} fill />
                        // </div>
                    )}
                </div>
            )}{' '}
        </div>
    );
};
