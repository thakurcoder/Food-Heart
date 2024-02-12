import { useSelector, useDispatch } from "react-redux";
import { removeitem } from "../utils/cartSlice";

const Cart = () => {
    const dispatch = useDispatch()
    // logic for removing item
    const handleRemoveItem = (item)=>{
        dispatch(removeitem(item))
    }
  const selector = useSelector((state) => state.cart.item);
  console.log(selector);
  return (
    <div>
      {selector.map((e) => {
        return (
          <div className="flex justify-center">
            <div className="flex justify-center space-x-80 m-4 p-3  bg-slate-300 w-6/12">
              <div className="">
                <h2 className="font-bold">{e.card.info.name}</h2>
                <h2>{"INR: " + e.card.info.price / 100}</h2>
              </div>
              <div className="">
                <img
                  className="rounded-lg"
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                    e.card.info.imageId
                  }
                />
                <button
                  className=" bg-slate-900 text-cyan-300 p-2 relative"
                  onClick={() => handleRemoveItem(e)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
