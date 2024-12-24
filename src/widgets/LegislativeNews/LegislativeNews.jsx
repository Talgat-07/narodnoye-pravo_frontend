import { NewsCard } from 'shared/ui/NewsCard/NewsCard';
import style from './LegislativeNews.module.scss';
import NewsBig from 'shared/assets/img/NewsBig.webp'
import NewsSmall from 'shared/assets/img/NewsSmall.webp'
import { Typography } from 'shared/ui/Typography/Typography';
import { Link } from "react-router-dom";
import { path } from "shared/constants/constants";
import { Button } from 'shared/ui/Button/Button';



export const LegislativeNews = () => {
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

    const lastNews = mockNews[0]
    const renderNews = mockNews.slice(1)


    return (
        <div className={style.container}>
            <Typography
                className={style.title}
                variant='h3'
                weight='bold'>
                Новости законодательства
            </Typography>

            <div className={style.block}>
                {lastNews && (
                    <NewsCard
                        id={lastNews.id}
                        key={lastNews.id}
                        title={lastNews.title}
                        description={lastNews.description}
                        image={lastNews.image}
                        date={lastNews.date}
                        isLarge={true}
                    />
                )}
                <div className={style.newsCard}>
                    {renderNews.map((newsItem) => (
                        <NewsCard
                            id={newsItem.id}
                            key={newsItem.id}
                            title={newsItem.title}
                            description={newsItem.description}
                            image={newsItem.image}
                            date={newsItem.date}
                            isLarge={false} />
                    ))}
                </div>
            </div>
            <div className={style.btn}>
                <Link to={path.legislativeNews}>
                    <Button
                        className='linkBtn'
                        variant='span'
                        lineHeight='lineSemiTight'
                        weight='semibold'
                        color='azure'>
                        Подробнее
                    </Button>
                </Link>
            </div>
        </div>

    )
}
