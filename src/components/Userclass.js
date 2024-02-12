import React from "react";
class Userclass extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            userinfo:{
                name:"not written",
                location:"not written"
            }
        }
        console.log(this.props.name , " chile constructor")
    }

    // we can fetch api data in componentdidmount
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/thakurcoder")
        const json = await data.json()
        console.log(json)
        this.setState({
            userinfo:json
        })
    }
    render(){
    
    console.log(this.props.name ," chile render")
        return(
            <div>
                <h1>{this.state.userinfo.name}</h1>
             
                {/* <h1>{this.props.name}</h1> */}
                <p>you can order food from this web site</p>
            </div>
        )
    }
}

export default Userclass;