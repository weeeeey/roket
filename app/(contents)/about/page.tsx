'use client';
import { contens } from '@/components/about/about-data';
import { AboutFirst } from '@/components/about/about-first';
import { AboutFooter } from '@/components/about/about-footer';
import { Title } from '@/components/title';
import React, { useEffect, useState } from 'react';

const AboutPage = () => {
    const [selectedIdx, setselectedIdx] = useState(-1);

    const containerRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        containerRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }, []);

    const handleClick = (
        idx: number,
        ref: React.RefObject<HTMLButtonElement>
    ) => {
        if (idx === selectedIdx) {
            setselectedIdx(-1);
        } else {
            setselectedIdx(idx);
        }
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <div ref={containerRef}>
            <Title img={false} />

            {contens.map((content, idx) => (
                <AboutFirst
                    onClick={handleClick}
                    key={idx}
                    idx={idx}
                    bg={idx === 0 ? 'bg-red-500' : ''}
                    {...content}
                    full={idx === 0}
                    selectedIdx={selectedIdx}
                />
            ))}

            <div className="transition-all duration-500 -translate-y-80">
                <AboutFooter />
            </div>
        </div>
    );
};

export default AboutPage;
