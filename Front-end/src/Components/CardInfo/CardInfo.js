import React from 'react';
import "./CardInfo.css"
import PropTypes from "prop-types";

/**
 *  component that displays total calories, protein, fat, carbohydrates
 * @param {Number} value 
 * @param {String} image 
 * @param {String} type 
 * @returns total calories, protein, fat, carbohydrates
 */

const CardInfo = ({ image, type, value }) => {
    return (
        <div className='cardInfo-container'>
            <div className={`image-contains-${type}`}>
                <img src={image} alt="" />
            </div>
            <div className='info'>
                {type === "Calories" ?
                    <h2>{value.toLocaleString("en-US")}<span>kCal</span></h2>
                    : <h2>{value}<span>g</span></h2>
                }
                <p className='type'>{type}</p>
            </div>
        </div >
    );
};

//proptypes for CardInfo
CardInfo.propTypes = {
    image: PropTypes.string,
    value: PropTypes.number,
    type: PropTypes.string,
};

export default CardInfo;