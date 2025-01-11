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

export const navLinks = [
    { path: path.home, label: "Главная" },
    { path: path.about, label: "О нас" },
    { path: path.services, label: "Услуги" },
    { path: path.legislativeNews, label: "Новости" },
    { path: path.analyticAndPublications, label: "Научные статьи" },
    { path: path.education, label: "Обучение" },
    { path: path.bankVacancy, label: "Вакансии" },
    { path: path.contacts, label: "Контакты" },
];

export const routesMap = {
    '/': 'Главная',
    '/about': 'О нас',
    '/services': 'Услуги',
    '/legislativeNews': 'Новости',
    '/analyticAndPublications': 'Научные статьи',
    '/education': 'Обучение',
    '/bankVacancy': 'Вакансии',
    '/contacts': 'Контакты',
};