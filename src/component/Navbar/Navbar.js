import './Button.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"
import { Box} from "@mui/system";
import {Button}from "@mui/material"
import TextField from '@mui/material/TextField';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';





function Navbar() {

 
  
  
  const [click, setClick] = useState(false);
  
  const[loginclick,setloginclick] = useState(false);
  
  const handleClick = () => setClick(!click);

  const closeMobileMenu=()=>setClick(false);



  const handlelogin=()=>{
    setloginclick(false)
  }

  const handlelogin1=()=>{
    setloginclick(true)
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
              to='/'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Become a partner
            </Link>
          </li>

          <li className='nav-item'>
            <Link
              to='/'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to='/login'
              className='nav-links-mobile'
              onClick={closeMobileMenu}>Log In</Link>
           
          </li>
        </ul>
        <Link to='/'>
      <button className='btn' onClick={handlelogin} >Log In</button>
      
       </Link>
     
   
      </nav>

      <div className={loginclick? 'login-box1':'login-box'}>
          <div >
              <Button onClick={handlelogin1} ><ArrowForwardIcon style={{fontSize:"50px"}}/></Button>
          </div>
          <div style={{marginTop:"20%"}}>
              <h1 style={{textAlign:"center"}}>Buckle-Up</h1>
      <Box component="form"  >
        <TextField 
                margin="normal"
                required
              
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                sx={{ml:18}}
                style={{width:"50%"}}
              />
        <TextField
                margin="normal"
                required
                sx={{ml:18}}
                style={{width:"50%"}}
                id="mobileno"
                label="Mobile-No"
                name="mobileno"
                autoComplete="mobileno"
                autoFocus
              />
               <Button
                type="submit"
                style={{width:"50%"}}
                variant="contained"
                sx={{ mt: 3, mb: 2,ml:18 }}
               
              >
                Continue
              </Button>
        </Box>
        </div>
      </div>
     
     
      
    </div>
    </div>
  );
}

export default Navbar;