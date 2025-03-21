import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import History from './pages/History'
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import About from './pages/About'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route  path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='dashboard' element={<Dashboard/>}/>
            <Route path='history' element={<History/>}/>
            <Route path='signin' element={<Signin/>}/>
            <Route path='signup' element={<Signup/>}/>
            <Route path='about' element={<About/>}/>
          
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
