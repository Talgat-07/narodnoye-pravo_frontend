import { Typography } from 'shared/ui/Typography/Typography';
import styles from './ModalPhoneInput.module.scss'
import PropTypes from 'prop-types'
import { ArrowDown } from 'shared/assets/icons/ArrowDown';

export const ModalPhoneInput = ({ children, type, id, value, onChange, placeholder, }) => {
    return (
        <div className={styles.wrap}>
            <label htmlFor="phone" className={styles.phoneLab}>
                <Typography
                    className={styles.inputText}
                    variant='bodyXL'
                    weight='semibold'>
                    {children}
                </Typography>
            </label>
            <div className={`${styles.phoneInputWrapper}`}>
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