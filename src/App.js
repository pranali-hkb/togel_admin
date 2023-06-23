import { BrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import UpdateProfile from "./components/UpdateProfile/UpdateProfile";


function App() {
  return (
    <div className="App">
    <UpdateProfile/>
      <BrowserRouter>
        {/* <HomePage /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
