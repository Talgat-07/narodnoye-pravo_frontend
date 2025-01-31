import PropTypes from 'prop-types'

export const EmailCon = (props) => {
    const { color = '#fff', width = '34', height = '27', } = props
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 34 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
           <path d="M3.66659 26.8333C2.74992 26.8333 1.96547 26.5072 1.31325 25.855C0.66103 25.2028 0.334363 24.4178 0.333252 23.5V3.50001C0.333252 2.58334 0.659919 1.79889 1.31325 1.14667C1.96659 0.494449 2.75103 0.167783 3.66659 0.166672H30.3333C31.2499 0.166672 32.0349 0.493338 32.6883 1.14667C33.3416 1.8 33.6677 2.58445 33.6666 3.50001V23.5C33.6666 24.4167 33.3405 25.2017 32.6883 25.855C32.036 26.5083 31.251 26.8344 30.3333 26.8333H3.66659ZM16.9999 15.1667L3.66659 6.83334V23.5H30.3333V6.83334L16.9999 15.1667ZM16.9999 11.8333L30.3333 3.50001H3.66659L16.9999 11.8333ZM3.66659 6.83334V3.50001V23.5V6.83334Z" fill={color}/>
        </svg>



    );
};

EmailCon.propTypes = {
    color: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}