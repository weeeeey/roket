import { Oswald } from 'next/font/google';
import Image from 'next/image';
import React from 'react';

const font = Oswald({
    subsets: ['latin'],
    weight: '700',
});

export const SecForth = () => {
    return (
        <div className="px-10 text-red-500 mt-72">
            <h3
                className={`text-red-500 font-extrabold text-8xl text-center pb-10 ${font.className}`}
            >
                HOLISTIC BRANDING
            </h3>

            <div className="w-full flex justify-between items-start">
                <div className="w-1/3 space-y-4">
                    <h4 className="text-2xl font-extrabold">
                        From logo-creation to graphics, copy and packaging.
                    </h4>
                    <p>
                        We go beyond product design to build an ownable identity
                        and thumb-stopping brand–whether custom-made or sourced
                        from stock.
                    </p>
                </div>
                <div className="relative w-full h-[80vh] -top-32 ">
                    <Image fill alt="four" src="/images/four.png" />
                </div>
            </div>
        </div>
    );
};
