import React from 'react'
import './App.css'
function Shop() {
  return (
    <div>
    <h1 className='title'>Welcome to TShop</h1>
    <div className='item'>
        <p>Dell Inspiron Laptop</p>
        <p>Avaliable: {this.state.numOfLaptops}</p>
        <button onClick={this.buyLaptop}></button>
    </div>
  </div>
  )
}

export default Shop