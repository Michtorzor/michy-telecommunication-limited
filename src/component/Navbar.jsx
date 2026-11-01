import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <Link to='/' className='link'>Home</Link>
        <Link to='/aboutpage' className='link'>About</Link>
        <Link to='/servicespage' className='link'>Services</Link>
        <Link to='/packagespage' className='link'>Packages</Link>
        <Link to='/installationspage' className='link'>Installations</Link>
        <Link to='/contactpage' className='link'>Contact</Link>
    </nav>
  )
}

export default Navbar