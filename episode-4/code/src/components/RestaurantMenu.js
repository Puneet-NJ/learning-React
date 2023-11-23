import Shimmer from "./Shimmer";
import MenuList from "./MenuList";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
	const { resId } = useParams();

	const resInfo = useRestaurantMenu(resId);

	if (resInfo === null) return <Shimmer />;

	const { name, cuisines, costForTwoMessage } =
		resInfo?.cards[0]?.card?.card?.info;

	const { cards: menuTitle } =
		resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;

	// console.log(menuTitle);
	return (
		<div className="menu text-center ">
			<h1 className="font-bold text-3xl underline m-2">{name}</h1>
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
};

export default RestaurantMenu;
