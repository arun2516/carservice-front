import React, {useState,useEffect}from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import {Card, CardContent } from '@mui/material';
import { Button,Table, TableContainer, TableHead, TableRow, TableCell, TableBody,Paper} from '@mui/material'

function Adminpage() {
    const history= useNavigate();
    const key = localStorage.getItem("admintoken")

    const [click, setClick] = useState(false);

    const[batcount,setbatcount]=useState([]);
    const[servcount,setservcount]=useState([]);
    const[checkcount,setcheckcount]=useState([]);

    const[user,setuser]=useState([])
  
    const[loginclick,setloginclick] = useState(false);
    
    const handleClick = () => setClick(!click);
  
    const closeMobileMenu=()=>setClick(false);
  
    const closeMobileMenu1=()=>{
      setClick(false);
      localStorage.removeItem('admintoken');
    }

    const handlelogin1=()=>{
        localStorage.removeItem('admintoken');
        history("/adminlogin")
    }

    var batdata = []

    useEffect(async()=>{
        var response = await axios.get("https://nodejs--reset-password.herokuapp.com/client/data");
        setuser(response.data); 
        
    },[])

  return(
      <div>
           <div style={{backgroundColor:"red"}}>
      <nav className='navbar'>
        <Link to='/adminpage' className='navbar-logo' onClick={closeMobileMenu}>
          Buckle-Up Admin
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/adminpage' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/battery' className='nav-links' onClick={closeMobileMenu}> Enquiry </Link>
            
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
              to='/adminlogin'
              className='nav-links-mobile'
              onClick={closeMobileMenu1}>Log Out</Link>: 
           
          </li>
        </ul>
        <button className='btn' onClick={handlelogin1} >Log Out</button>
    
      </nav>
      </div>
      <div className='rectangle2'>  </div>



      <div className='rectangle2'>  </div>
      <div style={{marginLeft:"10%"}}>
          <h1>Registered Users</h1>
      </div>
      <div style={{marginTop:"5%"}}>
          <Paper sx={{ width: '80%', overflow: 'hidden', marginLeft:"10%" , border:"2px solid black"}}>
            <TableContainer sx={{ maxHeight: 500 }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell align="center" style={{fontWeight:"bolder"}}>Name</TableCell>
                  <TableCell align="center" style={{fontWeight:"bolder"}}>Mobile Number</TableCell>
                  <TableCell align="center" style={{fontWeight:"bolder"}}>Email</TableCell>
                  <TableCell align='center' style={{fontWeight:"bolder"}}>Promotion-Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
               {user.map(us=>{
                 return(
                   <TableRow hover key={us._id}>
                     <TableCell  align="center">{us.name}</TableCell>
                     <TableCell align="center">{us.mobileno}</TableCell>
                     <TableCell align="center">{us.email}</TableCell>
                     <TableCell align='center'><Button variant="outlined">Send Promotion Email</Button></TableCell>
                   </TableRow>
                 )
               })}
              </TableBody>
            </Table>
            </TableContainer>
            </Paper>
            </div>
      </div>
  )
}

export default Adminpage;
