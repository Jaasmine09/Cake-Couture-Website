import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/cake logo 4.png'
import carticon from '../Assets/cart logo.jpg'

export const Navbar = () => {
 
  const [menu, setMenu] = useState("home");

  return (
   <div className = 'navbar'>
    <div className='nav-logo'>
  <img src= {logo} alt="error" height={80}  width={190}/>
    </div>
    <ul className="nav-menu">
      <li onClick={()=>{setMenu("home")}}>Home{menu==="home"?<hr />:<></>}</li>
      <li onClick={()=>{setMenu("birthday")}}>Birthday{menu==="birthday"?<hr />:<></>}</li>
      <li onClick={()=>{setMenu("Anniversary")}}>Anniversary{menu==="Anniversary"?<hr />:<></>}</li>
      <li onClick={()=>{setMenu("combos")}}>Combos{menu==="combos"?<hr />:<></>}</li>
    </ul>
    <div className="nav-login-cart">
     <button>Login</button>&nbsp;
<img src={carticon} alt="" height={30}  width={30} /> 
<div className="nav-cart-count">0</div>
   </div>
   </div>
  
  )
}
