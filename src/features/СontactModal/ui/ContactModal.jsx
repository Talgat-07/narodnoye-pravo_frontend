/* eslint-disable react/prop-types*/
import s from './ContactModal.module.scss';
import { contactLinks } from '../config/links';
import { ModalButton } from 'shared/ui/ModalButton/ModalButton';
import { ModalWhatsApp } from 'shared/assets/icons/ModalWhatsApp';
import { ModalTelegram } from 'shared/assets/icons/ModalTelegram';
import { ModalInstagram } from 'shared/assets/icons/ModalInstagram';
import { Typography } from 'shared/ui/Typography/Typography';
import { Close } from 'shared/assets/icons/Close';
import { useRef, useState } from 'react';
import { useClickOutside } from '../model/useClickOutside';

export const ContactModal = ({ isOpen, closeModal }) => {
    const modalRef = useRef(null)

    const [confirmationOpen, setConformationOpen] = useState(false)
    const [pendingAction, setPendingAction] = useState(null)

    useClickOutside(modalRef, closeModal)

    if (!isOpen) return null

    const handlerBtnClick = (action) => {
        console.log(action)
        setPendingAction(() => action)
        setConformationOpen(true)
    }
    const handleConfirm = () => {
        if (pendingAction) pendingAction()
        setConformationOpen(false)
        closeModal()
    }
    const handleCancel = () => {
        setConformationOpen(false)
    }


    return (
        <div className={s.overlay} onClick={closeModal}>
            <div className={s.modal} ref={modalRef}>
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
                        // onClick={() => handlerBtnClick(() => window.location.href = contactLinks.whatsapp)}
                        // href={contactLinks.whatsapp}
                        // text="Whatsapp"
                        // icon={<ModalWhatsApp />}
                        onClick={() => handlerBtnClick(() => window.location.href = contactLinks.whatsapp)}
                        text="Whatsapp"
                        icon={<ModalWhatsApp />}
                    />
                    <ModalButton
                        onClick={() => handlerBtnClick(() => window.location.href = contactLinks.telegram)}
                        // href={contactLinks.telegram}
                        text="Telegram"
                        icon={<ModalTelegram />}
                    />
                    <ModalButton
                        onClick={() => handlerBtnClick(() => window.location.href = contactLinks.instagram)}
                        // href={contactLinks.instagram}
                        text="Instagram"
                        icon={<ModalInstagram />}
                    />
                </div>
            </div>

            {confirmationOpen && (
                <div className={s.overlay}>
                    <div className={s.modal}>
                        <Typography variant="h4" weight="semibold">
                            Сайт, который вы просматриваете, пытается открыть внешнее приложение. Вы хотите продолжить?
                        </Typography>
                        <div className={s.buttonWrap}>
                            <button onClick={handleCancel} className={s.cancelButton}>
                                Назад
                            </button>
                            <button onClick={handleConfirm} className={s.confirmButton}>
                                Продолжить
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
