import React, { useEffect, useState } from 'react';
import './Performance.css'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { getUserPerformance } from '../../Tools/API';
import { formatAngleAxis } from '../../Tools/Formatters';
import PropTypes from "prop-types";


/**
 * component that displays the radar chart containing the user's performance
 * @param {String} id 
 * @returns the radar chart containing the user's performance
 */

const Performance = ({ id }) => {
    const [performance, setPerformance] = useState([])

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await getUserPerformance(id);
                setPerformance(response.data.data.reverse());
            } catch (err) {
                console.log(err.response.data);
            }
        }
        fetchUserData()
    }, [id])

    return (
        <section id="performance-section">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart
                    width={258}
                    height={263}
                    cx="50%"
                    cy="50%"
                    outerRadius="80%"
                    data={performance}
                    margin={{ top: 20, bottom: 20, left: 15, right: 15 }}
                >
                    <PolarGrid stroke="#fff" />
                    <PolarAngleAxis
                        tickFormatter={formatAngleAxis}
                        dataKey="kind"
                        stroke="#FFF"
                        tickLine={false}
                        style={{ fontSize: '12px' }}
                    />
                    <Radar
                        name="value"
                        dataKey="value"
                        stroke="#FF0101"
                        fill="#FF0101"
                        fillOpacity={0.7}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </section >
    );
};

//proptypes of Performance
Performance.propTypes = {
    id: PropTypes.string
};

export default Performance;