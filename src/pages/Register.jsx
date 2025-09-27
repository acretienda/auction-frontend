import { useState } from 'react'

export default function Register() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    alert(`Registrando: ${username}`)
  }

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Usuario" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" />
        <button type="submit">Registrar</button>
      </form>
    </div>
  )
}
