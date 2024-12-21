import { Arrow } from 'shared/assets/icons/Arrow';
import { Typography } from 'shared/ui/Typography/Typography';
import s from './Breadcrumbs.module.scss';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types'

export const Breadcrumbs = ({ currentTitle }) => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    const routesMap = {
        '/': 'Главная',
        '/about': 'О нас',
        '/services': 'Услуги',
        '/legidslativenews': 'Новости',
        '/analyticandpublications': 'Научные статьи',
        '/education': 'Обучение',
        '/bankvacancy': 'Вакансии',
        '/contacts': 'Контакты',
    };

    return (
        <nav className={s.breadcrumbs} aria-label="breadcrumb">
            <Link to="/">
                <Typography
                    className={s.title}
                    variant="bodyM"
                    weight="regular">
                    Главная
                </Typography>
            </Link>
            {pathnames.map((value, index) => {
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                const isLast = index === pathnames.length - 1;
                const displayName = routesMap[to] || value;

                if (isLast && currentTitle) {
                    return (
                        <span key="current" className={s.right} aria-current="page">
                            <Arrow />
                            <Typography
                                variant="bodyM"
                                weight="regular">
                                {currentTitle}
                            </Typography>
                        </span>
                    );
                }

                return (
                    <span key={to} className={s.right}>
                        <Arrow />
                        <Link to={to}>
                            <Typography
                                variant="bodyM"
                                weight="regular">
                                {displayName}
                            </Typography>
                        </Link>
                    </span>
                );
            })}
        </nav>
    );
};

Breadcrumbs.propTypes = {
    currentTitle: PropTypes.string
}
