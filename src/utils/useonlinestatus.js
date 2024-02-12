import { useEffect, useState } from "react"


// in this we check that user is online or offline
const useonlinestatus = ()=>{
    // state variable for seting online or offline
    const [is_online, setis_online] = useState(true)

    // we will use useEffect, so it can check user is online or offline
    useEffect(()=>{

        window.addEventListener('offline',()=>{
            setis_online(false)
        })

        window.addEventListener("online",()=>{
            setis_online(true)
        })

    },[])

    // true or false
    return is_online

}

export default useonlinestatus;