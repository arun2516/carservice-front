import React, {useState}from 'react';
import { Link } from 'react-router-dom';
import {Box,Typography,TextField,Button} from "@mui/material"

function Partner() {
    const key = 3;
  
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
  return(
  <div>
      <div className='home-image4'>
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
          <li className='nav-item'>
            <Link to='/battery' className='nav-links' onClick={closeMobileMenu}> Battery </Link>
            
          </li>

          <li className='nav-item'>
            <Link to='/service' className='nav-links' onClick={closeMobileMenu}>
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
          <li>
            <Link
              to='/login'
              className='nav-links-mobile'
              onClick={closeMobileMenu}>Log In</Link>
           
          </li>
        </ul>
        <Link to='/'>
          {key? <button className='btn' onClick={handlelogin} >Log Out</button>:<button className='btn' onClick={handlelogin} >Log In</button>}
      
      
       </Link>
     
   
      </nav>
      </div>
      <div className='rectangle2'>  </div>
      <h1 style={{marginLeft:"10%"}}> Become a Partner</h1>
      <div style={{marginLeft:"30%", marginBottom:"10%"}}>
      <Box component="form" className="batteryform" style={{backgroundColor:"whitesmoke", width:"50%", borderRadius:"2%",marginTop:"5%", padding:"5%"}}>
        <Typography style={{textAlign:"center"}}><h2>Get Onboard</h2></Typography>
        <TextField 
                margin="normal"
                required
              
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
                sx={{ml:10}}
                style={{width:"70%"}}
              />
        <TextField
                margin="normal"
                required
                sx={{ml:10}}
                style={{width:"70%"}}
                id="mobileno"
                label="Mobile-No"
                name="mobileno"
                autoComplete="mobileno"
                autoFocus
              />
        <TextField
                margin="normal"
                required
                sx={{ml:10}}
                style={{width:"70%"}}
                id="address"
                label="Address"
                name="address"
                autoComplete="address"
                autoFocus
              />
               <Button
                type="submit"
                style={{width:"70%",backgroundColor:"red"}}
                variant="contained"
                sx={{ mt: 3, mb: 2,ml:10 }}
               
              >
                Get Quote
              </Button>
        </Box>
      </div>
      <div className='rectangle2'>  </div>
  </div>
  )
}

export default Partner;
