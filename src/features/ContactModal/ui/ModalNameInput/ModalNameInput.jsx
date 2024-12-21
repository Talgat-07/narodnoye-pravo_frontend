import { Typography } from 'shared/ui/Typography/Typography'
import s from './ModalNameInput.module.scss'
import PropTypes from 'prop-types'

export const ModalNameInput = ({ children, type, id, value, onChange, placeholder, }) => {
    return (
        <div>
            <label htmlFor={id}>
                <Typography
                    className={s.inputText}
                    variant='bodyXL'
                    weight='semibold'>
                    {children}
                </Typography>
            </label>
            <input
                className={s.inputName}
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
