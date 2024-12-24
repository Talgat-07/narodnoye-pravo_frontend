import { path } from "shared/constants/constants";
import { Link } from "react-router-dom";
import { Typography } from "shared/ui/Typography/Typography";
import style from "./Header.module.scss"
import { useContactModal } from "shared/lib/hooks/hooks";
import { Button } from "shared/ui/Button/Button";
import { HeaderLogo } from "shared/assets/icons/HeaderLogo";
import { ContactModal } from "shared/ui/ContactModal/ContactModal/ContactModal";
import { navLinks } from 'shared/constants/constants'

export const Header = () => {

    const { isOpen, openModal, closeModal } = useContactModal();

    const navLink = navLinks.slice(1)

    return (
        <div className={style.container}>
            <header className={style.header}>
                <a href={path.home}>
                    <HeaderLogo />
                </a>
                <nav>
                    <ul className={style.list}>
                        {
                            navLink.map(el => (
                                <li className={style.li} key={el.path}>
                                    <Link to={el.path}
                                        className={style.typo}>
                                        <Typography
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
                    className='buttonSend'
                    variant='span'
                    weight='semibold'
                    color='white'
                    lineHeight='lineTight'>
                    Оставить заявку
                </Button>
                <ContactModal isOpen={isOpen} closeModal={closeModal} />
                <select className={style.lang}>
                    <option value="ru">RU</option>
                    <option value="kg">KG</option>
                </select>
            </header>
        </div>
    );
};
