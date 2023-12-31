import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TableContainer,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { Avatar } from "@mui/material";
import tablestyle from "./Game.module.css";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import InputBase from "@mui/material/InputBase";
import EditIcon from "../../assets/images/profile/pen.svg";
import DeleteIcon from "../../assets/images/profile/remove.svg";
import CloseIcon from "../../assets/images/profile/close.svg";
import ManIcon from "../../assets/images/profile/man.svg";
import GmailIcon from "../../assets/images/profile/gmail.svg";
import PhoneIcon from "../../assets/images/profile/telephone.svg";
import CoronavirusIcon from "../../assets/images/profile/coronavirus.svg";
import yuanIcon from "../../assets/images/profile/yuan.svg";
import SearchIcon from "@mui/icons-material/Search";
import moment from "moment";
import { styled, alpha } from "@mui/material/styles";
import axios from "axios";
import { FormGroup, FormControlLabel, Switch } from "@mui/material";

// search
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#F2EDF3",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  border: "1px solid #7B809A",
  height: "42px",
  color: "rgba(123, 128, 154, 1)",
  height: "42px",
  width: "173px",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  top: "0px",
  right: "0",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(2)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Game = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMobileNo, setUserMobileNo] = useState("");
  const [userCountry, setUserCountry] = useState("");
  const [userLimit, setUserLimit] = useState("");

  const [gameData, setGameData] = useState([]);

  const [activeStatus, setActiveStatus] = useState("ALL");
  const [deletedStatus, setDeletedStatus] = useState(false);
  //-----------------Modal State------------------------------------------//
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (event) => {
    setActiveStatus(event.target.value);
  };
  const handleNonDeleted = () => {
    setDeletedStatus(false);
  };
  const handleDeleted = () => {
    setDeletedStatus(true);
  };
  // console.log("deletedStatus=>", deletedStatus);
  // const [checked, setChecked] = useState(false);

  const updateStatus = (id,status) => {
    // setChecked(!checked);
    console.log("checked=>id",id,status)
  };
