import { Typography } from 'shared/ui/Typography/Typography'
import PropTypes from 'prop-types'

export const Button = ({ className, onClick, children, variant, weight, lineHeight, color }) => {
    return (
        <button className={className} onClick={onClick}>
            <Typography
                variant={variant}
                weight={weight}
                color={color}
                lineHeight={lineHeight}>
                {children}
            </Typography>
        </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    variant: PropTypes.string.isRequired,
    weight: PropTypes.oneOf(['light', 'regular', 'semibold', 'bold']),
    lineHeight: PropTypes.oneOf(['lineDefault', 'lineFixed', 'lineBig', 'lineLarge', 'lineSemiTight', 'lineTight']),
    color: PropTypes.string.isRequired,
    className: PropTypes.string,
}