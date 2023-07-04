import { BrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import UpdateProfile from "./components/UpdateProfile/UpdateProfile";
import DashbordCards from "./components/DashbordCards/DashbordCards";
import { Routes, Route } from "react-router";
import MyProfile from "./components/MyProfile/MyProfile";
import LoginPage from "./components/LoginPage/LoginPage";
import TokenContext from "./TokenContext";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
function App() {
  const token = localStorage.getItem("user-token");
 
  return (
    <div className="App">
      <BrowserRouter>
        <TokenContext.Provider value={token}>
       {token?

          <HomePage />:
          <LoginPage />
       }
      
        </TokenContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
