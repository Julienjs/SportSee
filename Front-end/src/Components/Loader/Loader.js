import React from 'react';
import './Loader.css'

/**
 * component that displays the page load 
 * @returns the page load 
 */

const Loader = () => {
    return (
        <div className='loader-container' >
            <div className='text'>
                <h1>Loading ...</h1>
            </div>
            <div className='loading'>
                <div className='line-box'>
                    <div className='line'></div>
                </div>
            </div>
        </div>
    );
};

export default Loader;