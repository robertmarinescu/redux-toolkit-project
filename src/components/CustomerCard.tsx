import React from 'react'

interface CustomerCardTypes {
  name: string
}

function CustomerCard({ name }: CustomerCardTypes) {
  return (
    <div className='customer-food-card-container'>
      <p>{name}</p>
      <div className='customer-foods-container'>
        <div className='customer-food-container'>
        </div>
        <div className='customer-food-input-container'>
          <input />
          <button>Add</button>
        </div>
      </div>
    </div>
  )
}

export default CustomerCard
