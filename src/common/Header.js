import React from 'react'
import { Link } from 'react-router-dom'
import TopBar from './TopBar'

export default function Header() {
  return (
    <div className='container-fluid fixed-top'>
        <TopBar/>
        <div className='container px-0'>
            <nav className='navbar navbar-light bg-white navbar-expand-xl'>
                <Link to href="/" className='navbar-brand'>
                    <h1 className='text-success display-6'>Fruitables</h1>
                </Link>
                <button type='btn' className='navbar-toggler py-2 px-3'>
                    <span className='fa fa-bars text-primary'></span>
                </button>
                <div className='collapse navbar-collapse bg-white '>
                    <div className='navbar-nav mx-auto '>
                        <Link to="/" className='nav-item nav-link active'>Home</Link>
                        <Link to="/shop" className='nav-item nav-link'>Shop</Link>
                        <Link to="/shop-detail" className='nav-item nav-link'>Shop Detail</Link>
                        <div className='nav-item dropdown'>
                            <Link to="category" className='nav-item dropdown-toggle' data-bs-toggle="dropdown">Category</Link>
                            <div></div>
                        </div>
                        
                        <Link to="" className='nav-item nav-link'>Contact</Link>
                    </div>
                </div>
            </nav>
        </div>
    </div>
  )
}