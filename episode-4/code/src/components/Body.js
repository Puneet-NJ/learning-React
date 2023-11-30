import RestaurentCard, { withPromotedLabel } from "./RestaurentCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RESTAURANT_URL } from "../utils/constants";
import userLoginInfo from "../utils/userLoginInfo";

// Feature: Want to sort restaurent by rating. eg: 4* > restaurents

const Body = () => {
	// React hooks: Local state variable
	// Whenever a state variable is updated react rerenders the component
	const [restaurentList, setRestaurentList] = useState([]);
	// I can't update my state variables directly, I should use setVariable method
	const [searchRes2, setSearchRes2] = useState("");
	const [filteredRes, setFilteredRes] = useState([]);
	// console.log(useState());

	const { userName, setUserNameLocal } = useContext(userLoginInfo);

	const fetchData = async () => {
		try {
			const api = await fetch(RESTAURANT_URL);
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
			setFilteredRes(
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

	const onlineStatus = useOnlineStatus();
	if (onlineStatus === false) {
		return <h1>Looks like you are offline!!</h1>;
	} // This wont work if put after conditional rendering, idk the reason

	// Conditinal rendering
	if (restaurentList.length === 0) {
		return <Shimmer />;
	}

	const PromotedRes = withPromotedLabel(RestaurentCard);

	return (
		<div id="body" className=" p-4">
			<div className="m-4 p-4">
				{/* Adding search functionality into it? 
					"https://www.youtube.com/watch?v=mZvKPtH9Fzo"
				*/}
				{/* <form> */}
				<input
					type="text"
					className="p-2 border border-solid border-black bg-gray-100"
					placeholder="Enter resraurent"
					onChange={(e) => setSearchRes2(e.target.value)}
				></input>
				<button
					className="p-3 bg-lime-100 ml-2 mr-20 rounded-md shadow-md hover:border border-black"
					onClick={() => {
						const newRes = restaurentList.filter((res) => {
							return res.info.name
								.toLowerCase()
								.includes(searchRes2.toLowerCase());
						});
						setFilteredRes(newRes);
					}}
				>
					Search
				</button>
				{/* </form> */}
				<button
					className="p-2 bg-gray-200 rounded-md box-border hover:border border-black"
					onClick={() => {
						const Newrestaurents = restaurentList.filter(
							(res) => res.info.avgRating > 4
						);
						// console.log(Newrestaurents);

						setFilteredRes(Newrestaurents);
						// This will say restaurents = Newrestaurents
					}}
				>
					Restaurents above 4 rating
				</button>

				<input
					className="ml-10 border border-black p-2"
					placeholder="Enter username"
					value={userName}
					onChange={(e) => setUserNameLocal(e.target.value)}
				></input>
			</div>

			<div className="flex flex-wrap justify-center">
				{/* How to add dynamic data to our componenets? -> props */}
				{/* forEach instaead of map wouldn't work, why?
             bcoz => i have written jsx inside js, so babel wouldn't recignise until it's returned */}
				{filteredRes.map((restaurent) => (
					<Link
						key={restaurent?.info?.id}
						to={"/restaurants/" + restaurent?.info?.id}
					>
						{restaurent?.info?.isOpen ? (
							<PromotedRes resName={restaurent} />
						) : (
							<RestaurentCard resName={restaurent} />
						)}
					</Link>
				))}
			</div>
		</div>
	);
};

export default Body;
