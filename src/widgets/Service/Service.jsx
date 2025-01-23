import styles from './Service.module.scss'
import { Typography } from 'shared/ui/Typography/Typography';
import { ServiceCard } from 'shared/ui/ServiceCard/ServiceCard';
import { Link } from 'react-router-dom';
import { path } from 'shared/constants/constants';
import { Container } from 'shared/ui/Container/Container';
import { Button } from 'shared/ui/Button/Button';
import { useServicesStore } from 'entities/store/servicesStore/servicesStore';

export const Service = () => {
    const { services, error } = useServicesStore()

    if (error) return <div>Ошибка: {error}</div>
    const servicesForManPage = services.slice(0, 6)
    return (
        <Container>
            <section className={styles.service}>
                <Typography
                    className={styles.title}
                    variant='h3'
                    weight='bold'>
                    Услуги
                </Typography>
                <div className={styles.cardWrap}>
                    {servicesForManPage.map((service) => (
                        <ServiceCard
                            key={service.id}
                            id={service.id}
                            title={service.title}
                            subtitle={service.subtitle}
                            description={service.text}
                            img={service.image}
                        />
                    ))}
                </div>
                <Link to={path.services}>
                    <Button
                        className='linkBtn'
                        variant='span'
                        lineHeight='lineSemiTight'
                        weight='semibold'
                        color='blue'>
                        Все услуги
                    </Button>
                </Link>
            </section>
        </Container>
    );
};


