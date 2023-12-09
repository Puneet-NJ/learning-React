import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
	const { resName } = props;
	const { cloudinaryImageId, name, cuisines, avgRating, sla } = resName.info;
	const { deliveryTime } = sla;
	// console.log(resName);

	return (
		<div className="p-4 mx-6 my-8 w-[200px] h-[400px] rounded-md bg-gray-100 shadow-lg">
			<img
				className="w-full  h-2/5 rounded-lg"
				src={CDN_URL + cloudinaryImageId}
			></img>
			<div className="h-3/5">
				<h3 className="text-lg font-bold my-2">{name}</h3>
				<h4 className="font-bold my-2">{avgRating} &#x2605;</h4>
				<h4 className="delivery-time font-bold">{deliveryTime}mins</h4>
				<h4 className="break-words my-1">
					{cuisines.length > 6 ? "..." : cuisines.join()}
				</h4>
			</div>
		</div>
	);
};

export const withPromotedLabel = (RestaurentCard) => {
	console.log({ RestaurentCard });
	return (props) => (
		<div>
			<label className="bg-black text-white text-xs relative top-[45px] left-7 rounded-lg p-2">
				Promoted
			</label>
			<RestaurentCard {...props} />
		</div>
	);
};

export default RestaurentCard;
