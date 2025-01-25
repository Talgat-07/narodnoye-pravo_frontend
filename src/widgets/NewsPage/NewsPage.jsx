import { useState } from 'react';
import { useNewsStore } from 'entities/store/newsStore/newsStore';
import { SmallNewsCard } from 'shared/ui/SmallNewsCard/SmallNewsCard';
import { Typography } from 'shared/ui/Typography/Typography';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import styles from './NewsPage.module.scss';
import { Button } from 'shared/ui/Button/Button';
import { Container } from 'shared/ui/Container/Container';
import { useMediaQuery } from '@mui/material';
import { Search } from 'shared/ui/Search/Search';


export const NewsPage = () => {
    const { news, searchResults, error, searchNews, resetSearch } = useNewsStore()
    const [searchQuery, setSearchQuery] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [activeButton, setActiveButton] = useState('kg')

    const isMobile = useMediaQuery('(max-width:768px)')
    const itemsPerPage = isMobile ? 10 : 12;

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
        setCurrentPage(1);
        resetSearch();
    };

    const handleSearch = () => {
        if (searchQuery.trim()) {
            searchNews(searchQuery);
            setCurrentPage(1);
        }
    };

    const handleClearSearch = () => {
        setSearchQuery('');
        resetSearch();
    };

    const filteredNews = searchResults.length > 0
        ? searchResults
        : news.filter(item => {
            if (activeButton === 'kg') {
                return item.category === 'kg_news';
            } else {
                return item.category === 'foreign_news';
            }
        });

    const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentNews = filteredNews.slice(startIndex, endIndex);

    const handlePageChange = (event, page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (error) return <div>Ошибка: {error}</div>;

    return (
        <Container>
            <section className={styles.aboutNews}>
                <Typography
                    className={styles.title}
                    variant="h3"
                    weight="semibold"
                >
                    Новости законодательства
                </Typography>
                <div className={styles.buttonWrap}>
                    <Button
                        onClick={() => handleButtonClick('kg')}
                        variant="span"
                        weight="semibold"
                        lineHeight="lineCompact"
                        color="blue"
                        className={`${styles.kg} ${activeButton === 'kg' ? styles.active : ''}`}
                    >
                        Кыргызская Республика
                    </Button>
                    <Button
                        onClick={() => handleButtonClick('fcon')}
                        variant="span"
                        weight="semibold"
                        lineHeight="lineCompact"
                        color="blue"
                        className={`${styles.fcon} ${activeButton === 'fcon' ? styles.active : ''}`}
                    >
                        Зарубежные страны
                    </Button>
                </div>
                <Search
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    handleSearch={handleSearch}
                    handleClearSearch={handleClearSearch}
                />
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
        </Container>
    );
};
