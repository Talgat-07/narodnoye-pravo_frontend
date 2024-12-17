/* eslint-disable react/prop-types*/
import { NewsCard } from 'shared/ui/NewsCard/NewsCard';
import s from './LegislativeNews.module.scss';
import pic from '../../shared/assets/img/NewsBig.png'
import img from '../../shared/assets/img/NewsSmall.png'
import { Typography } from 'shared/ui/Typography/Typography';
import { ButtonLink } from 'shared/ui/ButtonLink/ButtonLink';
import { Link } from "react-router-dom";
import { path } from "shared/constants/constants";






export const LegislativeNews = () => {
    const mockNews = [
        {
            id: 1,
            date: '22.11.2024 г.',
            title: "Lorem ipsum dolor sit amet consectetur. Aenean massa scelerisque nisl libero ipsum libero.",
            description: "Netus volutpat suscipit interdum ornare proin etiam dui fringilla at Netus volutpat suscipit interdum ornare proin etiam dui fringilla at Netus volutpat suscipit interdum ornare proin etiam dui fringilla at. Ultrices aliquam arcu et dui ut id maecenas. Nec vestibulum donec amet in blandit id diam massa.",
            image: pic,
        },
        {
            id: 2,
            date: '22.11.2024 г.',
            title: "2Lorem ipsum dolor sit amet consectetur. Aenean massa scelerisque nisl libero ipsum libero.",
            description: "Netus volutpat suscipit interdum ornare proin etiam dui fringilla at. Ultrices aliquam arcu et dui ut id maecenas. Nec vestibulum donec amet in blandit id diam massa.",
            image: img,
        },
        {
            id: 3,
            date: '22.11.2024 г.',
            title: "3Lorem ipsum dolor sit amet consectetur. Aenean massa scelerisque nisl libero ipsum libero.",
            description: " Netus volutpat suscipit interdum ornare proin etiam dui fringilla at. Ultrices aliquam arcu et dui ut id maecenas. Nec vestibulum donec amet in blandit id diam massa.",
            image: img,
        },
        {
            id: 4,
            date: '22.11.2024 г.',
            title: "4Lorem ipsum dolor sit amet consectetur. Aenean massa scelerisque nisl libero ipsum libero.",
            description: " Netus volutpat suscipit interdum ornare proin etiam dui fringilla at. Ultrices aliquam arcu et dui ut id maecenas. Nec vestibulum donec amet in blandit id diam massa.",
            image: img,
        },
    ];

    const lastNews = mockNews[0]
    const renderNews = mockNews.slice(1)


    return (
        <div className={s.container}>
           <Typography
                className={s.title}
                variant='h3'
                weight='bold'>
                Новости законодательства
            </Typography>

            <div className={s.block}>
            {lastNews && (
                <NewsCard
                    key={lastNews.id}
                    title={lastNews.title}
                    description={lastNews.description}
                    image={lastNews.image}
                    date={lastNews.date}
                    isLarge={true}
                />
            )}
            <div className={s.newsCard}>
                {renderNews.map((newsItem) => (
                    <NewsCard
                        key={newsItem.id}
                        title={newsItem.title}
                        description={newsItem.description}
                        image={newsItem.image}
                        date={newsItem.date} />
                ))}
                </div>
            </div>
            <div className={s.btn}>
                <Link  to={path.about}>
                    <ButtonLink />
                </Link>
            </div>
           
            
                      
        </div>
        
    )
}
