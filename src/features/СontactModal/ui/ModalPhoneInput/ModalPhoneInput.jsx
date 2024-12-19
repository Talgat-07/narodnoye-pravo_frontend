import ArrowDown from 'shared/assets/icons/ArrowDown';
import { Typography } from 'shared/ui/Typography/Typography';
import s from './ModalPhoneInput.module.scss'
import PropTypes from 'prop-types'

export const ModalPhoneInput = ({ children, type, id, value, onChange, placeholder, error }) => {
    return (
        <div className={s.wrap}>
            <label htmlFor="phone" className={s.phoneLab}>
                <Typography
                    className={s.lab}
                    variant='bodyXL'
                    weight='semibold'>
                    {children}
                </Typography>
            </label>
            <div className={`${s.phoneInputWrapper} ${error ? s.errorInput : ''}`}>
                <span className={s.phonePrefix}>
                    <Typography
                        className={s.phonePrefixText}
                        variant='bodyM'
                        weight='semibold'
                        lineHeight='lineSemiTight'
                        color='semiBlue'>
                        KG +996
                    </Typography>
                    <ArrowDown />
                    <span className={s.line}></span>
                    <input
                        className={s.phoneInput}
                        type={type}
                        id={id}
                        name={id}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                    />
                </span>
                {error && <p className={s.errorTextPhone}>{error}</p>}
            </div>
        </div>
    );
};

ModalPhoneInput.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(['text']).isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    error: PropTypes.string
}