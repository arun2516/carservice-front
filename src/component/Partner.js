import React, {useState}from 'react';
import { Link,useNavigate } from 'react-router-dom';
import {Box,Typography,TextField,Button} from "@mui/material"
import axios from 'axios';
import Notification from './Notification';

function Partner(props) {
  const{name} = props

  const[notify,setnotify] = useState({isOpen:false,message:'',type:''})

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

  const handlesubmit=async(e)=>{
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    try{
      var response = await axios.post("http://localhost:3001/onboard/enquiry",{
        name:data.get("name"),
        mobileno:data.get("mobileno"),
        address:data.get("address")
      })

      if(response){
        setnotify({isOpen:true,message:"Your Enquiry Is Submitted Successfully..Our Team will Contact You.. Thankyou",type:"success"})
      }
    }catch(err){
      setnotify({isOpen:true,message:"Error in Creating Enquiry.. PLease Check All The Field",type:"error"})
    }
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
          <button className='btn'>{name}</button>
          <div className='dropdown-content' >
            <Link to="/profile" className='nav-links'>Profile</Link>
            <Link to="/" className='nav-links' onClick={handlelogin1}>Log-Out</Link>
          </div>
          </div>
          :<button className='btn' onClick={handlelogin} >Log In</button>}
    
      </nav>
      </div>
      <div className='rectangle2'>  </div>
      <h1 style={{marginLeft:"10%"}}> Become a Partner</h1>
      <div style={{marginLeft:"30%", marginBottom:"10%"}}>
      <Box component="form" onSubmit={handlesubmit} className="batteryform" style={{backgroundColor:"whitesmoke", width:"50%", borderRadius:"2%",marginTop:"5%", padding:"5%"}}>
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
      <Notification notify={notify} setnotify={setnotify}/>
  </div>
  )
}

export default Partner;
