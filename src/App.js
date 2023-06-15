import { BrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";
import Test from "./components/Test/Test";

function App() {
  return (
    <div className="App">
      {/* <LoginPage/> */}
      {/* <LoginPage/> */}
      <BrowserRouter>
        {/* <LoginPage /> */}
        <HomePage/>
        {/* <Test/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
