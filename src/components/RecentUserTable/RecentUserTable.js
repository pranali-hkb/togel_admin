import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar, Box } from "@mui/material";
import profileicon from "../../assets/images/profile/user.png";
import tablestyle from "./RecentUserTable.module.css"






function createData(name, createdOn, status, userCode) {
  return { name, createdOn, status, userCode };
}

const rows = [
  createData("Chetali", "22-06-2022", "Active", 24),
  createData("Pranali", "12-06-2021", "Active", 24),
  createData("Sonali", "2-06-2022", "Active", 24),
  createData("Arshad", "72-06-2022", "Active", 24),
  createData("Darshana", "26-06-2019", "Active", 24),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <h1 className={tablestyle.tableheading}>Recent Users</h1>
          <TableRow>
            {/* <TableCell align="left" sx={{ minWidth: 5 }}></TableCell> */}
            <TableCell align="left" className={tablestyle.tableName}>Name</TableCell>
            <TableCell align="right" className={tablestyle.tableName}>Created On</TableCell>
            <TableCell align="right" className={tablestyle.tableName}>Status</TableCell>
            <TableCell align="right" className={tablestyle.tableName}>User Code</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">
                <div style={{ display: "flex" , gap:"10px"}}>
                  <span>
                  <Avatar sx={{ width: 40, height: 40 }}>
                    <img src={profileicon} alt="Your Image" />
                  </Avatar>
                  </span>
                  <span style={{display:'flex',justifyContent:"center", alignItems:"center"}} className={tablestyle.tableName}>
                  {row.name}
                  </span>
                </div>
              </TableCell>

              {/* <TableCell component="th" scope="row">
                {row.name}
              </TableCell> */}

              <TableCell align="right" className={tablestyle.tableName}>{row.createdOn}</TableCell>
              <TableCell align="right" className={tablestyle.tableName}>{row.status}</TableCell>
              <TableCell align="right" className={tablestyle.tableName}>{row.userCode}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
