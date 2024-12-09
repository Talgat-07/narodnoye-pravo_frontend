import React from 'react';
import s from './ModalButton.module.scss'
import { Typography } from '../Typography/Typography';

export const ModalButton = ({ href, text, icon }) => {
    if (!href) return null;

    return (
        <a className={s.link} href={href} target="_blank" rel="noopener noreferrer">
            <Typography
                variant='bodyM'
                weight='semibold'
                lineHeight='lineSemiTight'
                color='blue'>
                {text}
            </Typography>
            {icon && <span className={s.icon}>{icon}</span>}
        </a>
    );
};

