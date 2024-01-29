import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Components/Login'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Home from './Components/Home'
import Transactions from './Components/Transactions'
import History from './Components/History'
import Start from './Components/Start'
import PrivateRoute from './Components/PrivateRoute'
import SignUp from './Components/SignUp'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Start />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>


        <Route path='/dashboard' element={
          <PrivateRoute >
            <Dashboard />
          </PrivateRoute>
        }>
          <Route path='' element={<Home />}></Route>
          <Route path='/dashboard/transactions' element={<Transactions />}></Route>
          <Route path='/dashboard/history' element={<History />}></Route>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
