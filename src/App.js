import { BrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import UpdateProfile from "./components/UpdateProfile/UpdateProfile";
import DashbordCards from "./components/DashbordCards/DashbordCards";


function App() {
  return (
    <div className="App">

      <BrowserRouter> 
        <HomePage />
      
      </BrowserRouter>
    </div>
  );
}

export default App;
