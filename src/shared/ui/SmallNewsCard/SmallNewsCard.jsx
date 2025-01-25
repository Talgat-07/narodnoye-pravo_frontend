import { Link, useLocation } from "react-router-dom";
import styles from "./SmallNewsCard.module.scss";
import { Typography } from "shared/ui/Typography/Typography";
import { path } from "shared/constants/constants";
import PropTypes from "prop-types";
import { ArrowLink } from "shared/assets/icons/ArrowLink";

export const SmallNewsCard = ({ title, description, image, date, id }) => {
    const location = useLocation();
    return (
        <Link
            to={{
                pathname: `${path.legislativeNews}/${id}`
            }}
            state={{ from: location.pathname }}
        >
            <div className={styles.smallContent}>
                <div className={styles.smallUp}>
                    <Typography
                        variant="bodyM"
                        lineHeight="lineSemiTight"
                        weight="regular"
                    >
                        {date} г.
                    </Typography>
                    <Typography
                        className={styles.link}
                        variant="bodyM"
                        weight="semibold"
                        lineHeight="lineSemiTight"
                        color="blue"
                    >
                        Подробнее
                        <ArrowLink />
                    </Typography>
                </div>
                <div className={styles.imageWrap}>
                    <img
                        src={image}
                        alt={title}
                        className={styles.imageSmall}
                    />
                </div>
                <div className={styles.smallDown}>
                    <Typography
                        variant="bodyL"
                        weight="semibold"
                        lineHeight="lineFixed"
                        className={styles.smallTitle}
                    >
                        {title}
                    </Typography>
                    <Typography
                        className={styles.smallDescription}
                        variant="bodyM"
                        weight="regular"
                        lineHeight="lineCompact"
                    >
                        {description}
                    </Typography>
                </div>
            </div>
        </Link>
    );
};

SmallNewsCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
};
