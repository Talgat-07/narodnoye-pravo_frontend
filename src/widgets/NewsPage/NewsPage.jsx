import { useState } from 'react';
import { useMediaQuery } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { useNewsStore } from 'entities/store/newsStore/newsStore';
import { useSearchStore } from 'entities/store/searchStore/searchStore';

import { Container } from 'shared/ui/Container/Container';
import { Typography } from 'shared/ui/Typography/Typography';
import { SmallNewsCard } from 'shared/ui/SmallNewsCard/SmallNewsCard';
import { Search } from 'shared/ui/Search/Search';
import { Button } from 'shared/ui/Button/Button';

import styles from './NewsPage.module.scss';

export const NewsPage = () => {
    const { news, error, selectedCategory, setSelectedCategory } = useNewsStore();

    const { searchResults, isLoading, searchNews, resetSearch } = useSearchStore();

    const [searchQuery, setSearchQuery] = useState('');
    const [hasSearched, setHasSearched] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const isMobile = useMediaQuery('(max-width:768px)');
    const itemsPerPage = isMobile ? 10 : 12;

    const handleButtonClick = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
        resetSearch();
        setHasSearched(false);
    };

    // const handleSearch = () => {
    //     if (searchQuery.trim()) {
    //         searchNews(searchQuery);
    //         setHasSearched(true);
    //         setCurrentPage(1);
    //     }
    // };
    const handleSearch = () => {
        if (searchQuery.trim()) {
            searchNews(searchQuery, selectedCategory);
            setHasSearched(true);
            setCurrentPage(1);
        }
    };

    const handleClearSearch = () => {
        setSearchQuery('');
        resetSearch();
        setHasSearched(false);
    };

    const filteredNews = searchResults.length > 0
        ? searchResults
        : news.filter((item) => {
            if (selectedCategory === 'kg') {
                return item.category === 'kg_news';
            } else {
                return item.category === 'foreign_news';
            }
        });

    const showNoResults = hasSearched && !isLoading && searchResults.length === 0;

    const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentNews = filteredNews.slice(startIndex, endIndex);

    const handlePageChange = (event, page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (error) {
        return <div>Ошибка: {error}</div>;
    }

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
                <div className={styles.mobileWrap}>
                    <div className={styles.buttonWrap}>
                        <Button
                            onClick={() => handleButtonClick('kg')}
                            variant="span"
                            weight="semibold"
                            lineHeight="lineCompact"
                            color="blue"
                            className={`${styles.kg} ${selectedCategory === 'kg' ? styles.active : ''}`}
                        >
                            Кыргызская Республика
                        </Button>
                        <Button
                            onClick={() => handleButtonClick('fcon')}
                            variant="span"
                            weight="semibold"
                            lineHeight="lineCompact"
                            color="blue"
                            className={`${styles.fcon} ${selectedCategory === 'fcon' ? styles.active : ''}`}
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
                </div>
                {showNoResults && (
                    <div className={styles.noResultsContainer}>
                        <Typography
                            variant="h3"
                            weight="semibold"
                            className={styles.noResultsText}
                        >
                            По вашему запросу ничего не найдено
                        </Typography>
                    </div>
                )}

                {!showNoResults && (
                    <>
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
                        {totalPages > 1 && (
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
                        )}
                    </>
                )}

            </section>
        </Container>
    );
};
