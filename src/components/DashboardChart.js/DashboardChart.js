import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import chartsStyle from "./DashboardChart.module.css";
import { Typography } from "@mui/material";

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

import CustomizedPieChart from "../CustomizedPieChart/CustomizedPieChart";
import CustomizeBarChart from "../CustomizeBarChart/CustomizeBarChart";

const DashboardChart = () => {
  return (
    <>
      <div className={chartsStyle.mainsec}>
        <div className={chartsStyle.innersection}>
          
          <div className={chartsStyle.Charts1}>
      
            <Box className={chartsStyle.CustomizeBarChart}>
            <Typography variant="h1">TurnOver</Typography>
              <CustomizeBarChart />
            </Box>
          </div>
          <div className={chartsStyle.Charts2}>
          
            <Box className={chartsStyle.CustomizePaiChart}>
            <Typography variant="h1">Monthly Transaction</Typography>

            <CustomizedPieChart />
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};
export default DashboardChart;
