import './App.css';
import Home from './component/Home';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Login from "./component/Login"
import Services from './component/Services';
import Battery from './component/Battery';
import Partner from './component/Partner';

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/service" element={<Services/>}/>
      <Route path="/battery" element={<Battery/>}/>
      <Route path="/partner" element={<Partner/>}/>
      <Route path ="/login" element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
