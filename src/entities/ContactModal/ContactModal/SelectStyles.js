export const customStyles = (hasError) => ({
    control: (base, state) => ({
        ...base,
        border: hasError
            ? '1px solid red'
            : state.isFocused
                ? '1px solid #505EA5'
                : '1px solid #b0c3e0',
        borderRadius: '4px',
        width: '630px',
        height: '46px',
        boxShadow: 'none',
        cursor: 'pointer',
        background: '#fbfdff',
        '&:hover': {
            border: '1px solid #505EA5',
        },
    }),
    valueContainer: (base) => ({
        ...base,
        padding: '0 15px',
        height: '46px',
    }),
    indicatorsContainer: (base) => ({
        ...base,
        height: '46px',
        paddingRight: '10px',
    }),
    placeholder: (base) => ({
        ...base,
        color: '#B0C3E0',
        fontSize: '16px',
    }),
    option: (base, state) => ({
        ...base,
        fontFamily: 'var(--font-family)',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '125%',
        color: state.isFocused ? '#fff' : '#365180',
        backgroundColor: state.isFocused ? '#7490f5' : '#fff',
        // При фокусе/ховере на option
        // добавляем обводку:
        border: state.isFocused ? '1px solid #505EA5' : 'none',
        cursor: 'pointer',
    }),
    singleValue: (base) => ({
        ...base,
        color: '#365180',
        fontFamily: 'var(--font-family)',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '125%',
    }),
    indicatorSeparator: (base) => ({
        ...base,
        display: 'none',
    }),
    dropdownIndicator: (base, state) => ({
        ...base,
        color: '#b0c3e0',
        '&:hover': {
            color: '#b0c3e0',
        },
        ...(state.isFocused && {
            color: '#505EA5',
        }),
    }),
});
export const options = [
    { value: '1', label: 'Запись на онлайн-консультацию', shortLabel: 'онлайн-консультацию' },
    { value: '2', label: 'Запись на очную консультацию', shortLabel: 'очную консультацию' },
    { value: '3', label: 'Запрос на размещение научной публикации', shortLabel: 'размещение научной публикации' },
    { value: '4', label: 'Оставить на размещение вакансии работодателя', shortLabel: 'размещение вакансии работодателя' },
];