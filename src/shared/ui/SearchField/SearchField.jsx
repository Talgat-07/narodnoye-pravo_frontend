import { Close } from 'shared/assets/icons/Close';
import { Search } from 'shared/assets/icons/Search';
import styles from './SearchField.module.scss'
import PropTypes from 'prop-types'
import { Button } from 'shared/ui/Button/Button';

export const SearchField = ({ value, onChange, onClear, onSearch }) => {
    return (
        <div className={styles.searchContainer}>
            <Search />
            <input
                className={styles.searchInput}
                type="text"
                placeholder="Поиск"
                value={value}
                onChange={onChange}
            />
            {value && (
                <button className={styles.clearButton} onClick={onClear}>
                    <Close />
                </button>
            )}
            <Button
                onClick={onSearch}
                className='searchBtn'
                variant='span'
                lineHeight='lineCompact'
                weight='semibold'
                color='white'
            >
                Найти
            </Button>
        </div>
    );
};

SearchField.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    onClear: PropTypes.func,
    onSearch: PropTypes.func.isRequired
}