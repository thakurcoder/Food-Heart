const Aboutrestaurant = (props) => {
    const filterdata = props.aboutdata.data.cards.filter((e) => {
        return e.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant";
    });

    return (
        <div className="about-restaurant-menu border border-blue-950 my-4 p-4 bg-gray-800 text-slate-50 flex flex-col md:flex-row items-center justify-center md:space-x-4">
            <div className="mb-4 md:mb-0 mr-0 md:mr-5">
                <img className="h-40 w-full md:h-auto md:w-60 rounded-lg" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${filterdata[0]?.card?.card?.info?.cloudinaryImageId}`} alt="Restaurant Image" />
            </div>
            <div className="font-semibold text-center md:text-left">
                <h1 className="text-xl mb-2">{filterdata[0]?.card?.card?.info?.name}</h1>
                <h2 className="text-lg mb-2">{filterdata[0]?.card?.card?.info?.cuisines.join(", ")}</h2>
                <h2 className="text-lg mb-2">{filterdata[0]?.card?.card?.info?.locality}</h2>
                <h3 className="text-lg">⭐ {filterdata[0]?.card?.card?.info?.avgRating}</h3>
            </div>
        </div>
    );
};

export default Aboutrestaurant;
