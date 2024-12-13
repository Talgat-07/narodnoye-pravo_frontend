/* eslint-disable react/prop-types*/
import { Arrow } from 'shared/assets/icons/Arrow';
import { Typography } from '../Typography/Typography';
import s from './Breadcrumbs.module.scss'
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
}


export const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <nav className={s.breadcrumbs}>
            <Link to="/">
                <Typography
                    className={s.title}
                    variant='bodyM'
                    weight='regular'
                    color='lightGrey'>
                    Главная
                </Typography>
            </Link>
            {pathnames.map((value, index) => {
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                return (
                    <span key={to} className={s.right}>
                        {/* {' > '} */}
                        <Arrow />
                        {routesMap[to] ? (
                            <Link to={to}>
                                <Typography
                                    variant='bodyM'
                                    weight='regular'
                                    color='lightGrey'>
                                    {routesMap[to]}
                                </Typography>
                            </Link>
                        ) : (
                            value
                        )}
                    </span>
                );
            })}
        </nav>
    );
};
