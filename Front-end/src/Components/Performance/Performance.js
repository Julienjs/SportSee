import React, { useEffect, useState } from 'react';
import './Performance.css'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { getUserPerformance } from '../../Tools/API';

/**
 * component that displays the radar chart containing the user's performance
 * @param {Number} id 
 * @returns the radar chart containing the user's performance
 */

const Performance = ({ id }) => {
    const [performance, setPerformance] = useState([])

    /**
     * changes the value of  kind key into different expected performances
     * @param {Number} value 
     * @returns the value of  kind key into different expected performances
     */

    function formatAngleAxis(value) {
        if (value === 1) return 'Cardio'
        if (value === 2) return 'Energie'
        if (value === 3) return 'Endurance'
        if (value === 4) return 'Force'
        if (value === 5) return 'Vitesse'
        if (value === 6) return 'Intensité'
        return value
    }

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

export default Performance;