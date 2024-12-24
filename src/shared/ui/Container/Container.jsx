import style from './Container.module.scss';
import PropTypes from 'prop-types'

export const Container = ({ children }) => {
    return <div className={style.container}>{children}</div>;
};
Container.propTypes = {
    children: PropTypes.node.isRequired,
}