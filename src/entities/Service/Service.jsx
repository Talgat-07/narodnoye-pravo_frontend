import s from './Service.module.scss'
import { Typography } from 'shared/ui/Typography/Typography';
import { ServiceCard } from 'shared/ui/ServiceCard/ServiceCard';
import { Link } from 'react-router-dom';
import { path } from 'shared/constants/constants';
import { ButtonLink } from 'shared/ui/ButtonLink/ButtonLink';
import { Container } from 'shared/ui/Container/Container';
import img1 from 'shared/assets/img/service1.png'
import img2 from 'shared/assets/img/service2.png'
import img3 from 'shared/assets/img/service3.png'
import img4 from 'shared/assets/img/service4.png'
import img5 from 'shared/assets/img/service5.png'
import img6 from 'shared/assets/img/service6.png'
import img7 from 'shared/assets/img/service7.png'
import img8 from 'shared/assets/img/service8.png'
import img9 from 'shared/assets/img/service9.png'
import PropTypes from 'prop-types'
import useServicesStore from 'shared/store/servicesStore';
import { useEffect } from 'react';

export const Service = ({ weight, withButton = true, cardWrapClassName = '' }) => {
    const { services, isLoading, error, fetchServices } = useServicesStore()

    useEffect(() => {
        fetchServices()
    }, [fetchServices])

    if (isLoading) return <div>Загрузка...</div>
    if (error) return <div>Ошибка: {error}</div>

    const mockService = [
        {
            id: 1,
            title: 'Консультирование',
            description: 'Устные и письменные консультации по любым правовым вопросам',
            img: img1,
        },
        {
            id: 2,
            title: 'Договорная работа',
            description: 'Разработка и правовая экспертиза гражданско-правовых договоров',
            img: img2,
        },
        {
            id: 3,
            title: 'Представительство',
            description: 'Представление интересов в органах государственной власти, в том числе, в суде',
            img: img3,
        },
        {
            id: 4,
            title: 'Сопровождение',
            description: 'Юридическое сопровождение хозяйствующих субъектов',
            img: img4,
        },
        {
            id: 5,
            title: 'Аудит',
            description: 'Правовой аудит деятельности хозяйствующих субъектов',
            img: img5,
        },
        {
            id: 6,
            title: 'Кадровый учет',
            description: 'Организация и ведение кадрового учета',
            img: img6,
        },
        {
            id: 7,
            title: 'Бухгалтерский учет',
            description: 'Организация и ведение бухгалтерского учета',
            img: img7,
        },
        {
            id: 8,
            title: 'Планирование',
            description: 'Стратегическое планирование бизнес-процессов',
            img: img8,
        },
        {
            id: 9,
            title: 'Лицензирование',
            description: 'Юридическое сопровождение получения лицензий и разрешений',
            img: img9,
        },
    ]

    console.log(services)
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
                            id={servItem.id}
                            title={servItem.title}
                            description={servItem.description}
                            img={servItem.img} />
                    ))}
                    {/* {services.map((service) => (
                        <ServiceCard
                            key={service.id}
                            id={service.id}
                            title={service.title_ru}
                            description={service.text_ru}
                            img={service.image}
                        />
                    ))} */}
                </div>
                {withButton && (
                    <Link to={path.services}>
                        <ButtonLink
                            variant='span'
                            lineHeight='lineSemiTight'
                            weight='semibold'
                            color='azure'
                            children='Подробнее' />
                    </Link>
                )}
            </section>
        </Container>
    );
};

Service.propTypes = {
    weight: PropTypes.oneOf(['light', 'regular', 'semibold', 'bold']),
    withButton: PropTypes.bool,
    cardWrapClassName: PropTypes.string,
}
