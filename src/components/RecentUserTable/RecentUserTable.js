import * as React from "react";
import { useEffect, useState } from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import { Avatar, Box } from "@mui/material";
import profileicon from "../../assets/images/profile/user.png";
import tablestyle from "./RecentUserTable.module.css";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { Avatar, Box, TableContainer } from "@mui/material";
import Paper from "@mui/material/Paper";



const RecentUserTable = () => {
  //-------------- states-----------------------//
  const [userDataTable, setUserDataTable] = useState([]);

  //-----------------Get API---------------------//
  // const acessToken = localStorage.getItem('user-token');
  // console.log("acessToken",acessToken)
  const getUserData = async () => {

    try {
      // const acessToken = localStorage.getItem('user-token');
      // console.log("acessToken",acessToken)
      // if(acessToken){
      //   const decryptedState = atob(acessToken);
      //   console.log("decryptedState token=>",decryptedState);
      // }
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
        // "http://51.79.177.218:8181/api/admin/user/super-master/list"
      );
      console.log("response=>", response.data);
      setUserDataTable(response.data);
    } catch (e) {
      console.log("error=>", e);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 70,
      flex: 1,
      headerClassName: "custom-header",
      
    },
    {
      field: "thumbnailUrl",
      headerName: "Image",
      renderCell: (params) => {
        // console.log("inmages->", params);
        return (
          <span>
            <Avatar sx={{ width: 40, height: 40 }}>
              <img src={params.row.thumbnailUrl} alt="Your Image" />
            </Avatar>
          </span>
        );
      },
      width: 150,
      flex: 1,
      headerClassName: "custom-header",
    },
    { field: "title", headerName: "First name", width: 130, flex: 1 ,headerClassName: "custom-header",},
    { field: "url", headerName: "Last name", width: 130, flex: 1 ,headerClassName: "custom-header",},
    // {
    //   field: "albumId",
    //   headerName: "Age",
    //   type: "number",
    //   width: 90,
    //   flex: 1
    // },
    // {
    //   field: "fullName",
    //   headerName: "Full name",
    //   description: "This column has a value getter and is not sortable.",
    //   sortable: false,
    //   width: 160,
    //   flex: 1,
    //   valueGetter: (params) =>
    //     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    // },
  ];
// CSS styles
const styles = `
.custom-header {
  background-color: #f2f2f2;
  color: #672D71;
  font-weight: 700;
  font-size:18px;
  
}
`;
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
    <>
    <style>{styles}</style>
      <TableContainer component={Paper} className={tablestyle.userTableSection}>
        <h1 className={tablestyle.tableheading}>Recent Users</h1>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={userDataTable}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10, 15, 20]}
             checkboxSelection
            //  hideFooter={true}
          />
        </div>
      </TableContainer>
    </>
  );
};

export default RecentUserTable;
