import React from 'react';
import { NavLink } from 'react-router-dom';
import './Error.css'

/**
 * Error page that displays an error message and a link back to the connection page
 * @returns  an error message and a link back to the login page
 */

const Error = () => {

    /**
     * link that removes the local storage ID and returns to the login page
     * @return that removes the local storage ID and returns to the login page
     */

    const handleLink = (e) => {
        e.preventDefault()
        localStorage.removeItem('id')
        window.location = "/";
    }

    return (
        <section>
            <article className='error-message'>
                <h1>404</h1>
                <p>Oups! La page que vous demandez n'existe pas.</p>
            </article>
            <article className='link'>
                <NavLink to="/" style={{ color: 'rgba(40, 45, 48, 1)' }} onClick={handleLink}>
                    <p>Retourner sur la page de connection</p>
                </NavLink>
            </article>
        </section>
    );

};

export default Error;