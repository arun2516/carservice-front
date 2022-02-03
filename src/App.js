import './App.css';
import Home from './component/Home';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Login from './component/Navbar/Login';
import Services from './component/Services';
import Battery from './component/Battery';

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/service" element={<Services/>}/>
      <Route path="/battery" element={<Battery/>}/>
      </Routes>
    </Router>
  );
}

export default App;
