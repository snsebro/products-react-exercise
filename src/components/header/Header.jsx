import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

export default function Header() {
  return (
      <div className='nav'>
        <Link to='/' className='logo'>ProductsApp</Link>
      </div>
      
  
  )
}
