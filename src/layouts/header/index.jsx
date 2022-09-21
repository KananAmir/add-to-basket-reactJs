import React from 'react'
import { Link } from "react-router-dom";
import './index.scss';

const Header = () => {
  return (
    <div id="header">
      <div className='container mx-auto px-4 header'>
        <Link to='/'>
          <h1 className='text-4xl font-extrabold tracking-widest'>Products</h1>
        </Link>
        <nav className='text-xl font-extrabold tracking-widest'>
          <Link to="/">Home</Link>
          <Link to='product-list'>Products List</Link>
          <Link to='added-to-card'>Products in Basket</Link>
        </nav>
      </div>
    </div>
  )
}

export default Header