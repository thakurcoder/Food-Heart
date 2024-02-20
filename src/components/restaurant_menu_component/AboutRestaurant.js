const Aboutrestaurant = (props) =>{


    // console.log("res crad props",props)
    

    const filterdata = props.aboutdata.data.cards.filter((e) => {

        return e.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant";
    });

    // console.log("filter daata  ",filterdata)

    return(
        <div className="about-restaurant-menu text-center border-solid border-blue-950 border-8 my-4  p-4 bg-gray-800 text-slate-50 flex h-45 justify-center">
            <div>
                
                <img className="h-40" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/` +
          filterdata[0]?.card?.card?.info?.cloudinaryImageId} />
            </div>
        <div className="ml-5 font-semibold mt-5">
            <h1>{filterdata[0]?.card?.card?.info?.name}</h1>
            <h2>{filterdata[0]?.card?.card?.info?.cuisines.join(", ")}</h2>
            <h2>{filterdata[0]?.card?.card?.info?.locality}</h2>
            <h3>{"⭐ "+ filterdata[0]?.card?.card?.info?.avgRating}</h3>
        </div>
        </div>
    )
}

export default Aboutrestaurant;