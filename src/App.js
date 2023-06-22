import { BrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";
import Test from "./components/Test/Test";
import TurnoverReport from "./components/TurnoverReport/TurnoverReport";
import WinLossReport from "./components/WinLossReport/WinLossReport";
import TransactionReport from "./components/TransactionReport/TransactionReport";



function App() {
  return (
    <div className="App">
  {/* <TurnoverReport/>
     */}
     {/* <TransactionReport/> */}
     {/* <WinLossReport/> */}
      <BrowserRouter>
<HomePage/>
      </BrowserRouter>
    </div>
  );
}

export default App;
