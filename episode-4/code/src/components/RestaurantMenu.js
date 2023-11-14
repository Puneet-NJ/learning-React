import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import MenuList from "./MenuList";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
	const [resInfo, setResInfo] = useState(null);

	const { resId } = useParams();

	const fetchResInfo = async () => {
		const api = await fetch(
			"https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=" +
				resId
		);

		const json = await api.json();

		setResInfo(json?.data);
	};

	useEffect(() => {
		fetchResInfo();
	}, []);

	if (resInfo === null) return <Shimmer />;

	const { name, cuisines, costForTwoMessage } =
		resInfo?.cards[0]?.card?.card?.info;

	const { cards: menuTitle } =
		resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;

	// console.log(menuTitle);
	return (
		<div className="menu">
			<h1>{name}</h1>
			<p>
				{cuisines.join(", ")} - {costForTwoMessage}
			</p>
			<h2>Menu</h2>
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
