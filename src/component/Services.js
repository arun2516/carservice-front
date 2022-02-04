import "./Navbar/Button.css"
import React, {  useState } from 'react';
import Footer from './Footer'
import { Link } from 'react-router-dom';
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


function Services() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
            <Box component="form">
              <TextField margin="normal" required id="regyear" label="Car Register Year" name="regyear" autoComplete="regyear" autoFocus sx={{ml:18}} style={{width:"50%"}}/>
              <TextField margin="normal" required sx={{ml:18}} style={{width:"50%"}} id="odo" label="Approx. ODO Reading" name="odo" autoComplete="odo" autoFocus/>
              <TextField margin="normal" required id="carreg" label="Car Registration Number" name="carreg" autoComplete="carreg" autoFocus sx={{ml:18}} style={{width:"50%"}}/>
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
            <Box component="form">
              <TextField margin="normal" required id="regyear" label="Car Register Year" name="regyear" autoComplete="regyear" autoFocus sx={{ml:18}} style={{width:"50%"}}/>
              <TextField margin="normal" required sx={{ml:18}} style={{width:"50%"}} id="odo" label="Approx. ODO Reading" name="odo" autoComplete="odo" autoFocus/>
              <TextField margin="normal" required id="carreg" label="Car Registration Number" name="carreg" autoComplete="carreg" autoFocus sx={{ml:18}} style={{width:"50%"}}/>
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

  </div>
  );
}

export default Services;
