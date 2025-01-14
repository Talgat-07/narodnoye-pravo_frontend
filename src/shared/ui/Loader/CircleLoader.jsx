import styles from './CircleLoader.module.scss';
import PropTypes from 'prop-types';

export const CircleLoader = (props) => {
    const { width = '80', height = '80' } = props;
    return (
        <div className={styles.loaderWrapper}>
            <svg
                width={width}
                height={height}
                viewBox="0 0 80 80"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#4D73AA" />
                        <stop offset="100%" stopColor="white" />
                    </linearGradient>
                </defs>
                <g className={styles.blueLine}>
                    <circle
                        cx="40"
                        cy="40"
                        r="35"
                        stroke="url(#gradientStroke)"
                        strokeWidth="10"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray="164.93 56.98"
                        strokeDashoffset="0"
                    />
                </g>
            </svg>
        </div>
    );
};

CircleLoader.propTypes = {
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
