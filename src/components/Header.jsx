import PropTypes from 'prop-types'


function Header({text}) {
    return (
        <header>
            <div className="container">
                <h2>{text}</h2>
            </div>
        </header>
    )
}

// Default props
Header.defaultProps = {
    text: 'Feedback UI',
}

// Check Types
Header.propTypes = {
    text: PropTypes.string,
}

export default Header


