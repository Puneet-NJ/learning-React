import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
	const { resName } = props;
	// const { info } = resName;
	const { cloudinaryImageId, name, cuisines, avgRating, sla } = resName.info;
	const { deliveryTime } = sla;

	return (
		<div className="restaurent-card">
			<img className="restaurent-img" src={CDN_URL + cloudinaryImageId}></img>
			<h3 className="restaurent-name">{name}</h3>
			<h4 className="cuisine">{cuisines.join()} </h4>
			<div className="restaurent-rating">{avgRating} &#x2605;</div>
			<div className="delivery-time">{deliveryTime}mins</div>
		</div>
	);
};

export default RestaurentCard;
