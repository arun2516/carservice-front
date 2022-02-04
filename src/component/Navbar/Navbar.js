import './Button.css';
import React, {  useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"






function Navbar() {

 
  const key = true;
  
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
    </div>
  );
}

export default Navbar;