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
import tablestyle from "./UserSuperMaster.module.css";
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

const UserSuperMaster = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMobileNo, setUserMobileNo] = useState("");
  const [userCountry, setUserCountry] = useState("");
  const [userLimit, setUserLimit] = useState("");

  const [userData, setUserData] = useState([]);

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

  //----------------------GET API------------------------//

  const getSuperMasterList = async () => {
    try {
      const  accessToken = localStorage.getItem('user-token');
      console.log("accessToken",accessToken)
      if(accessToken){
      const response = await axios.get(
        // "http://51.79.177.218/togel-app-v1.0/togle/public/api/admin/setting/game"
        "http://51.79.177.218:8181/api/admin/user/super-master/list",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }
      );
      console.log("Game Response=>", response.data.data);
      setUserData(response.data.data);
      }
    } catch (e) {
      console.log("error=>", e);
    }
  };

  useEffect(() => {
    getSuperMasterList();
  }, []);
  //-------------------------------Table Columns---------------------------//

  const rows = [
    {
      id: 1,
      Name: "Snow",
      "Mobile No": "Jon",
      Email: "abcd@gmail.com",
      Limit: "20,000",
      Country: "India",
      Discount: "10%",
    },
    {
      id: 2,
      Name: "Lannister",
      "Mobile No": "Cersei",
      Email: "abcd@gmail.com",
      Limit: "20,000",
      Country: "India",
      Discount: "10%",
    },
    {
      id: 3,
      Name: "Lannister",
      "Mobile No": "Jaime",
      Email: "abcd@gmail.com",
      Limit: "20,000",
      Country: "India",
      Discount: "10%",
    },
    {
      id: 4,
      Name: "Stark",
      "Mobile No": "Arya",
      Email: "abcd@gmail.com",
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
      Email: "abcd@gmail.com",
      Limit: "20,000",
      Country: "India",
      Discount: "10%",
    },
    {
      id: 7,
      Name: "Clifford",
      "Mobile No": "Ferrara",
      Email: "abcd@gmail.com",
      Limit: "20,000",
      Country: "India",
      Discount: "10%",
    },
    {
      id: 8,
      Name: "Frances",
      "Mobile No": "Rossini",
      Email: "abcd@gmail.com",
      Limit: "20,000",
      Country: "India",
      Discount: "10%",
    },
    {
      id: 9,
      Name: "Roxie",
      "Mobile No": "Harvey",
      Email: "arshadansari.hkb@gmail.com",
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
      flex: 0.5,
      headerClassName: "custom-header",
    },

    {
      field: "name",
      headerName: "Name",
      width: 130,
      flex: 1,
      headerClassName: "custom-header",
    },
    {
      field: "contact_number",
      headerName: "Contact Number",
      width: 130,
      flex: 1,
      headerClassName: "custom-header",
    },
    {
      field: "email",
      headerName: "Game Name",
      width: 130,
      flex: 1,
      headerClassName: "custom-header",
    },
    {
      field: "created_at",
      headerName: "Created on",
      width: 90,
      flex: 1,
      headerClassName: "custom-header",
      valueGetter: (params) => moment(params.value).format("DD/MM/YY LT"),
    },
    // {
    //   field: "Email",
    //   headerName: "Email",
    //   // type: "number",
    //   width: 130,
    //   flex: 1,
    //   headerClassName: "custom-header",
    //   // align: 'right',
    // },

    // {
    //   field: "Limit",
    //   headerName: "Limit",
    //   // type: "number",
    //   width: 90,
    //   flex: 1,
    //   headerClassName: "custom-header",
    // },
    // {
    //   field: "Country",
    //   headerName: "Country",
    //   // type: "number",
    //   width: 130,
    //   flex: 1,
    //   headerClassName: "custom-header",
    // },
    // {
    //   field: "Discount",
    //   headerName: "Discount",
    //   // type: "number",
    //   width: 130,
    //   flex: 1,
    //   headerClassName: "custom-header",
    // },
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
        console.log("params=>", params),
        (
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
        )
      ),
    },
  ];
  // const columns = [
  //   {
  //     field: "id",
  //     headerName: "Id",
  //     width: 30,
  //     flex: 0.5,
  //     headerClassName: "custom-header",
  //   },

  //   {
  //     field: "Name",
  //     headerName: "Name",
  //     width: 130,
  //     flex: 1,
  //     headerClassName: "custom-header",
  //   },
  //   {
  //     field: "Mobile No",
  //     headerName: "Mobile No",
  //     width: 90,
  //     flex: 1,
  //     headerClassName: "custom-header",
  //   },
  //   {
  //     field: "Email",
  //     headerName: "Email",
  //     // type: "number",
  //     width: 130,
  //     flex: 1,
  //     headerClassName: "custom-header",
  //     // align: 'right',
  //   },

  //   {
  //     field: "Limit",
  //     headerName: "Limit",
  //     // type: "number",
  //     width: 90,
  //     flex: 1,
  //     headerClassName: "custom-header",
  //   },
  //   {
  //     field: "Country",
  //     headerName: "Country",
  //     // type: "number",
  //     width: 130,
  //     flex: 1,
  //     headerClassName: "custom-header",
  //   },
  //   {
  //     field: "Discount",
  //     headerName: "Discount",
  //     // type: "number",
  //     width: 130,
  //     flex: 1,
  //     headerClassName: "custom-header",
  //   },
  //   {
  //     field: "List",
  //     headerName: "List",
  //     // type: "number",
  //     width: 130,
  //     headerClassName: "custom-header",

  //     flex: 1,
  //     renderCell: (params) => (
  //       <Button
  //         className={tablestyle.btnViewMore}
  //         sx={{ textTransform: "none" }}
  //         // variant="contained"
  //         // color="primary"
  //         onClick={() => handleButtonClick(params.row)}
  //       >
  //         View More
  //       </Button>
  //     ),
  //   },
  //   {
  //     field: "Action",
  //     headerName: "Action",
  //     // type: "number",
  //     width: 130,
  //     flex: 1,
  //     headerClassName: "custom-header",

  //     renderCell: (params) => (
  //       <div style={{ display: "flex", margin: "none", gap: "7px" }}>
  //         <span>
  //           <img
  //             src={EditIcon}
  //             width={20}
  //             onClick={() => handleEditClick(params.row)}
  //           />
  //         </span>
  //         <span>
  //           <img src={DeleteIcon} width={20} />
  //         </span>
  //       </div>
  //     ),
  //   },
  // ];
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
                  Super Master
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
                + Add Master
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
                rows={userData}
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
export default UserSuperMaster;
