import { useEffect} from 'react'
import axios from 'axios'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import { Signup } from './components/signup'
import { Signin } from './components/signin'
import { Dashboard } from './components/dasboard'
import { SendMoney } from './components/send'
import { SuccessMessage } from './components/success'
import { FailMessage } from './components/fail'
import { TransferSuccess } from './components/Transaction'
import { TransferFailed } from './components/failTransaction'
import { Landing } from './components/Home'
import './App.css'


function App() {
    

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/signin' element={<Signin/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/send' element={<SendMoney/>}></Route>
      <Route path='/success' element={<SuccessMessage/>}></Route>
      <Route path='/fail' element={<FailMessage/>}></Route>
      <Route path='/transfer' element={<TransferSuccess/>}></Route>
      <Route path='/failtransfer' element={<TransferFailed/>}></Route>
      <Route path='/' element={<Landing/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
