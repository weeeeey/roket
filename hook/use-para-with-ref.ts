import { MotionValue, useScroll, useTransform } from 'framer-motion';
import React from 'react';

const useParaWithRef = (
    ref: React.RefObject<HTMLDivElement>,
    distance: number
) => {
    const { scrollYProgress } = useScroll({ target: ref });
    return useTransform(scrollYProgress, [0, 1], [-distance, distance]);
};

export default useParaWithRef;
