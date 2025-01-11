import { Link, useParams } from 'react-router-dom';
import styles from './ServiceDetail.module.scss';
import { Typography } from 'shared/ui/Typography/Typography';
import { path } from 'shared/constants/constants';
import { Container } from 'shared/ui/Container/Container';
import { ServiceCard } from 'shared/ui/ServiceCard/ServiceCard';
import { Button } from 'shared/ui/Button/Button';
import { useServicesStore } from 'shared/store/servicesStore';
import { useEffect } from 'react';
import { CircleLoader } from '../Loader/CircleLoader';

export const ServiceDetail = () => {
    const { id } = useParams();


    const { services, isLoading, error, fetchServices } = useServicesStore();

    useEffect(() => {
        if (!services || services.length === 0) {
            fetchServices();
        }
    }, [services, fetchServices]);

    if (isLoading) {
        return <CircleLoader />
    }

    if (error) return <div>Ошибка: {error}</div>

    const currentServiceId = parseInt(id, 10);
    const service = services.find((item) => item.id === currentServiceId);

    if (!service) {
        return <p>Услуга не найдена</p>;
    }
    const relatedServices = services
        .filter((item) => item.id !== currentServiceId)
        .slice(0, 3);

    return (
        <Container>
            <div className={styles.serviceDetail}>
                <div className={styles.wrap}>
                    <Typography
                        className={styles.title}
                        variant="h3"
                        weight='semibold'
                    >
                        {service.title}
                    </Typography>
                    <Typography
                        className={styles.description}
                        variant="bodyXXL"
                        weight='regular'
                        lineHeight='lineLarge'
                        color='blue'
                    >
                        {service.subtitle}
                    </Typography>
                    <Typography
                        className={styles.text}
                        variant="bodyXXL"
                        weight='regular'
                        lineHeight='lineLarge'
                    >
                        {service.text}
                    </Typography>
                    <Link
                        to={path.services}
                        className={styles.linkService}
                    >
                        <Button
                            className='serviceBtn'
                            variant='span'
                            weight='semibold'
                            lineHeight='lineSemiTight'
                            color='white'
                        >
                            Вернуться к услугам
                        </Button>
                    </Link>
                </div>

                <Typography
                    className={styles.lineText}
                    variant="h5"
                    weight='bold'
                >
                    Другие услуги
                </Typography>
                <div className={styles.relatedServices}>
                    {relatedServices.map((relatedService) => (
                        <ServiceCard
                            key={relatedService.id}
                            id={relatedService.id}
                            title={relatedService.title}
                            subtitle={relatedService.subtitle}
                            img={relatedService.image}
                        />
                    ))}
                </div>
            </div>
        </Container>
    );
};

