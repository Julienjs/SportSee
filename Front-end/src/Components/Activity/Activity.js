import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { getUserActivity } from '../../Tools/API'
import LegendActivity from './LegendActivity';
import './Activity.css'


/**
 * Component containing a bar chart on the user's activity (day, kilogram, calories)
 * @param {Number} id 
 * @returns  a bar chart of the user's activity
 */


const Activity = ({ id }) => {
    const [activityData, setActivityData] = useState({});

    /**
     * changes the date format to fr
     * @param {String} tickItem 
     * @returns the date format to fr
     */

    const dateFormat = (tickItem) => {
        const options = { day: 'numeric' };
        const formatedDate = new Date(tickItem)
        return formatedDate.toLocaleDateString('fr-FR', options)
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
                <div className='tooltips'>
                    <p>{`${payload[0].value} kg`}</p>
                    <p>{`${payload[1].value} kCal`}</p>
                </div>
            )
        }
        return null
    }

    useEffect(() => {
        const getUserData = async () => {
            try {
                const response = await getUserActivity(id);
                setActivityData(response.data.sessions)
            } catch (err) {
                console.log(err.response.data);
            }
        };
        getUserData();
    }, [id]);

    return (
        <section id="activity-section">
            <LegendActivity />
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={990}
                    height={300}
                    data={activityData}
                    margin={{ top: 90, right: 50, left: 50, bottom: 30 }}
                    barGap={7}
                >
                    <CartesianGrid
                        strokeDasharray="2 2"
                        vertical={false}
                        stroke="#dedede"
                    />
                    <XAxis
                        dataKey="day"
                        tickFormatter={dateFormat}
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#9B9EAC', fontSize: 14 }}
                        padding={{ left: -47, right: -47 }}
                        dy={12}
                    />
                    <YAxis
                        axisLine={false}
                        yAxisId="right"
                        orientation="right"
                        tickLine={false}
                        tick={{ fill: '#9B9EAC', fontSize: 14 }}
                        domain={['dataMin-1', 'dataMax']}
                        tickCount={3}
                        tickSize="50"
                    />
                    <YAxis hide={true} yAxisId="left" />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar
                        dataKey="kilogram"
                        barSize={7}
                        fill="#282D30"
                        radius={[3.5, 3.5, 0, 0]}
                        yAxisId="right"
                        maxBarSize={12}
                    />
                    <Bar
                        dataKey="calories"
                        barSize={7}
                        fill="#E60000"
                        radius={[3.5, 3.5, 0, 0]}
                        yAxisId="left"
                        maxBarSize={12}
                    />
                </BarChart>
            </ResponsiveContainer>
        </section>
    );
};

export default Activity;