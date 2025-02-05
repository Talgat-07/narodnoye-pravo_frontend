import PropTypes from 'prop-types';

export const Address = (props) => {
    const { width = '80', height = '37', } = props

    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 30 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">

            <path d="M15 20.1667C17.7614 20.1667 20 17.9281 20 15.1667C20 12.4052 17.7614 10.1667 15 10.1667C12.2386 10.1667 10 12.4052 10 15.1667C10 17.9281 12.2386 20.1667 15 20.1667Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.0001 1.83333C11.4639 1.83333 8.07248 3.23809 5.57199 5.73858C3.07151 8.23906 1.66675 11.6304 1.66675 15.1667C1.66675 18.32 2.33675 20.3833 4.16675 22.6667L15.0001 35.1667L25.8334 22.6667C27.6634 20.3833 28.3334 18.32 28.3334 15.1667C28.3334 11.6304 26.9287 8.23906 24.4282 5.73858C21.9277 3.23809 18.5363 1.83333 15.0001 1.83333Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>




    );
};

Address.propTypes = {
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

