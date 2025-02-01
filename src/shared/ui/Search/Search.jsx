import PropTypes from 'prop-types';
import { Close } from 'shared/assets/icons/Close';
import { SearchIcon } from 'shared/assets/icons/SearchIcon';
import styles from './Search.module.scss';
import { Button } from 'shared/ui/Button/Button';

export const Search = ({ searchQuery, setSearchQuery, handleSearch, handleClearSearch }) => {

    const onKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault()
            handleSearch()
        }
    }

    const onChange = (e) => {
        const { value } = e.target
        setSearchQuery(value)
        if (!value.trim()) {
            handleClearSearch()
        }
    };

    return (
        <div className={styles.searchContainer}>
            <div className={styles.searchSvgWrap}>
                <input
                    className={styles.searchInput}
                    type="text"
                    placeholder="Поиск"
                    value={searchQuery}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                />
                <SearchIcon />
                {searchQuery && (
                    <button
                        className={styles.clearButton}
                        onClick={handleClearSearch}
                    >
                        <Close />
                    </button>
                )}
            </div>
            <Button
                className="searchBtn"
                variant="span"
                lineHeight="lineCompact"
                weight="semibold"
                color="white"
                onClick={handleSearch}
            >
                Найти
            </Button>
        </div>
    );
};

Search.propTypes = {
    searchQuery: PropTypes.string.isRequired,
    setSearchQuery: PropTypes.func.isRequired,
    handleSearch: PropTypes.func.isRequired,
    handleClearSearch: PropTypes.func.isRequired,
};
