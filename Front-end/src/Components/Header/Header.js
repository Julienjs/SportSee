import React, { useState, useEffect } from 'react';
import './Header.css'

/**
 * component that displays a personalised welcome message
 * @param {string} firstName 
 * @returns a personalised welcome message
 */

const Header = ({ firstName }) => {

    return (
        <section id='header'>
            <article>
                <h1>Bonjour <span>{firstName}</span></h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏 </p>
            </article>
        </section>
    );
};

export default Header;