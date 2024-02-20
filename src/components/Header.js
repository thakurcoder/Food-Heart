import { useState } from "react";
import { LOGO_URL } from "../utils/contant";
import {Link} from "react-router-dom"
import useonlinestatus from "../utils/useonlinestatus";
import {useSelector} from "react-redux";

const Header = ()=>{
    // login function
    const [btn_login ,setbtn_login] = useState("Login")
    const isonline = useonlinestatus();

    // subscribing to the store using selextor
    const cartitem = useSelector((store)=>store.cart.item)

    // location usestate
    const [location, setLocation] = useState("delhi")
    const [locationflag, setLocationFlag] = useState(true)

    return(
        
        <div className="header bg-teal-500 flex justify-between " >
            <div className="logo-container">
                <img 
                className=" w-24 "
                src={LOGO_URL}
                />
            </div>
            <div className="nav-items ">
                <ul className=" flex p-4 space-x-4 font-bold text-rose-100 text-xl m-3" >
                    <li className="p-2" >
                        Online Status: {isonline ? "🟢": "🔴"}
                    </li>
                    <li className="hover:bg-orange-400 p-2">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="hover:bg-orange-400 p-2">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="hover:bg-orange-400 p-2">
                        <Link to="Contact" >Contact</Link>
                    </li>
                    <li className="hover:bg-orange-400 p-2" >
                       <Link  to="cart"> cart ( {cartitem.length} item) </Link>
                    </li>
                    {/* <button className="login" onClick={()=>{
                       (btn_login === "Login") ? setbtn_login("Logout") : setbtn_login("Login")
           
                    }}>{btn_login}</button> */}
                </ul>
            </div>
     

        </div>
    )
}

export default Header;