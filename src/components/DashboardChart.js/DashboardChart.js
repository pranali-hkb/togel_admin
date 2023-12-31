import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import chartsStyle from "./DashboardChart.module.css";
import { FormControl, MenuItem, Select, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import CustomizedPieChart from "../CustomizedPieChart/CustomizedPieChart";
import CustomizeBarChart from "../CustomizeBarChart/CustomizeBarChart";
import CustomizeLineChart from "../CustomizeLineChart/CustomizeLineChart";

const DashboardChart = () => {
  const [turnover, setTurnover] = React.useState("");

  const handleChangeTurnover = (event) => {
    setTurnover(event.target.value);
  };

  const [year, setYear] = React.useState("");
  const [activeStatusTurnOver, setActiveStatusTurnOver] = useState("year");
  const handleChangeTurnOver = (event) => {
    setActiveStatusTurnOver(event.target.value);
  };
  const [activeStatusMonthly, setActiveStatusMonthly] = useState("year");
  const handleChangeMonthly = (event) => {
    setActiveStatusMonthly(event.target.value);
  };
  const [activeStatusMarketCountry, setActiveStatusMarketCountry] =
    useState("Country");
  const handleChangeMarketCountry = (event) => {
    setActiveStatusMarketCountry(event.target.value);
  };
  const [activeStatusMarket, setActiveStatusMarket] = useState("year");
  const handleChangeMarket = (event) => {
    setActiveStatusMarket(event.target.value);
  };
  console.log("activeStatusMarketCountry", activeStatusMarketCountry);
  return (
    <>
      <div className={chartsStyle.mainsec}>
        <div className={chartsStyle.innersection}>
          <div className={chartsStyle.Charts1}>
            <Box className={chartsStyle.CustomizePaiChart}>
              <Typography variant="h1" className={chartsStyle.heading}>
                Monthly Transaction
              </Typography>
              <div className={chartsStyle.yeardropdown}>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 100 }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Year
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={turnover}
                    onChange={handleChangeTurnover}
                    label="Year"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <CustomizedPieChart />
            </Box>
          </div>
          <div className={chartsStyle.Charts1}>
            <Box className={chartsStyle.CustomizeBarChart}>
              {/* <Typography variant="h1" className={chartsStyle.heading}>
                TurnOver
              </Typography> */}
              <div className={chartsStyle.yeardropdown}>
              <FormControl variant="standard" sx={{ minWidth: 100 }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Country
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={turnover}
                    onChange={handleChangeTurnover}
                    label="Year"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              <FormControl variant="standard" sx={{ml:'5', minWidth: 100 }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Year
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={turnover}
                    onChange={handleChangeTurnover}
                    label="Year"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <CustomizeBarChart />
            </Box>
          </div>
          <div className={chartsStyle.Charts1}>
            <Box className={chartsStyle.CustomizePaiChart}>
              {/* <Typography variant="h1" className={chartsStyle.heading}>
                Market Status
              </Typography> */}
              <div className={chartsStyle.yeardropdownMarket}>
              <FormControl variant="standard" sx={{ minWidth: 100 }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Country
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={turnover}
                    onChange={handleChangeTurnover}
                    label="Year"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                <FormControl variant="standard" sx={{ ml:'5',minWidth: 100 }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Year
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={turnover}
                    onChange={handleChangeTurnover}
                    label="Year"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
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
