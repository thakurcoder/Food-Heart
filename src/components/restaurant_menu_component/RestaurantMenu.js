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

    const url = MENU_URL + resid
    const proxy = fetch('https://proxy.cors.sh/'+url, {
      headers: {
      'x-cors-api-key': 'temp_8f859260879ebbf60847dffe00877581'
      }
    })

    const fetchdata = async ()=>{
        const data = await proxy;

        const json = await data.json()

        setmenu_list(json)
        console.log("json ",json)

        const filterdata = json?.data?.cards.filter((e)=>{
            return e?.groupedCard?.cardGroupMap?.REGULAR?.cards
        })
        // console.log("filder data ",filterdata)

        setmenu_list_ofmenu(filterdata[0].groupedCard.cardGroupMap.REGULAR.cards)
        // console.log("setmenu_list ",json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards)

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