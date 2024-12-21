import { Typography } from "shared/ui/Typography/Typography";
import { WhatsApp } from "shared/assets/icons/WhatsApp";
import { Instagram } from "shared/assets/icons/Instagram";
import { Facebook } from "shared/assets/icons/Facebook";
import { Telegram } from "shared/assets/icons/Telegram";
import { Youtube } from "shared/assets/icons/Youtube";
import s from './Footer.module.scss'
import { Geeks } from "shared/assets/icons/Geeks";
import { Map } from "widgets/Footer/Map/Map";
import { Address } from "./Address/Address";
import { Nav } from "./Nav/Nav";

export const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.up} >
                <Nav />
                <Address />
                <Map />
            </div >
            <div className={s.down} >
                <WhatsApp />
                <Instagram />
                <Facebook />
                <Telegram />
                <Youtube />
            </div >
            <div className={s.geeks}>
                <a className={s.geeksLink}
                    href="https://geeks.kg/geeks-pro"
                    rel="noopener noreferrer"
                    target="_blank">
                    <Typography
                        className={s.geeksLogo}
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

