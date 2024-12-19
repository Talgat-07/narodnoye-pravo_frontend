import s from './ModalCheckbox.module.scss'
import PropTypes from 'prop-types'

export const ModalCheckbox = ({ type, name, checked, onChange, error, children }) => {
    return (
        <div>
            <label className={`${s.agree} ${error ? s.errorInput : ''}`}>
                <input
                    type={type}
                    name={name}
                    checked={checked}
                    onChange={onChange} />
                {children}
            </label>
            {error && <p className={s.errorText}>{error}</p>}
        </div>
    );
};

ModalCheckbox.protoTypes = {
    type: PropTypes.oneOf(['checkbox']).isRequired,
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string,
    children: PropTypes.string.isRequired,
}