import { Arrow } from 'shared/assets/icons/Arrow';
import { Typography } from 'shared/ui/Typography/Typography';
import styles from './Breadcrumbs.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { routesMap } from 'shared/constants/constants'
import { useNewsStore } from 'entities/store/newsStore/newsStore';
import { useServicesStore } from 'entities/store/servicesStore/servicesStore';
import { useEffect } from 'react';

export const Breadcrumbs = () => {
    const location = useLocation();

    const pathnames = location.pathname.split('/').filter(Boolean)

    const { services, fetchServices } = useServicesStore()

    const { news, fetchAllNews } = useNewsStore()
    useEffect(() => {
        fetchServices();
        fetchAllNews();
    }, [fetchServices, fetchAllNews])

    if (location.pathname === '/') {
        return null;
    }

    if (!pathnames.length) {
        return null;
    }
    return (
        <nav className={styles.breadcrumbs} aria-label="breadcrumb">
            <Link to="/">
                <Typography
                    className={styles.title}
                    variant="bodyM"
                    weight="regular"
                >
                    Главная
                </Typography>
            </Link>

            {pathnames.map((value, index) => {
                const to = `/${pathnames.slice(0, index + 1).join('/')}`
                let displayName = routesMap[to];
                if (!displayName && !Number.isNaN(Number(value))) {
                    if (pathnames.includes('services')) {
                        const service = services.find(
                            (item) => item.id === parseInt(value, 10)
                        );
                        if (service) {
                            displayName = service.title;
                        }
                    }
                    if (pathnames.includes('legislativeNews')) {
                        const newsItem = news.find(
                            (item) => item.id === parseInt(value, 10)
                        );
                        if (newsItem) {
                            displayName = newsItem.title;
                        }
                    }
                }
                if (!displayName) {
                    displayName = value;
                }

                return (
                    <span key={to} className={styles.right}>
                        <Arrow />
                        <Link to={to}>
                            <Typography variant="bodyM" weight="regular">
                                {displayName}
                            </Typography>
                        </Link>
                    </span>
                );
            })}
        </nav>
    );
};