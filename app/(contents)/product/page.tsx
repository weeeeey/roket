'use client';
import { Footer } from '@/components/footer';
import { ProMain } from '@/components/product/pro-main';
import { Title } from '@/components/title';
import React, { useEffect } from 'react';

const product = [
    'Cleverpup',
    'Ullo Open',
    'Eku Tools',
    'Eku Slices',
    'Stojo',
    'True Places',
    'Bowl',
    'Buoy',
    'Float',
    'Bottle',
    'Double Twelve',
    'Glow Bento',
];

const ProductPage = () => {
    return (
        <>
            <Title />
            <ProMain arr={product} />
            <Footer />
        </>
    );
};

export default ProductPage;
