import { navLinks } from "shared/constants/constants";


export const Footer = () => {
    return (
        <footer>
            {
                navLinks.map(el => (
                    <li key={el.path}>
                        <Link to={el.path}>{el.label}</Link>
                    </li>
                ))
            }
        </footer>
    );
};

