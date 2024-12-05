import React from 'react';

export const Close = (props) => {
    const { width = '16', height = '16' } = props
    return (
        <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 8L15 15M8 8L1 1M8 8L1 15M8 8L15 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};
