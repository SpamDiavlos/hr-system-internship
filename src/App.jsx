import { useState } from 'react'
import './App.css'
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'

import Signup from './pages/signup'
import Register from './pages/register'
import Dashboard from './pages/dashboard'
import Management from './pages/management'
import Vehicle from './pages/vehicle'
import Devices from './pages/devices'
import Uniform from './pages/uniform'
import Employees from './pages/employees'
import Account from './pages/account'
import Onboard from './pages/onboard'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/management" element={<ProtectedRoute><Management /></ProtectedRoute>}>
          <Route index element={<Navigate to="vehicle" replace />} />
          <Route path="vehicle" element={<Vehicle />} />
          <Route path="devices" element={<Devices />} />
          <Route path="uniform" element={<Uniform />} />
        </Route>
        <Route path="/employees" element={<ProtectedRoute><Employees /></ProtectedRoute>} />
        <Route path="/account" element={<ProtectedRoute><Account /></ProtectedRoute>} />
        <Route path="/onboard" element={<ProtectedRoute><Onboard /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App