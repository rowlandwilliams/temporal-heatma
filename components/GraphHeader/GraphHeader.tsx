import Image from 'next/image';
import React from 'react';
import AppIcon from '../../assets/app-icon.svg';
import { GraphSelectors } from './GraphSelectors/GraphSelectors';

interface Props {
    headerName: string;
}

export const GraphHeader = ({ headerName }: Props) => {
    return (
        <div className="flex items-center justify-between bg-header-gray p-2 rounded-t-md">
            <div className="flex items-center">
                <div className="rounded-md overflow-hidden">
                    <div className="mr-1 pt-1 w-8 h-8">
                        <Image src={AppIcon} alt="app-icon" layout="responsive" />
                    </div>
                </div>

                <div>{headerName}</div>
            </div>
            <GraphSelectors />
        </div>
    );
};
