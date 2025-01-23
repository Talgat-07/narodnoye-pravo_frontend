import { Typography } from 'shared/ui//Typography/Typography'
import styles from './SuccessWindow.module.scss'
import { Button } from 'shared/ui/Button/Button'
import successImg from 'shared/assets/img/Success.png'
import { Close } from 'shared/assets/icons/Close'

export const SuccessWindow = () => {

    return (
        <div className={styles.wrap}>
            <button className={styles.close}>
                <Close />
            </button>
            <img src={successImg} alt="success image" />
            <Typography
                className={styles.title}
                variant='h5'
                weight='semibold'
                color='darkBlue'
            >
                Спасибо за Вашу заявку!
            </Typography>
            <Typography
                className={styles.text}
                variant='bodyM'
                weight='regular'
                color='dark'
                lineHeight='lineDefault'
            >
                Мы получили ваши данные. Наш менеджер свяжется с вами в     ближайшее время.
            </Typography>
            <Button
                className='successBtn'
                variant='span'
                weight='semibold'
                lineHeight='lineCompact'
                color='white'
            >
                Закрыть
            </Button>
        </div>
    )
}


