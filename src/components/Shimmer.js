const Shimmer = ()=>{
    return <div className="shimmer-cnt  flex flex-wrap justify-evenly animate-pulse">
        
        <div className="shimmer-card h-96 w-52 bg-slate-500 m-3" ></div>

        {
           Array.from({length:16}).map((i)=>{
           return <div key={i} className="shimmer-card h-96 w-52 bg-slate-500 m-3" ></div>
           })
        }
  

        </div>
}

export default Shimmer;