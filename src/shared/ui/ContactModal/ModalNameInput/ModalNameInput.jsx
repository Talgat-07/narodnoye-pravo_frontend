import { Typography } from 'shared/ui/Typography/Typography'
import styles from './ModalNameInput.module.scss'
import PropTypes from 'prop-types'

export const ModalNameInput = ({ children, type, id, value, onChange, placeholder, }) => {
    return (
        <div>
            <label htmlFor={id}>
                <Typography
                    className={styles.inputText}
                    variant='bodyXL'
                    weight='semibold'>
                    {children}
                </Typography>
            </label>
            <input
                className={styles.inputName}
                type={type}
                id={id}
                name={id}
                value={value}
                onChange={onChange}
                placeholder={placeholder} />
        </div>
    )
}
ModalNameInput.propTypes = {
    children: PropTypes.node,
    type: PropTypes.oneOf(['text']).isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
}
