import { useSelector, useDispatch } from "react-redux";
import { removeitem, additem } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  // Logic for removing item
  const handleRemoveItem = (item) => {
    dispatch(removeitem(item));
  };

  const handleAddItem = (item) => {
    dispatch(additem(item));
  };

  const selector = useSelector((state) => state.cart.item);

  let cart_object = {};
  let total = 0
  selector.forEach((e) => {
    if (cart_object[e?.card?.info?.id] === undefined) {
      cart_object[e?.card?.info?.id] = 1;
      total = (e.card.info.price/100 || e.card.info.defaultPrice/100) + total
    } else {
      cart_object[e?.card?.info?.id] += 1;
      total = (e.card.info.price/100 || e.card.info.defaultPrice/100) + total
    }
  });

  if (selector.length === 0) {
    return (
      <img
        className="mx-auto mt-12"
        src="https://i0.wp.com/www.huratips.com/wp-content/uploads/2019/04/empty-cart.png?fit=603%2C288&ssl=1"
        alt="Empty Cart"
      />
    );
  }

  return (
    <div className="mx-auto mt-8">
      {
        
      Object.keys(cart_object).map((itemId) => {
       
        const item = selector.find((e) => e?.card?.info?.id === itemId);

        return (
          <div key={itemId} className="flex justify-center mb-4">
            <div className="flex items-center p-4 bg-gray-100 rounded-lg shadow-md">
              <img
                className="rounded-lg w-24 h-24 mr-4"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item?.card?.info?.imageId}`}
                alt={item?.card?.info?.name}
              />
              <div>
                <h2 className="font-bold">{item?.card?.info?.name}</h2>
                <h2>{"INR: " + (item.card.info.price/100 || item.card.info.defaultPrice/100)*cart_object[itemId]}</h2>
              </div>
              <div className="ml-auto flex items-center">
                <button
                  className="bg-gray-500 text-white font-bold py-2 px-4 rounded-l ml-4"
                  onClick={() => handleRemoveItem(item)}
                >
                  -
                </button>
                <button className="bg-gray-500 text-white font-bold py-2 px-4">
                  {cart_object[itemId]}
                </button>
                <button
                  className="bg-gray-500 text-white font-bold py-2 px-4 rounded-r"
                  onClick={() => handleAddItem(item)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        );
      })}
      {/* payment  */}
      <div class="flex flex-col items-center p-2 shadow-md">
    <h1 class="text-xl font-bold mb-4">Bill Details</h1>
    <div class="mx-auto mt-8 bg-gray-100 p-4 rounded-lg shadow-md w-96">
        <div class="mb-4 md:mb-0 flex justify-evenly">
            <h1 class="font-bold  ">Item Total</h1>
            <h1>₹{total}</h1>
        </div>
        <div className="flex justify-evenly">
            <h1 class="font-bold">GST 18%</h1>
            <h1>₹{Math.floor(total/100*18)}</h1>
        </div>
        <div class="mt-4 flex justify-evenly">
            <h1 class="font-bold">TO PAY</h1>
            <h1>₹{total + Math.floor(total/100*18)}</h1>
        </div>
    </div>
</div>

    </div>
  );
};

export default Cart;
