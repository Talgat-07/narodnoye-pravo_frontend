import styles from './ServiceCard.module.scss'
import { Typography } from 'shared/ui/Typography/Typography';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { path } from 'shared/constants/constants';
import { Button } from 'shared/ui/Button/Button';

export const ServiceCard = ({ id, title, subtitle, img }) => {
    return (
        <Link
            to={`${path.services}/${id}`}
            className={styles.serviceCard}
        >
            <div className={styles.content}>
                <img src={img} alt={title} className={styles.svg} />
                <Typography
                    className={styles.title}
                    variant='bodyXXL'
                    weight='semibold'
                >
                    {title}
                </Typography>
                <Typography
                    className={styles.subtitle}
                    variant='bodyXL'
                    weight='regular'
                    color='grey'
                    lineHeight='lineLarge'
                >
                    {subtitle}...
                </Typography>
                <Button
                    className={styles.linkBtn}
                    variant='span'
                    lineHeight='lineSemiTight'
                    weight='semibold'
                    color='blue'
                >
                    Подробнее
                </Button>
            </div>
        </Link >
    );
};

ServiceCard.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    img: PropTypes.node
}