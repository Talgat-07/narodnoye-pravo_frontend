import s from './ContactModal.module.scss';
import { Typography } from 'shared/ui/Typography/Typography';
import { Close } from 'shared/assets/icons/Close';
import { useState } from 'react';
import { ModalButton } from 'features/СontactModal/ui/ModalButton/ModalButton';
import { ModalNameInput } from 'features/СontactModal/ui/ModalNameInput/ModalNameInput';
import { ModalPhoneInput } from 'features/СontactModal/ui/ModalPhoneInput/ModalPhoneInput';
import { ModalCheckbox } from 'features/СontactModal/ui/ModalCheckbox/ModalCheckbox';
import { SelectField } from 'features/СontactModal/ui/SelectField/SelectField';
import { options } from 'features/СontactModal/model/selectConfig';
import PropTypes from 'prop-types';

export const ContactModal = ({ isOpen, closeModal }) => {
    const [name, setName] = useState('');
    const [question, setQuestion] = useState('');
    const [digits, setDigits] = useState('');
    const [agreement, setAgreement] = useState(false);
    const [errors, setErrors] = useState({});

    const nameRegex = /^[a-zA-Zа-яА-ЯёЁ\s]{2,}$/;
    const phoneRegex = /^\(\d{3}\)\s\d{2}-\d{2}-\d{2}$/;

    const formatPhone = (digits) => {
        const length = digits.length;
        if (!length) return '';

        let formatted = digits;
        if (length > 3) {
            formatted = `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
        }
        if (length > 5) {
            formatted = `(${digits.slice(0, 3)}) ${digits.slice(3, 5)}-${digits.slice(5)}`;
        }
        if (length > 7) {
            formatted = `(${digits.slice(0, 3)}) ${digits.slice(3, 5)}-${digits.slice(5, 7)}-${digits.slice(7)}`;
        }
        return formatted;
    };

    const validate = () => {
        const newErrors = {};
        const phone = formatPhone(digits);

        if (!name.trim()) {
            newErrors.name = 'Поле имени не может быть пустым.';
        } else if (!nameRegex.test(name)) {
            newErrors.name = 'Имя должно содержать только буквы и быть не менее 2 символов.';
        }

        if (!phone.trim()) {
            newErrors.phone = 'Поле телефона не может быть пустым.';
        } else if (!phoneRegex.test(phone)) {
            newErrors.phone = 'Телефон должен быть в формате (000) 00-00-00.';
        }

        if (!question) {
            newErrors.question = 'Пожалуйста, выберите интересующий вопрос.';
        }

        if (!agreement) {
            newErrors.agreement = 'Необходимо подтвердить согласие.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            const userName = name.trim();
            const selectedOption = options.find(opt => opt.value === question);

            if (selectedOption) {
                const shortLabel = selectedOption.shortLabel;
                let message = `Здравствуйте, меня зовут ${userName}. Я бы хотел(а) записаться на ${shortLabel}.`;
                let message2 = `Здравствуйте, меня зовут ${userName}. Я бы хотел(а) оставить заявку на ${shortLabel}.`;

                switch (question) {
                    case '1':
                    case '2':
                        window.open(`https://wa.me/+996707890112?text=${encodeURIComponent(message)}`, '_blank');
                        break;
                    case '3':
                        window.location.href = `mailto:usubalievabermet@gmail.com?subject=Запрос на публикацию&body=${encodeURIComponent(message2)}`;
                        break;
                    case '4':
                        window.location.href = `mailto:usubalievabermet@gmail.com?subject=Запрос на размещение&body=${encodeURIComponent(message2)}`;
                        break;
                    default:
                        break;
                }
            }
            setName('');
            setQuestion('');
            setDigits('');
            setAgreement(false);
            closeModal();
        }
    };

    const handleNameChange = (e) => setName(e.target.value);

    const handlePhoneChange = (e) => {
        const onlyDigits = e.target.value.replace(/\D/g, '').slice(0, 9);
        setDigits(onlyDigits);
    };

    const handleAgreementChange = (e) => setAgreement(e.target.checked);

    const handleCloseModal = () => {
        setName('');
        setQuestion('');
        setDigits('');
        setAgreement(false);
        setErrors({});
        closeModal();
    };

    if (!isOpen) return null;

    return (
        <div className={s.overlay} onClick={handleCloseModal}>
            <form className={s.modal}
                onClick={(e) => e.stopPropagation()}
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
                        children='Имя Фамилия*'
                        type='text'
                        id='name'
                        name='name'
                        value={name}
                        onChange={handleNameChange}
                        placeholder='Имя'
                        error={errors.name}
                    />
                    <SelectField
                        label="Интересующий вопрос*"
                        options={options}
                        value={question}
                        onChange={setQuestion}
                        error={errors.question}
                    />
                    <ModalPhoneInput
                        children='Номер телефона*'
                        type='text'
                        id='phone'
                        name='phone'
                        value={formatPhone(digits)}
                        onChange={handlePhoneChange}
                        placeholder='(000) 00-00-00'
                        error={errors.phone}
                    />
                    <ModalCheckbox
                        type='checkbox'
                        name='agreement'
                        checked={agreement}
                        onChange={handleAgreementChange}
                        children='Нажимая на кнопку и/или отправляя данные, вы соглашаетесь на обработку персональных данных*'
                        error={errors.agreement}
                    />
                    <ModalButton
                        variant='span'
                        weight='semibold'
                        lineHeight='lineSemiTight'
                        color='white'
                        children='Отправить'
                    />
                </div>
            </form>
        </div>
    );
};

ContactModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
};
