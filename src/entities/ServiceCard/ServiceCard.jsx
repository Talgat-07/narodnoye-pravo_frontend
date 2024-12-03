import React from 'react';
import s from './ServiceCard.module.scss'
import { Typography } from '../../shared/ui/Typography/Typography';
import { Link } from 'react-router-dom';
import { path } from 'shared/constants/constants';

export const ServiceCard = () => {
    return (
        <Link to={path.services}
            className={s.seviceCard}>
            <Typography
                className={s.text}
                variant='p'
                styleType='Regular'
                color='white'>
                Lorem ipsum dolor sit amet
            </Typography>
        </Link>
    );
};
