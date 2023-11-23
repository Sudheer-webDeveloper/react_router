import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
         <Link to="/" style={{marginRight:"10px", marginLeft:"10px"}}>General</Link>
        <Link to="/home" style={{marginRight:"10px"}}>Home</Link>
        <Link to="/about" style={{marginRight:"10px"}}>About</Link>
        <Link to="/container" style={{marginRight:"10px"}}>Container</Link>
        <Link to="/host" style={{marginRight:"10px"}}>Host</Link>
    </header>
  )
}

export default Header
