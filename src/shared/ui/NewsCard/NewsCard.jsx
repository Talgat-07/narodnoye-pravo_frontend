/* eslint-disable react/prop-types*/
import { Link } from "react-router-dom";
import s from "./NewsCard.module.scss";
import { Typography } from "shared/ui/Typography/Typography";
import { Arrow } from "shared/assets/icons/Arrow";
import { path } from "shared/constants/constants";

export const NewsCard = ({ title, description, image, isLarge, date }) => {
  return (
    <div className={`${s.newsCard} ${isLarge ? s.large : s.small}`}>
      {isLarge ? (
        // Большая карточка
        <div className={s.largeContent}>
          <div className={s.imageWrap}>
            <img src={image} alt={title} className={s.image} />
          </div>
          <div className={s.content}>
            <div className={s.up}>
              <Typography
                variant='bodyL'
                lineHeight='lineTight'
                weight='regular'
              >{date}</Typography>
              <Link to={path.services}>
                <Typography
                  className={s.link}
                  variant='bodyM'
                  weight='semibold'
                  lineHeight='lineSemiTight'
                  color='blue'>
                  Подробнее
                  <Arrow />
                </Typography>
              </Link>
            </div>
            <div className={s.down}>
              <Typography
                className={s.title}
                variant='bodyXL'
                lineHeight='lineBig'
                weight='semibold'
              >{title}</Typography>
              <Typography
                className={s.description}
                variant='bodyM'
                lineHeight='lineBig'
                weight='regular'>
                {description}
              </Typography>
            </div>
          </div>
        </div>
      ) : (
        // Маленькая карточка
        <div className={s.smallContent}>
          <div className={s.smallUp}>
            <Typography
              variant='bodyM'
              lineHeight='lineSemiTight'
              weight='regular'>
              {date}
            </Typography>
            <Link to={path.services}>
              <Typography
                className={s.link}
                variant='bodyM'
                weight='semibold'
                lineHeight='lineSemiTight'
                color='blue'>
                Подробнее
                <Arrow />
              </Typography>
            </Link>
          </div>
          <div className={s.imageWrap}>
            <img src={image} alt={title} className={s.image} />
          </div>
          <div className={s.smallDown}>
            <Typography
              className={s.smallDescription}
              variant='bodyM'
              weight='regular'
              lineHeight='lineCompact'
            >{description}</Typography>
          </div>
        </div>
      )}
    </div>
  );
};
