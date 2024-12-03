
import s from './Service.module.scss'
import { Typography } from 'shared/ui/Typography/Typography';
import { ServiceCard } from 'entities/ServiceCard/ServiceCard';
import { Link } from 'react-router-dom';
import { path } from 'shared/constants/constants';
import { Arrow } from 'shared/assets/icons/Arrow';

export const Service = () => {
    return (
        <section className={s.service}>
            <Typography
                variant='h3'
                weight='bold'
                color='black'>
                Услуги
            </Typography>
            <div className={s.cardWrap}>
                {Array.from({ length: 9 }, (_, index) => (
                    <ServiceCard key={index} />
                ))}
            </div>
            <Link to={path.services}>
                <Typography
                    className={s.text}
                    variant='p'
                    styleType='Medium'
                    lineHeight='lineLittle'
                    color='blue'>
                    Узнать подробнее
                    <Arrow />
                </Typography>
            </Link>
        </section>
    );
};
