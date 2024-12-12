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
        setPendingAction(() => () => action('_blank'))
        setConformationOpen(true)
    }
    const handleConfirm = () => {
        if (pendingAction) pendingAction()
        setConformationOpen(false)
        closeModal()
    }
    const handleCancel = () => {
        setConformationOpen(false)
        closeModal()
    }

    return (
        <div className={s.overlay} onClick={closeModal}>
            <div className={s.modal} ref={modalRef} onClick={(e) => e.stopPropagation()}>
                {!confirmationOpen ? (
                    <>
                        <button className={s.close} onClick={closeModal}>
                            <Close />
                        </button>
                        <Typography variant="h4" weight="semibold">
                            Свяжитесь с нами
                        </Typography>
                        <div className={s.linkWrap}>
                            <ModalButton
                                onClick={() => handlerBtnClick((target) => window.open(contactLinks.whatsapp, target))}
                                text="WhatsApp"
                                icon={<ModalWhatsApp />}
                            />
                            <ModalButton
                                onClick={() => handlerBtnClick((target) => window.open(contactLinks.telegram, target))}
                                text="Telegram"
                                icon={<ModalTelegram />}
                            />
                            <ModalButton
                                onClick={() => handlerBtnClick((target) => window.open(contactLinks.instagram, target))}
                                text="Instagram"
                                icon={<ModalInstagram />}
                            />

                        </div>
                    </>
                ) : (
                    <div className={s.extraModal} >
                        <Typography variant="h4" weight="semibold">
                            Сайт, который вы просматриваете, пытается открыть внешнее приложение. Вы хотите продолжить?
                        </Typography>
                        <div className={s.buttonWrap}>
                            <button onClick={handleCancel} className={s.cancelButton}>
                                <Typography
                                    variant='span'
                                    styleType='Medium'
                                    color='white'
                                    lineHeight='lineLittle'>
                                    Назад
                                </Typography>
                            </button>
                            <button onClick={handleConfirm} className={s.confirmButton}>
                                <Typography
                                    variant='span'
                                    styleType='Medium'
                                    color='white'
                                    lineHeight='lineLittle'>
                                    Продолжить
                                </Typography>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>

    );
};
