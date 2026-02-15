import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart,clearCart } from '../store/cartSlice'
const Cart = () => {
  const dispatch=useDispatch();
  const { cartItems}=useSelector(state=> state.cart)
  const total=cartItems.reduce((sum,item)=> sum+item.price*item.quantity,0)
  return (
    <div className='m-3'>
      <h2> Cart</h2>
      {cartItems.map((item)=>
       <p key={item.id}> {item.name} x {item.quantity} - ₹{item.price*item.quantity} <button className='btn btn-primary' onClick={()=> dispatch(removeFromCart(item.id))}>Remove</button></p>

      )}
     
      <p className='fw-bolder'> Total : ₹{total}</p>
      <p>
        <button className='btn btn-primary' onClick={()=> dispatch(clearCart())}>Clear Cart</button>
      </p>
    </div>
  )
}

export default Cart