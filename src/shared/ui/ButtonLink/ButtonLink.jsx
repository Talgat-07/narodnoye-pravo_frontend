import s from './ButtonLink.module.scss'
import { Typography } from 'shared/ui/Typography/Typography';
import PropTypes from 'prop-types'

export const ButtonLink = ({ variant, lineHeight, weight, color, children }) => {
    return (
        <button className={s.btn}>
            <Typography
                variant={variant}
                lineHeight={lineHeight}
                weight={weight}
                color={color}>
                {children}
            </Typography>
        </button>
    );
};

ButtonLink.propTypes = {
    variant: PropTypes.oneOf(['span']).isRequired,
    lineHeight: PropTypes.oneOf(['lineSemiTight']).isRequired,
    weight: PropTypes.oneOf(['semibold']).isRequired,
    color: PropTypes.string,
    children: PropTypes.node.isRequired
}