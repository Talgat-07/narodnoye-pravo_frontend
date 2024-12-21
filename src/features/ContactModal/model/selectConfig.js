

export const customStyles = (hasError) => ({
    control: (base) => ({
        ...base,
        border: hasError ? '1px solid red' : '1px solid #b0c3e0',
        borderRadius: '4px',
        padding: '0px 0px',
        width: '630px',
        height: '46px',
        boxShadow: 'none',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: hasError ? '#ffe6e6' : '#f4f9ff',
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
    }),
    placeholder: (base) => ({
        ...base,
        fontSize: '16px',
    }),
    option: (base) => ({
        ...base,
        fontFamily: 'var(--font-family)',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '125%',
        color: '#365180',
        backgroundColor: '#fff',
        '&:hover': {
            backgroundColor: '#7490f5',
            color: '#fff',
        },
    }),
    singleValue: (base) => ({
        ...base,
        color: '#365180',
        fontFamily: 'var(--font-family)',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '125%',
    }),
});


export const options = [
    { value: '1', label: 'Запись на онлайн-консультацию', shortLabel: 'онлайн-консультацию' },
    { value: '2', label: 'Запись на очную консультацию', shortLabel: 'очную консультацию' },
    { value: '3', label: 'Запрос на размещение научной публикации', shortLabel: 'размещение научной публикации' },
    { value: '4', label: 'Оставить на размещение вакансии работодателя', shortLabel: 'размещение вакансии работодателя' },
];
