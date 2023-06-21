import React from 'react'
import { Routes, Route } from 'react-router'
import MainDahboard from './components/MainDashboard/MainDahboard'
import SuperMaster from './components/SuperMaster/SuperMaster'
import Master from './components/Master/Master'
import Agent from './components/Agent/Agent'
import Reports from './components/Reports/Reports'
import Logout from './components/Logout/Logout'
import { Dashboard } from '@mui/icons-material'
import UserSuperMaster from './components/UserSuperMaster/UserSuperMaster'
import TransactionReport from './components/TransactionReport/TransactionReport'
import TurnoverReport from './components/TurnoverReport/TurnoverReport'
import WinlossReport from './components/WinLossReport/WinLossReport'

const RoutesPages = () => {
  return (
    <div>
    <Routes>
          <Route exact path="/" element={<MainDahboard/>} />
          <Route exact path="/maindashboard" element={<MainDahboard/>} />
          <Route exact path="/dashboard" element={<Dashboard/>} />
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