/* eslint-disable react/prop-types*/
import s from './ContactModal.module.scss';
import { Typography } from 'shared/ui/Typography/Typography';
import { Close } from 'shared/assets/icons/Close';
import { useState } from 'react';
import { ModalButton } from 'shared/ui/ModalButton/ModalButton';
import { ModalNameInput } from 'features/СontactModal/ui/ModalNameInput/ModalNameInput';
import { ModalPhoneInput } from 'features/СontactModal/ui/ModalPhoneInput/ModalPhoneInput';
import { ModalCheckbox } from 'features/СontactModal/ui/ModalCheckbox/ModalCheckbox';
import { SelectField } from 'features/СontactModal/ui/SelectField/SelectField';

export const ContactModal = ({ isOpen, closeModal }) => {
    const [name, setName] = useState('');
    const [question, setQuestion] = useState('');
    const [phone, setPhone] = useState('');
    const [agreement, setAgreement] = useState(false);
    const [errors, setErrors] = useState({});

    const options = [
        { value: "1", label: 'Запись на онлайн-консультацию' },
        { value: "2", label: 'Запись на живую/офлайн-консультацию' },
        { value: "3", label: 'Оставить заявку на размещение научную публикацию' },
        { value: "4", label: 'Оставить резюме соискателя' },
        { value: "5", label: 'Оставить вакансию работодателя' },
    ]

    const validate = () => {
        const errors = {};
        const nameRegex = /^[a-zA-Zа-яА-ЯёЁ\s]{2,}$/;
        if (!name.trim()) {
            errors.name = 'Поле имени не может быть пустым.';
        } else if (!nameRegex.test(name)) {
            errors.name = 'Имя должно содержать только буквы и быть не менее 2 символов.';
        }
        const phoneRegex = /^\+996\d{9}$/;
        if (!phone.trim()) {
            errors.phone = 'Поле телефона не может быть пустым.';
        } else if (!phoneRegex.test(phone)) {
            errors.phone = 'Телефон должен содержать ровно 9 цифр.';
        }
        if (!question) {
            errors.question = 'Пожалуйста, выберите интересующий вопрос.';
        }
        if (!agreement) {
            errors.agreement = 'Необходимо подтвердить согласие.';
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            switch (question) {
                case '1':
                case '2':
                    window.open('https://wa.me/1234567890', '_blank'); // Ссылка на WhatsApp организации
                    break;
                case '3':
                    window.location.href = 'mailto:analytics@organization.com?subject=Запрос на публикацию';
                    break;
                case '4':
                case '5':
                    window.location.href = 'mailto:jobs@organization.com?subject=Запрос на размещение';
                    break;
                default:
                    break;
            }
        }
    };

    const handleNameChange = (e) => setName(e.target.value);
    const handlePhoneChange = (e) => {
        const input = e.target.value.replace(/\D/g, '');
        const formattedPhone = input.slice(0, 9);
        setPhone(`+996${formattedPhone}`);
    };

    const displayPhone = phone.replace(/^\+996/, '');

    const handleAgreementChange = (e) => setAgreement(e.target.checked);

    const handleCloseModal = () => {
        setName('');
        setQuestion('');
        setPhone('');
        setAgreement(false);
        setErrors({});
        closeModal();
    };

    if (!isOpen) return null





    return (
        <div className={s.overlay} onClick={handleCloseModal}>
            <form className={s.modal}
                //  ref={modalRef}
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
                        error={errors.name} />
                    <SelectField
                        label="Интересующий вопрос*"
                        options={options}
                        value={question}
                        onChange={(selectedOption) => setQuestion(selectedOption)}
                        error={errors.question} />
                    {/* <div>
                        <label htmlFor="question">
                            <Typography
                                className={s.lab}
                                variant='bodyXL'
                                weight='semibold'>
                                Интересующий вопрос*
                            </Typography>
                        </label>
                        <CreatableSelect
                            styles={customStyles}
                            options={options}
                            value={options.find((opt) => opt.value === question)}
                            onChange={(selectedOption) => setQuestion(selectedOption ? selectedOption.value : '')}
                            isClearable={false}
                            placeholder="Выбрать опцию"
                        />
                        {errors.question && <p className={s.errorText}>{errors.question}</p>}
                    </div> */}
                    <ModalPhoneInput
                        children='Номер телефона*'
                        type='text'
                        id='phone'
                        name='phone'
                        value={displayPhone}
                        onChange={handlePhoneChange}
                        placeholder='(000) 00-00-00'
                        error={errors.phone} />
                    <ModalCheckbox
                        type='checkbox'
                        name='agreement'
                        checked={agreement}
                        onChange={handleAgreementChange}
                        error={errors.agreement} />
                    <ModalButton />
                </div>
            </form>
        </div>

    );
};
