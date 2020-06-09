import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

export default function Header() {
  window.onscroll = function(){stickyNav()}
  function stickyNav (e) {
    let sticky = document.querySelector('.nav').offsetTop
    if (window.pageYOffset >= sticky) {
      document.querySelector('.nav').classList.add('sticky')
    } else {
      document.querySelector('.nav').classList.remove('sticky')
    }
  }
  return (
      <div className='nav'>
        <Link to='/' className='logo'>ProductsApp</Link>
      </div>
      
  
  )
}
