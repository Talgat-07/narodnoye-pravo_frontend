import PropTypes from 'prop-types';
import { Close } from 'shared/assets/icons/Close';
import { SearchIcon } from 'shared/assets/icons/SearchIcon';
import styles from './Search.module.scss';
import { Button } from 'shared/ui/Button/Button';

export const Search = ({ searchQuery, setSearchQuery, handleSearch, handleClearSearch }) => {
    return (
        <div className={styles.searchContainer}>
            <SearchIcon />
            <input
                className={styles.searchInput}
                type="text"
                placeholder="Поиск"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
                <button
                    className={styles.clearButton}
                    onClick={handleClearSearch}
                >
                    <Close />
                </button>
            )}
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
