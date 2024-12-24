import style from './ModalCheckbox.module.scss'
import PropTypes from 'prop-types'

export const ModalCheckbox = ({ type, name, checked, onChange, children }) => {
    return (
        <div>
            <label className={style.agree}>
                <input
                    type={type}
                    name={name}
                    checked={checked}
                    onChange={onChange} />
                {children}
            </label>
        </div>
    );
};

ModalCheckbox.propTypes = {
    type: PropTypes.oneOf(['checkbox']).isRequired,
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    children: PropTypes.string,
}