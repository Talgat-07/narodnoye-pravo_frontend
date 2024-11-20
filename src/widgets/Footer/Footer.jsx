import { navLinks } from "shared/constants/constants";
import { Link } from "react-router-dom";

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

