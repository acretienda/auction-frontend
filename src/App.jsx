import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Register from './pages/Register'
import Login from './pages/Login'
import Admin from './pages/Admin'
import Auctions from './pages/Auctions'

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Auctions />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  )
}
