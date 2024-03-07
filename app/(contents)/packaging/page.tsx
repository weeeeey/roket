import { Footer } from '@/components/footer';
import { ProMain } from '@/components/product/pro-main';
import { Title } from '@/components/title';
import React from 'react';

const packaging = [
    'Nez Deodorant',
    'Gelo Bottle',
    'Hard Candy',
    'Live Tinted Hueglow',
    'Nude Skincare',
    'Kori',
    'Live Tinted',
    'Nez Deodorant Mini',
    'Gelo',
];

const PackagingPage = () => {
    return (
        <>
            <Title />
            <ProMain arr={packaging} />
            <Footer />
        </>
    );
};

export default PackagingPage;
