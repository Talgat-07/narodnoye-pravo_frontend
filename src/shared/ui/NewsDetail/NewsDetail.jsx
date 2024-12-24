// import style from './NewsDetail.module.scss'
// import { path } from 'shared/constants/constants'
import { useParams } from 'react-router-dom';
import { Container } from 'shared/ui/Container/Container';
import { Breadcrumbs } from 'shared/ui/Breadcrumbs/Breadcrumbs';
import NewsBig from 'shared/assets/img/NewsBig.webp'
import NewsSmall from 'shared/assets/img/NewsSmall.webp'

export const NewsDetail = () => {
    const { id } = useParams()

    const mockNews = [
        {
            id: 1,
            date: '22.11.2024 г.',
            title: 'В Кыргызстане утверждены Правила надлежащей аптечной практики',
            description: 'Постановлением Кабинета Министров Кыргызской Республики от 2 декабря 2024 года № 720 утверждена Правила надлежащей аптечной практики. Они содержат основные требования, предъявляемые к работе аптечных организаций, и направлены на укрепление здоровья, рациональное применение качественных, безопасных лекарственных средств…',
            image: NewsBig,
        },
        {
            id: 2,
            date: '22.11.2024 г.',
            title: 'В Кыргызстане утверждены новые правила регулирова...',
            description: 'Постановлением Кабинета Министров Кыргызской Республики “О вопросах регу...',
            image: NewsSmall,
        },
        {
            id: 3,
            date: '22.11.2024 г.',
            title: 'В Кыргызстане внедрена Дорожная карта по введени...',
            description: 'Распоряжением Кабинета Министров Кыргызской Республики от 2 декабря',
            image: NewsSmall,
        },
        {
            id: 4,
            date: '22.11.2024 г.',
            title: 'В Кыргызстане утверждены новые правила регулирова...',
            description: 'Постановлением Кабинета Министров Кыргызской Республики “О вопросах регу...',
            image: NewsSmall,
        },
    ];

    const news = mockNews.find((item) => item.id === parseInt(id, 10));

    return (
        <Container>
            <Breadcrumbs currentTitle={news.title} />
        </Container>
    );
};
