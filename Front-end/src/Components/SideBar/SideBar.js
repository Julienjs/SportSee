import React from 'react';
import './SideBar.css'

/**
 * component that displays a sidebar 
 * @returns a sidebar 
 */

const SideBar = () => {
    const images = ["relaxation", "swimming", "cycling", "weight"];
    return (
        <section id='sidebar-section'>
            <div className='sidebar'>
                <nav >
                    {images.map((image, index) => (
                        <img key={`${image}-${index}`} src={`../assets/${image}.png`} alt={`${image}`} />
                    ))}
                </nav>
                <p>Copiryght, SportSee 2020</p>
            </div>
        </section>
    );
};

export default SideBar;