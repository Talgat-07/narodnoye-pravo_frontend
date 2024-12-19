import { path } from "shared/constants/constants";
import { Link } from "react-router-dom";
import { Typography } from "shared/ui/Typography/Typography";
import s from "./Header.module.scss"
import { ContactModal } from 'features/СontactModal/ui/ContactModal/ContactModal';
import { useContactModal } from 'features/СontactModal/model/useContactModal';
import { Button } from "shared/ui/Button/Button";
import { HeaderLogo } from "shared/assets/icons/HeaderLogo";

export const Header = () => {

    const { isOpen, openModal, closeModal } = useContactModal();

    const navLinks = [
        { path: path.about, label: "О нас" },
        { path: path.services, label: "Услуги" },
        { path: path.legislativenews, label: "Новости" },
        { path: path.analyticandpublications, label: "Научные статьи" },
        { path: path.education, label: "Обучение" },
        { path: path.bankvacancy, label: "Вакансии" },
        { path: path.contacts, label: "Контакты" },
    ];

    return (
        <div className={s.container}>
            <header className={s.header}>

                <a href={path.home}>
                    <HeaderLogo />
                </a>
                <nav>
                    <ul className={s.list}>
                        {
                            navLinks.map(el => (
                                <li className={s.li} key={el.path}>

                                    <Link to={el.path}>
                                        <Typography
                                            className={s.typo}
                                            variant='bodyM'>
                                            {el.label}
                                        </Typography>
                                    </Link>

                                </li>
                            ))
                        }
                    </ul>

                </nav>
                <Button
                    onClick={openModal}
                    className={s.button}
                    variant='span'
                    weight='semibold'
                    color='white'
                    lineHeight='lineTight'
                    children='Оставить заявку' />

                <ContactModal isOpen={isOpen} closeModal={closeModal} />

                <select className={s.lang}>
                    <option value="ru">RU</option>
                    <option value="kg">KG</option>
                </select>


            </header>
        </div>
    );
};
