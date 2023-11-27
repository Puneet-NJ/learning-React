import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
	const { resName } = props;
	const { cloudinaryImageId, name, cuisines, avgRating, sla } = resName.info;
	const { deliveryTime } = sla;

	return (
		<div className="p-4 m-4 w-[200px] rounded-md bg-gray-100 shadow-lg">
			<img
				className="w-full h-36 rounded-lg"
				src={CDN_URL + cloudinaryImageId}
			></img>
			<h3 className="text-lg font-bold my-2">{name}</h3>
			<h4 className="break-words my-1">{cuisines.join()} </h4>
			<h4 className="font-bold my-2">{avgRating} &#x2605;</h4>
			<h4 className="delivery-time">{deliveryTime}mins</h4>
		</div>
	);
};

export const withPromotedLabel = (RestaurentCard) => {
	return (props) => (
		<div>
			<label className="bg-black text-white text-xs absolute rounded-lg p-2">
				Promoted
			</label>
			<RestaurentCard {...props} />
		</div>
	);
};

export default RestaurentCard;
