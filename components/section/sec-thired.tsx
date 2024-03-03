'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export const SecThired = () => {
    const [selectedImage, setselectedImage] = useState('01');

    useEffect(() => {
        const interval = setTimeout(() => {
            const nextImageNumber = (+selectedImage % 13) + 1 + '';
            setselectedImage(nextImageNumber.padStart(2, '0'));
        }, 100);

        return () => clearTimeout(interval);
    }, [selectedImage]);

    return (
        <div className="h-full w-full flex justify-center items-center">
            <div className="relative w-96 h-96">
                <Image alt="aa" src={`/images/c-${selectedImage}.png`} fill />
            </div>
        </div>
    );
};
