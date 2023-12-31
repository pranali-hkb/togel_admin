import React from 'react'
import { Routes, Route } from 'react-router'
import MainDahboard from './components/MainDashboard/MainDahboard'
import SuperMaster from './components/SuperMaster/SuperMaster'
import Master from './components/Master/Master'
import Agent from './components/Agent/Agent'
import Reports from './components/Reports/Reports'
import Logout from './components/Logout/Logout'
import { Dashboard, Login } from '@mui/icons-material'
import UserSuperMaster from './components/UserSuperMaster/UserSuperMaster'
import TransactionReport from './components/TransactionReport/TransactionReport'
import TurnoverReport from './components/TurnoverReport/TurnoverReport'
import WinlossReport from './components/WinLossReport/WinLossReport'
import GameSetting from './components/GameSetting/GameSetting'
import Game from './components/Game/Game'
import UpdateProfile from './components/UpdateProfile/UpdateProfile'
import Prediction from './components/Prediction/Prediction'
import GameList from './components/GameList/GameList'
import LoginPage from './components/LoginPage/LoginPage'
import Calculation from './components/Calculation/Calculation'
import Logs from './components/Logs/Logs'
import AddSuperMaster from './components/AddSuperMaster/AddSuperMaster'
import SampleTable from './components/SampleDataTable/SampleTable'
const RoutesPages = () => {
  return (
    <div>
    <Routes>
          <Route exact path="/" element={<MainDahboard/>} />
          <Route exact path="/maindashboard" element={<MainDahboard/>} />
          <Route path="/supermaster" element={<SuperMaster />} />
          <Route path="/usersupermaster" element={<SuperMaster />} />
          <Route path="/gamesettting" element={<GameSetting />} />
          <Route path="/master" element={<Master />} />
          <Route path="/agent" element={<Agent />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/transactionreport" element={<TransactionReport/>} />
          <Route path="/turnoverreport" element={<TurnoverReport />} />
          <Route path="/winlossreport" element={<WinlossReport/>} />
          <Route path='/supermasterprofileupdate' element={<UpdateProfile/>}/>
          <Route path='/calculation' element={<Calculation/>}/>
          <Route path='/prediction' element={<Prediction/>}/>
          <Route path='/logs' element={<Logs/>}/>
          {/* <Route path='/login' element={<LoginPage/>}/> */}
          <Route path='/addsupermaster' element={<AddSuperMaster/>}/>
          <Route path='/sampleTable' element={<SampleTable/>}/>
        </Routes>
    </div>
  )
}

export default RoutesPages