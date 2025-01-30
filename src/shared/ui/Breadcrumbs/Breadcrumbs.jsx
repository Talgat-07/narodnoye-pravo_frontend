import { Arrow } from 'shared/assets/icons/Arrow';
import { Typography } from 'shared/ui/Typography/Typography';
import styles from './Breadcrumbs.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { routesMap } from 'shared/constants/constants';
import { useNewsStore } from 'entities/store/newsStore/newsStore';
import { useServicesStore } from 'entities/store/servicesStore/servicesStore';
import { useEffect } from 'react';

export const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(Boolean);

    const { services, fetchServices } = useServicesStore();
    const { news, fetchAllNews, selectedCategory } = useNewsStore();

    useEffect(() => {
        fetchServices();
        fetchAllNews();
    }, [fetchServices, fetchAllNews]);

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
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                const isLast = index === pathnames.length - 1;
                let displayName = routesMap[to];

                if (to === '/legislativeNews') {
                    if (selectedCategory === 'kg') {
                        displayName = 'Новости законодательства Кыргызской Республики';
                    } else {
                        displayName = 'Новости законодательства зарубежных стран';
                    }
                }
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
                    <span key={to}
                        className={
                            isLast
                                ? `${styles.right} ${styles.lastCrumbContainer}`
                                : styles.right
                        }
                    >
                        <Arrow />
                        {isLast ? (
                            <Typography
                                variant="bodyM"
                                weight="regular"
                                className={styles.lastCrumbText}
                            >
                                {displayName}
                            </Typography>
                        ) : (
                            <Link to={to} className={isLast ? styles.lastCrumb : ''}>
                                <Typography variant="bodyM" weight="regular">
                                    {displayName}
                                </Typography>
                            </Link>
                        )}
                    </span>
                );
            })}
        </nav>
    );
};
