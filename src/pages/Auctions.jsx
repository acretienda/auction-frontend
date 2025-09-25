import React, { useEffect, useState } from 'react'
import AuctionCard from '../components/AuctionCard'

export default function Auctions() {
  const [auctions, setAuctions] = useState([])

  useEffect(() => {
    fetch("https://square-subastas.onrender.com/auctions/")
      .then(res => res.json())
      .then(data => setAuctions(data))
      .catch(err => console.error("Error fetching auctions:", err))
  }, [])

  return (
    <div>
      <h1>Active Auctions</h1>
      {auctions.length === 0 ? (
        <p>No auctions available.</p>
      ) : (
        auctions.map((a, idx) => (
          <AuctionCard key={idx} title={a.title || "Untitled"} price={a.current_price || a.starting_price || 0} />
        ))
      )}
    </div>
  )
}