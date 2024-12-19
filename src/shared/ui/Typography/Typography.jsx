import { Fragment } from 'react';
import s from './Typography.module.scss'
import PropTypes from 'prop-types';

export const Typography = (props) => {
    const {
        variant = 'bodyXL',
        weight = 'regular',
        className,
        children,
        color = 'black',
        truncate = false,
        lineHeight = 'lineDefault',
        fontFamily = 'default',
    } = props;

    const Tags = {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        span: 'span',
        bodyXXL: 'p',
        bodyXL: 'p',
        bodyL: 'p',
        bodyM: 'p',
        bodyS: 'p',
    };

    const classNamedGenerated = [
        s.text,
        s[variant],
        s[weight],
        s[color],
        s[lineHeight],
        s[fontFamily],
        s[variant],

        className,
    ]
        .filter(Boolean)
        .join(' ')
        .trim();

    const truncateString = (str, maxNumber) => {
        if (typeof str === 'string') {
            return str.length <= maxNumber
                ? str
                : str.slice(0, maxNumber) + '...';
        }
        return str;
    };

    const convertNewlinesToBreaks = text => {
        if (typeof text === 'string') {
            return text
                .split('\r\n')
                .map((line, index) => <Fragment key={index}>{line}</Fragment>);
        } else {
            return text;
        }
    };

    const TagName = Tags[variant] || 'p';

    return (
        <TagName className={classNamedGenerated}>
            {!truncate
                ? convertNewlinesToBreaks(children)
                : truncateString(children, truncate)}
        </TagName>
    );
};

Typography.propTypes = {
    variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'span', 'bodyXXL', 'bodyXL', 'bodyL', 'bodyM', 'bodyS']),
    weight: PropTypes.oneOf(['bold', 'semibold', 'medium', 'regular']),
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    color: PropTypes.oneOf(['black', 'blue', 'white', 'azure', 'lightBlue', 'semiBlue', 'placeholder']),
    truncate: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
    lineHeight: PropTypes.oneOf(['lineShort', 'lineTight', 'lineSemiTight', 'lineCompact', 'lineModerate', 'lineLarge', 'lineBig', 'lineFixed', 'lineDefault']),
    fontFamily: PropTypes.oneOf(['default', 'serif', 'sans-serif', 'monospace']),
};


