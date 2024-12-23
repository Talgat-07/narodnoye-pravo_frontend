import { NewsCard } from 'shared/ui/NewsCard/NewsCard';
import s from './LegislativeNews.module.scss';
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
            title: "Lorem ipsum dolor sit amet consectetur. Aenean massa scelerisque nisl libero ipsum libero.",
            description: "Netus volutpat suscipit interdum ornare proin etiam dui fringilla at Netus volutpat suscipit interdum ornare proin etiam dui fringilla at Netus volutpat suscipit interdum ornare proin etiam dui fringilla at. Ultrices aliquam arcu et dui ut id maecenas. Nec vestibulum donec amet in blandit id diam massa.",
            image: NewsBig,
        },
        {
            id: 2,
            date: '22.11.2024 г.',
            title: "2Lorem ipsum dolor sit amet consectetur. Aenean massa scelerisque nisl libero ipsum libero.",
            description: "Netus volutpat suscipit interdum ornare proin etiam dui fringilla at. Ultrices aliquam arcu et dui ut id maecenas. Nec vestibulum donec amet in blandit id diam massa.",
            image: NewsSmall,
        },
        {
            id: 3,
            date: '22.11.2024 г.',
            title: "3Lorem ipsum dolor sit amet consectetur. Aenean massa scelerisque nisl libero ipsum libero.",
            description: " Netus volutpat suscipit interdum ornare proin etiam dui fringilla at. Ultrices aliquam arcu et dui ut id maecenas. Nec vestibulum donec amet in blandit id diam massa.",
            image: NewsSmall,
        },
        {
            id: 4,
            date: '22.11.2024 г.',
            title: "4Lorem ipsum dolor sit amet consectetur. Aenean massa scelerisque nisl libero ipsum libero.",
            description: " Netus volutpat suscipit interdum ornare proin etiam dui fringilla at. Ultrices aliquam arcu et dui ut id maecenas. Nec vestibulum donec amet in blandit id diam massa.",
            image: NewsSmall,
        },
    ];

    const lastNews = mockNews[0]
    const renderNews = mockNews.slice(1)


    return (
        <div className={s.container}>
            <Typography
                className={s.title}
                variant='h3'
                weight='bold'>
                Новости законодательства
            </Typography>

            <div className={s.block}>
                {lastNews && (
                    <NewsCard
                        key={lastNews.id}
                        title={lastNews.title}
                        description={lastNews.description}
                        image={lastNews.image}
                        date={lastNews.date}
                        isLarge={true}
                    />
                )}
                <div className={s.newsCard}>
                    {renderNews.map((newsItem) => (
                        <NewsCard
                            key={newsItem.id}
                            title={newsItem.title}
                            description={newsItem.description}
                            image={newsItem.image}
                            date={newsItem.date}
                            isLarge={false} />
                    ))}
                </div>
            </div>
            <div className={s.btn}>
                <Link to={path.legislativenews}>
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
