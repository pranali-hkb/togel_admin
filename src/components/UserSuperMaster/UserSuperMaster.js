import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
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
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
// import { makeStyles } from "@mui/styles";

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
  // const classes = useStyles();

  const styleModal = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
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
    {
      field: "List",
      headerName: "List",
      // type: "number",
      width: 90,
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
      width: 90,
      flex: 1,
      headerClassName: "custom-header",

      renderCell: (params) => (
        <div sx={{ display: "flex", padding: "0px" }}>
          <Button style={{ width: "10px", m: "2px" }}>
            <img
              src={EditIcon}
              width={20}
              onClick={() => handleEditClick(params.row)}
            />
          </Button>
          <Button style={{ width: "10px", m: "2px" }}>
            <img src={DeleteIcon} width={20} />
          </Button>
        </div>
      ),
    },
 
  ];
  const handleButtonClick = (row) => {
    console.log("Button clicked for:", row);
    // Perform desired action with the row data
  };
  const handleEditClick = (row) => {
    console.log("Edit Button clicked for:", row);
    // Perform desired action with the row data
  };

  // CSS styles
  const styles = `
.custom-header {
  background-color: #FFFFFF;
  color: #672D71;
  font-weight: 800;
  font-size:14px;
  hei
  
}

`;
// const useStyles = makeStyles({
//   customHeader: {
//     backgroundColor: "#FFFFFF",
//     color: "#672D71",
//     fontWeight: 800,
//     fontSize: 14,
//     height: 60, // Adjust the height value as per your requirement
//   },
// });
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
              <div className={tablestyle.TabsButton} sx={{ gap: "10px" }}>
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
                  onClick={handleNonDeleted}
                  // sx={{ textTransform: 'none' }}
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
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
            
              pageSizeOptions={[5, 10, 15, 20]}
              //  checkboxSelection
            />
          </div>
        </TableContainer>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styleModal}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </>
  );
};
export default UserSuperMaster;
