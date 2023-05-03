import { Link } from "react-router-dom";
import './Navbar.css'
function Navbar() {

    return (
      <>
        <nav className='navbar'>
              <ul className='navbar-list'>
                   <Link to="/"> Accueil</Link>
                   <Link to="/tickets">Gestion des tickets</Link>    
              </ul>
        </nav>
      </>
    )
  }

  export default Navbar