import React from 'react';
import './Header.css'
import PropTypes from "prop-types";


/**
 * component that displays a personalised welcome message
 * @param {string} firstName 
 * @returns a personalised welcome message
 */

const Header = ({ firstName, error }) => {

    return (
        <section id='header'>
            <article>
                <h1>Bonjour <span>{firstName}</span></h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏 </p>
                {error &&
                    <small className='errorMsg'>{error}</small>
                }
            </article>
        </section>
    );
};

//proptypes for Header
Header.propTypes = {
    firstName: PropTypes.string,
};

export default Header;