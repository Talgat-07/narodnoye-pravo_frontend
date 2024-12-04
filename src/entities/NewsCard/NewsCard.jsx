import React from "react";
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
                variant='p'
                styleType='Medium'
                lineHeight='lineLittle'
                weight='normal'
              >{date}</Typography>
              <Link to={path.services}>
                <Typography
                  className={s.link}
                  variant='p'
                  styleType='Medium'
                  lineHeight='lineLittle'
                  color='blue'>
                  Подробнее
                  <Arrow />
                </Typography>
              </Link>
            </div>
            <div className={s.down}>
              <Typography
                className={s.title}
                variant='p'
                styleType='Big'
                lineHeight='lineBig'
                weight='normal'
              >{title}</Typography>
              <Typography
                className={s.description}
                variant='p'
                styleType='Little'
                lineHeight='lineBig'
                weight='regular'
              >{description}</Typography>
            </div>
          </div>
        </div>
      ) : (
        // Маленькая карточка
        <div className={s.smallContent}>
          <div className={s.smallUp}>
            <Typography
              variant='p'
              styleType='Medium'
              lineHeight='lineLittle'
              weight='normal'
            >{date}</Typography>
            <Link to={path.services}>
              <Typography
                className={s.link}
                variant='p'
                styleType='Medium'
                lineHeight='lineLittle'
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
              variant='p'
              styleType='Little'
              lineHeight='lineSmall'
              weight='regular'
            >{description}</Typography>
          </div>
        </div>
      )}
    </div>
  );
};
