import React from "react";
import chartsStyle from './DashboardChart.module.css'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { PieChart, Pie, Sector, Cell } from "recharts";
const DashboardChart = () => {
  let demoUrl = "https://codesandbox.io/s/bar-chart-has-no-padding-jphoc";
  let demoUrl1 =
    "https://codesandbox.io/s/pie-chart-with-customized-label-dlhhj";
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
  const COLORS = ["#9C80D9", "#4CA4EC", "#FD948F", "#FF8042"];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <>
      <div className={chartsStyle.mainsec}>
        <div className={chartsStyle.innersection}>
          <div className={chartsStyle.turnoverChart_section}>
            <h3>Turnover</h3>
            <ResponsiveContainer width="100%" aspect={2}>
              <BarChart
                width={500}
                height={300}
                data={dataTurnover}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
                barSize={20}
              >
                <XAxis
                  dataKey="name"
                  scale="point"
                  padding={{ left: 10, right: 10 }}
                />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar
                  dataKey="pv"
                  fill="#8884D8"
                  background={{ fill: "#eee" }}
                />
                =
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className={chartsStyle.monthlyChart_section}>
            <ResponsiveContainer width="100%" aspect={1}>
              <PieChart width={400} height={400}>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884D8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
};
export default DashboardChart;