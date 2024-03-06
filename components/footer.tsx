'use client';
import { ArrowUp } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { SecEight } from './section/sec-eight';

export const Footer = () => {
    const [isMount, setisMount] = useState(false);

    useEffect(() => {
        setisMount(true);
    }, []);

    if (!isMount) return null;

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <>
            <SecEight />
            <div className="h-48 flex justify-center items-center flex-col text-red-500 space-y-8">
                <button
                    onClick={handleClick}
                    className="w-14 h-14 border border-red-500 p-2 rounded-full justify-center items-center flex hover:bg-red-500 transition-all duration-300 hover:text-white"
                >
                    <ArrowUp className="w-8 h-8 stroke-1" />
                </button>
                <div className="font-semibold">
                    © 2024 Loket Design Inc. All Rights Reserved.
                </div>
            </div>
        </>
    );
};
