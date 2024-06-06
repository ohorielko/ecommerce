import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

export default function TopBar() {
  return (
    <>
        <div className='container topbar bg-primary d-none d-lg-block custom-font'>
            <div className='d-flex justify-content-between'>
                <div className='top-info ps-2 fs-5'>
                    <small className = "me-3">
                        <i className='fas fa-map-marker-alt me-2 text-secondary'></i>
                        <Link className='text-white'>Peachtree Street 17, Atlanta</Link>
                    </small>
                    <small className='me-3'>
                        <i className='fas fa-envelope me-2 text-secondary'></i>
                        <Link className='text-white'>grocery@atlanta.com</Link>
                    </small>
                </div>
                <div className='top-link pe-2 fs-5'>
                    <Link href="#" className='text-white'><small className='text-white mx-2'>Privacy Policy</small></Link>
                    <Link href="#" className='text-white'><small className='text-white mx-2'>Terms of Use</small></Link>
                    <Link href="#" className='text-white'><small className='text-white mx-2'>Sales and Refunds</small></Link>
                </div>
            </div>

        </div>
    </>
  );
}