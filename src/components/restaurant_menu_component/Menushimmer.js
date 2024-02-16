const Menushimmer = ()=>{
    return(
        <div className="animate-pulse flex-col justify-center items-center">
            <div className="  bg-slate-500 h-40 m-5 "></div>
      
        <div className=" flex flex-col justify-center items-center">
            {
                Array.from({length:10}).map((i)=>{
                   return <div key={i} className="menu_shimmer w-6/12 h-36  bg-slate-500  m-4"></div>
                })
            }
        </div>
  
        </div>
    )
}

export default Menushimmer;