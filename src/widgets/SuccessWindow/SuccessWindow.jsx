import { useRef } from 'react';
import PropTypes from 'prop-types';
import { Typography } from 'shared/ui/Typography/Typography';
import styles from './SuccessWindow.module.scss';
import { Button } from 'shared/ui/Button/Button';
import successImg from 'shared/assets/img/Success.png';
import { Close } from 'shared/assets/icons/Close';
import { useClickOutside } from 'shared/lib/hooks/hooks';

export const SuccessWindow = ({ closeWindow }) => {
    const windowRef = useRef(null);

    useClickOutside(windowRef, closeWindow);

    return (
        <div className={styles.overlay}>
            <div className={styles.wrap} ref={windowRef}>
                <button className={styles.close} onClick={closeWindow}>
                    <Close />
                </button>
                <img src={successImg} alt="success image" />
                <Typography
                    className={styles.title}
                    variant="h5"
                    weight="semibold"
                    color="darkBlue"
                >
                    Спасибо за Вашу заявку!
                </Typography>
                <Typography
                    className={styles.text}
                    variant="bodyM"
                    weight="regular"
                    color="dark"
                    lineHeight="lineDefault"
                >
                    Мы получили ваши данные. Наш менеджер свяжется с вами в ближайшее время.
                </Typography>
                <Button
                    className="successBtn"
                    variant="span"
                    weight="semibold"
                    lineHeight="lineCompact"
                    color="white"
                    onClick={closeWindow}
                >
                    Закрыть
                </Button>
            </div>
        </div>
    );
};

SuccessWindow.propTypes = {
    closeWindow: PropTypes.func.isRequired,
};
