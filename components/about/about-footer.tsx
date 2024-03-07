import { font } from '@/lib/font';
import Image from 'next/image';
import React from 'react';

export const AboutFooter = () => {
    return (
        <div
            style={{
                zIndex: 25,
                transform: `translateY(-45%)`,
                backgroundColor: '#ece9e1',
            }}
            className="relative px-10 h-full flex flex-col justify-center items-center text-red-500  "
        >
            <div
                className={`${font.className} font-extrabold text-[20rem] uppercase group`}
            >
                <span>als</span>
                <div className="w-44 h-64 relative inline-block mr-20 group-hover:scale-90 group-hover:rotate-[30deg] transition-all duration-500">
                    <Image alt="about-logo" src="/about/bread.png" fill />
                </div>
                <span>us</span>
            </div>

            <p className="text-sm w-[35rem] text-center">
                The only thing we love more than building brands? Baking bread.
                Pop by our studio for some fresh-made sourdough, straight from
                the oven.
            </p>
        </div>
    );
};
