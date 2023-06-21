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
      <Box
        sx={{ flexGrow: 1, boxShadow: "none", borderRadius: "none" }}
        className={turnoverstyle.trmainsec}
      >
        <h1 className={turnoverstyle.reporthead}>Turnover Report</h1>
        <Grid container spacing={2} className={turnoverstyle.trinrsec}>
          <Grid item xs={12} lg={6} sx={{ textAlign: "left" }}>
            {/* From date */}
            <Item>
              <Typography className={turnoverstyle.labeltxt}>
                From Date
              </Typography>
              {/* From date */}
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
            </Item>

            {/* To date */}
            <Item>
              <Typography className={turnoverstyle.labeltxt}>
                To Date
              </Typography>
              {/* From date */}
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
                    labelId="demo-select-small-label"
                    inputProps={{ "aria-label": "Without label" }}
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Item>

            {/* USer code */}
            <Item>
              <Typography className={turnoverstyle.labeltxt}>
                User code
              </Typography>
              <FormControl sx={{ m: 1, minWidth: 255 }}>
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
            </Item>
          </Grid>
          <Grid item xs={12} lg={6} sx={{ textAlign: "left" }}>
            {/*  Market Betting */}
            <Item>
              <Typography className={turnoverstyle.labeltxt}>
                Market Betting
              </Typography>
              <FormControl sx={{ m: 1, minWidth: 255 }}>
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
            </Item>

            {/*  Betting Type */}
            <Item>
              <Typography className={turnoverstyle.labeltxt}>
                Betting Type
              </Typography>
              <FormControl sx={{ m: 1, minWidth: 255 }}>
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
                  <MenuItem value={21}>3D</MenuItem>
                  <MenuItem value={22}>Zodiac</MenuItem>
                </Select>
              </FormControl>
            </Item>
          </Grid>
        </Grid>
        {/* *************************************section 2 ***************************** */}

        {/* <Grid spacing={2}  lg={12} className={turnoverstyle.trmainsec1}> */}
        <Grid container spacing={2} lg={6} className={turnoverstyle.trinrsec1}>
          <Grid container item xs={12} lg={12} sx={{ mt: "5" }}>
            <Grid item xs={6} lg={6} className={turnoverstyle.inrgrid}>
              <Typography className={turnoverstyle.reporttxt}>
                Total Transaction:
              </Typography>
            </Grid>
            <Grid item xs={6} lg={6} className={turnoverstyle.inrgrid}>
              <TextField disabled className={turnoverstyle.reportbox} />
            </Grid>
          </Grid>

          <Grid container item xs={12} lg={12}>
            <Grid item xs={6} lg={6} className={turnoverstyle.inrgrid}>
              <Typography className={turnoverstyle.reporttxt}>
                Total Credit:
              </Typography>
            </Grid>
            <Grid item xs={6} lg={6} className={turnoverstyle.inrgrid}>
              <TextField disabled className={turnoverstyle.reportbox} />
            </Grid>
          </Grid>

          <Grid container item xs={12} lg={12}>
            <Grid item xs={6} lg={6} className={turnoverstyle.inrgrid}>
              <Typography className={turnoverstyle.reporttxt}>
                Total Debit:
              </Typography>
            </Grid>
            <Grid item xs={6} lg={6} className={turnoverstyle.inrgrid}>
              <TextField disabled className={turnoverstyle.reportbox} />
            </Grid>
          </Grid>

          <Grid container item xs={12} lg={12}>
            <Grid item xs={6} lg={6} className={turnoverstyle.inrgrid}>
              <Typography className={turnoverstyle.reporttxt}>
                Total Profit:
              </Typography>
            </Grid>
            <Grid item xs={6} lg={6} className={turnoverstyle.inrgrid}>
              <TextField disabled className={turnoverstyle.reportbox} />
            </Grid>
          </Grid>
        </Grid>
        {/* </Grid> */}
      </Box>

      {/* ***********section 2 ******************************************* */}
    </div>
  );
};

export default TurnoverReport;
