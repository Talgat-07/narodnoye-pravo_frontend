import React from 'react';
import s from './Button.module.scss'
import { Typography } from '../Typography/Typography';

export const Button = () => {
    return (
        <button className={s.btn}>
            <Typography
                variant='p'
                styleType='Medium'
                color='white'
                lineHeight='lineLittle'
                fontFamily='default'>
                Оставить заявку
            </Typography>
        </button>
    );
};
