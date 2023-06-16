import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
const CustomizedPieChart = () => {
    const data = [
      { name: 'Agent', value: 400 },
      { name: 'Agent', value: 300 },
      { name: 'Agent', value: 200 },
    //   { name: 'Category 4', value: 100 },
    ];
  
    const COLORS = ['#9C80D9', '#FD948F', '#48A2EB', '#FF8042'];
  
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
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey="value"
          cx={200}
          cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={140}
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
  