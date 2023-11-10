import RestaurentCard from "./RestaurentCard";
import restaurents from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

// Feature: Want to sort restaurent by rating. eg: 4* > restaurents

const Body = () => {
	// React hooks: Local state variable
	// Whenever a state variable is updated react rerenders the component
	const [restaurentList, setRestaurentList] = useState([]);
	const [searchRes, setSearchRes] = useState("");
	// I can't update my state variables directly, I should use setVariable method

	const fetchData = async () => {
		try {
			const api = await fetch(
				"https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3319776&lng=76.8194767&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
			);
			const json = await api.json();

			if (
				!json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
					?.restaurants
			)
				throw new Error("API Link Changed");
			setRestaurentList(
				json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
					?.restaurants
			);
		} catch (e) {
			alert(e);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	// Conditinal rendering
	if (restaurentList.length === 0) {
		return <Shimmer />;
	}
	return (
		<div id="body">
			<div className="search">
				{/* Adding search functionality into it? 
					"https://www.youtube.com/watch?v=mZvKPtH9Fzo"
				*/}
				<form>
					<input
						type="text"
						className="search-bar"
						placeholder="Enter Restaurent Name"
						onChange={(e) => setSearchRes(e.target.value)}
					></input>
					{/* <button>Search</button> */}
				</form>
				<button
					className="sort-res"
					onClick={() => {
						const Newrestaurents = restaurentList.filter(
							(res) => res.info.avgRating >= 4
						);
						console.log(Newrestaurents);

						setRestaurentList(Newrestaurents);
						// This will say restaurents = Newrestaurents
					}}
				>
					Restaurents above 4 rating
				</button>
			</div>

			<div className="res-container">
				{/* How to add dynamic data to our componenets? -> props */}
				{/* forEach instaead of map wouldn't work, why?
             bcoz => i have written jsx inside js, so babel wouldn't recignise until it's returned */}
				{restaurentList
					.filter((restaurent) => {
						if (searchRes === "") {
							return restaurent;
						} else if (
							restaurent?.info?.name
								.toLowerCase()
								.includes(searchRes?.toLowerCase())
						) {
							return restaurent;
						}
					})
					.map((restaurent) => (
						<RestaurentCard key={restaurent?.info?.id} resName={restaurent} />
					))}
			</div>
		</div>
	);
};

export default Body;
