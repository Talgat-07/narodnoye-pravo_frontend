import { useRef, useEffect } from 'react';
import styles from './Slider.module.scss';
import { Typography } from '../../shared/ui/Typography/Typography';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { PrevBtn } from 'shared/assets/icons/PrevBtn';
import { NextBtn } from 'shared/assets/icons/NextBtn';
import { useSliderStore } from 'shared/store/sliderStore';

export const Slider = () => {
    const { employees, error } = useSliderStore();

    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (
            swiperRef.current &&
            prevRef.current &&
            nextRef.current &&
            employees.length > 0
        ) {
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;

            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, [employees]);

    const handleCardClick = (index) => {
        if (!swiperRef.current) return;
        if (swiperRef.current.realIndex === index) {
            return;
        }
        swiperRef.current.slideToLoop(index, 500);
    };

    if (error) {
        return <div>Ошибка: {error}</div>
    }

    if (employees.length < 3) {
        return null;
    }
    return (
        <div className={styles.swiperWrapper}>
            <div className={styles.backGround}></div>
            <Swiper
                modules={[Navigation, Pagination]}
                loop={true}
                className={styles.swiperContainer}
                slidesPerView={3}
                slidesOffsetBefore={5}
                slidesOffsetAfter={5}
                centeredSlides={true}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >
                {employees.map((employee, index) => (
                    <SwiperSlide key={employee.id} className={styles.swiperSlide}>
                        <div
                            className={styles.card}
                            onClick={() => handleCardClick(index)}
                        >
                            <img
                                src={employee.image}
                                alt={`Слайд ${employee.id}`}
                            />
                            <div className={styles.wrapText}>
                                <div className={styles.initials}>
                                    <Typography
                                        className={styles.name}
                                        variant="bodyXL"
                                        weight="semibold"
                                        lineHeight="lineCompact"
                                    >
                                        {employee.name}
                                    </Typography>
                                    <Typography
                                        className={styles.jobTitle}
                                        variant="bodyM"
                                        weight="semibold"
                                        lineHeight="lineLarge"
                                        color='sliderText'
                                    >
                                        {employee.position}
                                    </Typography>
                                </div>
                                <div className={styles.initialsDown}>
                                    <Typography
                                        className={styles.nameWrap}
                                        variant="bodyXS"
                                        weight="regular"
                                        lineHeight="lineLarge"
                                    >
                                        Специализация: {employee.specialization}
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className={styles.navigationButtons}>
                <button
                    ref={prevRef}
                    className={`${styles.navButton} ${styles.prevButton}`}
                >
                    <PrevBtn />
                </button>
                <button
                    ref={nextRef}
                    className={`${styles.navButton} ${styles.nextButton}`}
                >
                    <NextBtn />
                </button>
            </div>
        </div>
    );
};
