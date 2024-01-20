import PropTypes from 'prop-types';


type ButtonProps = {
    clas: string,
    text: string
}

function Button ({ clas, text }: ButtonProps) {
    return(
        <>
            <a href="#" 
            target='_blank' 
            rel='noreferrer'>
                <button className={clas}>
                    {text}
                </button>
            </a>
        </>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    clas: PropTypes.string.isRequired
}

export default Button;