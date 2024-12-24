import { useRef, useEffect } from 'react';
import style from './Slider.module.scss';
import slider1 from 'shared/assets/img/swiper2_11zon.webp';
import slider2 from 'shared/assets/img/swiper_11zon.webp';
import slider3 from 'shared/assets/img/swiper1_11zon.webp';
import slider4 from 'shared/assets/img/swiper4_11zon.webp';
import { Typography } from '../../shared/ui/Typography/Typography';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { PrevBtn } from 'shared/assets/icons/PrevBtn';
import { NextBtn } from 'shared/assets/icons/NextBtn';

export const Slider = () => {
    const slides = [
        {
            id: 1,
            name: "Жаныл Идирисова",
            jobTitle: 'Младший юрист',
            specialization: 'Трудовое право, наследственное право',
            img: slider1
        },
        {
            id: 2,
            name: "Ксения Тишинина",
            jobTitle: 'Старший юрист',
            specialization: 'Корпоративное право, налоговое право',
            img: slider2
        },
        {
            id: 3,
            name: "Дина Кожахметова",
            jobTitle: 'Генеральный директор',
            specialization: 'Семейное право, договорное право',
            img: slider3
        },
        {
            id: 4,
            name: "Эржан Абдылдаев",
            jobTitle: 'Младший юрист',
            specialization: 'Административное право, работа с дебиторской задолженностью',
            img: slider4
        },
    ];

    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current && prevRef.current && nextRef.current) {

            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;

            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []);

    return (
        <div className={style.swiperWrapper}>
            <Swiper
                modules={[Navigation, Pagination]}
                loop={true}
                className={style.swiperContainer}
                slidesPerView={3}
                slidesOffsetBefore={30}
                slidesOffsetAfter={30}
                centeredSlides={true}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id} className={style.swiperSlide}>
                        <div className={style.card}>
                            <img src={slide.img} alt={`Слайд ${slide.id}`} />
                            <div className={style.wrapText}>
                                <div className={style.initials}>
                                    <Typography
                                        className={style.nameWrap}
                                        variant="bodyXS"
                                        weight="semibold"
                                        lineHeight="lineLarge">
                                        ФИО:
                                    </Typography>
                                    <Typography
                                        variant="bodyXS"
                                        weight="regular"
                                        lineHeight="lineLarge">
                                        {slide.name}
                                    </Typography>
                                </div>
                                <div className={style.initials}>
                                    <Typography
                                        className={style.nameWrap}
                                        variant="bodyXS"
                                        weight="semibold"
                                        lineHeight="lineLarge">
                                        Должность:
                                    </Typography>
                                    <Typography
                                        variant="bodyXS"
                                        weight="regular"
                                        lineHeight="lineLarge"
                                    >
                                        {slide.jobTitle}
                                    </Typography>
                                </div>
                                <div className={style.initials}>
                                    <Typography
                                        className={style.nameWrap}
                                        variant="bodyXS"
                                        weight="semibold"
                                        lineHeight="lineLarge"
                                    >
                                        Специализация:
                                    </Typography>
                                    <Typography
                                        variant="bodyXS"
                                        weight="regular"
                                        lineHeight="lineLarge"
                                    >
                                        {slide.specialization}
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className={style.navigationButtons}>
                <button ref={prevRef} className={`${style.navButton} ${style.prevButton}`}>
                    <PrevBtn />
                </button>
                <button ref={nextRef} className={`${style.navButton} ${style.nextButton}`}>
                    <NextBtn />
                </button>
            </div>
        </div>
    );
};

