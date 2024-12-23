import { Typography } from 'shared/ui/Typography/Typography';
import s from './AboutPage.module.scss'
import aboutPage from 'shared/assets/img/aboutPage2.webp'
import aboutPage2 from 'shared/assets/img/aboutPage.webp'
import aboutPage3 from 'shared/assets/img/aboutPage3.webp'
import aboutPage4 from 'shared/assets/img/aboutPage4.webp'
import { Slider } from 'shared/ui/Slider/Slider';


export const AboutPage = () => {
    return (
        <section className={s.aboutPage}>
            <Typography
                className={s.title}
                variant='h3'
                weight='semibold'>
                О нас
            </Typography>
            <div className={s.wrap}>
                <div className={s.member}>
                    <img src={aboutPage} alt="команда «Народное право»" />
                    <div className={s.memberText1}>
                        <Typography
                            variant='bodyL'
                            weight='regular'
                            lineHeight='lineBig'>
                            <strong>Юридическая компания «Народное право»</strong> — компания, созданная в 2008 году. За время своего существования прошла успешный путь и в настоящее время занимает устойчивое положение на рынке юридических услуг.
                        </Typography>
                        <Typography
                            variant='bodyL'
                            weight='regular'
                            lineHeight='lineBig'>
                            <strong>Основная цель нашей компании</strong> — сделать юридические услуги доступными для всех. Для нас не бывает мелких вопросов и незначительных просьб. Мы понимаем, что каждый человек в процессе своей жизни может столкнуться с правовой проблемой, и готовы оказать необходимую юридическую помощь — проконсультировать, разъяснить, представить интересы.
                        </Typography>
                    </div>
                </div>
                <div className={s.member}>
                    <div className={s.memberText2}>
                        <Typography
                            variant='bodyL'
                            weight='regular'
                            lineHeight='lineBig'>
                            Наряду с этим наша компания профессионально занимается юридическим сопровождением деятельности хозяйствующих субъектов. Мы оказываем юридические услуги по принципу аутсорсинга, обеспечивая оперативную реакцию на поступающие запросы.
                        </Typography>
                        <Typography
                            variant='bodyL'
                            weight='regular'
                            lineHeight='lineBig'>
                            Деятельность нашей компании основывается, в первую очередь, на принципе законности. Мы работаем только в соответствии с требованиями и нормами законодательства Кыргызской Республики, постоянно расширяя спектр оказываемых услуг.
                        </Typography>
                    </div>
                    <img src={aboutPage2} alt="команда «Народное право»" />
                </div>
                <div className={s.member}>
                    <img src={aboutPage3} alt="команда «Народное право»" />
                    <div className={s.memberText3}>
                        <Typography
                            variant='bodyL'
                            weight='regular'>
                            У нас «говорящее» название. Народным право является потому, что мы реализуем социальный компонент, оказывая бесплатную юридическую помощь гражданам, которые не могут позволить себе оплатить услуги юриста, причем делаем это без ущерба для качества или объема оказываемых услуг.
                        </Typography>
                        <Typography
                            variant='bodyL'
                            weight='regular'>
                            Наша команда постоянно совершенствует свою квалификацию, следит за изменениями законодательства, новейшими теоретическими разработками в области юриспруденции.
                        </Typography>
                    </div>
                </div>
                <div className={s.member}>
                    <div className={s.memberText4}>
                        <Typography
                            variant='bodyL'
                            weight='regular'>
                            Одним из направлений нашей деятельности является правовое просвещение. Мы формируем небольшие онлайн курсы по различным актуальным правовым темам и предлагаем их к изучению, а также проводим практические семинары и тренинги.
                        </Typography>
                        <Typography
                            variant='bodyL'
                            weight='regular'>
                            Мы рады приветствовать вас на нашем сайте!
                        </Typography>
                    </div>
                    <img src={aboutPage4} alt="команда «Народное право»" />
                </div>
            </div>
            <Typography
                className={s.titleSlider}
                variant='h5'
                weight='semibold'>
                Наши сотрудники
            </Typography>
            <Slider />
        </section>
    );
};
