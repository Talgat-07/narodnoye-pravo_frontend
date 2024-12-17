/* eslint-disable react/prop-types*/
import { path } from "shared/constants/constants";
import { Link } from "react-router-dom";
import { Typography } from "shared/ui/Typography/Typography";
import logo from '../../shared/assets/img/logo.png'
import s from "./Header.module.scss"
import { ContactModal } from 'features/СontactModal/ui/ContactModal/ContactModal';
import { useContactModal } from 'features/СontactModal/model/useContactModal';

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

                <a href={path.home}><img className={s.logo} src={logo} alt="'народное право' логотип" /></a>
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

                <button className={s.button} onClick={openModal}>
                    <Typography
                        variant='p'
                        styleType='Medium'
                        color='white'
                        lineHeight='lineLittle'
                        fontFamily='default'>
                        Оставить заявку
                    </Typography>
                </button>

                <ContactModal isOpen={isOpen} closeModal={closeModal} />

                <select className={s.lang}>
                    <option value="ru">RU</option>
                    <option value="kg">KG</option>
                </select>


            </header>
        </div>
    );
};
