import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, MenuItem, FormControl, Select, Box } from "@mui/material";
import tablestyle from "./SuperMaster.module.css";
import EditIcon from "../../assets/images/profile/pen.svg";
import DeleteIcon from "../../assets/images/profile/remove.svg";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";






const SuperMaster = () => {
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
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
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
          sx={{color:'#fff', fontSize:'16px'}}
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
        Add Master
      </Button>
    ),
  },
  {
    field: "Settings",
    headerName: "Settings",
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
        Settings
      </Button>
    ),
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

  return (
    <Box  className={tablestyle.mainContainer} style={{ height: 400, width: "100%" }}>
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
    </Box>
  )
}

export default SuperMaster
