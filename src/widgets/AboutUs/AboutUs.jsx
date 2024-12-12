import { Typography } from 'shared/ui/Typography/Typography';
import aboutUs from '../../shared/assets/img/AboutUs.png'
import s from './AboutUs.module.scss'
import { Link } from 'react-router-dom';
import { path } from 'shared/constants/constants';
import { ButtonLink } from 'shared/ui/ButtonLink/ButtonLink';


export function AboutUs() {
    return (
        <div className={s.aboutUs}>
           

            <Typography
                className={s.title}
                variant='h3'
                weight='bold'>
                О нас
            </Typography>

           <div className={s.main}>

           <img className={s.image} src={aboutUs} alt='сотрудники компании' />

            <Typography
                className={s.text}
                variant='bodyM'
                weight='regular'
                color='black'
                lineHeight='lineBig'>
                    <div className={s.text1}>
                        <strong>Юридическая компания «Народное право»</strong> — компания, созданная в 2008 году.
                            За время своего существования прошла успешный путь и в настоящее время
                            занимает устойчивое положение на рынке юридических услуг.
                    </div>
                    <div className={s.text2}>
                    <strong>Основная цель нашей компании </strong> — сделать юридические услуги доступными для всех. 
                        Для нас не бывает мелких вопросов и незначительных просьб. Мы понимаем, что каждый
                        человек в процессе своей жизни может столкнуться с правовой проблемой, и готовы
                        оказать необходимую юридическую помощь — проконсультировать, разъяснить, представить интересы.
                    </div>
                        
                            
                       
            </Typography>

           </div>
          
           <Link  to={path.about}>
                <ButtonLink />
            </Link>
        </div>
    );
}

