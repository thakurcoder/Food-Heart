import React, { useEffect, useState } from "react";
import Res_card, { aggregatediscount } from "./Res_card";
import Shimmer from "./Shimmer";
import useonlinestatus from "../utils/useonlinestatus";

const Body = () => {
  const [reslist, setreslist] = useState([]);
  const [filterresdata, setfilterresdata] = useState([]);
  const [searchtext, setsearchtext] = useState("");
  const [searchResultMessage, setSearchResultMessage] = useState("");

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const proxy = await fetch(
      "https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2436838&lng=77.4730653&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
      {
        headers: {
          "x-cors-api-key": "temp_8f859260879ebbf60847dffe00877581",
        },
      }
    );
    const json = await proxy.json();

    const filterRes = json.data.cards.filter((e, index) => {
      if (index === 0 || e.card.card["@type"] !== "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget") {
        return false;
      }

      return e;
    });

    setreslist(filterRes[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilterresdata(filterRes[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  const is_online = useonlinestatus();
  if (!is_online) return <h1 className="isonline">You are offline</h1>;

  const handleSearch = (text) => {
    setsearchtext(text);
    const filterdata = reslist.filter((res) =>
      res.info.name.toLowerCase().includes(text.toLowerCase())
    );
    setfilterresdata(filterdata);

    if (filterdata.length === 0) {
      setSearchResultMessage("No matching restaurants found.");
    } else {
      setSearchResultMessage("");
    }
  };

  return reslist.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body bg-gray-100 min-h-screen">
      <div className="filter mt-5 mb-5">
        <div className="search-cnt flex items-center justify-center">
          <input
            className="search-box bg-white rounded-full w-2/3 h-10 p-2 pl-4 text-lg shadow-md focus:outline-none"
            type="text"
            value={searchtext}
            placeholder="Search a restaurant..."
            onChange={(e) => handleSearch(e.target.value)}
          />
          <button
            className="search-btn rounded-full bg-green-500 w-28 h-10 ml-4 text-white font-semibold shadow-md focus:outline-none hover:bg-green-600 transition duration-300"
            onClick={() => handleSearch(searchtext)}
          >
            SEARCH
          </button>
        </div>
      </div>

      <div className="res-card-container flex flex-wrap justify-around">
        {filterresdata.length > 0 ? (
          filterresdata.map((restaurant) => (
            <Res_card key={restaurant.info.id} resdata={restaurant} />
          ))
        ) : (
          <p className="text-center text-red-500">{searchResultMessage}</p>
        )}
      </div>
    </div>
  );
};

export default Body;
