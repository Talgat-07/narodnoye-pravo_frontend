export const BASE_URL = import.meta.env.VITE_BASE_URL


export const path = {
    home: '/',
    about: '/about',
    services: '/services',
    serviceDetail: '/services/:id',
    legislativeNews: '/legislativeNews',
    legislativeNewsDetail: '/legislativeNews/:id',
    analyticAndPublications: '/analyticAndPublications',
    education: '/education',
    bankVacancy: '/bankVacancy',
    contacts: '/contacts'
}

export const navLinks = (t) => [
    { path: path.home, label: t("header.home") },
    { path: path.about, label: t("header.aboutUs") },
    { path: path.services, label: t("header.services") },
    { path: path.legislativeNews, label: t("header.legislativeNews") },
    { path: path.analyticAndPublications, label: t("header.analyticAndPublications") },
    { path: path.education, label: t("header.education") },
    { path: path.bankVacancy, label: t("header.bankVacancy") },
    { path: path.contacts, label: t("header.contacts") },
];
export const routesMap = {
    '/': 'Главная',
    '/about': 'О нас',
    '/services': 'Услуги',
    '/analyticAndPublications': 'Научные статьи',
    '/education': 'Обучение',
    '/bankVacancy': 'Вакансии',
    '/contacts': 'Контакты',
};