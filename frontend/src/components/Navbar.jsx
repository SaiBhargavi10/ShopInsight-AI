import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <Link to="/" className="logo">
          ShopInsight AI
        </Link>

        <div className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>

          <Link to="/products" className="nav-link">
            Products
          </Link>

          <Link to="/login" className="login-button">
            Login
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;