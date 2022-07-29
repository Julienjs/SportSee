import React from 'react';
import { FaCircle } from 'react-icons/fa'


/**
 * component that displays 
 * @returns the legend on the chart containing the user's activity
 */

const LegendActivity = () => {
    return (
        <div className='legend-activity'>
            <h2>Activité quotidienne</h2>
            <div>
                <p><FaCircle style={{ color: "rgba(40, 45, 48, 1)", fontSize: "8", marginRight: "10" }} />Poids (kg)</p>
                <p><FaCircle style={{ color: "rgba(230, 0, 0, 1)", fontSize: "8", marginRight: "10", marginLeft: "32" }} />Calories brûlées (kCal)</p>
            </div>
        </div>
    );
};

export default LegendActivity;