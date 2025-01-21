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
import { SearchField } from 'shared/ui/SearchField/SearchField';
import { Button } from 'shared/ui/Button/Button';
import { Container } from 'shared/ui/Container/Container';
import { useWindowWidth } from 'shared/lib/hooks/hooks';


export const NewsPage = () => {
    const { news, error, } = useNewsStore()

    const [currentPage, setCurrentPage] = useState(1)
    const [activeButton, setActiveButton] = useState('kg')
    const [searchQuery, setSearchQuery] = useState('')

    const width = useWindowWidth()
    const itemsPerPage = width <= 768 ? 10 : 12

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName)
        setCurrentPage(1)
        setSearchQuery('')
    }

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value)
        setCurrentPage(1)
    }

    const handleClearSearch = () => {
        setSearchQuery('');
    }

    const handleSearchClick = () => {
        setCurrentPage(1)
    }


    if (error) return <div>Ошибка: {error}</div>

    let filteredNews = news.filter(item => {
        if (activeButton === 'kg') {
            return item.category === 'kg_news'
        } else {
            return item.category === 'foreign_news';
        }
    })

    if (searchQuery) {
        const lowerSearch = searchQuery.toLowerCase();
        filteredNews = filteredNews.filter(item =>
            item.title.toLowerCase().includes(lowerSearch) ||
            item.text.toLowerCase().includes(lowerSearch)
        );
    }


    const totalPages = Math.ceil(filteredNews.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentNews = filteredNews.slice(startIndex, endIndex)

    const handlePageChange = (event, page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' })
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
                <div className={styles.buttonWrap}>
                    <Button
                        onClick={() => handleButtonClick('kg')}
                        variant='span'
                        weight='semibold'
                        lineHeight='lineCompact'
                        color='blue'
                        className={`${styles.kg} ${activeButton === 'kg' ? styles.active : ''}`}
                    >
                        Кыргызская Республика
                    </Button>
                    <Button
                        onClick={() => handleButtonClick('fcon')}
                        variant='span'
                        weight='semibold'
                        lineHeight='lineCompact'
                        color='blue'
                        className={`${styles.fcon} ${activeButton === 'fcon' ? styles.active : ''}`}
                    >
                        Зарубежные страны
                    </Button>
                </div>
                <SearchField
                    value={searchQuery}
                    onChange={handleSearchChange}
                    onClear={handleClearSearch}
                    onSearch={handleSearchClick}
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
