import React from "react";
import transactnstyle from "./TransactionReport.module.css";
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

  //-------------------------------Table Columns---------------------------//

  const rows = [
    {
      id: 1,
      Name: "Snow",
      "Mobile No": "Jon",
      Email: 35,
      Limit: "20,000",
      Country: "India",
      Discount: "10%",
    },
    {
      id: 2,
      Name: "Lannister",
      "Mobile No": "Cersei",
      Email: 42,
      Limit: "20,000",
      Country: "India",
      Discount: "10%",
    },
    {
      id: 3,
      Name: "Lannister",
      "Mobile No": "Jaime",
      Email: 45,
      Limit: "20,000",
      Country: "India",
      Discount: "10%",
    },
    {
      id: 4,
      Name: "Stark",
      "Mobile No": "Arya",
      Email: 16,
      Limit: "20,000",
      Country: "India",
      Discount: "10%",
    },
    {
      id: 5,
      Name: "Targaryen",
      "Mobile No": "Daenerys",
      Email: null,
      Limit: "20,000",
      Country: "India",
      Discount: "10%",
    },
    {
      id: 6,
      Name: "Melisandre",
      "Mobile No": null,
      Email: 150,
      Limit: "20,000",
      Country: "India",
      Discount: "10%",
    },
    {
      id: 7,
      Name: "Clifford",
      "Mobile No": "Ferrara",
      Email: 44,
      Limit: "20,000",
      Country: "India",
      Discount: "10%",
    },
    {
      id: 8,
      Name: "Frances",
      "Mobile No": "Rossini",
      Email: 36,
      Limit: "20,000",
      Country: "India",
      Discount: "10%",
    },
    {
      id: 9,
      Name: "Roxie",
      "Mobile No": "Harvey",
      Email: 65,
      Limit: "20,000",
      Country: "India",
      Discount: "10%",
    },
  ];

  const columns = [
    {
      field: "id",
      headerName: "Id",
      width: 30,
      flex: 1,
      headerClassName: "custom-header",
    },

    {
      field: "Name",
      headerName: "Name",
      width: 130,
      flex: 1,
      headerClassName: "custom-header",
    },
    {
      field: "Mobile No",
      headerName: "Mobile No",
      width: 90,
      flex: 1,
      headerClassName: "custom-header",
    },
    {
      field: "Email",
      headerName: "Email",
      type: "number",
      width: 90,
      flex: 1,
      headerClassName: "custom-header",
    },

    {
      field: "Limit",
      headerName: "Limit",
      type: "number",
      width: 90,
      flex: 1,
      headerClassName: "custom-header",
    },
    {
      field: "Country",
      headerName: "Country",
      type: "number",
      width: 90,
      flex: 1,
      headerClassName: "custom-header",
    },
    {
      field: "Discount",
      headerName: "Discount",
      type: "number",
      width: 90,
      flex: 1,
      headerClassName: "custom-header",
    },
  ];

  const styles = `
.custom-header {
  background-color: #FFFFFF;
  color: #672D71;
  font-weight: 600;
  font-size:16px;
  hei
  
}

`;
  return (
    <div>
      <style>{styles}</style>
      <h1 className={transactnstyle.reporthead}>Transaction Report</h1>
      <div className={transactnstyle.mainsection}>
        <div className={transactnstyle.innersection}>
          {/* left 50%%*/}
          <div className={transactnstyle.secleft}>
            {/*From Date  */}
            <div className={transactnstyle.maincol}>
              {/* col1 */}
              <div className={transactnstyle.col1}>
                <Typography className={transactnstyle.labeltxt}>
                  From Date
                </Typography>
              </div>
              {/* col2 */}
              <div className={transactnstyle.col2}>
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
                      className={transactnstyle.trmainsec}
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
            <div className={transactnstyle.maincol}>
              {/* col1 */}
              <div className={transactnstyle.col1}>
                <Typography className={transactnstyle.labeltxt}>
                  To Date
                </Typography>
              </div>
              {/* col2 */}
              <div className={transactnstyle.col2}>
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
                      className={transactnstyle.trmainsec}
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
          <div className={transactnstyle.secleft}>
            {/*use code  */}
            <div className={transactnstyle.maincol}>
              {/* col1 */}
              <div className={transactnstyle.col1}>
                <Typography className={transactnstyle.labeltxt}>
                  User Code
                </Typography>
              </div>
              {/* col2 */}
              <div className={transactnstyle.col2}>
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
            <div className={transactnstyle.maincol}>
              {/* col1 */}
              <div className={transactnstyle.col1}>
                <Typography className={transactnstyle.labeltxt}>
                  Market Betting
                </Typography>
              </div>
              {/* col2 */}
              <div className={transactnstyle.col2}>
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
            <div className={transactnstyle.maincol}>
              {/* col1 */}
              <div className={transactnstyle.col1}>
                <Typography className={transactnstyle.labeltxt}>
                  Betting Type
                </Typography>
              </div>
              {/* col2 */}
              <div className={transactnstyle.col2}>
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
      <Box
        sx={{
          padding: "5%",
        }}
      >
        <TableContainer
          component={Paper}
          className={transactnstyle.userTableSection}
        >
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
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
