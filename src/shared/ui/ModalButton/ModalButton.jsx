/* eslint-disable react/prop-types*/
import s from './ModalButton.module.scss'
import { Typography } from '../Typography/Typography';

export const ModalButton = () => {

    return (
        <button className={s.btn}>
            <Typography
                variant='span'
                weight='semibold'
                lineHeight='lineSemiTight'
                color='white'>
                Отправить
            </Typography>
        </button>
    );
};

