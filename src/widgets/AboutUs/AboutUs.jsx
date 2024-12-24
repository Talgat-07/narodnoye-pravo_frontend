import { Typography } from 'shared/ui/Typography/Typography';
import aboutUs from 'shared/assets/img/AboutUs.webp'
import style from './AboutUs.module.scss'
import { Link } from 'react-router-dom';
import { path } from 'shared/constants/constants';
import { Button } from 'shared/ui/Button/Button';


export function AboutUs() {
    return (
        <div className={style.aboutUs}>
            <Typography
                className={style.title}
                variant='h3'
                weight='bold'>
                О нас
            </Typography>
            <div className={style.main}>
                <img className={style.image} src={aboutUs} alt='сотрудники компании' />
                <div className={style.text}>
                    <Typography
                        variant='bodyL'
                        weight='regular'
                        lineHeight='lineBig'>
                        <strong>Юридическая компания «Народное право»</strong> — компания, созданная в 2008 году.
                        За время своего существования прошла успешный путь и в настоящее время
                        занимает устойчивое положение на рынке юридических услуг.
                    </Typography>
                    <Typography
                        variant='bodyL'
                        weight='regular'
                        lineHeight='lineBig'>
                        <strong>Основная цель нашей компании </strong> — сделать юридические услуги доступными для всех.
                        Для нас не бывает мелких вопросов и незначительных просьб. Мы понимаем, что каждый
                        человек в процессе своей жизни может столкнуться с правовой проблемой, и готовы
                        оказать необходимую юридическую помощь — проконсультировать, разъяснить, представить интересы.
                    </Typography>
                </div>
            </div>
            <Link to={path.about}>
                <Button
                    className='linkBtn'
                    variant='span'
                    lineHeight='lineSemiTight'
                    weight='semibold'
                    color='azure'>
                    Подробнее
                </Button>
            </Link>
        </div>
    );
}

