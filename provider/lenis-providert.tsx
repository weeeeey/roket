'use client';
import { ReactLenis } from '@studio-freight/react-lenis';

function SmoothScrolling({ children }: { children: React.ReactNode }) {
    return (
        <ReactLenis root options={{ duration: 2 }}>
            {children}
        </ReactLenis>
    );
}

export default SmoothScrolling;
