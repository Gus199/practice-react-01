import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div  className='container'>
       <h2>Device UI</h2>
      <ul>
        <li>
        <Link to='/about'>About</Link>  
        </li>
        <li>
        <Link to='/'>Hiome</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header