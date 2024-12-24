import { Typography } from "shared/ui/Typography/Typography";
import { WhatsApp } from "shared/assets/icons/WhatsApp";
import { Instagram } from "shared/assets/icons/Instagram";
import { Facebook } from "shared/assets/icons/Facebook";
import { Telegram } from "shared/assets/icons/Telegram";
import { Youtube } from "shared/assets/icons/Youtube";
import style from './Footer.module.scss'
import { Geeks } from "shared/assets/icons/Geeks";
import { Map } from "widgets/Footer/ui/Map/Map";
import { Address } from "./ui/Address/Address";
import { Nav } from "./ui/Nav/Nav";

export const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.up} >
                <Nav />
                <Address />
                <Map />
            </div >
            <div className={style.down} >
                <WhatsApp />
                <Instagram />
                <Facebook />
                <Telegram />
                <Youtube />
            </div >
            <div className={style.geeks}>
                <a className={style.geeksLink}
                    href="https://geeks.kg/geeks-pro"
                    rel="noopener noreferrer"
                    target="_blank">
                    <Typography
                        className={style.geeksLogo}
                        variant='bodyS'
                        weight='medium'>
                        Made by GeeksPro
                    </Typography>
                    <Geeks />
                </a>
            </div>
        </footer >
    );
};

