import React from 'react'

const Filter = () => {
  return (
    <div className="btn-group m-3" role="group" aria-label="Basic example">
      <button type="button" className="btn btn-primary">All</button>
      <button type="button" className="btn btn-primary">Snacks</button>
      <button type="button" className="btn btn-primary">Meals</button>
      <button type="button" className="btn btn-primary">Beverages</button>
    </div>
  )
}

export default Filter