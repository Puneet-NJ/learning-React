import RestaurentCard from "./RestaurentCard";
import restaurents from "../utils/mockData";
import { useState } from "react";

// Feature: Want to sort restaurent by rating. eg: 4* > restaurents

const Body = () => {
	// Normal js variable
	// let restaurents = [
	// 	{
	// 		info: {
	// 			id: "296855",
	// 			name: "Thalairaj Biryani",
	// 			cloudinaryImageId: "rgkz8ctfbcsmgnppdz0y",
	// 			cuisines: ["Biryani", "Indian"],
	// 			avgRating: 4.3,
	// 		},
	// 	},
	// 	{
	// 		info: {
	// 			id: "296856",
	// 			name: "Thalairaj Biryani2",
	// 			cloudinaryImageId: "rgkz8ctfbcsmgnppdz0y",
	// 			cuisines: ["Biryani", "Indian"],
	// 			avgRating: 4,
	// 		},
	// 	},
	// 	{
	// 		info: {
	// 			id: "296857",
	// 			name: "Thalairaj Biryani3",
	// 			cloudinaryImageId: "rgkz8ctfbcsmgnppdz0y",
	// 			cuisines: ["Biryani", "Indian"],
	// 			avgRating: 3.6,
	// 		},
	// 	},
	// 	{
	// 		info: {
	// 			id: "296858",
	// 			name: "Thalairaj Biryani4",
	// 			cloudinaryImageId: "rgkz8ctfbcsmgnppdz0y",
	// 			cuisines: ["Biryani", "Indian"],
	// 			avgRating: 4.7,
	// 		},
	// 	},
	// ];

	// React hooks: Local state variable
	// Whenever a state variable is updated react rerenders the component
	const [restaurentList, setRestaurents] = useState(restaurents);

	// I can't update my state variables directly, I should use setVariable method

	return (
		<div id="body">
			<div className="search">
				<form>
					<input
						type="text"
						className="search-bar"
						placeholder="Enter Restaurent Name"
					></input>
					<button type="submit">Search</button>
				</form>
				<button
					className="sort-res"
					onClick={() => {
						const Newrestaurents = restaurentList.filter(
							(res) => res.info.avgRating > 4
						);
						console.log(Newrestaurents);

						setRestaurents(Newrestaurents);
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
				{restaurentList.map((restaurent) => (
					<RestaurentCard key={restaurent.info.id} resName={restaurent} />
				))}
			</div>
		</div>
	);
};

export default Body;
