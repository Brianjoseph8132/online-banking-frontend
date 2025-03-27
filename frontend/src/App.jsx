import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Transaction from './pages/Transaction'
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import About from './pages/About'
import { UserProvider } from './context/UserContext'
import { AccountProvider } from './context/AccountContext'
import Create from './pages/Create'

function App() {

  return (
    <BrowserRouter>
      <UserProvider>
        <AccountProvider>
          <Routes>
            <Route>
              <Route  path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='dashboard' element={<Dashboard/>}/>
                <Route path='transaction' element={<Transaction/>}/>
                <Route path='signin' element={<Signin/>}/>
                <Route path='signup' element={<Signup/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='create' element={<Create/>}/>
              
              </Route>
            </Route>
          </Routes>
        </AccountProvider>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App
