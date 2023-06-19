import React from "react";
// import MaterialTable from "material-table";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar, Box } from "@mui/material";
import profileicon from "../../assets/images/profile/user.png";
import tablestyle from "./RecentUserTable2.module.css";

const RecentUserTable2 = () => {
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <h1 className={tablestyle.tableheading}>Recent Users</h1>
            <TableRow>
              {/* <TableCell align="left" sx={{ minWidth: 5 }}></TableCell> */}
              <TableCell align="left" className={tablestyle.tableName}>
                Name
              </TableCell>
              <TableCell align="right" className={tablestyle.tableName}>
                Created On
              </TableCell>
              <TableCell align="right" className={tablestyle.tableName}>
                Status
              </TableCell>
              <TableCell align="right" className={tablestyle.tableName}>
                User Code
              </TableCell>
              <TableCell align="right" className={tablestyle.tableName}>
                User Code
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">
                  <div style={{ display: "flex", gap: "10px" }}>
                    <span>
                      <Avatar sx={{ width: 40, height: 40 }}>
                        <img src={profileicon} alt="Your Image" />
                      </Avatar>
                    </span>
                    <span
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      className={tablestyle.tableName}
                    >
                      {row.name}
                    </span>
                  </div>
                </TableCell>

                <TableCell align="right" className={tablestyle.tableName}>
                  {row.calories}
                </TableCell>
                <TableCell align="right" className={tablestyle.tableName}>
                  {row.fat}
                </TableCell>
                <TableCell align="right" className={tablestyle.tableName}>
                  {row.carbs}
                </TableCell>
                <TableCell align="right" className={tablestyle.tableName}>
                  {row.protein}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default RecentUserTable2;
