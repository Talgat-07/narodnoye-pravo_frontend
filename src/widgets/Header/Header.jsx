import { path } from "shared/constants/constants";
import { Link, useLocation } from "react-router-dom";
import { Typography } from "shared/ui/Typography/Typography";
import styles from "./Header.module.scss";
import { useClickOutside, useContactModal } from "shared/lib/hooks/hooks";
import { Button } from "shared/ui/Button/Button";
import { HeaderLogo } from "shared/assets/icons/HeaderLogo";
import { ContactModal } from "shared/ui/ContactModal/ContactModal/ContactModal";
import { navLinks } from "shared/constants/constants";
import LanguageDropdown from "shared/ui/LanguageDropdown/LanguageDropdown";
import { Container } from "shared/ui/Container/Container";
import { useState, useRef, useEffect } from "react";



export const Header = () => {
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
    const navLink = navLinks.slice(1)

    return (
        <Container>
            <div className={styles.container}>
                <header className={styles.header}>
                    <a href={path.home}>
                        <HeaderLogo />
                    </a>
                    <nav
                        ref={navRef}
                        className={`${styles.nav} ${menuOpen ? styles.open : ""}`}
                    >
                        <div className={styles.btnWrap}>
                            <button className={styles.ruLang}>
                                <Typography variant="span" weight="semibold">
                                    Ru
                                </Typography>
                            </button>
                            <button className={styles.kgLang}>
                                <Typography variant="span" weight="semibold">
                                    Kg
                                </Typography>
                            </button>
                        </div>
                        <ul className={styles.list}>
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
                            <LanguageDropdown />
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
        </Container>
    );
};

