import styles from './ServiceCard.module.scss'
import { Typography } from 'shared/ui/Typography/Typography';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { path } from 'shared/constants/constants';
import { Button } from 'shared/ui/Button/Button';

export const ServiceCard = ({ id, title, subtitle, img }) => {
    return (
        <div className={styles.serviceCard}>
            <div className={styles.content}>
                <div className={styles.imgWrap}>
                    <img src={img} alt={title} className={styles.svg} />
                </div>
                <div className={styles.wrapText}>
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
                </div>
                <Link to={`${path.services}/${id}`} className={styles.linkWrapBtn}>
                    <Button
                        className={styles.linkBtn}
                        variant='span'
                        lineHeight='lineSemiTight'
                        weight='semibold'
                        color='blue'
                    >
                        Подробнее
                    </Button>
                </Link >
            </div>
        </div>
    );
};

ServiceCard.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    img: PropTypes.node
}