import { useNavigate } from "react-router-dom";

const Res_card = (props) => {
  const { resdata } = props;
  const navigate = useNavigate();

  return (
    <div className="res_card flex flex-col border border-solid border-gray-900 w-64 my-4 cursor-pointer hover:border-solid bg-gray-100 p-4 rounded-xl hover:bg-emerald-200 font-serif transition duration-300 ease-in-out transform hover:scale-105" onClick={() => {
      navigate("/restaurant/" + resdata.info.id);
    }}>
      <img className="w-full rounded-lg" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resdata.info.cloudinaryImageId}`} alt={resdata.info.name} />
      <h1 className="font-bold text-blue-600 mt-4">{resdata.info.name}</h1>
      <h5 className="text-gray-700 text-sm mt-2">{resdata.info.cuisines.join(', ')}</h5>
      <div className="flex items-center mt-2">
        <h5 className="font-bold text-gray-700 mr-1">Rating:</h5>
        <p className="text-yellow-500">{resdata.info.avgRating}⭐</p>
      </div>
      <div className="flex items-center mt-1">
        <h5 className="font-bold text-gray-700 mr-1">Price:</h5>
        <p className="text-gray-700">{resdata.info.costForTwo}</p>
      </div>
    </div>
  );
};

// Higher-order function for aggregatediscount

export const aggregatediscount = (Res_card) => {
  return (props) => {
    return (
      <div>
        <Res_card {...props} />
        <label className="text-blue-500 font-bold mt-2">Discount:</label>
        <p className="text-gray-700">Get your discount here!</p>
      </div>
    );
  };
};

export default Res_card;
