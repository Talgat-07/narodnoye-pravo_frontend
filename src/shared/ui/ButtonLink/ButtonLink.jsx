import React from 'react';
import s from './ButtonLink.module.scss'
import { Typography } from '../Typography/Typography';

export const ButtonLink = () => {
    return (
        <button className={s.btn}>
            <Typography
                variant='p'
                styleType='Little'
                lineHeight='lineSmall'
                weight='normal'
                color='blue'
            >
                Подробнее
            </Typography>
        </button>
    );
};
