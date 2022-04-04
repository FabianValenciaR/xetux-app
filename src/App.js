import React from 'react'
import Sidebar from './components/Sidebar'
import Login from './pages/Login'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TimeZone from './components/TimeZone'
import RequireAuth from './components/RequireAuth'
import { Provider } from 'react-redux'
import {store} from './store/store'

const App = () => {

  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/home/*' element={<Home />}>
              <Route path='time-zone' element={<TimeZone />} />
              <Route path='protected' element={<RequireAuth component={<TimeZone />} />} />
            </Route>
            <Route path='/sidebar' element={<Sidebar />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App