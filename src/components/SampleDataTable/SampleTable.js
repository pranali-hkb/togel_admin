import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, MenuItem, FormControl, Select } from "@mui/material";
import tablestyle from "./SampleDataTable.module.css";
import EditIcon from "../../assets/images/profile/pen.svg";
import DeleteIcon from "../../assets/images/profile/remove.svg";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
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

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "User_Code", headerName: "User_Code", width: 150, type: "number", },
  { field: 'Super_Master_Name', headerName: 'First name', width: 150 },
  { field: "Total_Master", headerName: "Total Master", width: 150, type: "number" },
  {
    field: "Details",
    headerName: "Details",
    // type: "number",
    width: 50,
    headerClassName: "custom-header",

    flex: 1,
    renderCell: (params) => (
      <Button className={tablestyle.btnViewMore}>
        <RemoveRedEyeIcon
          onClick={() => handleButtonClick(params.row)}
          sx={{ color: "#fff", fontSize: "16px" }}
        ></RemoveRedEyeIcon>
      </Button>
    ),
  },
  {
    field: "Status",
    headerName: "Status",
    // type: "number",
    width: 50,
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
        Active
      </Button>
    ),
  },
  {
    field: "AddMaster",
    headerName: "Add Master",
    // type: "number",
    width: 50,
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
        Add Master
      </Button>
    ),
  },
  {
    field: "Settings",
    headerName: "Settings",
    // type: "number",
    width: 50,
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
        Settings
      </Button>
    ),
  },
];

const rows = [
  { id: 1, Super_Master_Name: 'Jon',  Total_Master: 35 , User_Code: 35 },
  { id: 2, Super_Master_Name: 'Jon',  Total_Master: 35 , User_Code: 42 },
  { id: 3, Super_Master_Name: 'Jon', Total_Master: 5 , User_Code: 45 },
  { id: 4, Super_Master_Name: 'Jon', Total_Master: 95 , User_Code: 16 },
  { id: 5, Super_Master_Name: 'Jon',  Total_Master: 45 , User_Code: null },
  { id: 6,Super_Master_Name: 'Jon',  Total_Master: 15 , User_Code: 150 },
  { id: 7, Super_Master_Name: 'Jon',  Total_Master: 6 , User_Code: 44 },
  { id: 8, Super_Master_Name: 'Jon',  Total_Master: 4 , User_Code: 36 },
  { id: 9,Super_Master_Name: 'Jon',  Total_Master: 52 , User_Code: 65 },
];

export default function SampleTable() {
  return (
    <div style={{ height: 400, width: "100%", textAlign:'center' }}>
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
