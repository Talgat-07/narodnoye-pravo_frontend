import { Typography } from 'shared/ui/Typography/Typography';
import styles from './AboutUs.module.scss'
import { Link } from 'react-router-dom';
import { path } from 'shared/constants/constants';
import { Button } from 'shared/ui/Button/Button';
import { useAboutUsStore } from 'entities/store/aboutUsStore/aboutUsStore';
import { Container } from 'shared/ui/Container/Container';


export function AboutUs() {
    const { title1, text1, title2, text2, error, image } = useAboutUsStore()

    if (error) return <div>Ошибка... {error}</div>

    return (
        <Container>
            <div className={styles.aboutUs}>
                <Typography
                    className={styles.title}
                    variant='h3'
                    weight='bold'>
                    О нас
                </Typography>
                <div className={styles.main}>
                    <div className={styles.back}></div>
                    <div className={styles.imageWrap}>
                        <img
                            className={styles.image}
                            src={image}
                            alt='сотрудники компании'
                        />
                    </div>
                    <div className={styles.text}>
                        <div className={styles.textUp}>
                            <Typography
                                variant='bodyLL'
                                weight='semibold'
                                lineHeight='lineBig'
                                className={styles.titleUp}
                            >
                                {title1}
                            </Typography>
                            <Typography
                                className={styles.titleDown}
                                variant='bodyLL'
                                weight='regular'
                                lineHeight='lineBig'
                            >
                                {text1}
                            </Typography>
                        </div>
                        <div className={styles.textDown}>
                            <Typography
                                variant='bodyLL'
                                weight='semibold'
                                lineHeight='lineBig'
                                className={styles.titleUp}
                            >
                                {title2}
                            </Typography>
                            <Typography
                                className={styles.titleDown}
                                variant='bodyLL'
                                weight='regular'
                                lineHeight='lineBig'
                            >
                                {text2}
                            </Typography>
                        </div>
                    </div>
                </div>
                <Link to={path.about}>
                    <Button
                        className='linkBtn'
                        variant='span'
                        lineHeight='lineSemiTight'
                        weight='semibold'
                        color='blue'>
                        Подробнее
                    </Button>
                </Link>
            </div>
        </Container>
    );
}

