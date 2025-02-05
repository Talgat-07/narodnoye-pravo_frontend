import { Typography } from "shared/ui/Typography/Typography";
import styles from './Footer.module.scss'
import { Geeks } from "shared/assets/icons/Geeks";
import { Map } from "widgets/Footer/ui/Map/Map";
import { Address } from "./ui/Address/Address";
import { Nav } from "./ui/Nav/Nav";
import { Logo } from 'shared/assets/icons/Logo';
import { useFooterIconStore } from "entities/store/footerIconStore/footerIconStore";
import { Container } from "shared/ui/Container/Container";
import { useEffect } from "react";


export const Footer = () => {
    const {
        whatsappUrl, whatsappImg, whatsappImgHover,
        instagramUrl, instagramImg, instagramImgHover,
        facebookUrl, facebookImg, facebookImgHover,
        telegramUrl, telegramImg, telegramImgHover,
        youtubeUrl, youtubeImg, youtubeImgHover,
        error, fetchFooterIcons
    } = useFooterIconStore();


    const handleImageError = (e) => {
        e.target.styles.display = 'none';
    }


    useEffect(() => {
        fetchFooterIcons()
    }, [fetchFooterIcons])

    if (error) return <div>Ошибка: {error}</div>

    return (
        <Container noPadding>
            <div className={styles.footerWrap}>
                <footer className={styles.footer}>
                    <div className={styles.up} >
                        <Logo />
                        <div className={styles.allWrap}>
                            <Nav />
                            <div className={styles.right}>
                                <Address />
                                <Map />
                            </div>
                        </div>
                    </div >
                    <div className={styles.down} >
                        {whatsappUrl && whatsappImg && (
                            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                                onMouseEnter={(e) => {
                                    e.currentTarget.querySelector('img').src = whatsappImgHover;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.querySelector('img').src = whatsappImg;
                                }}>
                                <div className={styles.iconWrap}>
                                    <img
                                        src={whatsappImg}
                                        alt="WhatsApp"
                                        onError={handleImageError}
                                    />
                                </div>
                            </a>
                        )}
                        {instagramUrl && instagramImg && (
                            <a href={instagramUrl} target="_blank" rel="noopener noreferrer"
                                onMouseEnter={(e) => {
                                    e.currentTarget.querySelector('img').src = instagramImgHover;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.querySelector('img').src = instagramImg;
                                }}>
                                <div className={styles.instagrWrap}>
                                    <img
                                        src={instagramImg}
                                        alt="Instagram"
                                        onError={handleImageError}
                                    />
                                </div>
                            </a>
                        )}
                        {facebookUrl && facebookImg && (
                            <a href={facebookUrl} target="_blank" rel="noopener noreferrer"
                                onMouseEnter={(e) => {
                                    e.currentTarget.querySelector('img').src = facebookImgHover;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.querySelector('img').src = facebookImg;
                                }}>
                                <div className={styles.instagrWrap}>
                                    <img
                                        src={facebookImg}
                                        alt="Facebook"
                                        onError={handleImageError}
                                    />
                                </div>
                            </a>
                        )}
                        {telegramUrl && telegramImg && (
                            <a href={telegramUrl} target="_blank" rel="noopener noreferrer"
                                onMouseEnter={(e) => {
                                    e.currentTarget.querySelector('img').src = telegramImgHover;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.querySelector('img').src = telegramImg;
                                }}>
                                <div className={styles.instagrWrap}>
                                    <img
                                        src={telegramImg}
                                        alt="Telegram"
                                        onError={handleImageError}
                                    />
                                </div>
                            </a>
                        )}
                        {youtubeUrl && youtubeImg && (
                            <a href={youtubeUrl} target="_blank" rel="noopener noreferrer"
                                onMouseEnter={(e) => {
                                    e.currentTarget.querySelector('img').src = youtubeImgHover;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.querySelector('img').src = youtubeImg;
                                }}>
                                <div className={styles.iconWrap}>
                                    <img
                                        src={youtubeImg}
                                        alt="YouTube"
                                        onError={handleImageError}
                                    />
                                </div>
                            </a>
                        )}
                    </div >
                </footer >
                <div className={styles.geeks}>
                    <a className={styles.geeksLink}
                        href="https://geeks.kg/geeks-pro"
                        rel="noopener noreferrer"
                        target="_blank">
                        <Typography
                            className={styles.geeksLogo}
                            variant='bodyS'
                            weight='medium'>
                            Made by Geeks
                        </Typography>
                        <Geeks />
                    </a>
                </div>
            </div>
        </Container>
    )
}

