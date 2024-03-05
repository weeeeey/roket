'use client';
import { Footer } from '@/components/footer';
import { SecEight } from '@/components/section/sec-eight';
import SecFirst from '@/components/section/sec-first';
import { SecFive } from '@/components/section/sec-five';
import { SecForth } from '@/components/section/sec-forth';
import { SecSecond } from '@/components/section/sec-second';
import { SecSeven } from '@/components/section/sec-seven';
import { SecSix } from '@/components/section/sec-six';
import { SecThired } from '@/components/section/sec-thired';
import React, { useEffect, useState } from 'react';

const MainPage = () => {
    const [isMount, setisMount] = useState(false);

    useEffect(() => {
        setisMount(true);
    }, []);
    if (!isMount) return null;

    return (
        <div className="w-full h-full mt-20  ">
            <SecFirst />
            <SecSecond />
            <SecThired />
            <SecForth />
            <SecFive />
            <SecSix />
            <SecSeven />
            <SecEight />

            <Footer />
        </div>
    );
};

export default MainPage;
