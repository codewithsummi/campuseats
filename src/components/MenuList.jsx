import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchMenu } from '../store/menuSlice';
import { addToCart } from '../store/cartSlice';
const MenuList = () => {
  const dispatch=useDispatch();
  const {items,status,filter}=useSelector((state)=> state.menu);
  useEffect(()=>{
    dispatch(fetchMenu())
  },[dispatch])
  const filteredItems=filter === "All" ?items : items.filter((item)=> item.category === filter)
  if(status === "loading") return <h1> Loading....</h1>
  return (
    <div className='row'>
      {filteredItems.map((item)=> 
         <div className="card col-md-4 m-2" key={item.id} style={{width: '12rem'}}>
  <div className="card-body">
    <h5 className="card-title">{item.name}</h5>
    <p className="card-text"> ₹ {item.price}</p>
    <button className="btn btn-primary" onClick={()=> dispatch(addToCart(item))}>Add to Cart</button>
  </div>
</div>
      )}
      
    </div>
  )
}

export default MenuList