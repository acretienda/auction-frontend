import React from 'react'

export default function AuctionCard({ title, price }) {
  return (
    <div style={{border: '1px solid #ccc', padding: '1rem', margin: '0.5rem'}}>
      <h3>{title}</h3>
      <p>Current Price: ${price}</p>
    </div>
  )
}