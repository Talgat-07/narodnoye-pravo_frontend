/* eslint-disable react/prop-types*/
import CreatableSelect from 'react-select/creatable';
import s from './SelectField.module.scss'
import { Typography } from '../../../../shared/ui/Typography/Typography';
import { customStyles } from 'features/СontactModal/model/selectConfig';

export const SelectField = ({ label, options, value, onChange, error }) => {
    // const customStyles = {
    //     control: (base, state) => ({
    //         ...base,
    //         border: errors.question ? '1px solid red' : '1px solid #b0c3e0',
    //         borderRadius: '4px',
    //         padding: '0px 0px',
    //         width: '630px',
    //         height: '46px',
    //         boxShadow: 'none',
    //         '&:hover': {
    //             backgroundColor: errors.question ? '#ffe6e6' : '#f4f9ff',
    //         },
    //     }),
    //     valueContainer: (base) => ({
    //         ...base,
    //         padding: '0 15px',
    //         height: '46px',
    //     }),
    //     indicatorsContainer: (base) => ({
    //         ...base,
    //         height: '46px',
    //     }),
    //     placeholder: (base) => ({
    //         ...base,
    //         fontSize: '16px',
    //     }),
    //     option: (base) => ({
    //         ...base,
    //         fontFamily: 'var(--font-family)',
    //         fontWeight: 400,
    //         fontSize: '16px',
    //         lineHeight: '125%',
    //         color: '#365180',
    //         backgroundColor: '#fff',
    //         '&:hover': {
    //             backgroundColor: '#7490f5',
    //             color: '#fff',
    //         },
    //     }),
    //     singleValue: (base) => ({
    //         ...base,
    //         color: '#365180',
    //         fontFamily: 'var(--font-family)',
    //         fontWeight: 400,
    //         fontSize: '16px',
    //         lineHeight: '125%',
    //     }),
    // };
    return (
        <div>
            <label htmlFor="question">
                <Typography
                    className={s.lab}
                    variant='bodyXL'
                    weight='semibold'>
                    {label}
                </Typography>
            </label>
            <CreatableSelect
                styles={customStyles(error)}
                options={options}
                value={options.find((opt) => opt.value === opt)}
                onChange={(selectedOption) => setQuestion(selectedOption ? selectedOption.value : '')}
                isClearable={false}
                placeholder="Выбрать опцию"
            />
            {error && <p className={s.errorText}>{error}</p>}
        </div>
    );
};
