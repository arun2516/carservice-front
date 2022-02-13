import React, {useState,useEffect}from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import {Card, CardContent } from '@mui/material';

function Profile({name}) {
    const email = localStorage.getItem("email");
const[batterydata,setbatterydata]=useState([]);
const[checkup,setcheckup]=useState([]);
const[service,setservice]=useState([]);
    useEffect(async()=>{
        var response = await axios.get("https://nodejs--reset-password.herokuapp.com/client/data");
      response.data.filter(user=>{
          if(user.email == email){
              setbatterydata(user.battery)
              setcheckup(user.checkup)
              setservice(user.service)
          }
      })
    },[])


console.log(batterydata.length)
    
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
  return(
      <div>
            <div style={{backgroundColor:"black"}}>
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
      <h1 style={{marginLeft:"10%"}}>Battery Replacement Enquiry</h1>
      {batterydata.length == 0?
      <div style={{marginLeft:"10%"}}>
      <Card>
          <CardContent>
              <h1 style={{ color:"red"}}>YOU never made any  Battery Replacement Enquiry yet!!</h1>
          </CardContent>
      </Card>
      </div>:
      <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around", marginTop:"5%"}}>
          {batterydata.map((user)=>(
              <Card style={{width:"35%", backgroundColor:"whitesmoke"}}>
                  <CardContent style={{display:"flex",flexDirection:"column",}}>
                      <h2 style={{margin:"2%"}}><span style={{color:"red",textTransform:"uppercase"}}>Car Model</span> :{user.carmodel}</h2>
                      <h2 style={{margin:"2%"}}><span style={{color:"red",textTransform:"uppercase"}}>Mobile No</span>:{user.mobileno}</h2>
                      <h2 style={{margin:"2%"}}><span style={{color:"red",textTransform:"uppercase"}}>Email</span>:{user.email}</h2>
                      <h2 style={{margin:"2%"}}><span style={{color:"red",textTransform:"uppercase"}}>Address</span>:{user.address}</h2>
                  </CardContent>
              </Card>
          ))}
      </div>
    }

<div className='rectangle2'>  </div>
<h1 style={{marginLeft:"10%"}}>General Checkup Enquiry</h1>
{checkup.length == 0?
      <div style={{marginLeft:"10%"}}>
      <Card>
          <CardContent>
              <h1 style={{ color:"red"}}>YOU never made any General Checkup Enquiry yet!!</h1>
          </CardContent>
      </Card>
      </div>:
      <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around", marginTop:"5%"}}>
          {checkup.map((user)=>(
              <Card style={{width:"35%", backgroundColor:"whitesmoke"}}>
                  <CardContent style={{display:"flex",flexDirection:"column",}}>
                      <h2 style={{margin:"2%"}}><span style={{color:"red",textTransform:"uppercase"}}>Car Registration Year</span> :{user.carregyr}</h2>
                      <h2 style={{margin:"2%"}}><span style={{color:"red",textTransform:"uppercase"}}>Email</span>:{user.email}</h2>
                      <h2 style={{margin:"2%"}}><span style={{color:"red",textTransform:"uppercase"}}>Approximate ODO </span>:{user.odo}</h2>
                      <h2 style={{margin:"2%"}}><span style={{color:"red",textTransform:"uppercase"}}>Address</span>:{user.address}</h2>
                      <h2 style={{margin:"2%"}}><span style={{color:"red",textTransform:"uppercase"}}>Car Registration Number</span>:{user.carregno}</h2>
                      <h2 style={{margin:"2%"}}><span style={{color:"red",textTransform:"uppercase"}}>Name</span>:{user.name}</h2>
                      <h2 style={{margin:"2%"}}><span style={{color:"red",textTransform:"uppercase"}}>Landmark</span>:{user.landmark}</h2>
                  </CardContent>
              </Card>
          ))}
      </div>
    }

<div className='rectangle2'>  </div>

<h1 style={{marginLeft:"10%"}}>General Service Enquiry</h1>
{service.length == 0?
      <div style={{marginLeft:"10%"}}>
      <Card>
          <CardContent>
              <h1 style={{ color:"red"}}>YOU never made any General Service Enquiry yet!!</h1>
          </CardContent>
      </Card>
      </div>:
      <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around", marginTop:"5%"}}>
          {service.map((user)=>(
              <Card style={{width:"35%", backgroundColor:"whitesmoke"}}>
                  <CardContent style={{display:"flex",flexDirection:"column",}}>
                      <h2 style={{margin:"2%"}}><span style={{color:"red",textTransform:"uppercase"}}>Car Registration Year</span> :{user.carregyr}</h2>
                      <h2 style={{margin:"2%"}}><span style={{color:"red",textTransform:"uppercase"}}>Email</span>:{user.email}</h2>
                      <h2 style={{margin:"2%"}}><span style={{color:"red",textTransform:"uppercase"}}>Approximate ODO</span>:{user.odo}</h2>
                      <h2 style={{margin:"2%"}}><span style={{color:"red",textTransform:"uppercase"}}>Address</span>:{user.address}</h2>
                      <h2 style={{margin:"2%"}}><span style={{color:"red",textTransform:"uppercase"}}>Car Registration Number</span>:{user.carregno}</h2>
                      <h2 style={{margin:"2%"}}><span style={{color:"red",textTransform:"uppercase"}}>Name</span>:{user.name}</h2>
                      <h2 style={{margin:"2%"}}><span style={{color:"red",textTransform:"uppercase"}}>Landmark</span>:{user.landmark}</h2>
                  </CardContent>
              </Card>
          ))}
      </div>
    }

</div>
  )
}

export default Profile;
