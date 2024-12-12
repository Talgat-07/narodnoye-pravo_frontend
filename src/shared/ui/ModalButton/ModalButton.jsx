/* eslint-disable react/prop-types*/
import s from './ModalButton.module.scss'
import { Typography } from '../Typography/Typography';

export const ModalButton = ({ onClick, text, icon }) => {
    // if (!href) return null;
    if (!onClick) return null;

    return (
        <a className={s.link} onClick={onClick} rel="noopener noreferrer">
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

