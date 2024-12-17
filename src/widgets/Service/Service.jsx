/* eslint-disable react/prop-types*/
import s from './Service.module.scss'
import { Typography } from 'shared/ui/Typography/Typography';
import { ServiceCard } from 'shared/ui/ServiceCard/ServiceCard';
import { Link } from 'react-router-dom';
import { path } from 'shared/constants/constants';
import { ButtonLink } from 'shared/ui/ButtonLink/ButtonLink';
import { Container } from 'shared/ui/Container/Container';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { servicesThunk } from 'features/Services/model/servicesThunk';

export const Service = ({ weight, withButton = true, cardWrapClassName = '' }) => {
    const dispatch = useDispatch();
    const { data, isLoading, error } = useSelector((state) => state.services);

    // useEffect(() => {
    //     dispatch(servicesThunk())
    // }, [dispatch])

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    console.log(data)

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
        <Container>
            <section className={s.service}>
                <Typography
                    className={s.title}
                    variant='h3'
                    weight={weight}>
                    Услуги
                </Typography>
                <div className={`${s.cardWrap} ${cardWrapClassName ? s[cardWrapClassName] : ''}`}>
                    {mockService.map(servItem => (
                        <ServiceCard
                            key={servItem.id}
                            title={servItem.title}
                            description={servItem.description} />
                    ))}
                </div>
                {withButton && (
                    <Link to={path.services}>
                        <ButtonLink />
                    </Link>
                )}
            </section>
        </Container>
    );
};
