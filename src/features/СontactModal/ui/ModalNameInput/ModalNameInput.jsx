/* eslint-disable react/prop-types*/
import { Typography } from '../../../../shared/ui/Typography/Typography'
import s from './ModalNameInput.module.scss'

export const ModalNameInput = ({ children, type, id, value, onChange, placeholder, error }) => {
    return (
        <div>
            <label htmlFor={id}>
                <Typography
                    className={s.lab}
                    variant='bodyXL'
                    weight='semibold'>
                    {children}
                </Typography>
            </label>
            <input
                className={`${s.inp} ${error ? s.errorInput : ''}`}
                type={type}
                id={id}
                name={id}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
            {error && <p className={s.errorText}>{error}</p>}
        </div>
    )
}

