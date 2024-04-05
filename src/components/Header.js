import { useState } from "react";
import { LOGO_URL } from "../utils/contant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  // Login function
  const [btn_login, setbtn_login] = useState("Login");
  const isOnline = useOnlineStatus();

  // Subscribing to the store using selector
  const cartItem = useSelector((store) => store.cart.item);

  // Location useState
  const [location, setLocation] = useState("Delhi");
  const [locationFlag, setLocationFlag] = useState(true);

  // State to manage the visibility of navigation items on small screens
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="header bg-teal-500 flex justify-between items-center p-4 w-screen">
      <div className="logo-container">
        <img className="w-24" src={LOGO_URL} alt="Logo" />
      </div>
      {/* Toggle button for small screens */}
      <button
        className="block md:hidden text-white focus:outline-none"
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        {isNavOpen ? "Close" : "Menu"}
      </button>
      {/* Navigation items */}
      <div className={`nav-items md:flex ${isNavOpen ? 'flex' : 'hidden'}`}>
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 font-roboto text-lg md:text-xl text-white">
          <li className="hover:bg-teal-400 rounded-md p-2">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:bg-teal-400 rounded-md p-2">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:bg-teal-400 rounded-md p-2">
            <Link to="Contact">Contact</Link>
          </li>
          <li className="hover:bg-teal-400 rounded-md p-2">
            <Link to="cart"> Cart ({cartItem.length} item) </Link>
          </li>
          <li className="p-2">
            Online Status: {isOnline ? "🟢" : "🔴"}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
