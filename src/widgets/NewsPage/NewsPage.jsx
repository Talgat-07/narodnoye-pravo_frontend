import { useState } from 'react';
import { useNewsStore } from 'shared/store/newsStore';
import { SmallNewsCard } from 'shared/ui/SmallNewsCard/SmallNewsCard';
import { Typography } from 'shared/ui/Typography/Typography';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import styles from './NewsPage.module.scss';


export const NewsPage = () => {
    const { news, error, } = useNewsStore();

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    if (error) return <div>Ошибка: {error}</div>;

    const totalPages = Math.ceil(news.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentNews = news.slice(startIndex, endIndex);

    const handlePageChange = (event, page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section className={styles.aboutNews}>
            <Typography
                className={styles.title}
                variant="h3"
                weight="semibold"
            >
                Новости законодательства
            </Typography>

            <div className={styles.wrap}>
                {currentNews.map((item) => (
                    <SmallNewsCard
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        description={item.text}
                        image={item.image}
                        date={item.date}
                        isLarge={false}
                    />
                ))}
            </div>

            <Stack spacing={2} className={styles.paginationContainer}>
                <Pagination
                    count={totalPages}
                    page={currentPage}
                    onChange={handlePageChange}
                    variant="outlined"
                    shape="rounded"
                    renderItem={(item) => (
                        <PaginationItem
                            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                            {...item}
                        />
                    )}
                />
            </Stack>
        </section>
    );
};
