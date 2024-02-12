const Aboutrestaurant = (props) =>{


//    console.log(props)

    return(
        <div className="about-restaurant-menu text-center border-solid border-blue-950 border-8 my-4 rounded-full  p-4 bg-green-50">
            <h1>{props.aboutdata.data.cards[0].card.card.info.name}</h1>
            <h2>{props.aboutdata.data.cards[0].card.card.info.cuisines.join(", ")}</h2>
            <h2>{props.aboutdata.data.cards[0].card.card.info.locality}</h2>
            <h3>{"⭐ "+ props.aboutdata.data.cards[0].card.card.info.avgRating}</h3>
        </div>
    )
}

export default Aboutrestaurant;