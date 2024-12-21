import s from './ContactModal.module.scss';
import { Typography } from 'shared/ui/Typography/Typography';
import { Close } from 'shared/assets/icons/Close';
import { useRef, useState } from 'react';
import { options } from 'features/ContactModal/model/selectConfig';
import PropTypes from 'prop-types';
import { Button } from 'shared/ui/Button/Button';
import { SelectField } from 'features/ContactModal/ui/SelectField/SelectField';
import { ModalPhoneInput } from 'features/ContactModal/ui/ModalPhoneInput/ModalPhoneInput';
import { ModalCheckbox } from 'features/ContactModal/ui/ModalCheckbox/ModalCheckbox';
import { ModalNameInput } from 'features/ContactModal/ui/ModalNameInput/ModalNameInput';
import { useClickOutside } from 'features/ContactModal/model/useClickOutside';

export const ContactModal = ({ isOpen, closeModal }) => {
    const modalRef = useRef(null)

    useClickOutside(modalRef, closeModal)


    const [name, setName] = useState('');
    const [question, setQuestion] = useState('');
    const [digits, setDigits] = useState('');
    const [agreement, setAgreement] = useState(false);


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
        <div className={s.overlay}>
            <form className={s.modal}
                ref={modalRef}
                onSubmit={handleSubmit}>
                <button className={s.close} onClick={handleCloseModal}>
                    <Close />
                </button>
                <Typography variant="h3"
                    weight="semibold"
                    color='lightBlue'>
                    Контактная форма
                </Typography>
                <div className={s.linkWrap}>
                    <ModalNameInput
                        type='text'
                        id='name'
                        name='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Имя'>
                        Имя Фамилия*
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
