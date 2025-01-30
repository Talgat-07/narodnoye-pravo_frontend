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
import { useFooterStore } from 'entities/store/footerStore/footerStore';
import { SuccessWindow } from 'widgets/SuccessWindow/SuccessWindow';
// import { sendContactForm } from 'entities/store/sendContactForm/sendContactForm';

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
    const [showSuccess, setShowSuccess] = useState(false);

    const { phone_numbers, emails } = useFooterStore();

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
            return 'Поле должно содержать только цифры';
        }

        if (cleaned.length !== 9) {
            return 'Введите ровно 9 цифр';
        }

        return '';
    };


    const getTemplateText = (questionValue, userName, userPhone) => {
        switch (questionValue) {
            case '1':
                return `Здравствуйте, меня зовут ${userName}, я бы хотел(а) записаться на онлайн-консультацию`;
            case '2':
                return `Здравствуйте, меня зовут ${userName}, я бы хотел(а) записаться на очную консультацию`;
            case '3':
                return `Здравствуйте, меня зовут ${userName}, я бы хотел(а) разместить научную публикацию, мой номер телефона: ${userPhone}\n---Научная публикация---`;
            case '4':
                return `Здравствуйте, меня зовут ${userName}, я бы хотел(а) разместить вакансию работодателя, мой номер телефона: ${userPhone}\n---Вакансия---`;
            default:
                return '';
        }
    };

    const handleNameChange = (e) => {
        const value = e.target.value;
        setName(value)
        const trimmedValue = value.trim()
        const error = validateName(trimmedValue)
        setNameError(error);
    }


    const handlePhoneChange = async (e) => {
        const value = e.target.value;
        setDigits(value);

        const formatted = formatPhone(value);
        setDigits(formatted);

        const error = validatePhone(formatted);
        setPhoneError(error);
    };



    const handleSubmit = async (e) => {
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
        const greetingText = getTemplateText(question, name, digits);

        if (question === '1' || question === '2') {
            const rawNumber = phone_numbers[0]?.phone_number.replace(/\D/g, '') || '';
            const whatsappUrl = `https://wa.me/${rawNumber}?text=${encodeURIComponent(greetingText)}`;
            window.open(whatsappUrl, '_blank');
        } else if (question === '3' || question === '4') {
            const emailAddress = emails[0]?.email || '';
            window.location.href = `mailto:${emailAddress}?subject=Запрос&body=${encodeURIComponent(greetingText)}`;

        }
        // const postData = {
        //     name: name,
        //     interesting_question: question,
        //     phone: digits,
        // };

        //     try {
        // await sendContactForm(postData)

        setShowSuccess(true);

        setName('');
        setNameError('');
        setQuestion('');
        setQuestionError(false);
        setDigits('');
        setPhoneError('');
        setAgreement(false);
        setAgreementError(false);
        //     }
        //     catch (error) {
        //         console.error('Ошибка при отправке формы:', error);

        //         if (error.name) {
        //             setNameError(error.name[0]);
        //         }

        //         if (error.interesting_question) {
        //             setQuestionError(true);
        //         }
        //     }
        //     console.log(postData)
    }

    const handleCloseModal = (e) => {
        e.preventDefault();
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
    const handleCloseSuccess = () => {
        setShowSuccess(false);
        closeModal();
    };
    if (!isOpen) {
        return null;
    }

    return (
        <div className={styles.overlay}>
            {!showSuccess ? (
                <form className={styles.modal} ref={modalRef} onSubmit={handleSubmit}>
                    <button type="button" className={styles.close} onClick={handleCloseModal}>
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
                                    Имя
                                    <span className={styles.star}>*</span>
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
                        </div>
                        <div>
                            <label htmlFor="question">
                                <Typography
                                    className={styles.inputTextQuestion}
                                    variant="bodyXL"
                                    weight="semibold">
                                    Интересующий вопрос
                                    <span className={styles.star}>*</span>
                                </Typography>
                            </label>
                            <CreatableSelect
                                styles={customStyles(questionError)}
                                options={options}
                                value={options.find((opt) => opt.value === question)}
                                onChange={(selectedOption) => {
                                    setQuestion(selectedOption ? selectedOption.value : '');
                                    if (selectedOption) {
                                        setQuestionError(false);
                                    }
                                }}
                                isClearable={false}
                                placeholder="Выбрать опцию"
                                isSearchable={false}
                            />
                        </div>
                        <div className={styles.wrap}>
                            <label htmlFor="phone" className={styles.phoneLab}>
                                <Typography
                                    className={styles.inputTextPhone}
                                    variant='bodyXL'
                                    weight='semibold'>
                                    Номер телефона
                                    <span className={styles.star}>*</span>
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
                        </div>
                        <div className={`${styles.agreeWrap} ${agreementError ? styles.errorInput1 : ''}`}>
                            <label className={styles.agree}>
                                <input
                                    className={`${styles.agreeInput} ${agreementError ? styles.errorCheckbox : ''}`}
                                    type='checkbox'
                                    name='agreement'
                                    checked={agreement}
                                    onChange={(e) => {
                                        setAgreement(e.target.checked);
                                        if (e.target.checked) {
                                            setAgreementError(false);
                                        }
                                    }}
                                />

                                Нажимая на кнопку и/или отправляя данные, вы соглашаетесь
                                на обработку персональных данных<span className={styles.star1}>*</span>
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
            ) : (
                <SuccessWindow closeWindow={handleCloseSuccess} />
            )}
        </div>
    );
};

ContactModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
};
