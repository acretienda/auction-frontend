import { useState } from 'react'

export default function Admin() {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Creando subasta: ${title} por ${price}€`)
  }

  return (
    <div>
      <h2>Panel Admin</h2>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Título producto" />
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Precio inicial" />
        <button type="submit">Crear Subasta</button>
      </form>
    </div>
  )
}
