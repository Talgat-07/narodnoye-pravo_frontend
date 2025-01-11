import styles from './Container.module.scss';
import PropTypes from 'prop-types'

export const Container = ({ children, noPadding = false }) => {
    const containerClass = noPadding ? styles.containerNoPadding : styles.container;

    return <div className={containerClass}>{children}</div>;
};
Container.propTypes = {
    children: PropTypes.node.isRequired,
    noPadding: PropTypes.bool
}