import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
const CustomizeBarChart = () => {
  const dataTurnover = [
    {
      name: "Card",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Togel",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "MARCH",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "APR",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "MAY",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "JUNE",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "JULY",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    // { name: 'Group D', value: 200 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
  return (
    <>
      <BarChart
        width={610}
        height={340}
        data={dataTurnover}
        margin={{
          top: 50,
          right: 20,
          left: 2,
          bottom: 2,
        }}
        padding={{
          left: 20,

          right: 20,
        }}
        barSize={20}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="pv" fill="#8884D8" background={{ fill: "#eee" }} />
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % 10]} />
        ))}
        =
      </BarChart>
    </>
  );
};
export default CustomizeBarChart;
