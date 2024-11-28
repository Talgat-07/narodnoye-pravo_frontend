import { path } from "shared/constants/constants";
import { Link } from "react-router-dom";

export const Footer = () => {

    const navLinks = [
        { path: path.home, label: "Главная страница" },
        { path: path.about, label: "О нас" },
        { path: path.services, label: "Услуги" },
        { path: path.legislativenews, label: "Новости законодательства" },
        { path: path.analyticandpublications, label: "Аналитика и публикации" },
        { path: path.education, label: "Обучение" },
        { path: path.bankvacancy, label: "Банк вакансий" },
        { path: path.contacts, label: "Контакты" },
    ];
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

