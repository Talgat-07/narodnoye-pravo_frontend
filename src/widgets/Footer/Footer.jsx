import { path } from "shared/constants/constants";
import { Link, useLocation } from "react-router-dom";
import { Typography } from "shared/ui/Typography/Typography";
import { Phone } from "shared/assets/icons/Phone";
import Email from "shared/assets/icons/Email";
import { Location } from "shared/assets/icons/Location";
import logo from '../../shared/assets/img/logo.png'
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
                    <img className={s.footerImg} src={logo} alt='"Народное право" логотип' />
                    <ul className={s.footerUl}>
                        {
                            navLinks.map(el => (
                                <li className={s.footerLi} key={el.path}>
                                    <Link to={el.path}>
                                        <Typography
                                            variant={location.pathname === el.path ? 'bodyXL' : 'bodyM'}
                                            weight={location.pathname === el.path ? 'bold' : 'regular'}
                                            color='black'>
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
                        variant='bodyXL'
                        weight='bold'
                        lineHeight='height'
                        color='black'
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
                            <a href="tel:+996550188777">
                                <Typography
                                    variant="bodyM"
                                    weight="regular"
                                    color='black'>
                                    +996 (550) 18-87-77
                                </Typography>
                            </a>
                            <a href="tel:+996702188777">
                                <Typography
                                    variant="bodyM"
                                    weight="regular"
                                    color='black'>
                                    +996 (702) 18-87-77
                                </Typography>
                            </a>
                        </div>
                    </div>
                    <div className={s.email}>
                        <Email />
                        <a href="mailto:N.pravo2018@gmail.com">
                            <Typography
                                className={s.emalSvg}
                                variant="bodyM"
                                weight="regular"
                                color='black'>
                                N.pravo2018@gmail.com
                            </Typography>
                        </a>
                    </div>
                </div>
                <div className={s.right}>
                    <Typography
                        variant='bodyXL'
                        weight='bold'
                        color='black'
                    >
                        АДРЕС
                    </Typography>
                    <div className={s.addressWrap}>
                        <Location />
                        <Typography
                            className={s.address}
                            variant="bodyM"
                            weight="regular"
                            lineHeight='lineModerate'
                            color='black'>
                            Кыргызская Республика,
                            город Бишкек,<br />
                            ул. Токтогула, 87,<br />
                            4 этаж
                        </Typography>
                    </div>
                </div>
            </div >
            <div className={s.down} >
                <WhatsApp />
                <Instagram />
                <Facebook />
                <Telegram />
                <Youtube />
            </div >
            <div className={s.geeks}>
                <Typography
                    className={s.geeksLogo}
                    variant='bodyS'
                    weight='medium'>
                    Made by GeeksPro
                </Typography>
            </div>
        </footer >
    );
};

