import s from './ServiceCard.module.scss'
import { Typography } from 'shared/ui/Typography/Typography';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'


export const ServiceCard = ({ id, title, description, img }) => {
    return (
        <Link to={`/services/${id}`}
            className={s.seviceCard}
            style={{ backgroundImage: `url(${img})` }}>
            <div className={s.content}>
                <Typography
                    className={s.title}
                    variant='bodyXXL'
                    weight='semibold'
                    color='white'>
                    {title}
                </Typography>
                <Typography
                    className={s.description}
                    variant='bodyXL'
                    weight='regular'
                    color='white'
                    lineHeight='lineModerate'>
                    {description}...
                </Typography>
            </div>
        </Link >
    );
};

ServiceCard.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
}