import { Link } from "react-router-dom";
import style from "./NewsCard.module.scss";
import { Typography } from "shared/ui/Typography/Typography";
import { path } from "shared/constants/constants";
import PropTypes from 'prop-types'
import { ArrowLink } from "shared/assets/icons/ArrowLink";


export const NewsCard = ({ title, description, image, isLarge, date, id }) => {
  return (
    <div className={`${style.newsCard} ${isLarge ? style.large : style.small}`}>
      {isLarge ? (
        <Link to={`${path.legislativeNews}/${id}`}>
          <div className={style.largeContent}>
            <div className={style.imageWrap}>
              <img
                src={image}
                alt={title}
                className={style.imageLarge} />
            </div>
            <div className={style.content}>
              <div className={style.up}>
                <Typography
                  variant='bodyL'
                  lineHeight='lineTight'
                  weight='regular'
                >
                  {date}
                </Typography>
                <Typography
                  className={style.linkLarge}
                  variant='bodyM'
                  weight='semibold'
                  lineHeight='lineSemiTight'
                  color='blue'
                >
                  Подробнее
                  <ArrowLink />
                </Typography>
              </div>
              <div className={style.downLarge}>
                <Typography
                  className={style.titleLarge}
                  variant='bodyXL'
                  lineHeight='lineBig'
                  weight='semibold'
                >{title}</Typography>
                <Typography
                  className={style.descriptionLarge}
                  variant='bodyM'
                  lineHeight='lineXL'
                  weight='regular'>
                  {description}
                </Typography>
              </div>
            </div>
          </div>
        </Link>
      ) : (
        <Link to={`${path.legislativeNews}/${id}`}>
          <div className={style.smallContent}>
            <div className={style.smallUp}>
              <Typography
                variant='bodyM'
                lineHeight='lineSemiTight'
                weight='regular'>
                {date}
              </Typography>
              <Typography
                className={style.link}
                variant='bodyM'
                weight='semibold'
                lineHeight='lineSemiTight'
                color='blue'>
                Подробнее
                <ArrowLink />
              </Typography>
            </div>
            <div className={style.imageWrap}>
              <img
                src={image}
                alt={title}
                className={style.imageSmall} />
            </div>
            <div className={style.smallDown}>
              <Typography
                variant='bodyL'
                weight='semibold'
                lineHeight='lineFixed'
                className={style.smallTitle}
              >
                {title}
              </Typography>
              <Typography
                className={style.smallDescription}
                variant='bodyM'
                weight='regular'
                lineHeight='lineCompact' >
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
}