import React from "react";
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

        console.log("parent constructor")

    }

    render(){
        console.log("parent render")
        return(
            <div>
                <h1> this is about page</h1>
                <Userclass name={"aman singh rajput"} />
              
            </div>
        )
    }

    componentDidMount(){
        console.log("parent component did mount")
    }
}

export default About;