/* eslint-disable react/prop-types*/
import { Fragment } from 'react';
import s from './Typography.module.scss'

export const Typography = (props) => {
    const {
        variant = 'bodyXL',
        weight = 'regular',
        className,
        children,
        color = 'black',
        truncate = false,
        lineHeight = 'lineRegular',
        fontFamily = 'default',
    } = props;

    const Tags = {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        span: 'span',
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
