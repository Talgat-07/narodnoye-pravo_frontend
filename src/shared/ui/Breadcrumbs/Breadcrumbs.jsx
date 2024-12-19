import { Arrow } from 'shared/assets/icons/Arrow';
import { Typography } from 'shared/ui/Typography/Typography';
import s from './Breadcrumbs.module.scss';
import { Link, useLocation } from 'react-router-dom';

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

export const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <nav className={s.breadcrumbs}>
            <Link to="/">
                <Typography
                    className={s.title}
                    variant="bodyM"
                    weight="regular">
                    Главная
                </Typography>
            </Link>
            {pathnames.map((value, index) => {
                if (pathnames[0] === 'services' && index > 0) return null;

                const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                const displayName = routesMap[to] || value;

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
