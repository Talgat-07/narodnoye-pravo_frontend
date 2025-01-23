import styles from './ContactModal.module.scss';
import { Typography } from 'shared/ui/Typography/Typography';
import { Close } from 'shared/assets/icons/Close';
import { useRef, useState, useEffect } from 'react';
import { options } from 'entities/ContactModal/ContactModal/SelectStyles';
import PropTypes from 'prop-types';
import { Button } from 'shared/ui/Button/Button';
import { useClickOutside } from 'shared/lib/hooks/hooks';
import { ArrowDown } from 'shared/assets/icons/ArrowDown';
import { customStyles } from 'entities/ContactModal/ContactModal/SelectStyles';
import CreatableSelect from 'react-select/creatable';

export const ContactModal = ({ isOpen, closeModal }) => {
    const modalRef = useRef(null);

    useClickOutside(modalRef, closeModal);

    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');
    const [question, setQuestion] = useState('');
    const [questionError, setQuestionError] = useState(false);
    const [digits, setDigits] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [agreement, setAgreement] = useState(false);
    const [agreementError, setAgreementError] = useState(false);



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

    const validateName = (value) => {
        const regex = /^[A-Za-zА-Яа-яЁё]+([ '-][A-Za-zА-Яа-яЁё]+){0,2}$/;

        if (!value) {
            return 'Поле обязательно для заполнения';
        }

        if (!regex.test(value)) {
            return 'Введите корректное имя (буквы, пробелы, дефисы, апострофы)';
        }

        if (value.length < 2 || value.length > 50) {
            return 'Имя должно быть от 2 до 50 символов';
        }

        return '';
    };

    const formatPhone = (value) => {
        const cleaned = value.replace(/\D/g, '');
        if (cleaned.length <= 3) {
            return `(${cleaned}`;
        } else if (cleaned.length <= 5) {
            return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
        } else if (cleaned.length <= 7) {
            return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 5)}-${cleaned.slice(5)}`;
        } else {
            return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 5)}-${cleaned.slice(5, 7)}-${cleaned.slice(7, 9)}`;
        }
    };

    const validatePhone = (value) => {
        const cleaned = value.replace(/\D/g, '');

        if (!cleaned) {
            return 'Поле обязательно для заполнения';
        }

        if (cleaned.length !== 9) {
            return 'Введите ровно 9 цифр';
        }

        return '';
    };

    const handleNameChange = (e) => {
        const value = e.target.value;
        setName(value);

        const error = validateName(value);
        setNameError(error);
    };


    const handlePhoneChange = (e) => {
        const value = e.target.value;
        setDigits(value);

        const formatted = formatPhone(value);
        setDigits(formatted);

        const error = validatePhone(formatted);
        setPhoneError(error);
    };



    const handleSubmit = (e) => {
        e.preventDefault();

        const nameValidationError = validateName(name);
        setNameError(nameValidationError);

        const phoneValidationError = validatePhone(digits);
        setPhoneError(phoneValidationError);

        if (!question) {
            setQuestionError(true);
        } else {
            setQuestionError(false);
        }

        if (!agreement) {
            setAgreementError(true);
        } else {
            setAgreementError(false);
        }
        if (nameValidationError || phoneValidationError || !question || !agreement) {
            return;
        }
        if (question === '1' || question === '2') {
            // Redirect to WhatsApp
            const whatsappUrl = "https://wa.me/99655018877";
            window.open(whatsappUrl, '_blank');
        } else if (question === '3' || question === '4') {
            // Redirect to email
            const emailAddress = "N.pravo2018@gmail.com";
            window.location.href = `mailto:${emailAddress}`;
        }
        setName('');
        setNameError('');
        setQuestion('');
        setQuestionError(false);
        setDigits('');
        setPhoneError('');
        setAgreement(false);
        setAgreementError(false);
        closeModal();
    };

    const handleCloseModal = () => {
        setName('');
        setNameError('');
        setQuestion('');
        setQuestionError(false);
        setDigits('');
        setPhoneError('');
        setAgreement(false);
        setAgreementError(false);
        closeModal();
    };



    if (!isOpen) return null;

    return (
        <div className={styles.overlay}>
            <form className={styles.modal} ref={modalRef} onSubmit={handleSubmit}>
                <button className={styles.close} onClick={handleCloseModal}>
                    <Close />
                </button>
                <Typography
                    variant="h3"
                    weight="semibold"
                    color="blue">
                    Контактная форма
                </Typography>
                <div className={styles.linkWrap}>
                    <div className={styles.nameWrap}>
                        <label htmlFor="name">
                            <Typography
                                className={styles.inputText}
                                variant="bodyXL"
                                weight="semibold">
                                Имя*
                            </Typography>
                        </label>
                        <input
                            className={`${styles.inputName} ${nameError ? styles.errorInput : ''}`}
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={handleNameChange}
                            placeholder="Имя Фамилия"
                        />
                        {nameError && <span className={styles.errorText}>{nameError}</span>}
                    </div>
                    <div>
                        <label htmlFor="question">
                            <Typography
                                className={styles.inputTextQuestion}
                                variant="bodyXL"
                                weight="semibold">
                                Интересующий вопрос*
                            </Typography>
                        </label>
                        <CreatableSelect
                            styles={customStyles(questionError)}
                            options={options}
                            value={options.find((opt) => opt.value === question)}
                            onChange={(selectedOption) =>
                                setQuestion(selectedOption ? selectedOption.value : '')
                            }
                            isClearable={false}
                            placeholder="Выбрать опцию"
                        />
                        {questionError && (
                            <span className={styles.errorText}>Выберите опцию</span>
                        )}
                    </div>
                    <div className={styles.wrap}>
                        <label htmlFor="phone" className={styles.phoneLab}>
                            <Typography
                                className={styles.inputTextPhone}
                                variant='bodyXL'
                                weight='semibold'>
                                Номер телефона*
                            </Typography>
                        </label>
                        <div className={`${styles.phoneInputWrapper} ${phoneError ? styles.errorInput : ''}`}>
                            <span className={styles.phonePrefix}>
                                <Typography
                                    className={styles.phonePrefixText}
                                    variant='bodyM'
                                    weight='semibold'
                                    lineHeight='lineSemiTight'
                                    color='semiBlue'>
                                    KG +996
                                </Typography>
                                <ArrowDown />
                                <span className={styles.line}></span>
                                <input
                                    className={styles.phoneInput}
                                    type='text'
                                    id='phone'
                                    name='phone'
                                    value={digits}
                                    onChange={handlePhoneChange}
                                    placeholder='(000) 00-00-00' />
                            </span>
                        </div>
                        {phoneError && <span className={styles.errorTextPhone}>{phoneError}</span>}
                    </div>
                    <div className={`${styles.agreeWrap} ${agreementError ? styles.errorInput : ''
                        }`}
                    >
                        <label className={styles.agree}>
                            <input
                                className={styles.agreeInput}
                                type='checkbox'
                                name='agreement'
                                checked={agreement}
                                onChange={(e) => setAgreement(e.target.checked)} />
                            Нажимая на кнопку и/или отправляя данные, вы соглашаетесь<br /> на обработку персональных данных*
                        </label>
                    </div>
                    <Button
                        className='modalBtn'
                        variant='span'
                        weight='semibold'
                        lineHeight='lineSemiTight'
                        color='white'
                        type='submit'
                    >
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
