import { Typography } from 'shared/ui/Typography/Typography';
import styles from './AboutPage.module.scss'
import aboutPage from 'shared/assets/img/aboutPage2.webp'
import aboutPage2 from 'shared/assets/img/aboutPage.webp'
import aboutPage3 from 'shared/assets/img/aboutPage3.webp'
import aboutPage4 from 'shared/assets/img/aboutPage4.webp'
import { Slider } from 'features/Slider/Slider';


export const AboutPage = () => {
    return (
        <section className={styles.aboutPage}>
            <Typography
                className={styles.title}
                variant='h3'
                weight='semibold'>
                О нас
            </Typography>
            <div className={styles.wrap}>
                <div className={styles.member1}>
                    <div className={styles.member1Img}>
                        <img
                            src={aboutPage} alt="команда «Народное право»" />
                    </div>
                    <div className={styles.darkBackGround}>
                        <div className={styles.memberText1}>
                            <Typography
                                variant='bodyL'
                                weight='regular'
                                lineHeight='lineBig'>
                                <strong>Юридическая компания «Народное право»</strong> — компания, созданная в 2008 году. За время своего существования прошла успешный путь и в настоящее время занимает устойчивое положение на рынке юридических услуг.
                            </Typography>
                            <Typography
                                className={styles.textDesk1}
                                variant='bodyL'
                                weight='regular'
                                lineHeight='lineBig'>
                                <strong>Основная цель нашей компании</strong> — сделать юридические услуги доступными для всех. Для нас не бывает мелких вопросов<br /> и незначительных просьб. Мы понимаем, что каждый человек<br />в процессе своей жизни может столкнуться с правовой проблемой,<br /> и готовы оказать необходимую юридическую помощь —<br /> проконсультировать, разъяснить, представить интересы.
                            </Typography>
                        </div>
                    </div>
                </div>
                <Typography
                    className={styles.textTablet1}
                    variant='bodyL'
                    weight='regular'
                    lineHeight='lineBig'>
                    <strong>Основная цель нашей компании</strong> — сделать юридические услуги доступными для всех. Для нас не бывает мелких вопросов и незначительных просьб. Мы понимаем, что каждый человек в процессе своей жизни может столкнуться с правовой проблемой, и готовы оказать необходимую юридическую помощь — проконсультировать, разъяснить, представить интересы.
                </Typography>
                <Typography
                    className={styles.textTablet11}
                    variant='bodyL'
                    weight='regular'
                    lineHeight='lineBig'>
                    <strong>Основная цель нашей компании</strong> — сделать юридические услуги доступными для всех. Для нас не бывает мелких вопросов и незначительных просьб. <br /> Мы понимаем, что каждый человек в процессе своей жизни может столкнуться <br /> с правовой проблемой, и готовы оказать необходимую юридическую помощь —<br /> проконсультировать, разъяснить, представить интересы.
                </Typography>
                <div className={styles.member}>
                    <div className={styles.darkBackGround2}>
                        <div className={styles.memberText2}>
                            <Typography
                                className={styles.memberText2Abz1}
                                variant='bodyL'
                                weight='regular'
                                lineHeight='lineBig'>
                                Наряду с этим наша компания профессионально занимается юридическим сопровождением деятельности хозяйствующих субъектов. Мы оказываем юридические услуги по принципу аутсорсинга, обеспечивая оперативную реакцию на поступающие запросы.
                            </Typography>
                            <Typography
                                className={styles.memberText2Abz2}
                                variant='bodyL'
                                weight='regular'
                                lineHeight='lineBig'>
                                Наряду с этим наша компания профессионально занимается юридическим сопровождением деятельности хозяйствующих субъектов. Мы оказываем юридические услуги<br /> по принципу аутсорсинга, обеспечивая оперативную реакцию на поступающие запросы.
                            </Typography>
                            <Typography
                                className={styles.textDesk2}
                                variant='bodyL'
                                weight='regular'
                                lineHeight='lineBig'>
                                Деятельность нашей компании основывается, в первую очередь, на принципе законности. Мы работаем только в соответствии<br /> с требованиями и нормами законодательства Кыргызской Республики, постоянно расширяя спектр оказываемых услуг.
                            </Typography>
                        </div>
                    </div>
                    <div className={styles.member1Img}>
                        <img src={aboutPage2} alt="команда «Народное право»" />
                    </div>
                </div>
                <Typography
                    className={styles.textTablet2}
                    variant='bodyL'
                    weight='regular'
                    lineHeight='lineBig'>
                    Деятельность нашей компании основывается, в первую очередь, на принципе законности. Мы работаем только в соответствии<br /> с требованиями и нормами законодательства Кыргызской Республики, постоянно расширяя спектр оказываемых услуг.
                </Typography>
                <Typography
                    className={styles.textDesk22}
                    variant='bodyL'
                    weight='regular'
                    lineHeight='lineBig'>
                    Деятельность нашей компании основывается, в первую очередь, на принципе законности. Мы работаем только в соответствии с требованиями и нормами <br />законодательства Кыргызской Республики, постоянно расширяя спектр оказываемых услуг.
                </Typography>
                <div className={styles.member3}>
                    <div className={styles.member1Img}>
                        <img src={aboutPage3} alt="команда «Народное право»" />
                    </div>
                    <div className={styles.darkBackGroundLast}>
                        <div className={styles.memberText3}>
                            <Typography
                                className={styles.textDeskLast}
                                variant='bodyL'
                                weight='regular'
                                lineHeight='lineBig'
                            >
                                У нас «говорящее» название. Народным право является потому, что мы реализуем социальный компонент, оказывая бесплатную юридическую помощь гражданам, которые не могут позволить себе оплатить услуги юриста, причем делаем это без ущерба для качества или объема оказываемых услуг.
                            </Typography>
                            <Typography
                                className={styles.textDeskLast1}
                                variant='bodyL'
                                weight='regular'
                                lineHeight='lineBig'
                            >
                                У нас «говорящее» название. Народным право является потому, что мы реализуем социальный компонент, оказывая бесплатную юридическую помощь гражданам, которые не могут позволить себе оплатить услуги юриста, причем<br /> делаем это без ущерба для качества или объема оказываемых услуг.
                            </Typography>
                            <Typography
                                className={styles.textDesk1}
                                variant='bodyL'
                                weight='regular'
                                lineHeight='lineBig'
                            >
                                Наша команда постоянно совершенствует свою квалификацию, следит за изменениями законодательства, новейшими теоретическими разработками в области юриспруденции.
                            </Typography>
                        </div>
                    </div>
                </div>
                <Typography
                    className={styles.textTablet3}
                    variant='bodyL'
                    weight='regular'
                    lineHeight='lineBig'
                >
                    Наша команда постоянно совершенствует свою квалификацию, следит за изменениями законодательства, новейшими теоретическими разработками в области юриспруденции.
                </Typography>
                <Typography
                    className={styles.textTablet33}
                    variant='bodyL'
                    weight='regular'
                    lineHeight='lineBig'
                >
                    Наша команда постоянно совершенствует свою квалификацию, следит<br /> за изменениями законодательства, новейшими теоретическими разработками<br /> в области юриспруденции.
                </Typography>
                <div className={styles.member4Last}>
                    <div className={styles.memberText41}>
                        <Typography
                            variant='bodyL'
                            weight='regular'
                            lineHeight='lineBig'>
                            Одним из направлений нашей деятельности является правовое просвещение. Мы формируем небольшие онлайн курсы <br /> по различным актуальным правовым темам и предлагаем <br /> их к изучению, а также проводим практические семинары <br /> и тренинги.
                        </Typography>
                        <Typography
                            variant='bodyL'
                            weight='regular'
                            lineHeight='lineBig'>
                            Мы рады приветствовать вас на нашем сайте!
                        </Typography>
                    </div>
                    <div className={styles.memberText42}>
                        <Typography
                            variant='bodyL'
                            weight='regular'
                            lineHeight='lineBig'>
                            Одним из направлений нашей деятельности является правовое просвещение. Мы формируем небольшие онлайн курсы по различным актуальным правовым темам и предлагаем <br /> их к изучению, а также проводим практические семинары и тренинги.
                        </Typography>
                        <Typography
                            className={styles.special}
                            variant='bodyL'
                            weight='regular'
                            lineHeight='lineBig'>
                            Мы рады приветствовать вас на нашем сайте!
                        </Typography>
                    </div>
                    <div className={styles.member1ImgLast}>
                        <img src={aboutPage4} alt="команда «Народное право»" />
                    </div>
                </div>
            </div>
            <Typography
                className={styles.titleSlider}
                variant='h3'
                weight='semibold'>
                Наши сотрудники
            </Typography>
            <Slider />
        </section>
    );
};
