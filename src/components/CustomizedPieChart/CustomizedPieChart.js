import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
const CustomizedPieChart = () => {
    const data = [
      { name: 'Sydney', value: 400 },
      { name: 'Taiwan', value: 300 },
      { name: 'China', value: 200 },
      // { name: 'India', value: 100 },
    ];
  
    const COLORS = ['red', 'yellow', 'blue', ];
  
    const renderCustomizedLabel = ({
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      percent,
      index,
    }) => {
      const RADIAN = Math.PI / 180;
      const radius = innerRadius + (outerRadius - innerRadius) * 1.2;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
      return (
        <text
          x={x}
          y={y}
          fill="white"
          textAnchor={x > cx ? 'start' : 'end'}
          dominantBaseline="central"
        >
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      );
    };
  
    return (
      <PieChart width={460} height={300} >
        <Pie
          data={data}
          dataKey="value"
          cx={160}
          cy={130}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={100}
          fill="#8884d8"
       
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    );
  };
  
  export default CustomizedPieChart;
  