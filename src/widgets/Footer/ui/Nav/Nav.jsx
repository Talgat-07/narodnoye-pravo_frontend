import style from './Nav.module.scss'
import { Link } from 'react-router-dom';
import { Logo } from 'shared/assets/icons/Logo';
import { path } from 'shared/constants/constants';
import { Typography } from 'shared/ui/Typography/Typography';
import { navLinks } from 'shared/constants/constants'

export const Nav = () => {

    const lastPath = navLinks[0]
    const renderPath = navLinks.slice(1)

    return (
        <div className={style.left}>
            <Logo />
            <ul className={style.footerUl}>
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
                        <li className={style.footerLi} key={el.path}>
                            <Link to={el.path} className={style.leftLink}>
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
