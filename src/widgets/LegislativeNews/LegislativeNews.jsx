import { NewsCard } from 'shared/ui/NewsCard/NewsCard';
import styles from './LegislativeNews.module.scss';
import { Typography } from 'shared/ui/Typography/Typography';
import { Link } from "react-router-dom";
import { path } from "shared/constants/constants";
import { Button } from 'shared/ui/Button/Button';
import { useNewsStore } from 'shared/store/newsStore';
import { Container } from 'shared/ui/Container/Container';


export const LegislativeNews = () => {
    const { news, error } = useNewsStore()

    if (error) return <div>Ошибка: {error}</div>

    const newsForMainPage = news.slice(0, 4);

    const lastNews = newsForMainPage[0]
    const renderNews = newsForMainPage.slice(1)


    return (
        <Container>
            <div className={styles.container}>
                <Typography
                    className={styles.title}
                    variant='h3'
                    weight='bold'>
                    Новости законодательства
                </Typography>

                <div className={styles.block}>
                    {lastNews && (
                        <NewsCard
                            id={lastNews.id}
                            key={lastNews.id}
                            title={lastNews.title}
                            description={lastNews.text}
                            image={lastNews.image}
                            date={lastNews.date}
                            isLarge={true}
                        />
                    )}
                    <div className={styles.newsCard}>
                        {renderNews.map((newsItem) => (
                            <NewsCard
                                id={newsItem.id}
                                key={newsItem.id}
                                title={newsItem.title}
                                description={newsItem.text}
                                image={newsItem.image}
                                date={newsItem.date}
                                isLarge={false} />
                        ))}
                    </div>
                </div>
                <div className={styles.btn}>
                    <Link to={path.legislativeNews}>
                        <Button
                            className='linkBtn'
                            variant='span'
                            lineHeight='lineSemiTight'
                            weight='semibold'
                            color='blue'>
                            Подробнее
                        </Button>
                    </Link>
                </div>
            </div>
        </Container>

    )
}
