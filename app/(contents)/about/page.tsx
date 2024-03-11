'use client';
import { contens } from '@/components/about/about-data';
import { AboutFirst } from '@/components/about/about-first';
import { AboutFooter } from '@/components/about/about-footer';
import { Title } from '@/components/title';
import React, { useEffect, useState } from 'react';

const AboutPage = () => {
    const [selectedIdx, setselectedIdx] = useState(-1);

    const containerRef = React.useRef<HTMLDivElement>(null);
    const handleClick = (idx: number, ref: React.RefObject<HTMLDivElement>) => {
        if (idx === selectedIdx) {
            setselectedIdx(-1);
            if (containerRef.current) {
                containerRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            setselectedIdx(idx);
            if (ref.current) {
                console.log(ref.current);
                ref.current.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <>
            <Title img={false} />
            <div ref={containerRef}>
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
            </div>
            {/* <div
                className="transition-all duration-500 "
                style={{
                    transform: `translateY(${
                        selectedIdx === 3 ? '0' : '-2450'
                    }px)`,
                }}
            >
                <AboutFooter />
            </div> */}
        </>
    );
};

export default AboutPage;
