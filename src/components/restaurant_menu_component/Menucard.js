import { useEffect } from "react";
import { useState } from "react";
import {useDispatch} from "react-redux"
import { additem } from "../../utils/cartSlice";
import AddNotification from "./AddNotification";
const Menucard = (props) => {

  const dispatch = useDispatch()
  const [showNotification, setShowNotification] = useState(false);
  // handling add button 
  const handleAddItem = (item)=>{

    // dispatch a action
    dispatch(additem(item))
    setShowNotification(true); 
    setTimeout(() => {
      setShowNotification(false)
    }, 2000);

    // console.log(item)
  }



  //  console.log("this is props",props)
    // this condition is written because in some cards the data is written in different way so its give error 
    // optional channing is importaint in it
    // it is a swiggy api problem
    if (props.aboutdata.card?.card?.itemCards?.[0]==undefined){
        return
    }
    // console.log("menu card",props)

    const [dropdown, setdropdown] = useState(true);
    
    function handle(){
      setdropdown(!dropdown)
      
    }

  return (

    <>
    {/* this is for item header */}
    <div className="flex justify-center space-x-80 border-y-4 p-4 cursor-pointer m-4 " onClick={handle}>
      <div>
      <h1 className="font-bold text-blue-400" > 
           
          {props.aboutdata.card.card.title}
          </h1>
      </div>
      <div>
        <h1>{dropdown&&"⬆️"}{!dropdown&&"⬇️"}</h1>
      </div>
    </div>
{/* this is item body */}
{
 dropdown && props.aboutdata.card.card.itemCards.map((e)=>{
    return <div className="flex justify-center">
       <div className="flex justify-center space-x-80 m-4 p-3  bg-slate-300 w-6/12">
      <div className="">
      <h2 className="font-bold">
           {
             e.card.info.name
           }
         </h2>
         <h2>{"INR: " +  e.card.info.price/100}</h2>
         </div>
         <div className="flex-col">
         <img className="rounded-lg" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" + (e.card.info.imageId)}/>

         <div className="flex justify-center ">
         <button className=" bg-slate-100 shadow-sm w-40 text-green-500 font-bold p-2 relative m-2 -mt-4" onClick={()=>handleAddItem(e)}>Add +</button>
         </div>

       </div>
    </div>
         {showNotification && <AddNotification/>}
    </div>
  })
}

    
    </>

    // <div className="menu-card border-solid border-blue-950 border-8 rounded-full flex my-4 p-3">
    //   <div className="relative left-44 p-7">
    //     <h1 className="font-bold text-blue-400" > 
    //       {
    //         props.aboutdata.card.card.itemCards[0].card.info.category
    //       }
    //     </h1>
        
    //     <h2>
    //       {
    //         props.aboutdata.card.card.itemCards[0].card.info.name
    //       }
    //     </h2>
    //     <h2>{"INR: " +  props.aboutdata.card.card.itemCards[0].card.info.price/100}</h2>
    //     </div>
        
    //   <div className=" relative left-2/4">
    //     <img className="rounded-lg" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" + (props.aboutdata.card.card.itemCards[0].card.info.imageId)}/>
    //   </div>

    // </div>
  );
    }

export default Menucard;
