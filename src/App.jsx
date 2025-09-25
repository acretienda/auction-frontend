import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Auctions from './pages/Auctions'
import Admin from './pages/Admin'

export default function App() {
  return (
    <div>
      <nav style={{padding: '1rem', background: '#eee'}}>
        <Link to='/'>Home</Link> |{" "}
        <Link to='/auctions'>Auctions</Link> |{" "}
        <Link to='/admin'>Admin</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auctions' element={<Auctions />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </div>
  )
}