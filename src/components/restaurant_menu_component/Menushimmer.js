const Menushimmer = ()=>{
    return(
        <div>
        <div className="menu_shimmer w-11/12 h-36 bg-slate-500 rounded-full m-4"></div>

            {
                Array.from({length:10}).map((i)=>{
                   return <div key={i} className="menu_shimmer w-11/12 h-36 bg-slate-500 rounded-full m-4"></div>
                })
            }
 
  
        </div>
    )
}

export default Menushimmer;