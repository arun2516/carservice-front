import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function Button1() {
  return (
    <Link to='/'>
      <button className='btn'>Log In</button>
      
    </Link>
  );
}