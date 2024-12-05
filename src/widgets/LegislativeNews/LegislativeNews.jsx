import { NewsCard } from 'shared/ui/NewsCard/NewsCard';
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
            title: "1Lorem ipsum dolor sit amet consectetur. Aenean massa scelerisque nisl libero ipsum libero.",
            description: "Lorem ipsum dolor sit amet consectetur. Sit tincidunt lorem faucibus orci nibh turpis risus ullamcorper suscipit. Netus volutpat suscipit interdum ornare proin etiam dui fringilla at. Ultrices aliquam arcu et dui ut id maecenas. Nec vestibulum donec amet in blandit id diam massa.",
            image: pic,
        },
        {
            id: 2,
            date: '22.11.2024 г.',
            title: "2Lorem ipsum dolor sit amet consectetur. Aenean massa scelerisque nisl libero ipsum libero.",
            description: "Lorem ipsum dolor sit amet consectetur. Sit tincidunt lorem faucibus orci nibh turpis risus ullamcorper suscipit. Netus volutpat suscipit interdum ornare proin etiam dui fringilla at. Ultrices aliquam arcu et dui ut id maecenas. Nec vestibulum donec amet in blandit id diam massa.",
            image: img,
        },
        {
            id: 3,
            date: '22.11.2024 г.',
            title: "3Lorem ipsum dolor sit amet consectetur. Aenean massa scelerisque nisl libero ipsum libero.",
            description: "Lorem ipsum dolor sit amet consectetur. Sit tincidunt lorem faucibus orci nibh turpis risus ullamcorper suscipit. Netus volutpat suscipit interdum ornare proin etiam dui fringilla at. Ultrices aliquam arcu et dui ut id maecenas. Nec vestibulum donec amet in blandit id diam massa.",
            image: img,
        },
        {
            id: 4,
            date: '22.11.2024 г.',
            title: "4Lorem ipsum dolor sit amet consectetur. Aenean massa scelerisque nisl libero ipsum libero.",
            description: "Lorem ipsum dolor sit amet consectetur. Sit tincidunt lorem faucibus orci nibh turpis risus ullamcorper suscipit. Netus volutpat suscipit interdum ornare proin etiam dui fringilla at. Ultrices aliquam arcu et dui ut id maecenas. Nec vestibulum donec amet in blandit id diam massa.",
            image: img,
        },
    ];

    const lastNew = mockNews[0]
    const renderNews = mockNews.slice(1)


    return (
        <div className={s.block}>
            {lastNew && ( 
                <NewsCard
                key={lastNew.id}
                title={lastNew.title}
                description={lastNew.description}
                image={lastNew.image}
                date={lastNew.date}
            />
            )}
            <div className={s.newsGrid}>
                {renderNews.map((newsItem) => (
                    <NewsCard
                        key={newsItem.id}
                        title={newsItem.title}
                        description={newsItem.description}
                        image={newsItem.image}
                        date={newsItem.date}
                    />
                ))}
            </div>
        </div>
    )
}