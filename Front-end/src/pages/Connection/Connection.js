import React from 'react';
import MaleAvatar from '../../assets/avatar-homme.png'
import FemaleAvatar from '../../assets/avatar-femme.png'
import './Connection.css'
import PropTypes from "prop-types";


/**
 * component that displays a map of each user
 * @returns une carte de chaque utilisateur
 */

const Connection = () => {

    const users = [{
        id: 12,
        firstName: 'Karl',
        lastName: 'Dovineau',
        age: 31,
        image: MaleAvatar
    }, {
        id: 18,
        firstName: 'Cecilia',
        lastName: 'Ratorez',
        age: 34,
        image: FemaleAvatar
    }]

    /**
     * function that stores the user id and links to the dashboard page
     * @param {Number} uid 
     * @returns stores the user id and links to the dashboard page
     */
    const handleConnect = (uid) => {
        localStorage.setItem('id', uid);
        window.location = `/Dashboard/${uid}`
    }

    //proptypes of handleConnect
    handleConnect.propTypes = {
        uid: PropTypes.string
    };

    return (
        <main className='connection-main'>
            <h1>Selectionner un profil :</h1>
            <section id='connection-section'>
                {users.map((user, index) => (
                    <article key={`${user}-${index}`} className={`profil-${user.firstName}`} onClick={() => handleConnect(user.id)}>
                        <img src={user.image} alt={user.firstName}  ></img>
                        <div className='user-info'>
                            <h2>{user.firstName}
                                <span>{user.lastName}</span>
                            </h2>
                            <p>{user.age} ans</p>
                        </div>
                    </article>
                ))}
            </section>
        </main>
    );
};

export default Connection;