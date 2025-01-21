import { Link } from "react-router-dom";
import styles from "./NewsCard.module.scss";
import { Typography } from "shared/ui/Typography/Typography";
import { path } from "shared/constants/constants";
import PropTypes from 'prop-types'
import { ArrowLink } from "shared/assets/icons/ArrowLink";


export const NewsCard = ({ title, description, image, isLarge, date, id, className }) => {
  return (
    <div className={`
    ${styles.newsCard} 
    ${isLarge ? styles.large : styles.small}
    ${className || ''} 
  `}>
      {isLarge ? (
        <Link to={`${path.legislativeNews}/${id}`}>
          <div className={styles.largeContent}>
            <div className={styles.imageWrap}>
              <img
                src={image}
                alt={title}
                className={styles.imageLarge} />
            </div>
            <div className={styles.content}>
              <div className={styles.up}>
                <Typography
                  variant='bodyL'
                  lineHeight='lineTight'
                  weight='regular'
                >
                  {date} г.
                </Typography>
                <Typography
                  className={styles.linkLarge}
                  variant='bodyM'
                  weight='semibold'
                  lineHeight='lineSemiTight'
                  color='blue'
                >
                  Подробнее
                  <ArrowLink />
                </Typography>
              </div>
              <div className={styles.downLarge}>
                <Typography
                  className={styles.titleLarge}
                  variant='bodyXLL'
                  lineHeight='lineLarge'
                  weight='semibold'
                >{title}</Typography>
                <Typography
                  className={styles.descriptionLarge}
                  variant='bodyL'
                  lineHeight='lineBig'
                  weight='regular'>
                  {description}
                </Typography>
              </div>
            </div>
          </div>
        </Link>
      ) : (
        <Link to={`${path.legislativeNews}/${id}`}>
          <div className={styles.smallContent}>
            <div className={styles.smallUp}>
              <Typography
                variant='bodyM'
                lineHeight='lineSemiTight'
                weight='regular'>
                {date} г.
              </Typography>
              <Typography
                className={styles.link}
                variant='bodyM'
                weight='semibold'
                lineHeight='lineSemiTight'
                color='blue'>
                Подробнее
                <ArrowLink />
              </Typography>
            </div>
            <div className={styles.imageWrapSmall}>
              <img
                src={image}
                alt={title}
                className={styles.imageSmall} />
            </div>
            <div className={styles.smallDown}>
              <Typography
                variant='bodyL'
                weight='semibold'
                lineHeight='lineFixed'
                className={styles.smallTitle}
              >
                {title}
              </Typography>
              <Typography
                className={styles.smallDescription}
                variant='bodyL'
                weight='regular'
                lineHeight='lineDefault' >
                {description}
              </Typography>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

NewsCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isLarge: PropTypes.bool.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  className: PropTypes.string,
}