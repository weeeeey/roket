import { Title } from '@/components/title';
import React, { ReactNode } from 'react';

const ContentsLayout = ({ children }: { children: ReactNode }) => {
    return <div className="w-full h-full mt-20 text-red-500  ">{children}</div>;
};

export default ContentsLayout;
