import React from "react";
import turnoverstyle from "./TurnoverReport.module.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// item code
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#F5F5F5",
  padding: theme.spacing(1),
  boxShadow: "none",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  color: theme.palette.text.secondary,
}));

const TurnoverReport = () => {
  // dropdown list code start

  const [usercode, setUsercode] = React.useState("");
  const [marketbetting, setMarketbetting] = React.useState("");
  const [bettingtype, setBettingtype] = React.useState("");

  const usercodeChange = (event) => {
    setUsercode(event.target.value);
  };

  const marketbettingChange = (event) => {
    setMarketbetting(event.target.value);
  };

  const bettingtypeChange = (event) => {
    setBettingtype(event.target.value);
  };

  // calender code
  const [value, setValue] = React.useState(dayjs("2022-04-17"));

  return (
    <div>
      <h1 className={turnoverstyle.reporthead}>Turn Over Report</h1>
      <div className={turnoverstyle.mainsection}>
        <div className={turnoverstyle.innersection}>
          {/* left 50%%*/}
          <div className={turnoverstyle.secleft}>
            {/*From Date  */}
            <div className={turnoverstyle.maincol}>
              {/* col1 */}
              <div className={turnoverstyle.col1}>
                <Typography className={turnoverstyle.labeltxt}>
                  From Date
                </Typography>
              </div>
              {/* col2 */}
              <div className={turnoverstyle.col2}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer
                    components={["DatePicker", "DatePicker"]}
                    sx={{
                      color: "#642483",
                      fontSize: "18px",
                      fontWeight: "800",
                    }}
                  >
                    <DatePicker
                      className={turnoverstyle.trmainsec}
                      sx={{
                        borderColor: "#642483",
                        color: "#642483",
                      }}
                      inputProps={{ "aria-label": "Without label" }}
                      value={value}
                      onChange={(newValue) => setValue(newValue)}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
            </div>

            {/*To Date  */}
            <div className={turnoverstyle.maincol}>
              {/* col1 */}
              <div className={turnoverstyle.col1}>
                <Typography className={turnoverstyle.labeltxt}>
                  To Date
                </Typography>
              </div>
              {/* col2 */}
              <div className={turnoverstyle.col2}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer
                    components={["DatePicker", "DatePicker"]}
                    sx={{
                      color: "#642483",
                      fontSize: "18px",
                      fontWeight: "800",
                    }}
                  >
                    <DatePicker
                      className={turnoverstyle.trmainsec}
                      sx={{
                        borderColor: "#642483",
                        color: "#642483",
                      }}
                      inputProps={{ "aria-label": "Without label" }}
                      value={value}
                      onChange={(newValue) => setValue(newValue)}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
            </div>
          </div>

          {/* right */}
          {/* left 50%%*/}
          <div className={turnoverstyle.secleft}>
            {/*use code  */}
            <div className={turnoverstyle.maincol}>
              {/* col1 */}
              <div className={turnoverstyle.col1}>
                <Typography className={turnoverstyle.labeltxt}>
                  User Code
                </Typography>
              </div>
              {/* col2 */}
              <div className={turnoverstyle.col2}>
                <FormControl sx={{ m: 1 }}>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={usercode}
                    onChange={usercodeChange}
                    autoWidth
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Super Master</MenuItem>
                    <MenuItem value={21}>Master</MenuItem>
                    <MenuItem value={22}>Agent</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>

            {/*Market Betting  */}
            <div className={turnoverstyle.maincol}>
              {/* col1 */}
              <div className={turnoverstyle.col1}>
                <Typography className={turnoverstyle.labeltxt}>
                  Market Betting
                </Typography>
              </div>
              {/* col2 */}
              <div className={turnoverstyle.col2}>
                <FormControl sx={{ m: 1 }}>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={marketbetting}
                    onChange={marketbettingChange}
                    autoWidth
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Market Betting1</MenuItem>
                    <MenuItem value={21}>Market Betting2</MenuItem>
                    <MenuItem value={22}>Market Betting3</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            {/*Betting Type */}
            <div className={turnoverstyle.maincol}>
              {/* col1 */}
              <div className={turnoverstyle.col1}>
                <Typography className={turnoverstyle.labeltxt}>
                  Betting Type
                </Typography>
              </div>
              {/* col2 */}
              <div className={turnoverstyle.col2}>
                <FormControl sx={{ m: 1 }}>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={bettingtype}
                    onChange={bettingtypeChange}
                    autoWidth
                    inputProps={{ "aria-label": "Without label" }}
                    displayEmpty
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>2D</MenuItem>2D
                    <MenuItem value={20}>3D</MenuItem>
                    <MenuItem value={30}>Zodiac</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* (**** table start ) */}
      <div className={turnoverstyle.table}>
        <div className={turnoverstyle.tableMainSec}>
          {/* 1 */}
          <div className={turnoverstyle.tableInSec}>
            <div className={turnoverstyle.tableLeft}>
              <Typography className={turnoverstyle.reportLtxt}>
                Total Transaction:
              </Typography>
            </div>
            <div className={turnoverstyle.tableRgt}>
              <Typography className={turnoverstyle.reporttxt}>8548</Typography>
            </div>
          </div>
          {/* 2 */}
          <div className={turnoverstyle.tableInSec}>
            <div className={turnoverstyle.tableLeft}>
              <Typography className={turnoverstyle.reportLtxt}>
                Total Credit:
              </Typography>
            </div>
            <div className={turnoverstyle.tableRgt}>
              <Typography className={turnoverstyle.reporttxt}>8548</Typography>
            </div>
          </div>
          {/* 3 */}
          <div className={turnoverstyle.tableInSec}>
            <div className={turnoverstyle.tableLeft}>
              <Typography className={turnoverstyle.reportLtxt}>
                Total Debit:
              </Typography>
            </div>
            <div className={turnoverstyle.tableRgt}>
              <Typography className={turnoverstyle.reporttxt}>8548</Typography>
            </div>
          </div>
          {/* 4 */}
          <div className={turnoverstyle.tableInSec}>
            <div className={turnoverstyle.tableLeft}>
              <Typography className={turnoverstyle.reportLtxt}>
                Total Profit:
              </Typography>
            </div>
            <div className={turnoverstyle.tableRgt}>
              <Typography className={turnoverstyle.reporttxt}>8548</Typography>
            </div>
          </div>
        </div>
      </div>

      {/* (**** table start ) */}
    </div>
  );
};

export default TurnoverReport;
