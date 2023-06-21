import React from 'react'
import { Routes, Route } from 'react-router'
import MainDahboard from './components/MainDashboard/MainDahboard'
import SuperMaster from './components/SuperMaster/SuperMaster'
import Master from './components/Master/Master'
import Agent from './components/Agent/Agent'
import Reports from './components/Reports/Reports'
import Logout from './components/Logout/Logout'
import { Dashboard } from '@mui/icons-material'
<<<<<<< HEAD
import UserSuperMaster from './components/UserSuperMaster/UserSuperMaster'



=======
import TransactionReport from './components/TransactionReport/TransactionReport'
import TurnoverReport from './components/TurnoverReport/TurnoverReport'
import WinlossReport from './components/WinLossReport/WinLossReport'
>>>>>>> 482895fd7a825f82e43e4307ec1ccd8dd7091ffb

const RoutesPages = () => {
  return (
    <div>
    <Routes>
          <Route exact path="/" element={<MainDahboard/>} />
          <Route exact path="/maindashboard" element={<MainDahboard/>} />
          <Route path="/supermaster" element={<SuperMaster />} />
          <Route path="/usersupermaster" element={<UserSuperMaster />} />
          <Route path="/master" element={<Master />} />
          <Route path="/agent" element={<Agent />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/transactionreport" element={<TransactionReport/>} />
          <Route path="/turnoverreport" element={<TurnoverReport />} />
          <Route path="/winlossreport" element={<WinlossReport/>} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
    </div>
  )
}

export default RoutesPages