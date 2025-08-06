import { useState } from 'react'
import './App.css'
import "./css/Navbar.css"
import "./css/Home_Page.css"
import Navbar from './Components/Navbar.jsx';
import Home_Page from './Components/Home_Page.jsx';
import BottomToTop from './Components/BottomToTop.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
      <Router>
        <BottomToTop />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home_Page />} />
        </Routes>
      </Router>
  )
}

export default App
