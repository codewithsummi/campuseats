import React from 'react'

const Cart = () => {
  return (
    <div className='m-3'>
      <h2> Cart</h2>
      <p> Paneer Roll x 1 - ₹90 <button className='btn btn-primary'>Remove</button></p>

      <p className='fw-bolder'> Total : ₹90</p>
      <p>
        <button className='btn btn-primary'>Clear Cart</button>
      </p>
    </div>
  )
}

export default Cart