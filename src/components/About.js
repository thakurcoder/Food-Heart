import React from "react";
import { LOGO_URL } from "../utils/contant";
import User from "./User";
import Userclass from "./Userclass";

// const About = ()=>{
//     return(
//         <div>
//             <h1>this is about page </h1>
//             <User name={"Aman Singh Rajput"}/>
//             <Userclass name={"aman singh"} />
//         </div>
//     )
// }

class About extends React.Component{
    constructor(props){
        super(props)

        // console.log("parent constructor")

    }

    render(){
        // console.log("parent render")
        return(
            <div className="flex m-7 p-7 font-bold text-gray-700">
            <div>
                <h1 className="text-7xl m-2">Welcome to</h1>
                <h1 className="text-7xl m-2">The world of</h1>
                <h1 className="text-6xl m-2 p-2 bg-orange-400 rounded-md text-yellow-50">Tasty & Fresh Food</h1>
                <h1 className="text-3xl m-2 italic">"Better you will feel if you eat a FoodFire healthy meal"</h1>
            </div>
            <div>
                <img src="https://png.pngtree.com/png-vector/20220708/ourmid/pngtree-fast-food-logo-png-image_5763171.png"/>
            </div>
            </div>
        )
    }


}

export default About;