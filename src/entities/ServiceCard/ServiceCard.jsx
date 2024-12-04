import React from 'react';
import s from './ServiceCard.module.scss'
import { Typography } from '../../shared/ui/Typography/Typography';
import { Link } from 'react-router-dom';
import { path } from 'shared/constants/constants';

export const ServiceCard = ({ id, title, description }) => {
    return (
        <Link to={path.services} className={s.seviceCard}>
            <div className={s.content}>
                <Typography
                    className={s.title}
                    variant='p'
                    styleType='Regular'
                    color='white'
                >
                    {title}
                </Typography>
                <Typography
                    className={s.description}
                    variant='p'
                    styleType='Little'
                    color='white'
                    lineHeight='lineNormal'
                >
                    {description}
                </Typography>
            </div>
        </Link>

    );
};
