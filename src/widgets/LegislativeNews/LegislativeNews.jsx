import { NewsCard } from 'entities/NewsCard/NewsCard';
import s from './LegislativeNews.module.scss';
import pic from '../../shared/assets/img/NewsBig.png'
import img from '../../shared/assets/img/NewsSmall.png'
import { Typography } from 'shared/ui/Typography/Typography';
import { ButtonLink } from 'shared/ui/ButtonLink/ButtonLink';
import { Link } from 'react-router-dom';
import { path } from 'shared/constants/constants';





export const LegislativeNews = () => {
    const mockNews = [
        {
            id: 1,
            date: '22.11.2024 г.',
            title: "Lorem ipsum dolor sit amet consectetur. Aenean massa scelerisque nisl libero ipsum libero.",
            description: "Lorem ipsum dolor sit amet consectetur. Sit tincidunt lorem faucibus orci nibh turpis risus ullamcorper suscipit. Netus volutpat suscipit interdum ornare proin etiam dui fringilla at. Ultrices aliquam arcu et dui ut id maecenas. Nec vestibulum donec amet in blandit id diam massa.",
            image: pic,
        },
        {
            id: 2,
            date: '22.11.2024 г.',
            description: "Lorem ipsum dolor sit amet consectetur. Sit tincidunt lorem faucibus orci nibh turpis risus ullamcorper suscipit. ",
            image: img,
        },
        {
            id: 3,
            date: '22.11.2024 г.',
            description: "Lorem ipsum dolor sit amet consectetur. Sit tincidunt lorem faucibus orci nibh turpis risus ullamcorper suscipit. ",
            image: img,
        },
        {
            id: 4,
            date: '22.11.2024 г.',
            description: "Lorem ipsum dolor sit amet consectetur. Sit tincidunt lorem faucibus orci nibh turpis risus ullamcorper suscipit. ",
            image: img,
        },
    ];

    return (
        <section className={s.newsWrap}>
            <Typography
                className={s.title}
                variant='h3'
                weight='bold'
                color='black'>
                Новости законодательства
            </Typography>
            <div className={s.newsGrid}>
                {/* Большая карточка */}
                <NewsCard
                    title={mockNews[0].title}
                    description={mockNews[0].description}
                    image={mockNews[0].image}
                    date={mockNews[0].date}
                    isLarge={true}
                />

                {/* Маленькие карточки */}
                <div className={s.smallCards}>
                    {mockNews.slice(1).map((newsItem) => (
                        <NewsCard
                            key={newsItem.id}
                            title={newsItem.title}
                            description={newsItem.description}
                            image={newsItem.image}
                            date={newsItem.date}
                            isLarge={false}
                        />
                    ))}
                </div>
            </div>
            <Link to={path.legislativenews}>
                <ButtonLink />
            </Link>
        </section>
    );
};