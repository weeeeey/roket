import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Rocket',
    description: 'Interactive Action Project',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <body
                className={`${inter.className} h-[calc(100%-5rem)] min-w-[1280px]`}
            >
                <Navbar />

                {children}
                {/* <LenisProvidert>{children}</LenisProvidert> */}
            </body>
        </html>
    );
}