const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));
  //----------------------GET API------------------------//

  const getGameData = async () => {
    try {
      const response = await axios.get(
        "http://51.79.177.218/togel-app-v1.0/togle/public/api/admin/setting/game"
      );
      console.log("Game Response=>", response.data.data.data);
      setGameData(response.data.data.data);
    } catch (e) {
      console.log("error=>", e);
    }
  };

  useEffect(() => {
    getGameData();
  }, []);
  
  //-------------------------------Table Columns---------------------------//

  const columns = [
    {
      field: "id",
      headerName: "Id",
      width: 30,
      flex: 0.5,
      headerClassName: "custom-header",
    },

    {
      field: "game_name",
      headerName: "Name",
      width: 130,
      flex: 1,
      headerClassName: "custom-header",
    },
    {
      field: "status",
      headerName: "Game Status",
      // type: "number",
      width: 130,
      flex: 1,
      headerClassName: "custom-header",
    },
    {
      field: "Game Status",
      headerName: "Game Status",
      // type: "number",
      width: 130,
      flex: 1,
      headerClassName: "custom-header",
      renderCell: (params) =>{
      console.log("params=>",params)

      return(
        <FormGroup>
        <FormControlLabel
        control={<IOSSwitch sx={{ m: 1 }} checked={params.row.status} onChange={(e)=>updateStatus
       
        (params.id,params.status)}/>}
        
      />
      </FormGroup>
      )
    } 
    },
    {
      field: "created_at",
      headerName: "Created on",
      width: 90,
      flex: 1,
      headerClassName: "custom-header",
      valueGetter: (params) => moment(params.value).format("DD/MM/YY LT"),
    },
 
    {
      field: "List",
      headerName: "List",
      // type: "number",
      width: 130,
      headerClassName: "custom-header",

      flex: 1,
      renderCell: (params) => (
        <Button
          className={tablestyle.btnViewMore}
          sx={{ textTransform: "none" }}
          // variant="contained"
          // color="primary"
          onClick={() => handleButtonClick(params.row)}
        >
          View More
        </Button>
      ),
    },
    {
      field: "Action",
      headerName: "Action",
      // type: "number",
      width: 130,
      flex: 1,
      headerClassName: "custom-header",

      renderCell: (params) => (
        // console.log("params=>", params),
        <div style={{ display: "flex", margin: "none", gap: "7px" }}>
          <span>
            <img
              src={EditIcon}
              width={20}
              onClick={() => handleEditClick(params.id)}
            />
          </span>
          <span>
            <img src={DeleteIcon} width={20} />
          </span>
        </div>
      ),
    },
  ];

  const handleButtonClick = (row) => {
    console.log("Button clicked for:", row);
    // Perform desired action with the row data
  };
  const handleEditClick = (row) => {
    console.log("Edit Button clicked for id:", row);
    // Perform desired action with the row data
  };
 
  // CSS styles
  const styles = `
.custom-header {
  background-color: #FFFFFF;
  color: #672D71;
  font-weight: 600;
  font-size:16px;
 
}


`;

  return (
    <>
      <style>{styles}</style>
      <Box>
        <TableContainer
          component={Paper}
          className={tablestyle.userTableSection}
        >
          <div className={tablestyle.table_btn_container}>
            <div className={tablestyle.tableUpperSection}>
              <div className={tablestyle.TabsButton}>
                <Button
                  sx={{
                    "&.active": {
                      backgroundColor: "#90168C", // Customize the active background color
                      color: "white",
                      textTransform: "none",
                      padding: "7px 10px",
                      marginRight: "15px",
                      // Customize the active text color
                      // Add any other active styles you want
                    },
                    textTransform: "none",
                    padding: "7px 10px",
                    color: "#6F6F6F",
                    marginRight: "15px",
                  }}
                  className={deletedStatus ? "" : "active"}
                  // className={`${tablestyle.btnMaster} ${deletedStatus ? tablestyle.active : ''}`}
                  onClick={handleNonDeleted}
                >
                  Master
                </Button>
                <Button
                  sx={{
                    "&.active": {
                      backgroundColor: "#90168C", // Customize the active background color
                      color: "white",
                      textTransform: "none",
                      padding: "7px 10px",
                      marginRight: "15px",
                      // Customize the active text color
                      // Add any other active styles you want
                    },
                    textTransform: "none",
                    color: "#6F6F6F",
                    padding: "7px 10px",
                    marginRight: "15px",
                  }}
                  className={deletedStatus ? "active" : ""}
                  //  className={`${tablestyle.btnMaster} ${deletedStatus ? '' : tablestyle.active}`}
                  onClick={handleDeleted}
                >
                  Deleted
                </Button>
              </div>
              <div>
                <FormControl sx={{ minWidth: 100 }}>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    size="small"
                    value={activeStatus}
                    onChange={handleChange}
                    autoWidth
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    {/* <MenuItem value="">
                      <em>All</em>
                    </MenuItem> */}
                    <MenuItem value="ALL">All</MenuItem>
                    <MenuItem value="TRUE">Active</MenuItem>
                    <MenuItem value="FALSE">Inactive</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="">
                <Search>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                  />
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                </Search>
              </div>
            </div>
            <div className={tablestyle.addButton}>
              <Button sx={{ textTransform: "none" }} onClick={handleOpen}>
                + Add Game
              </Button>
            </div>
          </div>
          <div style={{ width: "100%", height: "100%" }}>
            <div
              style={{
                width: "100%",
                height: "400px",
                maxWidth: "100%",
                "@media (max-width: 600px)": {
                  height: "300px",
                },
              }}
            >
              <DataGrid
                rows={gameData}
                columns={columns}
                autoHeight
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                  },
                }}
                pageSizeOptions={[5, 10, 15, 20]}
                //  checkboxSelection
              />
            </div>
          </div>
        </TableContainer>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            width: "550px", // Adjust the desired width
            height: "600px",
            background: "#FFFFFF",
            boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.08)",
            borderRadius: "30px",
          }}
        >
          <span className={tablestyle.ModlaStyle}>
            <img src={CloseIcon} width={20} onClick={handleClose} />
          </span>

          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{
              display: "flex",
              justifyContent: "center",
              fontSize: "41px",
              fontWeight: "600",
            }}
          >
            Add Super Master
          </Typography>
          <Grid container spacing={1}>
            <Grid xs={12} sm={12} md={12}>
              <FormControl className={tablestyle.TextField}>
                <InputLabel className={tablestyle.inputtxt}>
                  <span style={{ width: "10px", m: "2" }}>
                    <img src={ManIcon} width={20} /> Name
                  </span>
                </InputLabel>

                <OutlinedInput
                  className={tablestyle.loginbox}
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  label="Name"
                />
              </FormControl>
            </Grid>
            <Grid sm={12} md={12}>
              <FormControl className={tablestyle.TextField}>
                <InputLabel className={tablestyle.inputtxt}>
                  <span style={{ width: "10px", m: "2" }}>
                    <img src={GmailIcon} width={20} /> Email
                  </span>
                </InputLabel>

                <OutlinedInput
                  className={tablestyle.loginbox}
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  label="Email"
                />
              </FormControl>
            </Grid>
            <Grid sm={12} md={12}>
              <FormControl className={tablestyle.TextField}>
                <InputLabel className={tablestyle.inputtxt}>
                  <span style={{ width: "10px", m: "2" }}>
                    <img src={PhoneIcon} width={20} /> Mobile Number
                  </span>
                </InputLabel>

                <OutlinedInput
                  className={tablestyle.loginbox}
                  value={userMobileNo}
                  onChange={(e) => setUserMobileNo(e.target.value)}
                  label="Mobile Number"
                />
              </FormControl>
            </Grid>
            <div className={tablestyle.btnSection1}>
              <Grid xs={6} sm={5} md={5} sx={{ marginTop: "3%" }}>
                <FormControl className={tablestyle.TextField}>
                  <InputLabel className={tablestyle.inputtxt}>
                    <span style={{ width: "10px", m: "2" }}>
                      <img src={CoronavirusIcon} width={20} /> Country
                    </span>
                  </InputLabel>

                  <OutlinedInput
                    className={tablestyle.loginbox}
                    value={userCountry}
                    onChange={(e) => setUserCountry(e.target.value)}
                    label="Country"
                  />
                </FormControl>
              </Grid>
              <Grid xs={6} sm={5} md={5} sx={{ marginTop: "3%" }}>
                <FormControl className={tablestyle.TextField}>
                  <InputLabel className={tablestyle.inputtxt}>
                    <span style={{ width: "10px", mt: "2" }}>
                      <img src={yuanIcon} width={20} /> Limit
                    </span>
                  </InputLabel>

                  <OutlinedInput
                    className={tablestyle.loginbox}
                    value={userLimit}
                    onChange={(e) => setUserLimit(e.target.value)}
                    label="Limit"
                  />
                </FormControl>
              </Grid>
            </div>

            <div className={tablestyle.btnSection}>
              <div className={tablestyle.sec1}>
                <Button
                  // type="submit"
                  variant="contained"
                  size="large"
                  className={tablestyle.btnReject}
                  sx={{
                    width: "100%",
                    padding: "0 30px 0 30px",
                    textTransform: "none",
                  }}
                >
                  Reject
                </Button>
              </div>
              <div className={tablestyle.sec2}>
                <Button
                  // type="submit"
                  variant="contained"
                  size="large"
                  className={tablestyle.btnSave}
                  sx={{
                    width: "100%",
                    padding: "0 30px 0 30px",
                    textTransform: "none",
                  }}
                >
                  Save
                </Button>
              </div>
            </div>
          </Grid>
        </Box>
      </Modal>
    </>
  );
};
export default Game;
