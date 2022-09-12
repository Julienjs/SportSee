import React from 'react';
import './Navbar.css'
import Logo from '../../assets/LogoSportSee.png'
import LogoutLogo from '../../assets/icons8-déconnexion-50.png'

/**
 * component that displays the navigation bar and the platform logo
 * @returns the navigation bar and the platform logo
 */

const Navbar = () => {

    /**
     * logout button that deletes the local storage id and returns to the login page
     * @return {*}  deletes the local storage id and refers to the login page
     */
    const handleLogout = (e) => {
        e.preventDefault()
        localStorage.removeItem('id')
        window.location = "/";
    }

    return (
        < header >
            <img src={Logo} alt="logo" />
            {localStorage.getItem('id') ?
                <nav>
                    <ul>
                        <li>Accueil</li>
                        <li>Profil</li>
                        <li>Réglage</li>
                        <li>Communauté</li>
                        <img src={LogoutLogo} alt='déconnection' className='logout' onClick={handleLogout} />
                    </ul>
                </nav>
                : null
            }
        </header >
    );
};

export default Navbar;