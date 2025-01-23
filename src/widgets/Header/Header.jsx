import { path } from "shared/constants/constants";
import { Link, useLocation } from "react-router-dom";
import { Typography } from "shared/ui/Typography/Typography";
import styles from "./Header.module.scss";
import { useClickOutside, useContactModal } from "shared/lib/hooks/hooks";
import { Button } from "shared/ui/Button/Button";
import { HeaderLogo } from "shared/assets/icons/HeaderLogo";
import { ContactModal } from 'entities/ContactModal/ContactModal/ContactModal';
import { navLinks } from "shared/constants/constants";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";



export const Header = () => {
    const { t, i18n } = useTranslation()
    const { isOpen, openModal, closeModal } = useContactModal()
    const [menuOpen, setMenuOpen] = useState(false)
    const navRef = useRef(null)
    const burgerRef = useRef(null)
    const location = useLocation()

    useClickOutside(navRef, () => setMenuOpen(false), burgerRef)

    useEffect(() => {
        setMenuOpen(false)
    }, [location])

    useEffect(() => {
        document.body.classList.toggle("no-scroll", menuOpen)
        return () => document.body.classList.remove("no-scroll")
    }, [menuOpen])

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }
    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    }
    const navLink = navLinks(t).slice(1);

    const [isOpenLanguage, setIsOpenLanguage] = useState(false);
    const [selected, setSelected] = useState("Ru");
    const containerRef = useRef(null);

    useClickOutside(containerRef, () => {
        setIsOpenLanguage(false);
    });

    const handleSelect = (langLabel) => {
        setSelected(langLabel);
        setIsOpenLanguage(false);

        if (langLabel === "Ru") {
            i18n.changeLanguage("ru");
        } else if (langLabel === "Kg") {
            i18n.changeLanguage("kg");
        }
    };

    return (
        <div className={styles.headerRoot}>
            <header className={styles.header}>
                {location.pathname === path.home ? (
                    <div className={styles.logo}>
                        <HeaderLogo />
                    </div>
                ) : (
                    <Link to={path.home} className={styles.logo}>
                        <HeaderLogo />
                    </Link>
                )}
                <nav
                    ref={navRef}
                    className={`${styles.nav} ${menuOpen ? styles.open : ""}`}
                >
                    <div className={styles.btnWrap}>
                        <button className={styles.ruLang} onClick={() => handleChangeLanguage("ru")}>
                            <Typography variant="span" weight="semibold">
                                Ru
                            </Typography>
                        </button>
                        <button className={styles.kgLang} onClick={() => handleChangeLanguage("kg")}>
                            <Typography variant="span" weight="semibold">
                                Kg
                            </Typography>
                        </button>
                    </div>
                    <ul
                        className={`${styles.list} ${i18n.language === 'kg' ? styles.listKg : ''}`}
                    >
                        {navLink.map((el) => (
                            <li className={styles.li} key={el.path}>
                                <Link to={el.path} className={styles.typo}>
                                    <Typography variant="bodyMl" lineHeight="lineBig">
                                        {el.label}
                                    </Typography>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className={styles.rightWrap}>
                    <Button
                        onClick={openModal}
                        className="buttonSend"
                        variant="span"
                        weight="semibold"
                        color="white"
                        lineHeight="lineTight"
                    >
                        Оставить заявку
                    </Button>
                    <div className={styles.lang}>
                        <div className={styles.containerLanguage} ref={containerRef}>
                            <div
                                className={styles.toggleButton}
                                onClick={() => setIsOpenLanguage((prev) => !prev)}
                            >
                                <span className={styles.selectedText}>{selected}</span>
                                <div className={`${styles.arrow} ${isOpenLanguage ? styles.open : ''}`} />
                            </div>

                            {isOpenLanguage && (
                                <div className={styles.dropdown}>
                                    {['Ru', 'Kg'].map((lang, index) => (
                                        <div
                                            key={index}
                                            className={styles.dropdownItem}
                                            onClick={() => handleSelect(lang)}
                                        >
                                            {lang}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    <button
                        ref={burgerRef}
                        className={`${styles.burgerBtn} ${menuOpen ? styles.open : ""}`}
                        onClick={toggleMenu}
                    >
                        <span className={styles.spanLine}></span>
                        <span className={styles.spanLine}></span>
                        <span className={styles.spanLine}></span>
                    </button>
                </div>
                <ContactModal isOpen={isOpen} closeModal={closeModal} />
            </header>
        </div>
    );
};

