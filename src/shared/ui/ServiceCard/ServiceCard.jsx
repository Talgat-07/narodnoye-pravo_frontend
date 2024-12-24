import style from './ServiceCard.module.scss'
import { Typography } from 'shared/ui/Typography/Typography';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { path } from 'shared/constants/constants';


export const ServiceCard = ({ id, title, description, img }) => {
    return (
        <Link
            to={`${path.services}/${id}`}
            className={style.seviceCard}
            style={{ backgroundImage: `url(${img})` }}>
            <div className={style.content}>
                <Typography
                    className={style.title}
                    variant='bodyXXL'
                    weight='semibold'
                    color='white'>
                    {title}
                </Typography>
                <Typography
                    className={style.description}
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
    img: PropTypes.string
}