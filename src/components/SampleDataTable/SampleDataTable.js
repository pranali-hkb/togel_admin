import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Button, MenuItem, FormControl, Select } from "@mui/material";
import tablestyle from "./SampleTable.module.css";
import EditIcon from "../../assets/images/profile/pen.svg";
import DeleteIcon from "../../assets/images/profile/remove.svg";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { DataGrid } from "@mui/x-data-grid";

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
  { id: "name", label: "Name", minWidth: 170 },
  { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
  {
    id: "population",
    label: "Population",
    minWidth: 100,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Size\u00a0(km\u00b2)",
    minWidth: 100,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "Density",
    minWidth: 100,
    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "actions",
    label: "Actions",
    minWidth: 100,
    align: "left",
    // format: (value, row) => (
    //   <Button className={tablestyle.btnViewMore} onClick={() => handleButtonClick(row)}>
    //     View More
    //   </Button>
    // ),
  },
  {
    id: "actions2",
    label: "Actions2",
    minWidth: 20,
    align: "left",
    format: (value, row) => (
      <div style={{ display: "flex", margin: "none", gap: "7px" }}>
        <img
          src={EditIcon}
          alt="Edit"
          width={20}
          onClick={() => handleEditClick(row)}
        />

        <img
          src={DeleteIcon}
          alt="Delete"
          width={20}
          onClick={() => handleDeleteClick(row)}
        />
      </div>
    ),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData("India", "IN", 1324171354, 3287263),
  createData("China", "CN", 1403500365, 9596961),
  createData("Italy", "IT", 60483973, 301340),
  createData("United States", "US", 327167434, 9833520),
  createData("Canada", "CA", 37602103, 9984670),
  createData("Australia", "AU", 25475400, 7692024),
  createData("Germany", "DE", 83019200, 357578),
  createData("Ireland", "IE", 4857000, 70273),
  createData("Mexico", "MX", 126577691, 1972550),
  createData("Japan", "JP", 126317000, 377973),
  createData("France", "FR", 67022000, 640679),
  createData("United Kingdom", "GB", 67545757, 242495),
  createData("Russia", "RU", 146793744, 17098246),
  createData("Nigeria", "NG", 200962417, 923768),
  createData("Brazil", "BR", 210147125, 8515767),
  createData("United Kingdom", "GB", 67545757, 242495),
  createData("Russia", "RU", 146793744, 17098246),
  createData("Nigeria", "NG", 200962417, 923768),
  createData("Brazil", "BR", 210147125, 8515767),
];

export default function SampleDataTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
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

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden", padding: "1%" }}>
      <TableContainer sx={{ maxHeight: 540, padding: "dense" }}>
        <div className={tablestyle.buttonsec}>
          {/* secleft start */}
          <div className={tablestyle.buttonleft}>
            <div className={tablestyle.mainbtnsec}>
              <Button
                sx={{
                  "&.active": {
                    backgroundColor: "#038fde",
                    color: "white",
                    textTransform: "none",
                    padding: "8px 10px",
                    marginRight: "15px",
                  },
                  textTransform: "none",
                  padding: "7px 10px",
                  color: "#6F6F6F",
                }}
                className={deletedStatus ? "" : "active"}
                // className={`${tablestyle.btnMaster} ${deletedStatus ? tablestyle.active : ''}`}
                onClick={handleNonDeleted}
              >
                Super Master
              </Button>
            </div>
            <div className={tablestyle.dltbtnsec}>
              <Button
                sx={{
                  "&.active": {
                    backgroundColor: "#038fde",
                    color: "white",
                    textTransform: "none",
                    padding: "8px 10px",
                  },
                  textTransform: "none",
                  color: "#6F6F6F",
                  padding: "7px 10px",
                }}
                className={deletedStatus ? "active" : ""}
                //  className={`${tablestyle.btnMaster} ${deletedStatus ? '' : tablestyle.active}`}
                onClick={handleDeleted}
              >
                Deleted
              </Button>
            </div>
            <div className={tablestyle.listsec}>
              {/* <FormControl sx={{ minWidth: 100, borderColor:'#038fde' }}> */}
              <FormControl
                sx={{
                  borderColor: "#038fde",
                  minWidth: "100px",
                  borderColor: "#038fde",
                  "@media (max-width: 600px)": {
                    // Small screens (sm)
                    minWidth: "50px",
                  },
                  "@media (min-width: 601px) and (max-width: 960px)": {
                    // Medium screens (md)
                    minWidth: "80px",
                  },
                  "@media (min-width: 768px)": {
                    // Large screens (lg)
                    minWidth: "80px",
                  },
                }}
              >
                <Select
                  sx={{ borderColor: "#038fde" }}
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  size="small"
                  value={activeStatus}
                  onChange={handleChange}
                  // autoWidth
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
            <div className={tablestyle.searchsec}>
              <Search
                sx={{ backgroundColor: "transparent", borderColor: "none" }}
              >
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
          </div>
          {/* sec right start */}
          <div className={tablestyle.buttonrgt}>
            <Button
              sx={{ textTransform: "none" }}
              className={tablestyle.addButton}
              onClick={handleOpen}
            >
              + Add Master
            </Button>
          </div>
        </div>
        <Table stickyHeader aria-label="sticky table" size="small">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      if (column.id === "actions") {
                        return (
                          <TableCell key={column.id} align={column.align}>
                            <Button
                              className={tablestyle.btnViewMore}
                              onClick={() => handleButtonClick(row)}
                            >
                              View More
                            </Button>
                          </TableCell>
                        );
                      } else if (column.id === "actions2") {
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format(row[column.id], row)}
                          </TableCell>
                        );
                      } else {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      }
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>

   
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
