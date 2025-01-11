import { Typography } from "shared/ui/Typography/Typography";
import styles from './Footer.module.scss'
import { Geeks } from "shared/assets/icons/Geeks";
import { Map } from "widgets/Footer/ui/Map/Map";
import { Address } from "./ui/Address/Address";
import { Nav } from "./ui/Nav/Nav";
import { Logo } from 'shared/assets/icons/Logo';
import { useFooterIconStore } from "shared/store/footerIconStore";
import { Container } from "shared/ui/Container/Container";


export const Footer = () => {
    const {
        whatsappUrl, whatsappImg, whatsappImgHover,
        instagramUrl, instagramImg, instagramImgHover,
        facebookUrl, facebookImg, facebookImgHover,
        telegramUrl, telegramImg, telegramImgHover,
        youtubeUrl, youtubeImg, youtubeImgHover,
        error
    } = useFooterIconStore();


    const handleImageError = (e) => {
        e.target.styles.display = 'none';
    }

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
                                <img
                                    src={whatsappImg}
                                    alt="WhatsApp"
                                    onError={handleImageError}
                                />
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
                                <img
                                    src={instagramImg}
                                    alt="Instagram"
                                    onError={handleImageError}
                                />
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
                                <img
                                    src={facebookImg}
                                    alt="Facebook"
                                    onError={handleImageError}
                                />
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
                                <img
                                    src={telegramImg}
                                    alt="Telegram"
                                    onError={handleImageError}
                                />
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
                                <img
                                    src={youtubeImg}
                                    alt="YouTube"
                                    onError={handleImageError}
                                />
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
                            Made by GeeksPro
                        </Typography>
                        <Geeks />
                    </a>
                </div>
            </div>
        </Container>
    )
}

