import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Button,
  MenuItem,
  FormControl,
  Select,
  Typography,
} from "@mui/material";
import tablestyle from "./SampleTable.module.css";
import EditIcon from "../../assets/images/profile/pen.svg";
import DeleteIcon from "../../assets/images/profile/remove.svg";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

import SettingsIcon from '@mui/icons-material/Settings';
// ****

// Define handleButtonClick function
const handleButtonClick = (row) => {
  console.log("Button clicked for:", row);
  // Perform desired action with the row data
};

// Define handleDeleteClick function
const handleDeleteClick = (row) => {
  console.log("Delete Button clicked for id:", row);
  // Perform desired delete action with the row data
};
// Define handleDeleteClick function
const handleEditClick = (row) => {
  console.log("Edit Button clicked for id:", row);
  // Perform desired action with the row data
};

// ####

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

const columns = [
  { field: "id", headerName: "ID", width: 20 , },
  { field: "User_Code", headerName: "User_Code",  type: "number" , align:'left'},
  { field: "Super_Master_Name", headerName: "First name", width: 150  },
  {
    field: "Total_Master",
    headerName: "Total Master",
    width: 150,
    type: "number",
    align:'left'
  },
  {
    field: "Details",
    headerName: "Details",
  
    // width: 50,
    // headerClassName: "custom-header",

    flex: 1,
    renderCell: (params) => (
      <RemoveRedEyeIcon
      onClick={() => handleButtonClick(params.row)}
      sx={{ color: "orange", fontSize: "25px" }}
    ></RemoveRedEyeIcon>
      
    ),
  },
  {
    field: "Status",
    headerName: "Status",
    // type: "number",
    // width: 50,
    // headerClassName: "custom-header",

    flex: 1,
    renderCell: (params) => (
      <Button
        className={tablestyle.btnViewMore}
        sx={{ textTransform: "none" }}
        // variant="contained"
        // color="primary"
        onClick={() => handleButtonClick(params.row)}
      >
        Active
      </Button>
    ),
  },
  {
    field: "AddMaster",
    headerName: "Add Master",
    // type: "number",
    // width: 50,
    // headerClassName: "custom-header",

    flex: 1,
    renderCell: (params) => (
      <Button
        className={tablestyle.btnViewMore}
        sx={{ textTransform: "none" }}
        // variant="contained"
        // color="primary"
        onClick={() => handleButtonClick(params.row)}
      >
        Add Master
      </Button>
    ),
  },
  {
    field: "Settings",
    headerName: "Settings",
    // type: "number",
    width: 10,
    // headerClassName: "custom-header",
align:"left",
    flex: 1,
    renderCell: (params) => (
   
        <SettingsIcon
          onClick={() => handleButtonClick(params.row)}
          sx={{ color: "orange", fontSize: "25px"  }}
        ></SettingsIcon>
   
    ),
  },
];

const rows = [
  { id: 1, Super_Master_Name: "Jon", Total_Master: 35, User_Code: 35 },
  { id: 2, Super_Master_Name: "Jon", Total_Master: 35, User_Code: 42 },
  { id: 3, Super_Master_Name: "Jon", Total_Master: 5, User_Code: 45 },
  { id: 4, Super_Master_Name: "Jon", Total_Master: 95, User_Code: 16 },
  { id: 5, Super_Master_Name: "Jon", Total_Master: 45, User_Code: null },
  { id: 6, Super_Master_Name: "Jon", Total_Master: 15, User_Code: 150 },
  { id: 7, Super_Master_Name: "Jon", Total_Master: 6, User_Code: 44 },
  { id: 8, Super_Master_Name: "Jon", Total_Master: 4, User_Code: 36 },
  { id: 9, Super_Master_Name: "Jon", Total_Master: 52, User_Code: 65 },
];

export default function SampleTable() {
  const [activeStatus, setActiveStatus] = useState("ALL");
  const [deletedStatus, setDeletedStatus] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const handleChange = (event) => {
    setActiveStatus(event.target.value);
  };

  const handleNonDeleted = () => {
    setDeletedStatus(false);
  };

  const handleDeleted = () => {
    setDeletedStatus(true);
  };

  return (
    <div style={{ height: 400, width: "100%", textAlign: "center" }}>
      <div className={tablestyle.buttonsec}>
        {/* secleft start */}
        <div className={tablestyle.buttonleft}>
          <Typography className={tablestyle.tableheading}>
            Super Master List
          </Typography>
        </div>
        {/* sec right start */}
        <div className={tablestyle.buttonrgt}>
          <Button
            sx={{ textTransform: "none" }}
            className={tablestyle.addButton}
            onClick={handleOpen}
          >
            + Add Super Master
          </Button>
        </div>
      </div>
      <div className={tablestyle.searchsec}>
        <Search sx={{ backgroundColor: "transparent", borderColor: "none" }}>
          <StyledInputBase
            size="small"
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
        </Search>
      </div>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
