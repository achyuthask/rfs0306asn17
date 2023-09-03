import "./App.css";
import About from './About';
import Blog from './Blog';
import Contact from './Contact';
import {Routes, Route, Link } from 'react-router-dom';
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";
import Home from "./Home";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
      <div className="switch">
          <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
    
        
      </div>
    </ThemeContext.Provider> 
  );
}

export default App;





function NavBar() {

  return (
    <nav className='navbar'>
    
      <ui>
      <li>
      <Link to="/">Home</Link>
      </li>
     <li>
     <Link to="/about">About</Link>
     </li>
        
      <li>
      <Link to="/blog">Blog</Link>
      </li>
      <li>
      <Link to="/contact">Contact</Link>

      </li>
       
     
        
      

      </ui>
          
     
    </nav>
  );
}
