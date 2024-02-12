import Aboutrestaurant from "./AboutRestaurant";
import { useEffect, useState } from "react";
import Menushimmer from "./Menushimmer";
import Menucard from "./Menucard";
import {useParams} from "react-router-dom";
import { MENU_URL } from "../../utils/contant";



const Restaurantmenu = ()=>{

    const [menu_list, setmenu_list] = useState([]);
    const [menu_list_ofmenu, setmenu_list_ofmenu] = useState([])

    const {resid} = useParams()
    // console.log(resid)


    useEffect(()=>{
        fetchdata()
    },[])

    const fetchdata = async ()=>{
        const url = MENU_URL + resid
        const data = await fetch("https://corsproxy.org/?"+encodeURIComponent(url));

        const json = await data.json()

        setmenu_list(json)
        setmenu_list_ofmenu(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards)
        console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards)
    };

    // filter the item category
    const itemCategory = menu_list_ofmenu.filter((e)=>{
        return e.card.card["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    })

    console.log("item category",itemCategory)
    if (menu_list.length===0){
        return <Menushimmer/>
    }

    return(
        <div className="restaurant-menu">
            <Aboutrestaurant aboutdata={menu_list} />
 
            {(itemCategory.map((aboutdata,index)=>{

           return <Menucard aboutdata={aboutdata}  key={index} />
            }))
            }  
           
        </div>
    )


}

export default Restaurantmenu;