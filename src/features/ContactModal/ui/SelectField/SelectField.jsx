import CreatableSelect from 'react-select/creatable';
import s from './SelectField.module.scss'
import { Typography } from 'shared/ui/Typography/Typography';
import { customStyles } from 'features/ContactModal/model/selectConfig';
import PropTypes from 'prop-types'

export const SelectField = ({ label, options, value, onChange, }) => {
    return (
        <div>
            <label htmlFor="question">
                <Typography
                    className={s.lab}
                    variant="bodyXL"
                    weight="semibold">
                    {label}
                </Typography>
            </label>
            <CreatableSelect
                styles={customStyles()}
                options={options}
                value={options.find((opt) => opt.value === value)}
                onChange={(selectedOption) => onChange(selectedOption ? selectedOption.value : '')}
                isClearable={false}
                placeholder="Выбрать опцию"
            />
        </div>
    );
};

SelectField.propTypes = {
    label: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        }),
    ).isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string
}