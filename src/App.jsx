import React from 'react'
import Filter from "./components/Filter"
import MenuList from "./components/MenuList"
import Cart from "./components/Cart"
const App = () => {
  return (
    <main className='container m-5'>
      <header>
          <h1 className='text-success'> Campus Eats</h1>
      </header>
      <Filter />
      <MenuList />
      <Cart />
    </main>
  )
}

export default App