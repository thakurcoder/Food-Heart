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

    return(
        <div className="header bg-teal-500 flex justify-between " >
            <div className="logo-container">
                <img 
                className=" w-24 "
                src={LOGO_URL}
                />
            </div>
            <div className="nav-items ">
                <ul className=" flex p-4 space-x-4 font-bold text-rose-100 " >
                    <li className="">
                        Online Status: {isonline ? "🟢": "🔴"}
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="Contact" >Contact</Link>
                    </li>
                    <li>
                       <Link  to="cart"> cart ( {cartitem.length} item) </Link>
                    </li>
                    <button className="login" onClick={()=>{
                       (btn_login === "Login") ? setbtn_login("Logout") : setbtn_login("Login")
           
                    }}>{btn_login}</button>
                </ul>
            </div>

        </div>
    )
}

export default Header;