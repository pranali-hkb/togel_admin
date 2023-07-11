import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Button,
  MenuItem,
  FormControl,
  Select,
  Typography,
  Avatar,
} from "@mui/material";
import tablestyle from "./SampleTable.module.css";
import EditIcon from "../../assets/images/profile/pen.svg";
import DeleteIcon from "../../assets/images/profile/remove.svg";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import plusIcone from "../../assets/images/profile/plus.svg";
import CircleIcon from "@mui/icons-material/Circle";
import SettingsIcon from "@mui/icons-material/Settings";
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
  width: "235px",
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
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const columns = [
  { field: "id", headerName: "NO", width: 20 },
  {
    field: "User_Code",
    headerName: "USER CODE",
    type: "number",
    align: "left",
    // headerClassName: "tablestyle header_section",
  },
  { field: "Super_Master_Name", headerName: "SUPER MASTER NAME", width: 150 },
  {
    field: "Total_Master",
    headerName: "TOTAL MASTER",
    width: 150,
    type: "number",
    align: "left",
  },
  {
    field: "Details",
    headerName: "DETAIL",

    flex: 1,
    renderCell: (params) => (
      <Button
        onClick={() => handleButtonClick(params.row)}
        sx={{ color: "orange", fontSize: "14px" }}
      >
        DETAIL
      </Button>
    ),
  },
  {
    field: "status",
    headerName: "STATUS",
    renderCell: (params) => {
      // console.log("param", params);
      return (
        <div>
        {params.row.status == 0?

          <Button
            sx={{ color: "green", fontSize: "14px" }}
          >
            Active
          </Button>
          :""
        }
        {params.row.status == 1?
          <Button
            sx={{ color: "red", fontSize: "14px" }}
          >
            Suspended
          </Button>
          :""
        }
        {params.row.status == 2?
          <Button
            sx={{ color: "black", fontSize: "14px" }}
          >
            Inactive
          </Button>
          :""
        }
        </div>
        
      );
    },
  },
  // {
  //   field: "Details",
  //   headerName: "DETAIL",

  //   flex: 1,
  //   renderCell: (params) => (
  //     <RemoveRedEyeIcon
  //       onClick={() => handleButtonClick(params.row)}
  //       sx={{ color: "orange", fontSize: "25px" }}
  //     ></RemoveRedEyeIcon>
  //   ),
  // },
  // {
  //   field: "Status",
  //   headerName: "Status",

  //   flex: 1,
  //   renderCell: (params) => (
  //     <Button
  //       className={tablestyle.btnViewMore}
  //       sx={{ textTransform: "none" }}
  //       onClick={() => handleButtonClick(params.row)}
  //     >
  //       Active
  //     </Button>
  //   ),
  // },
  {
    field: "AddMaster",
    headerName: "ADD MASTER",
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
    headerName: "SETTING",
    // type: "number",
    width: 10,
    // headerClassName: "custom-header",
    align: "left",
    flex: 1,
    renderCell: (params) => (
      <SettingsIcon
        onClick={() => handleButtonClick(params.row)}
        sx={{ color: "orange", fontSize: "25px" }}
      ></SettingsIcon>
    ),
  },
];

const rows = [
  {
    id: 1,
    User_Code: "YZ",
    Super_Master_Name: "Jon",
    Total_Master: 35,
    status: 0,
  },
  {
    id: 2,
    User_Code: "GF",
    Super_Master_Name: "Jon",
    Total_Master: 35,
    status: 1,
  },
  {
    id: 3,
    User_Code: "GH",
    Super_Master_Name: "Jon",
    Total_Master: 5,
    status: 2,
  },
  {
    id: 4,
    User_Code: "SD",
    Super_Master_Name: "Jon",
    Total_Master: 95,
    status: 2,
  },
  {
    id: 5,
    User_Code: "CV",
    Super_Master_Name: "Jon",
    Total_Master: 45,
    status: 1,
  },
  {
    id: 6,
    User_Code: "MN",
    Super_Master_Name: "Jon",
    Total_Master: 15,
    status: 0,
  },
  {
    id: 7,
    User_Code: "KL",
    Super_Master_Name: "Jon",
    Total_Master: 6,
    status: 0,
  },
  {
    id: 8,
    User_Code: "DF",
    Super_Master_Name: "Jon",
    Total_Master: 4,
    status: 1,
  },
  {
    id: 9,
    User_Code: "FG",
    Super_Master_Name: "Jon",
    Total_Master: 52,
    status: 2,
  },
];

const SampleTable = () => {
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
    <div
      style={{
        height: 500,
        width: "100%",
        textAlign: "center",
        backgroundColor: "#fff",
        borderRadius: "5px",
        marginBottom: "15%",
      }}
    >
      <div className={tablestyle.btnAddSuperMaster}>
        <Button
          sx={{ textTransform: "none" }}
          className={tablestyle.addButton}
          onClick={handleOpen}
          startIcon={<plusIcone sx={{ color: "#fff" }} />}
        >
          {/* <span className={tablestyle.addIcon}> */}
          {/* <plusIcone></plusIcone> */}
          {/* </span> */}
          Add Super Master
        </Button>
      </div>

      <div className={tablestyle.buttonsec}>
        <Typography className={tablestyle.tableheading}>
          Super Master List
        </Typography>

        <Search
          className={tablestyle.search}
          sx={{ color: "#4B5563", background: "none" }}
        >
          <SearchIconWrapper sx={{ color: "#4B5563" }}>
            <SearchIcon sx={{ color: "#4B5563" }} />
          </SearchIconWrapper>
          <StyledInputBase
            className={tablestyle.searchtxt}
            placeholder="Search…"
            height="42px"
            inputProps={{ "aria-label": "search" }}
          />
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
        // checkboxSelection
        sx={{ backgroundColor: "#fff" }}
      />
    </div>
  );
};
export default SampleTable;
