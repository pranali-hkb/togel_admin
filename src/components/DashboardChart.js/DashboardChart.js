import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import chartsStyle from "./DashboardChart.module.css";
import { FormControl, MenuItem, Select, Typography } from "@mui/material";

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
import CustomizeLineChart from "../CustomizeLineChart/CustomizeLineChart";

const DashboardChart = () => {
  const [activeStatusTurnOver, setActiveStatusTurnOver] = useState("Year");
  const handleChangeTurnOver = (event) => {
    setActiveStatusTurnOver(event.target.value);
  };
  const [activeStatusMonthly, setActiveStatusMonthly] = useState("Year");
  const handleChangeMonthly = (event) => {
    setActiveStatusMonthly(event.target.value);
  };
  const [activeStatusMarketCountry, setActiveStatusMarketCountry] =
    useState("Country");
  const handleChangeMarketCountry = (event) => {
    setActiveStatusMarketCountry(event.target.value);
  };
  const [activeStatusMarket, setActiveStatusMarket] = useState("Year");
  const handleChangeMarket = (event) => {
    setActiveStatusMarket(event.target.value);
  };
console.log("activeStatusMarketCountry",activeStatusMarketCountry)
  return (
    <>
      <div className={chartsStyle.mainsec}>
        <div className={chartsStyle.innersection}>
          <div className={chartsStyle.Charts1}>
            <Box className={chartsStyle.CustomizeBarChart}>
              <Typography variant="h1" className={chartsStyle.heading}>
                TurnOver
              </Typography>
              <div className={chartsStyle.yeardropdown}>
                <FormControl sx={{ minWidth: 100 }}>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    size="small"
                    value={activeStatusTurnOver}
                    onChange={handleChangeTurnOver}
                    autoWidth
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="Year">Year</MenuItem>
                    <MenuItem value="2023">2023</MenuItem>
                    <MenuItem value="2024">2024</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <CustomizeBarChart />
            </Box>
          </div>
          <div className={chartsStyle.Charts1}>
            <Box className={chartsStyle.CustomizePaiChart}>
              <Typography variant="h1" className={chartsStyle.heading}>
                Monthly Transaction
              </Typography>
              <div className={chartsStyle.yeardropdown}>
                <FormControl sx={{ minWidth: 100 }}>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    size="small"
                    value={activeStatusMonthly}
                    onChange={handleChangeMonthly}
                    autoWidth
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="Year">Year</MenuItem>
                    <MenuItem value="2023">2023</MenuItem>
                    <MenuItem value="2024">2024</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <CustomizedPieChart />
            </Box>
          </div>

          <div className={chartsStyle.Charts1}>
            <Box className={chartsStyle.CustomizePaiChart}>
              <Typography variant="h1" className={chartsStyle.heading}>
                Market Status
              </Typography>
              <div className={chartsStyle.yeardropdownMarket}>
                <FormControl sx={{ minWidth: 100 }}>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    size="small"
                    value={activeStatusMarketCountry}
                    onChange={handleChangeMarketCountry}
                    autoWidth
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="Country">Country</MenuItem>
                    <MenuItem value="INDONESIA">Indonesia</MenuItem>
                    <MenuItem value="INDIA">2024</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ minWidth: 100 }}>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    size="small"
                    value={activeStatusMarket}
                    onChange={handleChangeMarket}
                    autoWidth
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="Year">Year</MenuItem>
                    <MenuItem value="2023">2023</MenuItem>
                    <MenuItem value="2024">2024</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <CustomizeLineChart />
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};
export default DashboardChart;
