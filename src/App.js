import './App.css';
import Home from './component/Home';
import {useState} from 'react';
import {BrowserRouter as Router, Routes,Route,Navigate} from "react-router-dom"

import Login from "./component/Login"
import Services from './component/Services';
import Battery from './component/Battery';
import Partner from './component/Partner';
import Profile from './component/Profile';

function App() {
  const key = localStorage.getItem("token");
  const[name,setname] = useState("")
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Home name={name} setname={setname}/>}/>
      <Route path="/service" element={<Services name={name} />}/>
      <Route path="/battery" element={<Battery name={name} />}/>
      <Route path="/partner" element={<Partner name={name}/>}/>
      <Route path ="/login" element={<Login/>}/>
      <Route path="/profile" element={(key?<Profile name={name} />:<Navigate replace to="/"/>)}/>
      </Routes>
    </Router>
  );
}

export default App;
