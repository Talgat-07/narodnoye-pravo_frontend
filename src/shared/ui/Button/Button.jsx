import { Typography } from 'shared/ui/Typography/Typography'
import styles from './Button.module.scss'
import PropTypes from 'prop-types'


function getButtonClassName(className) {
    if (!className) {
        return ''
    }
    if (styles[className]) {
        return styles[className];
    }
    return className
}

export const Button = ({
    className,
    onClick,
    children,
    variant,
    weight,
    lineHeight,
    color,
    type }) => {
    const combinedClassName = `${styles.button}
    ${getButtonClassName(className)}
    `.trim()


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
    lineHeight: PropTypes.oneOf(['lineDefault', 'lineFixed', 'lineBig', 'lineLarge', 'lineSemiTight', 'lineTight', 'lineCompact']),
    color: PropTypes.string.isRequired,
    className: PropTypes.string,
    type: PropTypes.string,
}