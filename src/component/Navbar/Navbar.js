import './Button.css';
import React, {  useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"
import "../../App.css"
import {useNavigate} from 'react-router-dom'
import {Button} from "@mui/material"
import axios from 'axios';






function Navbar(props) {
var email = localStorage.getItem("email")
const {name,setname}=props
  useEffect(async()=>{
var response = await axios.get("http://localhost:3001/client/data");
response.data.filter(user=>{
  if(user.email == email){
    setname(user.name)
  }
})
  },[])

 

 console.log(name)

 const history = useNavigate();
  const key = localStorage.getItem('token');

  const [click, setClick] = useState(false);
  
  const[loginclick,setloginclick] = useState(false);
  
  const handleClick = () => setClick(!click);

  const closeMobileMenu=()=>setClick(false);

  const closeMobileMenu1=()=>{
    setClick(false);
    localStorage.removeItem('token');
    localStorage.removeItem('email')
    window.location.reload()
  }
  
  
  const closeMobileMenu2=()=>{
    setClick(false);
    history('/login')
  }


  const handlelogin=()=>{
    history('/login')
  }

  const handlelogin1=()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('email')
    window.location.reload()
  }
 
  return (
    <div>
    <div className='home-image'>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          Buckle-Up
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='nav-item'
          >
            <Link
              to='/battery'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Battery
            </Link>
            
          </li>

          <li className='nav-item'>
            <Link
              to='/service'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Services
            </Link>
          </li>
         
          <li className='nav-item'>
            <Link
              to='/partner'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Become a partner
            </Link>
          </li>
         {key?
          <li className='nav-item'>
          <Link
            to='/'
            className='nav-links-mobile'
            onClick={closeMobileMenu}
          >
            profile
          </Link>
        </li>:<></>
         }
          <li>
            {key?
            <Link
              to='/'
              className='nav-links-mobile'
              onClick={closeMobileMenu1}>Log Out</Link>: 
              <Link
              to='/login'
              className='nav-links-mobile'
              onClick={closeMobileMenu2}>Log In</Link>}
          </li>
         
        </ul>
          {key?
          <div className='dropdown'>
          <button className='btn'  >{name}</button>
          <div className='dropdown-content' >
            <Link to="/profile" className='nav-links'>Profile</Link>
            <Link to="/" className='nav-links' onClick={handlelogin1}>Log-Out</Link>
          </div>
          </div>
          :<button className='btn' onClick={handlelogin} >Log In</button>}
      </nav>
    </div>
    </div>
  );
}

export default Navbar;