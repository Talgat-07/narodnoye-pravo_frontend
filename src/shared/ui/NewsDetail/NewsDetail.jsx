import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNewsStore } from 'shared/store/newsStore';
import { Container } from 'shared/ui/Container/Container';
import { Typography } from 'shared/ui/Typography/Typography';
import styles from './NewsDetail.module.scss'
import { Button } from 'shared/ui/Button/Button';
import { SmallNewsCard } from 'shared/ui/SmallNewsCard/SmallNewsCard';
import { CircleLoader } from '../Loader/CircleLoader';

import { useNavigate, useLocation } from 'react-router-dom';


export const NewsDetail = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { id } = useParams();

    const { news, isLoading, error, fetchAllNews } = useNewsStore()

    useEffect(() => {
        fetchAllNews();
    }, [fetchAllNews]);

    if (isLoading) {
        return <CircleLoader />
    }

    if (error) return <div>Ошибка... {error}</div>

    const currentNewsId = parseInt(id, 10);
    const newsAll = news.find((item) => item.id === currentNewsId);

    if (!newsAll) {
        return <p>Услуга не найдена</p>;
    }

    const relatedNews = news
        .filter((item) => item.id !== currentNewsId)
        .slice(0, 8)


    const from = location.state?.from || "/";
    return (
        <Container>
            <div className={styles.wrap}>
                <Typography
                    className={styles.title}
                    variant="h3"
                    weight='semibold'
                >
                    {newsAll.title}
                </Typography>
                <img
                    className={styles.img}
                    src={newsAll.image}
                    alt={newsAll.title} />
                <Typography
                    className={styles.text}
                    variant="bodyL"
                    weight='regular'
                    lineHeight='lineM'
                >
                    {newsAll.text}
                </Typography>
                <Button
                    onClick={() => navigate(from)}
                    className='newsBtn'
                    variant='span'
                    weight='semibold'
                    lineHeight='lineSemiTight'
                    color='white'
                >
                    Назад
                </Button>
            </div>
            <div className={styles.down}>
                <Typography
                    className={styles.lineText}
                    variant="h5"
                    weight='bold'
                >
                    Вас может заинтересовать
                </Typography>
                <div className={styles.downWrap}>
                    {relatedNews.map((newsItem) => (
                        <SmallNewsCard
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
        </Container>
    );
};
