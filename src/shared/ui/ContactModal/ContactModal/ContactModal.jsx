import styles from './ContactModal.module.scss';
import { Typography } from 'shared/ui/Typography/Typography';
import { Close } from 'shared/assets/icons/Close';
import { useRef, useState, useEffect } from 'react';
import { options } from 'shared/ui/ContactModal/SelectField/SelectStyles';
import PropTypes from 'prop-types';
import { Button } from 'shared/ui/Button/Button';
import { SelectField } from 'shared/ui/ContactModal/SelectField/SelectField';
import { ModalPhoneInput } from 'shared/ui/ContactModal/ModalPhoneInput/ModalPhoneInput';
import { ModalCheckbox } from 'shared/ui/ContactModal/ModalCheckbox/ModalCheckbox';
import { ModalNameInput } from 'shared/ui/ContactModal/ModalNameInput/ModalNameInput';
import { useClickOutside } from 'shared/lib/hooks/hooks';

export const ContactModal = ({ isOpen, closeModal }) => {

    const modalRef = useRef(null)

    useClickOutside(modalRef, closeModal)


    const [name, setName] = useState('');
    const [question, setQuestion] = useState('');
    const [digits, setDigits] = useState('');
    const [agreement, setAgreement] = useState(false);


    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);


    const handleSubmit = (e) => {
        e.preventDefault()
        setName('');
        setQuestion('');
        setDigits('');
        setAgreement(false);
        closeModal();
    }


    const handleCloseModal = () => {
        setName('');
        setQuestion('');
        setDigits('');
        setAgreement(false);
        closeModal();
    }


    if (!isOpen) return null;


    return (
        <div className={styles.overlay}>
            <form className={styles.modal}
                ref={modalRef}
                onSubmit={handleSubmit}>
                <button className={styles.close} onClick={handleCloseModal}>
                    <Close />
                </button>
                <Typography variant="h3"
                    weight="semibold"
                    color='lightBlue'>
                    Контактная форма
                </Typography>
                <div className={styles.linkWrap}>
                    <ModalNameInput
                        type='text'
                        id='name'
                        name='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Имя Фамилия'>
                        Имя*
                    </ModalNameInput>
                    <SelectField
                        label="Интересующий вопрос*"
                        options={options}
                        value={question}
                        onChange={setQuestion} />
                    <ModalPhoneInput
                        type='text'
                        id='phone'
                        name='phone'
                        value={digits}
                        onChange={(e) => setDigits(e.target.value)}
                        placeholder='(000) 00-00-00'>
                        Номер телефона*
                    </ModalPhoneInput>
                    <ModalCheckbox
                        type='checkbox'
                        name='agreement'
                        checked={agreement}
                        onChange={(e) => setAgreement(e.target.checked)}>
                        Нажимая на кнопку и/или отправляя данные, вы соглашаетесь на обработку персональных данных*
                    </ModalCheckbox>
                    <Button
                        className='modalBtn'
                        variant='span'
                        weight='semibold'
                        lineHeight='lineSemiTight'
                        color='white'
                        type='submit'>
                        Отправить
                    </Button>
                </div>
            </form>
        </div>
    );
};

ContactModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
};
