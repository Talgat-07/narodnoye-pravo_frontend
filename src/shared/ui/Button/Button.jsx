import { Typography } from 'shared/ui/Typography/Typography'
import style from './Button.module.scss'
import PropTypes from 'prop-types'

export const Button = ({
    className,
    onClick,
    children,
    variant,
    weight,
    lineHeight,
    color,
    type }) => {
    const combinedClassName = `${style.button} ${className ? style[className] : ''}`;
    return (
        <button className={combinedClassName} onClick={onClick}>
            <Typography
                variant={variant}
                weight={weight}
                color={color}
                lineHeight={lineHeight}
                type={type}>
                {children}
            </Typography>
        </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node,
    variant: PropTypes.string.isRequired,
    weight: PropTypes.oneOf(['light', 'regular', 'semibold', 'bold']),
    lineHeight: PropTypes.oneOf(['lineDefault', 'lineFixed', 'lineBig', 'lineLarge', 'lineSemiTight', 'lineTight']),
    color: PropTypes.string.isRequired,
    className: PropTypes.string,
    type: PropTypes.string,
}