import React from 'react'
import Sidebar from './components/Sidebar'
import Login from './pages/Login'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TimeZone from './components/TimeZone'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/home/*' element={<Home />}>
            <Route path='time-zone' element={<TimeZone />} />
          </Route>
          <Route path='/sidebar' element={<Sidebar />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App