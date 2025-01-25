import styles from './ServicePage.module.scss'
import { Typography } from 'shared/ui/Typography/Typography';
import { ServiceCard } from 'shared/ui/ServiceCard/ServiceCard';
import { Container } from 'shared/ui/Container/Container';
import { useServicesStore } from 'entities/store/servicesStore/servicesStore';

export const ServicePage = () => {
    const { services, error } = useServicesStore()

    if (error) return <div>Ошибка: {error}</div>

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
                    {services.map((service) => (
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
            </section>
        </Container>
    );
};


