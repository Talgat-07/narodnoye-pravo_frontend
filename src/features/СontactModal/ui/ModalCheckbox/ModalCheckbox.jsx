/* eslint-disable react/prop-types*/
import s from './ModalCheckbox.module.scss'

export const ModalCheckbox = ({ type, name, checked, onChange, error }) => {
    return (
        <div>
            <label className={`${s.agree} ${error ? s.errorInput : ''}`}>
                <input
                    type={type}
                    name={name}
                    checked={checked}
                    onChange={onChange}
                />
                Нажимая на кнопку и/или отправляя данные, вы соглашаетесь на обработку персональных данных*
            </label>
            {error && <p className={s.errorText}>{error}</p>}
        </div>
    );
};
