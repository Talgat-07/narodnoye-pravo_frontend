import PropTypes from 'prop-types';

export const PhoneCon = (props) => {
    const { width = '32', height = '32', } = props
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">

            <path d="M5.33333 1.66667H12L15.3333 10L11.1667 12.5C12.9516 16.1192 15.8808 19.0484 19.5 20.8333L22 16.6667L30.3333 20V26.6667C30.3333 27.5507 29.9821 28.3986 29.357 29.0237C28.7319 29.6488 27.8841 30 27 30C20.4988 29.6049 14.3669 26.8442 9.76138 22.2386C5.15584 17.6331 2.39508 11.5012 2 5.00001C2 4.11595 2.35119 3.2681 2.97631 2.64298C3.60143 2.01786 4.44928 1.66667 5.33333 1.66667Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>



        
    );
};

PhoneCon.propTypes = {
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}
