import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav style={{ padding: '10px', background: '#eee' }}>
      <Link to="/">Subastas</Link> |{" "}
      <Link to="/register">Registro</Link> |{" "}
      <Link to="/login">Login</Link> |{" "}
      <Link to="/admin">Admin</Link>
    </nav>
  )
}
