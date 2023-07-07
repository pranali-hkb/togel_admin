import React, { createContext } from 'react';
import { BrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import UpdateProfile from "./components/UpdateProfile/UpdateProfile";
import DashbordCards from "./components/DashbordCards/DashbordCards";
import { Routes, Route } from "react-router";
import MyProfile from "./components/MyProfile/MyProfile";
import LoginPage from "./components/LoginPage/LoginPage";
// import { TokenContext, AdminDataContext } from './TokenContext';

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const TokenContext = createContext();
const AdminDataContext = createContext();
function App() {

  const token = localStorage.getItem("user-token");
  const adminDataString  = localStorage.getItem("user-info");

  console.log("adminDataString=>", JSON.stringify(adminDataString));
  const adminData = JSON.parse(adminDataString);
  console.log("adminData=>", adminData);

  return (
    <div className="App">
      <BrowserRouter>
        <TokenContext.Provider value={token}>

           <AdminDataContext.Provider value={adminData}>
            {token ? <HomePage /> : <LoginPage />}
          </AdminDataContext.Provider>
        </TokenContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
export  { TokenContext, AdminDataContext };