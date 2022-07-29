import React from 'react';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import './Score.css'

/**
 * component that displays a pie chart containing the user's score 
 * @param {Number} score 
 * @returns a pie chart containing the user's score 
 */

const Score = ({ score }) => {
  const percentScore = score * 100;

  const customData = [
    { name: 'score', value: score, stroke: '#FF0000' },
    { name: 'score', value: 0.35 - score, stroke: 'transparent' },
  ];

  return (
    <section id="score-section">
      <h2>Score</h2>
      <div className='score-container'>
        <p>
          {percentScore}% <span>de votre objectif</span>
        </p>
      </div>
      <ResponsiveContainer width="100%" height="100%" borderRadius="5px">
        <PieChart>
          <Pie
            data={customData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius="68%"
            outerRadius="68%"
            fill="#FF0000"
            startAngle={90}
            endAngle={470}
            strokeWidth={10}
          />
        </PieChart>
      </ResponsiveContainer>
    </section>
  );
};

export default Score;