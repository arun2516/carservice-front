import "./Navbar/Button.css"
import React, {  useState } from 'react';
import Footer from './Footer'
import { Link , useNavigate} from 'react-router-dom';
import "./Navbar/Navbar.css"
import { Box} from "@mui/system";
import {Button, Card, CardContent}from "@mui/material";
import 'react-vertical-timeline-component/style.min.css';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import axios from "axios";
import Notification from "./Notification";


function Copyright(props) {
 
  return (
    <p style={{color:"white",marginTop:"20px"}} align="center" {...props}>
      {'Copyright © '}
      <Link to="/login" style={{textDecoration:"none", color:"red"}}>
          Buckle-Up
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </p>
  );
}


function Services(props) {
  const{name}=props
  const[notify,setnotify] = useState({isOpen:false,message:'',type:''})

  const history = useNavigate();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const key = localStorage.getItem("token");
  
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

  const handlesubmit1=async(e)=>{
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    try{
      var response = await axios.post("http://localhost:3001/general/enquiry",{
        carregno:data.get("carregno"),
        carregyr:data.get("carregyr"),
        odo:data.get("odo"),
        name:data.get("name"),
        email:data.get("email"),
        address:data.get("address"),
        landmark:data.get("landmark")

      })

      if(response.data){
        setnotify({isOpen:true,message:"Your Enquiry Is Submitted Successfully..Our Team will Contact You.. Thankyou",type:"success"})
      }

    }catch(err){
      setnotify({isOpen:true,message:"Error in Creating Enquiry.. PLease Check All The Field",type:"error"})
    }
  }

  const handlesubmit2 =async(e)=>{
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    try{
      var response = await axios.post("http://localhost:3001/general/service",{
        carregno:data.get("carregno"),
        carregyr:data.get("carregyr"),
        odo:data.get("odo"),
        name:data.get("name"),
        email:data.get("email"),
        address:data.get("address"),
        landmark:data.get("landmark")

      })

      if(response.data){
        setnotify({isOpen:true,message:"Your service Enquiry Is Submitted Successfully..Our Team will sontact You.. Thankyou",type:"success"})
      }

    }catch(err){
      setnotify({isOpen:true,message:"Error in Creating service Enquiry.. PLease Check All The Field",type:"error"})
    }
  }


  return (
  <div>
    <div className='home-image3'>
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
          <button className='btn'  >{name}</button>
          <div className='dropdown-content' >
            <Link to="/profile" className='nav-links'>Profile</Link>
            <Link to="/" className='nav-links' onClick={handlelogin1}>Log-Out</Link>
          </div>
          </div>
          :<button className='btn' onClick={handlelogin} >Log In</button>}
      </nav>
      </div>
      <div className='rectangle2'>  </div>
      <div style={{marginLeft:"10%"}}>
        <h1>Buckle-Up Service Packages</h1>
      </div>
      <div style={{display:"grid", gridTemplateColumns:"40% 40%", gridGap:"7%", marginLeft:"10%",marginTop:"5%", marginBottom:"5%"}}>
        <Card  style={{backgroundColor:"whitesmoke",borderRadius:"2%", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
          <CardContent>
            <h1 style={{color:"red"}}>General Checkup</h1>
            <h2>Starts from Rs:1499</h2>
          </CardContent>
          <CardContent>
            <h2>Top-Up</h2>
            <h3 style={{fontWeight:"lighter"}}>Engine Oil, Coolant, Break-Oil</h3>
            <h2>Body & UnderBody Wash</h2>
            <h3 style={{fontWeight:"lighter"}}>Water Wash</h3>
            <h2>Labour Charges</h2>
            <h3 style={{fontWeight:"lighter"}}>General Checkup and Washing</h3>
            <h2>Cleaning</h2>
            <h3 style={{fontWeight:"lighter"}}>Ac filter,Ac cabin filter</h3>
            <h2>Interior Vaccuming</h2>
            <h3 style={{fontWeight:"lighter"}}>Seat mat dash cleaning</h3>
            <h2>Pickup & drop</h2>
            <h3 style={{fontWeight:"lighter"}}>All at comfort of your home</h3>
            <h2>Brake over haul & Cleaning</h2>
            <h3 style={{fontWeight:"lighter"}}>brake pad, brake shoe</h3>
            <h2>Under body inspection</h2>
            <h3 style={{fontWeight:"lighter"}}>Check for any leakage</h3>
          </CardContent>
          <CardContent>
            <Button style={{backgroundColor:"red", color:"white"}} onClick={handleClickOpen}>Book Service</Button>
            <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
            <DialogTitle id="responsive-dialog-title" style={{textAlign:"center", color:"red", fontSize:"25px"}}>{"Book Service"}</DialogTitle>
            <DialogContent style={{borderRadius:"4%"}}>
            <Box component="form" onSubmit={handlesubmit1}>
              <TextField margin="normal" required id="carregyr" label="Car Register Year" name="carregyr" autoComplete="carregyr" autoFocus sx={{ml:18}} style={{width:"50%"}}/>
              <TextField margin="normal" required sx={{ml:18}} style={{width:"50%"}} id="odo" label="Approx. ODO Reading" name="odo" autoComplete="odo" autoFocus/>
              <TextField margin="normal" required id="carregno" label="Car Registration Number" name="carregno" autoComplete="carregno" autoFocus sx={{ml:18}} style={{width:"50%"}}/>
              <TextField margin="normal" required sx={{ml:18}} style={{width:"50%"}} id="name" label="Name" name="name" autoComplete="name" autoFocus/>
              <TextField margin="normal" required id="email" label="Email" name="email" autoComplete="email" autoFocus sx={{ml:18}} style={{width:"50%"}}/>
              <TextField margin="normal" required sx={{ml:18}} style={{width:"50%"}} id="address" label="Address" name="address" autoComplete="mobileno" autoFocus/>
              <TextField margin="normal" required id="landmark" label="Landmark" name="landmark" autoComplete="landmark" autoFocus sx={{ml:18}} style={{width:"50%"}}/>
              <Button type="submit" style={{width:"50%", backgroundColor:"red"}} variant="contained" sx={{ mt: 3, mb: 2,ml:18 }}>Book The Service</Button>
           </Box>
            </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
        <Card  style={{backgroundColor:"whitesmoke",borderRadius:"2%", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
          <CardContent>
            <h1 style={{color:"red"}}>General Service</h1>
            <h2>Starts from Rs:4499</h2>
          </CardContent>
          <CardContent>
            <h2>Replacement</h2>
            <h3 style={{fontWeight:"lighter"}}>Engine Oil, Oil Filter, Air Filter, Washer Fluid</h3>
            <h2>Inspections</h2>
            <h3 style={{fontWeight:"lighter"}}>Front & Rear Suspension for any leakages </h3>
            <h2>Scanning</h2>
            <h3 style={{fontWeight:"lighter"}}>Electronic Module Scanning</h3>
            <h2>Under Body Inspection</h2>
            <h3 style={{fontWeight:"lighter"}}>Check for any leakage</h3>
            <h2>Rear Electrical Inspection</h2>
            <h3 style={{fontWeight:"lighter"}}>Check Brake,Reverse,Indicators</h3>
            <h2>Top-Up</h2>
            <h3 style={{fontWeight:"lighter"}}>Coolant, Brake Fluid</h3>
            <h2>Spark Plug Check</h2>
            <h3 style={{fontWeight:"lighter"}}>Spark Plug Check</h3>
            <h2>Body & Undebody Wash</h2>
            <h3 style={{fontWeight:"lighter"}}>Water wash</h3>
          </CardContent>
          <CardContent>
          <Button style={{backgroundColor:"red", color:"white"}} onClick={handleClickOpen}>Book Service</Button>
            <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
            <DialogTitle id="responsive-dialog-title" style={{textAlign:"center", color:"red", fontSize:"25px"}}>{"Book Service"}</DialogTitle>
            <DialogContent style={{borderRadius:"4%"}}>
            <Box component="form" onSubmit={handlesubmit2}>
              <TextField margin="normal" required id="carregyr" label="Car Register Year" name="carregyr" autoComplete="carregyr" autoFocus sx={{ml:18}} style={{width:"50%"}}/>
              <TextField margin="normal" required sx={{ml:18}} style={{width:"50%"}} id="odo" label="Approx. ODO Reading" name="odo" autoComplete="odo" autoFocus/>
              <TextField margin="normal" required id="carregno" label="Car Registration Number" name="carregno" autoComplete="carregno" autoFocus sx={{ml:18}} style={{width:"50%"}}/>
              <TextField margin="normal" required sx={{ml:18}} style={{width:"50%"}} id="name" label="Name" name="name" autoComplete="name" autoFocus/>
              <TextField margin="normal" required id="email" label="Email" name="email" autoComplete="email" autoFocus sx={{ml:18}} style={{width:"50%"}}/>
              <TextField margin="normal" required sx={{ml:18}} style={{width:"50%"}} id="address" label="Address" name="address" autoComplete="mobileno" autoFocus/>
              <TextField margin="normal" required id="landmark" label="Landmark" name="landmark" autoComplete="landmark" autoFocus sx={{ml:18}} style={{width:"50%"}}/>
              <Button type="submit" style={{width:"50%", backgroundColor:"red"}} variant="contained" sx={{ mt: 3, mb: 2,ml:18 }}>Book The Service</Button>
           </Box>
            </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      </div>
      <div>
    <Footer style={{position:'relative'}} >
            <Footer.Wrapper>
                <Footer.Row>
                <Footer.Column>
                    <Footer.Title>About Us</Footer.Title>
                    <Footer.Link href="#">Story</Footer.Link>
                    <Footer.Link href="#">Clients</Footer.Link>
                    <Footer.Link href="#">Testimonials</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Services</Footer.Title>
                    <Footer.Link href="/">Battery Replacement</Footer.Link>
                    <Footer.Link href="#">Tyre Replacement</Footer.Link>
                    <Footer.Link href="#">General Service</Footer.Link>
                    <Footer.Link href="#">Car Detailing</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Contact Us</Footer.Title>
                    <Footer.Link href="#">Madurai</Footer.Link>
                    <Footer.Link href="#">Trichy</Footer.Link>
                    <Footer.Link href="#">Dindigul</Footer.Link>
                    <Footer.Link href="#">Karur</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="#"><i className="fab fa-facebook" style={{marginRight:"5px"}}/>Facebook</Footer.Link>
                    <Footer.Link href="#"><i className="fab fa-instagram" style={{marginRight:"5px"}}/>Instagram</Footer.Link>
                    <Footer.Link href="#"><i className="fab fa-youtube" style={{marginRight:"5px"}}/>Youtube</Footer.Link>
                    <Footer.Link href="#"><i className="fab fa-twitter" style={{marginRight:"5px"}}/>Twitter</Footer.Link>
                </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
            <Copyright sx={{ mt: 5 }} />
        </Footer>
    </div>
    <Notification notify={notify} setnotify={setnotify}/>
  </div>
  );
}

export default Services;
