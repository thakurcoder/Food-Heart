import { useEffect, useState } from "react"
import {MENU_URL} from "./contant"


const useRestaurantInfo = (resid)=>{
    // menu_list is using for the the Aboutmenu component
    const [menu_list, setmenu_list] = useState([])
    // menu_list_ofmenu is using for the Menucard component 
    const [menu_list_ofmenu, setmenu_list_ofmenu] = useState([])

    
    // we fetch the data by using useEffect
    useEffect(()=>{
        fetchdata()
    })

    // fetchdata is defined here
    const fetchdata = async ()=>{
        const url = MENU_URL+resid
        const data = fetch("https://corsproxy.org/?"+encodeURIComponent(url));
        const json = (await data).json()
        setmenu_list(json)
        console.log("this is json in use",json)
        setmenu_list_ofmenu(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards)

    }

}

export default useRestaurantInfo;