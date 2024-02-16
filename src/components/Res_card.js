import {useNavigate} from "react-router-dom"
const Res_card = (props) => {
  const { resdata } = props; 

  const navigate = useNavigate()
  return (
    <div className="res_card flex-col text-2xl border-solid border-2 w-64 border-b-slate-900 my-4 cursor-pointer po hover:border-solid bg-slate-200 p-3 rounded-xl hover:bg-emerald-200 font-serif" onClick={()=>{
        navigate("/restaurant/"+ resdata.info.id)
      
    }}>
      <img className=" w-64 rounded-lg"
        src={
          `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/` +
          resdata.info.cloudinaryImageId
        }
      />
      <h1 className=" inline-block font-bold text-blue-400 mt-2">
        {
          resdata.info.name
        }
      </h1>
      <h5 className=" text-wrap">
        {resdata.info.cuisines.join(', ')}
      </h5>
      <h5 className=" inline-block font-bold">
        Rating ={" "}
        {
          resdata.info.avgRating + "⭐"
        }
      </h5>
      <h5 className=" ">
        Price ={" "}
        {
          resdata.info.costForTwo
        }
      </h5>
    </div>
  );
};

// higher order function for aggregatediscount

export const aggregatediscount = (Res_card)=>{
  return (props)=>{
    return(
      <div>
        <Res_card {...props}/>
        <label>discount</label>
        <p>discount</p>
      </div>
    )
  }
}

export default Res_card;
