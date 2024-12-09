
import s from './ContactModal.module.scss';
import { contactLinks } from '../config/links';
import { ModalButton } from 'shared/ui/ModalButton/ModalButton';
import { ModalWhatsApp } from 'shared/assets/icons/ModalWhatsApp';
import { ModalTelegram } from 'shared/assets/icons/ModalTelegram';
import { ModalInstagram } from 'shared/assets/icons/ModalInstagram';
import { Typography } from 'shared/ui/Typography/Typography';
import { Close } from 'shared/assets/icons/Close';

export const ContactModal = ({ isOpen, closeModal }) => {
    if (!isOpen) return null;

    return (
        <div className={s.overlay} onClick={closeModal}>
            <div className={s.modal} onClick={(e) => e.stopPropagation()}>
                <button className={s.close} onClick={closeModal}>
                    <Close />
                </button>
                <Typography
                    className={s.title}
                    variant="h4"
                    weight="semibold"
                >
                    Свяжитесь с нами
                </Typography>
                <div className={s.linkWrap}>
                    <ModalButton
                        href={contactLinks.whatsapp}
                        text="Whatsapp"
                        icon={<ModalWhatsApp />}
                    />
                    <ModalButton
                        href={contactLinks.telegram}
                        text="Telegram"
                        icon={<ModalTelegram />}
                    />
                    <ModalButton
                        href={contactLinks.instagram}
                        text="Instagram"
                        icon={<ModalInstagram />}
                    />
                </div>
            </div>
        </div>
    );
};
