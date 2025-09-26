import React, { useState, useEffect } from 'react'

export default function App() {
  const [auctions, setAuctions] = useState([])

  useEffect(() => {
    fetch('https://square-subastas.onrender.com/auctions')
      .then(res => res.json())
      .then(data => setAuctions(data))
      .catch(err => console.error('Error:', err))
  }, [])

  return (
    <div style={{ padding: 20 }}>
      <h1>Subastas Online</h1>
      {auctions.length === 0 ? (
        <p>No hay subastas activas.</p>
      ) : (
        <ul>
          {auctions.map(a => (
            <li key={a.id}>
              {a.title} - {a.current_price}€
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
