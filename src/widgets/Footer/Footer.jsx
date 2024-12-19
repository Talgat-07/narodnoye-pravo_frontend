import { path } from "shared/constants/constants";
import { Link } from "react-router-dom";
import { Typography } from "shared/ui/Typography/Typography";
import { Phone } from "shared/assets/icons/Phone";
import Email from "shared/assets/icons/Email";
import { Location } from "shared/assets/icons/Location";
import { WhatsApp } from "shared/assets/icons/WhatsApp";
import { Instagram } from "shared/assets/icons/Instagram";
import { Facebook } from "shared/assets/icons/Facebook";
import { Telegram } from "shared/assets/icons/Telegram";
import { Youtube } from "shared/assets/icons/Youtube";
import s from './Footer.module.scss'
import { Geeks } from "shared/assets/icons/Geeks";
import { Logo } from "shared/assets/icons/Logo";

export const Footer = () => {
    const googleMapsUrl = `https://maps.app.goo.gl/Rj2MmFEyRoTXYVdk6`;

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


    const contacts = [
        { type: 'phone', value: '+996 (550) 18-87-77' },
        { type: 'phone', value: '+996 (702) 18-87-77' },
        { type: 'email', value: 'N.pravo2018@gmail.com' },
    ]

    const lastPath = navLinks[0]
    const renderPath = navLinks.slice(1)
    return (
        <footer className={s.footer}>
            <div className={s.up} >
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
                                    <Link to={el.path}>
                                        <Typography
                                            className={s.leftLink}
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
                <div className={s.middle}>
                    <Typography
                        variant='bodyXL'
                        weight='bold'
                        color='black'>
                        КОНТАКТЫ
                    </Typography>
                    {contacts.map((contact, index) => {
                        if (contact.type === 'phone' && index === 0) {
                            return (
                                <div className={s.contactItem} key={index}>
                                    <Phone />
                                    <a href={`tel:${contact.value.replace(/[\s()]/g, '')}`} className={s.contactLink}>
                                        <Typography className={s.contactText} variant="bodyM" weight="regular">
                                            {contact.value}
                                        </Typography>
                                    </a>
                                </div>
                            );
                        }
                        if (contact.type === 'phone' && index > 0) {
                            return (
                                <div className={s.contactWithoutIcon} key={index}>
                                    <div className="emptySpace"></div>
                                    <a href={`tel:${contact.value.replace(/[\s()]/g, '')}`} className={s.contactLink}>
                                        <Typography className={s.contactText} variant="bodyM" weight="regular">
                                            {contact.value}
                                        </Typography>
                                    </a>
                                </div>
                            );
                        }
                        if (contact.type === 'email') {
                            return (
                                <div className={s.contactItem} key={index}>
                                    <Email />
                                    <a href={`mailto:${contact.value}`} className={s.contactLink}>
                                        <Typography className={s.contactText} variant="bodyM" weight="regular">
                                            {contact.value}
                                        </Typography>
                                    </a>
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>
                <div className={s.right}>
                    <Typography
                        variant='bodyXL'
                        weight='bold'
                        color='black'>
                        АДРЕС
                    </Typography>
                    <a href={googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={s.addressWrap}>
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
                    </a>
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
                <a className={s.geeksLink}
                    href="https://geeks.kg/geeks-pro"
                    rel="noopener noreferrer"
                    target="_blank">
                    <Typography
                        className={s.geeksLogo}
                        variant='bodyS'
                        weight='medium'>
                        Made by GeeksPro
                    </Typography>
                    <Geeks />
                </a>
            </div>
        </footer >
    );
};

