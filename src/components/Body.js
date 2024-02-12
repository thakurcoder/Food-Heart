import React, { useEffect } from "react";
import Res_card, {aggregatediscount} from "./Res_card";
import Shimmer from "./Shimmer";
import { useState } from "react";
import useonlinestatus from "../utils/useonlinestatus";

const Body = () => {
  // state variable for restaurant 
    const [reslist, setreslist] = useState([]);
    const [filertresdata, setfilterresdata] = useState([])

  // state variable for search text
    const [searchtext, setsearchtext] = useState("");


    useEffect(()=>{
      console.log('useeffect is called!');
      fetchdata()
    },[]);
    
    // fetching resturent data 

    const fetchdata = async ()=>{
      const data = await fetch("https://corsproxy.org/?" + encodeURIComponent("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2436838&lng=77.4730653&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"));
      
      const json = await data.json();
      console.log("json",json)
      // filter the card of resturent it changing every time
      let flag = true
      const filterRes = json.data.cards.filter((e,index)=>{
        if (index==0) return false

        if (e.card.card["@type"]== "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget"){
          return e
        }

      })
      console.log("filter res is ",filterRes)
      setreslist(filterRes[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setfilterresdata(filterRes[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      
      console.log("resdata",reslist)

    }

    // importing isonline and using it
    const is_online = useonlinestatus();
    if (is_online==false) return <h1 className="isonline">you are offline</h1>
    // this is higher order function for discount
    const discountlable = aggregatediscount(Res_card)

  return (reslist.length===0) ? <Shimmer/>:(
    <div className="body ">

      <div className="filter">
{/* search box */}
      <div className="search-cnt mt-2 ">
        <input className="search-box bg-slate-200 rounded-full w-2/3 ml-48 h-10" type="text" value={searchtext} onChange={(e)=>{
          setsearchtext(e.target.value)
        }} />
        <button className="search-btn rounded-full bg-green-300 w-28 h-10 ml-4" onClick={()=>{
        
          const filterdata = reslist.filter(
            (res)=> res.info.name.toLowerCase().includes(searchtext) 
          )
          setfilterresdata(filterdata)
        }} >SEARCH</button>

      </div>
        
        <button
          className="filter-btn"
          onClick={() => {
            const filterdata = reslist.filter(
                (res)=> res.info.avgRating > 4.3    
                );
            console.log(reslist)
            setreslist(filterdata);
          }}
        >
          Filter res
        </button>
      </div>
      <div className="res-card-container flex flex-row flex-wrap w-full justify-around">

{/* impliment higher order function */}
        {filertresdata.map((restaurant) => (
          <Res_card key={restaurant.info.id} resdata={restaurant}/> 

          // higher order component code
          
        ))}


      </div>
    </div>
  );
};

export default Body;