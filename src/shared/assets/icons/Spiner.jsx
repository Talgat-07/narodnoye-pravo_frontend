import PropTypes from 'prop-types'

export const Spiner = (props) => {
    const { width = '80', height = '80', } = props
    return (
        <div>
            <svg
                width={width}
                height={height}
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M40.002 0C62.0933 0 80.002 17.9086 80.002 40C80.002 62.0914 62.0933 80 40.002 80C17.9106 80 0.00195313 62.0914 0.00195313 40C0.00195313 17.9086 17.9106 0 40.002 0ZM40.002 69.9914C56.5657 69.9914 69.9933 56.5638 69.9933 40C69.9933 23.4362 56.5657 10.0086 40.002 10.0086C23.4382 10.0086 10.0106 23.4362 10.0106 40C10.0106 56.5638 23.4382 69.9914 40.002 69.9914Z" fill="url(#paint0_angular_3652_22167)" />
                <defs>
                    <radialGradient id="paint0_angular_3652_22167" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(40.002 40) scale(40)">
                        <stop stopColor="#4D73AA" />
                        <stop offset="1" stopColor="white" />
                    </radialGradient>
                </defs>
            </svg>
        </div>
    );
};

Spiner.propTypes = {
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}