import Shimmer from "./Shimmer";
import CategoryList from "./CategoryList";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
	const { resId } = useParams();

	const restaurant = useRestaurantMenu(resId);

	if (restaurant === null) return <Shimmer />;

	const { name, cuisines, costForTwoMessage } =
		restaurant?.cards[0]?.card?.card?.info;

	const menuSections =
		restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

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
				{restaurantCategory.map((category) => (
					<CategoryList
						key={category?.card?.card?.title}
						category={category?.card?.card}
					/>
				))}
			</div>
		</div>
	);
};

export default RestaurantMenu;

/**
 * const { resId } = useParams();

	const resInfo = useRestaurantMenu(resId);

	if (resInfo === null) return <Shimmer />;

	const { name, cuisines, costForTwoMessage } =
		resInfo?.cards[0]?.card?.card?.info;

	const { cards: menuTitle } =
		resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;

	// console.log(menuTitle);
	return (
		<div className="menu text-center ">
			<h1 className="font-bold text-3xl underline m-7">{name}</h1>
			<p className="mb-6">
				{cuisines.join(", ")} - {costForTwoMessage}
			</p>
			<h2 className="font-bold text-2xl underline m-2">Menu</h2>
			<div className="restaurant-list">
				{menuTitle.map((menuGroup, index) => {
					const cateogoryCards = menuGroup?.card?.card;

					return (
						<MenuList
							key={menuGroup?.card?.card?.title || index}
							cateogoryCard={cateogoryCards}
						/>
					);
				})}
			</div>
		</div>
	);
 */
