import Link from "next/link";
import "../style/navbar.css"
function Header() {
    return (
      <nav className="nav-bar">
      <div className="left-side">
        <h2>Flower</h2>
      </div>
      <div className="center-side">
        <ul>
          <li>
            
              <a href="#">Home</a>
        
          </li>
          <li>
         
              <a href="#about">About</a>
           
          </li>
          <li>
           
            <a href="#flower">Flowers</a>
          
          </li>
          <li>
           
              <a href="#contact">Contact</a>
           
          </li>
        </ul>
        </div>
      <div className="right-side">
        <button>Shop Now</button>
      </div>
    </nav>
  );
}
export default Header