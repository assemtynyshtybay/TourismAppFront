import "./Navbar.css";
import { useAuth } from "../../hooks/useAuth";
import { LOGIN, PUBLIC, REGISTER, TOURS } from "../../utils/variables";
import logo from "../../assets/images/travel_today_logo.png";
const Navbar = () => {
  const { token } = useAuth();
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Travel Today" />
      </div>
      <nav>
        <ul>
          <li>
            <a href={PUBLIC}>Home</a>
          </li>
          <li>
            <a href={token ? TOURS : LOGIN}>Tours</a>
          </li>
          <li>
            <a href={token ? TOURS : LOGIN}>Profile</a>
          </li>
          <li className="signup">
            <a href={REGISTER}>Sign Up</a>
          </li>
          <li className="signin">
            <a href={LOGIN}>Sign In</a>
          </li>
        </ul>
        <div className="burger-menu">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
