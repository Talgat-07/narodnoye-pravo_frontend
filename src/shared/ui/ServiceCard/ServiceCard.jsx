import React from 'react';
import s from './ServiceCard.module.scss'
import pic from '../../assets/img/service.webp'
import { Typography } from '../Typography/Typography';

export const ServiceCard = () => {
    return (
        <div className={s.seviceCard}>
            <Typography
                className={s.text}
                variant='p'
                styleType='Regular'
                color='white'>
                Lorem ipsum dolor sit amet
            </Typography>
        </div>
    );
};
