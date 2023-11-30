import Shimmer from "./Shimmer";
import CategoryList from "./CategoryList";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useState } from "react";

const RestaurantMenu = () => {
	const { resId } = useParams();
	const [showIndex, setShowIndex] = useState(0);

	const restaurant = useRestaurantMenu(resId);

	if (restaurant === null) return <Shimmer />;

	const { name, cuisines, costForTwoMessage } =
		restaurant?.cards[0]?.card?.card?.info;

	const menuSections =
		restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

	// console.log(restaurant);
	const restaurantCategory = menuSections.filter(
		(section) =>
			section?.card?.card["@type"] ===
			"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
	);

	// console.log(restaurantCategory);

	return (
		<div className="text-center">
			<h1 className="text-3xl font-bold m-7 underline">{name}</h1>
			<h2 className="text-xl font-bold m-4 ">
				{cuisines.join(", ")}- {costForTwoMessage}
			</h2>
			<div>
				{restaurantCategory.map((category, index) => (
					// Controlled components
					<CategoryList
						key={category?.card?.card?.title}
						category={category?.card?.card}
						showIndex={showIndex === index ? true : false}
						setShowIndex={(index) => {
							// console.log(index);
							setShowIndex(index);
						}}
						index={index}
					/>
				))}
			</div>
		</div>
	);
};

export default RestaurantMenu;
