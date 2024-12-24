import { Typography } from 'shared/ui/Typography/Typography';
import style from './ModalPhoneInput.module.scss'
import PropTypes from 'prop-types'
import { ArrowDown } from 'shared/assets/icons/ArrowDown';

export const ModalPhoneInput = ({ children, type, id, value, onChange, placeholder, }) => {
    return (
        <div className={style.wrap}>
            <label htmlFor="phone" className={style.phoneLab}>
                <Typography
                    className={style.inputText}
                    variant='bodyXL'
                    weight='semibold'>
                    {children}
                </Typography>
            </label>
            <div className={`${style.phoneInputWrapper}`}>
                <span className={style.phonePrefix}>
                    <Typography
                        className={style.phonePrefixText}
                        variant='bodyM'
                        weight='semibold'
                        lineHeight='lineSemiTight'
                        color='semiBlue'>
                        KG +996
                    </Typography>
                    <ArrowDown />
                    <span className={style.line}></span>
                    <input
                        className={style.phoneInput}
                        type={type}
                        id={id}
                        name={id}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder} />
                </span>
            </div>
        </div>
    );
};

ModalPhoneInput.propTypes = {
    children: PropTypes.node,
    type: PropTypes.oneOf(['text']).isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
}