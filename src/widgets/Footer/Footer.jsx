import { path } from "shared/constants/constants";
import { Link, useLocation } from "react-router-dom";
import { Typography } from "shared/ui/Typography/Typography";
import { Phone } from "shared/assets/icons/Phone";
import Email from "shared/assets/icons/Email";
import { Location } from "shared/assets/icons/Location";
import logo from '../../shared/assets/img/logo.webp'
import { WhatsApp } from "shared/assets/icons/WhatsApp";
import { Instagram } from "shared/assets/icons/Instagram";
import { Facebook } from "shared/assets/icons/Facebook";
import { Telegram } from "shared/assets/icons/Telegram";
import { Youtube } from "shared/assets/icons/Youtube";
import s from './Footer.module.scss'

export const Footer = () => {
    const location = useLocation()

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
    // это если нужно все же делать map
    // const contacts = [
    //     { type: 'phone', value: '+996 (550) 18-87-77' },
    //     { type: 'phone', value: '+996 (702) 18-87-77' },
    //     { type: 'email', value: 'N.pravo2018@gmail.com' },
    // ]
    return (
        <footer className={s.footer}>
            <div className={s.up} >
                <div className={s.left}>
                    <img src={logo} alt='"Народное право" логотип' />
                    <ul className={s.footerUl}>
                        {
                            navLinks.map(el => (
                                <li key={el.path}>
                                    <Link to={el.path}>
                                        <Typography
                                            variant='p'
                                            styleType={location.pathname === el.path ? 'Big' : 'Small'}
                                            weight={location.pathname === el.path ? 'bold' : 'regular'}>
                                            {el.label}
                                        </Typography>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className={s.middle}>
                    <Typography
                        variant='p'
                        styleType='Big'
                        weight='bold'
                    >
                        КОНТАКТЫ
                    </Typography>
                    {/* если здесь делать map не понимаю как стилизовать это */}
                    {/* <Phone />
                    {contacts.map((contact, index) => (
                        <Typography
                            key={index}
                            variant="p"
                            styleType="Small"
                            weight="regular">
                            {contact.type === "phone" ? (' ') : (<Email />)}
                            {' '}
                            {contact.value}
                        </Typography>
                    ))} */}
                    <div className={s.phoneWrap}>
                        <Phone />
                        <div className={s.phone}>
                            <Typography
                                variant="p"
                                styleType="Small"
                                weight="regular">
                                +996 (550) 18-87-77
                            </Typography>
                            <Typography
                                variant="p"
                                styleType="Small"
                                weight="regular">
                                +996 (702) 18-87-77
                            </Typography>
                        </div>
                    </div>
                    <div className={s.email}>
                        <Email />
                        <Typography
                            className={s.emalSvg}
                            variant="p"
                            styleType="Small"
                            weight="regular">
                            N.pravo2018@gmail.com
                        </Typography>
                    </div>
                </div>
                <div className={s.right}>
                    <Typography
                        variant='p'
                        styleType='Big'
                        weight='bold'
                    >
                        АДРЕС
                    </Typography>
                    <div className={s.addressWrap}>
                        <Location />
                        <Typography
                            className={s.address}
                            variant="p"
                            styleType="Small"
                            weight="regular">
                            Кыргызская Республика,
                            город Бишкек,
                            ул. Токтогула, 87,
                            4 этаж
                        </Typography>
                    </div>
                </div>
            </div>
            <div className={s.down}>
                <WhatsApp />
                <Instagram />
                <Facebook />
                <Telegram />
                <Youtube />
            </div>
            <div className={s.geeks}>
                <Typography
                    className={s.geeksLogo}
                    variant='p'
                    styleType='Logo'
                    weight='meddium'>
                    Made by GeeksPro
                </Typography>
            </div>
        </footer>
    );
};

