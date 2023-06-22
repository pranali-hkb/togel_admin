import React from "react";
import winlosstyle from "./WinLossReport.module.css";
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
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { TableContainer, TextField } from "@mui/material";
import { Directions } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import axios from "axios";

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

const TransactionReport = () => {
  const [userDataTable, setUserDataTable] = useState([]);
  const [loading, setLoading] = useState(true);
  //-----------------Get API---------------------//

  const getUserData = async () => {
    try {
      const response = await axios.get(
        "https://dummy.restapiexample.com/api/v1/employees"
      );
      console.log("employees response=>", response.data.data);
      setUserDataTable(response.data.data);
    } catch (e) {
      console.log("error=>", e);
    }
  };
  console.log("test ", userDataTable);
  useEffect(() => {
    getUserData();
  }, []);

  // dropdown list code start

  const [marketbetting, setMarketbetting] = React.useState("");
  const [bettingtype, setBettingtype] = React.useState("");

  const marketbettingChange = (event) => {
    setMarketbetting(event.target.value);
  };

  const bettingtypeChange = (event) => {
    setBettingtype(event.target.value);
  };

  // calender code
  const [value, setValue] = React.useState(dayjs("2022-04-17"));

  //-------------------------------Table Columns---------------------------//

  const rows = [
    {
      id: 1,
      Name: "Snow",
      "Mobile No": "Jon",
      Email: 35,
      Limit: "20,000",
      Country: "India",
     
      
    },
    {
      id: 2,
      Name: "Lannister",
      "Mobile No": "Cersei",
      Email: 42,
      Limit: "20,000",
      Country: "India",
     
  
    },
    {
      id: 3,
      Name: "Lannister",
      "Mobile No": "Jaime",
      Email: 45,
      Limit: "20,000",
      Country: "India",
     
  
    },
    {
      id: 4,
      Name: "Stark",
      "Mobile No": "Arya",
      Email: 16,
      Limit: "20,000",
      Country: "India",
     
  
    },
    {
      id: 5,
      Name: "Targaryen",
      "Mobile No": "Daenerys",
      Email: null,
      Limit: "20,000",
      Country: "India",
     
  
    },
    {
      id: 6,
      Name: "Melisandre",
      "Mobile No": null,
      Email: 150,
      Limit: "20,000",
      Country: "India",
     
   
    },
    {
      id: 7,
      Name: "Clifford",
      "Mobile No": "Ferrara",
      Email: 44,
      Limit: "20,000",
      Country: "India",
     
   
    },
    {
      id: 8,
      Name: "Frances",
      "Mobile No": "Rossini",
      Email: 36,
      Limit: "20,000",
      Country: "India",
     
   
    },
    {
      id: 9,
      Name: "Roxie",
      "Mobile No": "Harvey",
      Email: 65,
      Limit: "20,000",
      Country: "India",
     
   
    },
  ];

  const columns = [
    {
      field: "id",
      headerName: "Id",
      width: 10,
      flex: 0.7,
      headerClassName: "custom-header",
      align: "left",
    },

    {
      field: "Name",
      headerName: "Market",
      width: 130,
      flex: 1,
      headerClassName: "custom-header",
      align: "left",
    },
    {
      field: "Mobile No",
      headerName: "Betting Type",
      width: 12,
      flex: 1,

      headerClassName: "custom-header",
      headerAlign: "left",
       align: "left",
    },
    {
      field: "Email",
      headerName: "User Code",
      type: "number",
      width: 90,
      flex: 1,
      headerClassName: "custom-header",
      headerAlign: "left",
       align: "left",
    },

    {
      field: "Limit",
      headerName: "Game Win/Loss",
      type: "number",
      width: 90,
      flex: 1,
      headerClassName: "custom-header",
      headerAlign: "left",
       align: "left",
    },
    {
      field: "Country",
      headerName: "Bet Amount",
      type: "number",
      width: 90,
      flex: 1,
      headerClassName: "custom-header",
      headerAlign: "left",
       align: "left",
    },
 
  ];

  const styles = `
.custom-header {
  background-color: #FFFFFF;
  color: #672D71;
  font-weight: 800;
  font-size:17px;
  text-align: left;
}

`;
  return (
    <div>
      <h1 className={winlosstyle.reporthead}>Win Loss Report</h1>
      <div className={winlosstyle.mainsection}>
        <div className={winlosstyle.innersection}>
          {/* left 50%%*/}
          <div className={winlosstyle.secleft}>
            {/*From Date  */}
            <div className={winlosstyle.maincol}>
              {/* col1 */}
              <div className={winlosstyle.col1}>
                <Typography className={winlosstyle.labeltxt}>
                  From Date
                </Typography>
              </div>
              {/* col2 */}
              <div className={winlosstyle.col2}>
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
                      className={winlosstyle.trmainsec}
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
            <div className={winlosstyle.maincol}>
              {/* col1 */}
              <div className={winlosstyle.col1}>
                <Typography className={winlosstyle.labeltxt}>
                  To Date
                </Typography>
              </div>
              {/* col2 */}
              <div className={winlosstyle.col2}>
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
                      className={winlosstyle.trmainsec}
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
          <div className={winlosstyle.secleft}>
            {/*Market Betting  */}
            <div className={winlosstyle.maincol}>
              {/* col1 */}
              <div className={winlosstyle.col1}>
                <Typography className={winlosstyle.labeltxt}>
                  Market Betting
                </Typography>
              </div>
              {/* col2 */}
              <div className={winlosstyle.col2}>
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
            <div className={winlosstyle.maincol}>
              {/* col1 */}
              <div className={winlosstyle.col1}>
                <Typography className={winlosstyle.labeltxt}>
                  Betting Type
                </Typography>
              </div>
              {/* col2 */}
              <div className={winlosstyle.col2}>
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
                    <MenuItem value={21}>3D</MenuItem>
                    <MenuItem value={22}>Zodiac</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --------------- Transaction Report Table */}
      <style>{styles}</style>
      <Box
        sx={{
          padding: "3% 5% 2% 5%",
        }}
      >
        <TableContainer
          sx={{ textAlign: "left" }}
          component={Paper}
          className={winlosstyle.userTableSection}
        >
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              // rows={userDataTable}
              rows={rows}
              columns={columns}
              // initialState={{
              //   pagination: {
              //     paginationModel: { page: 0, pageSize: 0 },
              //   },
              // }}

              // pageSizeOptions={[5, 10, 15, 20]}
              // //  checkboxSelection
            />
          </div>
        </TableContainer>
      </Box>
    </div>
  );
};

export default TransactionReport;
