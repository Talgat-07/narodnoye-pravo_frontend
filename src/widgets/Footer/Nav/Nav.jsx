import s from './Nav.module.scss'
import { Link } from 'react-router-dom';
import { Logo } from 'shared/assets/icons/Logo';
import { path } from 'shared/constants/constants';
import { Typography } from 'shared/ui/Typography/Typography';

export const Nav = () => {
    const navLinks = [
        { path: path.home, label: "Главная" },
        { path: path.about, label: "О нас" },
        { path: path.services, label: "Услуги" },
        { path: path.legislativenews, label: "Новости" },
        { path: path.analyticandpublications, label: "Научные статьи" },
        { path: path.education, label: "Обучение" },
        { path: path.bankvacancy, label: "Вакансии" },
        { path: path.contacts, label: "Контакты" },
    ];


    const lastPath = navLinks[0]
    const renderPath = navLinks.slice(1)

    return (
        <div className={s.left}>
            <Logo />
            <ul className={s.footerUl}>
                {lastPath && (
                    <Link to={path.home} key={path.home}>
                        <Typography
                            variant='bodyXL'
                            weight='bold'>
                            {lastPath.label}
                        </Typography>
                    </Link>
                )}
                {
                    renderPath.map(el => (
                        <li className={s.footerLi} key={el.path}>
                            <Link to={el.path} className={s.leftLink}>
                                <Typography
                                    variant="bodyM"
                                    weight="regular">
                                    {el.label}
                                </Typography>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};
