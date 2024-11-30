import React from 'react';
import heroImg from '../../shared/assets/img/hero.webp'
import { Typography } from 'shared/ui/Typography/Typography';
import s from './Hero.module.scss'
import { Button } from 'shared/ui/Button/Button';

export const Hero = () => {
    return (
        <section className={s.hero}>
            <div className={s.wrap}>
                <div className={s.left}>
                    <div className={s.title}>
                        <Typography
                            className={s.h1}
                            variant='h1'
                            weight='bold'
                            color='black'>
                            “Народное право”
                        </Typography>
                        <Typography
                            className={s.h4}
                            variant='h4'
                            weight='regular'
                            color='black'>
                            -доступно всем
                        </Typography>
                    </div>
                    <Typography
                        className={s.text}
                        variant='p'
                        styleType='Medium'
                        weight='regular'
                        color='black'
                        fontFamily='second'>
                        Компания «Народное право» оказывает качественные юридические услуги <br /> по доступной цене.
                    </Typography>
                    <Button />
                </div>
                <div className={s.right}>
                    <img src={heroImg} alt="книги, весы и молоток" />
                </div>
            </div>
        </section>
    );
};
