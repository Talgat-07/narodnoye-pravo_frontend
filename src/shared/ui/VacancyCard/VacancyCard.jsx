import { useState, useEffect } from 'react';
import { useVacanciesStore } from 'shared/store/vacancyStore';
import { Container } from 'shared/ui/Container/Container';
import { Typography } from 'shared/ui/Typography/Typography';
import { Button } from 'shared/ui/Button/Button';
import { CircleLoader } from '../Loader/CircleLoader';
import styles from './VacancyCard.module.scss';

export const VacancyCard = () => {
    const { vacancies, isLoading, error, fetchVacancies } = useVacanciesStore();
    const [isExpanded, setIsExpanded] = useState(false);

   
    useEffect(() => {
        fetchVacancies();
    }, [fetchVacancies]);

    const toggleDetails = () => setIsExpanded((prev) => !prev);

    const parseDetails = (details) => {
        const regex = /([А-Яа-яёА-ЯЁ\s]+):\s*([^:]+)/g;
        const parsedDetails = {};

        let match;
        while ((match = regex.exec(details)) !== null) {
            const key = match[1].trim();
            const value = match[2].trim();
            parsedDetails[key] = value;
        }

        return parsedDetails;
    };

     if (isLoading) { return <CircleLoader />}
     if (error) return <div>Ошибка: {error}</div>

    return (
        <Container className={styles.vacancyCard}>
            {vacancies.map((vacancy, index) => {
                const parsedDetails = parseDetails(vacancy.details);

                return (
                    <div key={index}>
                        {!isExpanded ? (
                            <div className={styles.preview}>
                                <Typography className={styles.title} variant="bodyXXL" weight="semibold">
                                    {vacancy.title} 
                                </Typography>

                                {parsedDetails.slice(0, 2).map(({ key, value }) => (
                                <div key={key} className={styles.detailsRow}>
                                    <Typography className={styles.key} variant="bodyL" weight="semibold">
                                        {key}
                                    </Typography>
                                    <Typography className={styles.value} variant="bodyL" weight="regular">
                                        {value}
                                    </Typography>
                                </div>
                    ))}
                                <Button
                                    className={styles.toggleButton}
                                    onClick={toggleDetails}
                                    variant="span"
                                    weight="semibold"
                                    color="blue"
                                >
                                    Подробнее
                                </Button>
                            </div>
                        ) : (
                            <div className={styles.details}>
                                <Typography className={styles.title} variant="bodyXXL" weight="semibold">
                                    {vacancy.company}
                                </Typography>
                                
                                {Object.entries(parsedDetails).map(([key, value]) => (
                                    <div key={key} className={styles.detailsRow}>
                                        <Typography className={styles.key} variant="bodyL" weight="semibold">
                                            {key}:
                                        </Typography>
                                        <Typography className={styles.value} variant="bodyL" weight="regular">
                                            {value}
                                        </Typography>
                                    </div>
                                ))}
                                <Button
                                    className={styles.toggleButton}
                                    onClick={toggleDetails}
                                    variant="span"
                                    weight="semibold"
                                    color="blue"
                                >
                                    Скрыть
                                </Button>
                            </div>
                        )}
                    </div>
                );
            })}
        </Container>
    );
};
