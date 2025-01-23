import styles from './Nav.module.scss'
import { Link } from 'react-router-dom';
import { path } from 'shared/constants/constants';
import { Typography } from 'shared/ui/Typography/Typography';
import { navLinks } from 'shared/constants/constants'
import { useTranslation } from "react-i18next";

export const Nav = () => {
    const { t } = useTranslation()
    const lastPath = navLinks(t)[0]
    const renderPath = navLinks(t).slice(1);

    return (
        <div className={styles.left}>
            <ul className={styles.footerUl}>
                {lastPath && (
                    <Link to={path.home} key={path.home}>
                        <Typography
                            className={styles.title}
                            variant='bodyXLL'
                            weight='bold'>
                            {lastPath.label}
                        </Typography>
                    </Link>
                )}
                {
                    renderPath.map(el => (
                        <li className={styles.footerLi} key={el.path}>
                            <Link to={el.path} className={styles.leftLink}>
                                <Typography
                                    variant="bodyL"
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
