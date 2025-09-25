import React, { useState } from 'react'

export default function Admin() {
  const [title, setTitle] = useState("")
  const [startingPrice, setStartingPrice] = useState("")

  const createAuction = async () => {
    try {
      const res = await fetch("https://square-subastas.onrender.com/auctions/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, starting_price: parseFloat(startingPrice) })
      })
      const data = await res.json()
      alert("Auction created: " + JSON.stringify(data))
    } catch (e) {
      alert("Error creating auction: " + e)
    }
  }

  return (
    <div>
      <h1>Admin Panel - Create Auction</h1>
      <input placeholder="Auction title" value={title} onChange={e => setTitle(e.target.value)} />
      <input placeholder="Starting price" type="number" value={startingPrice} onChange={e => setStartingPrice(e.target.value)} />
      <button onClick={createAuction}>Create Auction</button>
    </div>
  )
}