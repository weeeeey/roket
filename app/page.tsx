'use client';
import SecFirst from '@/components/section/sec-first';
import { SecSecond } from '@/components/section/sec-second';
import { SecThired } from '@/components/section/sec-thired';
import React from 'react';

const MainPage = () => {
    return (
        <div className="w-full h-full mt-20 ">
            <SecFirst />
            <SecSecond />
            <SecThired />
        </div>
    );
};

export default MainPage;
