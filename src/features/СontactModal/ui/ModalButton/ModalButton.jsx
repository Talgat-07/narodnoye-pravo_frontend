import s from './ModalButton.module.scss'
import { Typography } from 'shared/ui/Typography/Typography';
import PropTypes from 'prop-types'


export const ModalButton = ({ variant, weight, lineHeight, color, children }) => {

    return (
        <button className={s.btn}>
            <Typography
                variant={variant}
                weight={weight}
                lineHeight={lineHeight}
                color={color}>
                {children}
            </Typography>
        </button>
    );
};

ModalButton.propTypes = {
    variant: PropTypes.oneOf(['span']).isRequired,
    weight: PropTypes.oneOf(['semibold']).isRequired,
    lineHeight: PropTypes.oneOf(['lineSemiTight']),
    color: PropTypes.string,
    children: PropTypes.node.isRequired,
};

