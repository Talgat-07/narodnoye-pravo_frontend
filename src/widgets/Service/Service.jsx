
import s from './Service.module.scss'
import { Typography } from 'shared/ui/Typography/Typography';
import { ServiceCard } from 'entities/ServiceCard/ServiceCard';
import { Link } from 'react-router-dom';
import { path } from 'shared/constants/constants';
// import { Arrow } from 'shared/assets/icons/Arrow';
import { ButtonLink } from 'shared/ui/ButtonLink/ButtonLink';

export const Service = () => {
    const mockService = [
        {
            id: 1,
            title: 'Услуга №1',
            description: "Lorem ipsum dolor sit amet consectetur. Laoreet sed neque commodo turpis gravida tellus nulla lacus. Facilisis proin est in velit blandit varius massa. Leo tellus adipiscing in vulputate.",
        },
        {
            id: 2,
            title: 'Услуга №1',
            description: "Lorem ipsum dolor sit amet consectetur. Laoreet sed neque commodo turpis gravida tellus nulla lacus. Facilisis proin est in velit blandit varius massa. Leo tellus adipiscing in vulputate.",
        },
        {
            id: 3,
            title: 'Услуга №1',
            description: "Lorem ipsum dolor sit amet consectetur. Laoreet sed neque commodo turpis gravida tellus nulla lacus. Facilisis proin est in velit blandit varius massa. Leo tellus adipiscing in vulputate.",
        },
        {
            id: 4,
            title: 'Услуга №1',
            description: "Lorem ipsum dolor sit amet consectetur. Laoreet sed neque commodo turpis gravida tellus nulla lacus. Facilisis proin est in velit blandit varius massa. Leo tellus adipiscing in vulputate.",
        },
        {
            id: 5,
            title: 'Услуга №1',
            description: "Lorem ipsum dolor sit amet consectetur. Laoreet sed neque commodo turpis gravida tellus nulla lacus. Facilisis proin est in velit blandit varius massa. Leo tellus adipiscing in vulputate.",
        },
        {
            id: 6,
            title: 'Услуга №1',
            description: "Lorem ipsum dolor sit amet consectetur. Laoreet sed neque commodo turpis gravida tellus nulla lacus. Facilisis proin est in velit blandit varius massa. Leo tellus adipiscing in vulputate.",
        },
        {
            id: 7,
            title: 'Услуга №1',
            description: "Lorem ipsum dolor sit amet consectetur. Laoreet sed neque commodo turpis gravida tellus nulla lacus. Facilisis proin est in velit blandit varius massa. Leo tellus adipiscing in vulputate.",
        },
        {
            id: 8,
            title: 'Услуга №1',
            description: "Lorem ipsum dolor sit amet consectetur. Laoreet sed neque commodo turpis gravida tellus nulla lacus. Facilisis proin est in velit blandit varius massa. Leo tellus adipiscing in vulputate.",
        },
        {
            id: 9,
            title: 'Услуга №1',
            description: "Lorem ipsum dolor sit amet consectetur. Laoreet sed neque commodo turpis gravida tellus nulla lacus. Facilisis proin est in velit blandit varius massa. Leo tellus adipiscing in vulputate.",
        },
    ]
    return (
        <section className={s.service}>
            <Typography
                variant='h3'
                weight='bold'
                color='black'>
                Услуги
            </Typography>
            {/* <div className={s.cardWrap}>
                {Array.from({ length: 9 }, (_, index) => (
                    <ServiceCard key={index} />
                ))}
            </div> */}
            <div className={s.cardWrap}>
                {mockService.map(servItem => (
                    <ServiceCard
                        key={servItem.id}
                        title={servItem.title}
                        description={servItem.description} />
                ))}
            </div>
            <Link to={path.services}>
                <ButtonLink />
            </Link>
        </section>
    );
};
