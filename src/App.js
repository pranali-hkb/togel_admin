import { BrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import UpdateProfile from "./components/UpdateProfile/UpdateProfile";
import DashbordCards from "./components/DashbordCards/DashbordCards";
import { Routes, Route } from 'react-router'
import MyProfile from "./components/MyProfile/MyProfile";
import LoginPage from "./components/LoginPage/LoginPage";

function App() {
  return (
    <div className="App">

      <BrowserRouter> 
        {/* <HomePage /> */}
        {/* <LoginPage /> */}
        <Routes>
          <Route exact path="/" element={<LoginPage/>} />
          <Route exact path="/homepage" element={<HomePage/>} />
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
