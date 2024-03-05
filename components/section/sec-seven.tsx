'use client';
import { Oswald } from 'next/font/google';
import React from 'react';

const font = Oswald({
    subsets: ['latin'],
    weight: '700',
});

export const SecSeven = () => {
    return (
        <div className="text-red-500 px-10 space-y-10 mt-20">
            <h3
                className={`${font.className} text-8xl font-extrabold text-center px-60 mb-32`}
            >
                AWARDS & PATENTS
            </h3>
            <div className="flex flex-col   px-60 ">
                <div className="cursor-pointer flex justify-between py-4  items-center border-b border-red-500 group hover:px-3 relative overflow-hidden ">
                    <div className="absolute bg-red-500 top-0 left-0 w-0 h-full group-hover:w-full -z-10  transition-all duration-500 " />
                    <div className="font-bold text-4xl group-hover:text-white  transition-all">
                        Stojo
                    </div>
                    <div className="group-hover:text-white duration-300">
                        Red Dot Award
                    </div>
                </div>
                <div className="cursor-pointer flex justify-between py-4 items-center  border-b border-red-500 group hover:px-3 relative overflow-hidden">
                    <div className="absolute bg-red-500 top-0 left-0 w-0 h-full group-hover:w-full -z-10  transition-all duration-500 " />
                    <div className="font-bold text-4xl group-hover:text-white  transition-all">
                        Stojo Patents
                    </div>
                    <div className="group-hover:text-white duration-300">
                        Design & Utility Patents
                    </div>
                </div>
                <div className="cursor-pointer flex justify-between py-4 items-center  border-b border-red-500 group hover:px-3 relative overflow-hidden">
                    <div className="absolute bg-red-500 top-0 left-0 w-0 h-full group-hover:w-full -z-10  transition-all duration-500 " />
                    <div className="font-bold text-4xl group-hover:text-white  transition-all">
                        True Places
                    </div>
                    <div className="group-hover:text-white duration-300">
                        A{`'`}Design Award
                    </div>
                </div>
                <div className="cursor-pointer flex justify-between py-4 items-center  border-b border-red-500 group hover:px-3 relative overflow-hidden">
                    <div className="absolute bg-red-500 top-0 left-0 w-0 h-full group-hover:w-full -z-10  transition-all duration-500 " />
                    <div className="font-bold text-4xl group-hover:text-white  transition-all">
                        {' '}
                        True Places Patent
                    </div>
                    <div className="group-hover:text-white duration-300">
                        Folding Mechanism Patent
                    </div>
                </div>
                <div className="cursor-pointer flex justify-between py-4  items-center border-b border-red-500 group hover:px-3 relative overflow-hidden">
                    <div className="absolute bg-red-500 top-0 left-0 w-0 h-full group-hover:w-full -z-10  transition-all duration-500 " />
                    <div className="font-bold text-4xl group-hover:text-white  transition-all">
                        {' '}
                        Eku Collection
                    </div>
                    <div className="group-hover:text-white duration-300">
                        Excellence in HouseWares Awards
                    </div>
                </div>
                <div className="cursor-pointer flex justify-between py-4  items-center border-b border-red-500 group hover:px-3 relative overflow-hidden">
                    <div className="absolute bg-red-500 top-0 left-0 w-0 h-full group-hover:w-full -z-10  transition-all duration-500 " />
                    <div className="font-bold text-4xl group-hover:text-white  transition-all">
                        Ullo Open
                    </div>
                    <div className="group-hover:text-white duration-300">
                        Design & Utility Patents
                    </div>
                </div>
            </div>
        </div>
    );
};
