import React, { useEffect, useState } from 'react';
import { Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import './AverageSessions.css'
import { getUserAverageSessions } from '../../Tools/API';


/**
 *  Component containing a area chart of the user's average sessions(days,session-length)
 * @param {Number} id 
 * @returns   a area chart of the user's average sessions
 */

const AverageSessions = ({ id }) => {
    const [average, setAverage] = useState([]);


    /**
     * converts the value of the day key to a letter  
     * @param {Number} item 
     * @returns the value of the day key in letters 
     */

    const days = (item) => {
        const daysLetters = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
        return `${daysLetters[item - 1]}`;
    }

    /**
     * customise the content of tooltips
     * @param {Boolean} active
     * @param {Object} payload
     * @returns {Dom} the content of tooltips
     */

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="session-length">
                    <span>{`${payload[0].value} min`}</span>
                </div>
            )
        }
        return null
    }


    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await getUserAverageSessions(id);
                setAverage(response.data.sessions);
            } catch (err) {
                console.log(err.response.data);
            }
        }
        fetchUserData()
    }, [id])


    return (
        <section id='average-sessions-section'>
            <h2>Durée moyenne des sessions</h2>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    width={258}
                    height={263}
                    data={average}
                    margin={{
                        top: 70,
                        left: 0,
                        right: 0,
                        bottom: 30,
                    }}
                >
                    <XAxis
                        className='xakis'
                        dataKey="day"
                        stroke="#fff"
                        tickLine={false}
                        axisLine={false}
                        interval="preserveStartEnd"
                        style={{
                            transform: 'scale(0.85)',
                            transformOrigin: '134px 350px',
                            opacity: '0.5',
                        }}
                        tickFormatter={days}
                    />

                    <YAxis hide={true} domain={['dataMin-10', 'dataMax+10']} />
                    <Tooltip content={<CustomTooltip />} cursor={false} />
                    <Line type="monotone" dataKey="sessionLength" />
                    <Area
                        type="monotone"
                        dataKey="sessionLength"
                        stroke="#fff"
                        strokeWidth="2"
                        fill="#FF0D0D"
                        activeDot={{
                            width: 8,
                            fill: '#FFFFFF',
                            stroke: '#FFFFFF',
                            strokeWidth: 10,
                            r: 3,
                            strokeOpacity: 0.35,
                            border: '5px solid rgba(255, 255, 255, 0.198345)',
                        }}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </section>
    );
};

export default AverageSessions;