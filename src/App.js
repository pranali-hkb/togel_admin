import { BrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";
import Test from "./components/Test/Test";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <LoginPage/>

      </BrowserRouter>
    </div>
  );
}

export default App;
