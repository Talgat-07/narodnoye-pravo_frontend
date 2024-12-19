import s from './Container.module.scss';
import PropTypes from 'prop-types'

export const Container = ({ children }) => {
    return <div className={s.container}>{children}</div>;
};
Container.propTypes = {
    children: PropTypes.node.isRequired,
}