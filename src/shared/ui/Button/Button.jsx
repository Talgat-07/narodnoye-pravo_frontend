/* eslint-disable react/prop-types*/
import s from './Button.module.scss'
import { Typography } from '../Typography/Typography';

export const Button = ({ onClick, children }) => {
    return (
        <button className={s.btn} onClick={onClick}>
            <Typography
                variant='p'
                styleType='Medium'
                color='white'
                lineHeight='lineLittle'
                fontFamily='default'>
                {children}
            </Typography>
        </button>
    );
};
