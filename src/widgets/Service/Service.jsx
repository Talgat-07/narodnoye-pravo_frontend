import style from './Service.module.scss'
import { Typography } from 'shared/ui/Typography/Typography';
import { ServiceCard } from 'shared/ui/ServiceCard/ServiceCard';
import { Link } from 'react-router-dom';
import { path } from 'shared/constants/constants';
import { Container } from 'shared/ui/Container/Container';
import img1 from 'shared/assets/img/service1.webp'
import img2 from 'shared/assets/img/service2.webp'
import img3 from 'shared/assets/img/service3.webp'
import img4 from 'shared/assets/img/service4.webp'
import img5 from 'shared/assets/img/service5.webp'
import img6 from 'shared/assets/img/service6.webp'
import img7 from 'shared/assets/img/service7.webp'
import img8 from 'shared/assets/img/service8.webp'
import img9 from 'shared/assets/img/service9.webp'
import PropTypes from 'prop-types'
import { Button } from 'shared/ui/Button/Button';

export const Service = ({ weight, withButton = true, cardWrapClassName = '' }) => {

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

    return (
        <Container>
            <section className={style.service}>
                <Typography
                    className={style.title}
                    variant='h3'
                    weight={weight}>
                    Услуги
                </Typography>
                <div className={`${style.cardWrap} ${cardWrapClassName ? style[cardWrapClassName] : ''}`}>
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
                        <Button
                            className='linkBtn'
                            variant='span'
                            lineHeight='lineSemiTight'
                            weight='semibold'
                            color='azure'>
                            Подробнее
                        </Button>
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
