import { useState, useEffect } from 'react';
import styles from './UpButton.module.scss';

export const UpButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        }
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            {isVisible && (
                <div
                    className={styles.scrollToTopButton}
                    onClick={scrollToTop}
                >
                    <div className={styles.arrowTop}></div>
                </div>
            )}
        </>
    );
};
