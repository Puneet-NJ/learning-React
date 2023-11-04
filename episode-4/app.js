import React from "react";
import ReactDOM from "react-dom/client";

/****
 *
 * What I want to create?
 *
 *  - Header
 *      -Logo
 *      -nav-links
 *  - Body
 *      -Search
 *      -Restaurent container
 *          -Restaurent card
 *              -img
 *              -restaurent-name
 *              -cuisine
 *              -rating
 *              -delivery-time
 * - Footer
 *      -Copyright
 *      -Links
 *
 */

// Header component
const Header = () => (
	<div id="header">
		<div className="logo-container">
			<img
				className="logo"
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFISqcc4R1GJFip0UNugkmppxG3cIbPkPh3AdykGCshTUw-lZvBQcvag9iO8yOOy01DMc&usqp=CAU"
				alt="Logo"
			></img>
		</div>

		<div className="nav-links">
			<ul>
				<li>Home</li>
				<li>About Us</li>
				<li>Contact Us</li>
				<li>Cart</li>
			</ul>
		</div>
	</div>
);

const restaurents = [
	{
		info: {
			id: "296855",
			name: "Thalairaj Biryani",
			cloudinaryImageId: "rgkz8ctfbcsmgnppdz0y",
			locality: "Sadashiva Nagar",
			areaName: "Sadashiva Nagar",
			costForTwo: "₹300 for two",
			cuisines: ["Biryani", "Indian"],
			avgRating: 4.3,
			feeDetails: {
				restaurantId: "296855",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 7100,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 7100,
			},
			parentId: "433875",
			avgRatingString: "4.3",
			totalRatingsString: "500+",
			sla: {
				deliveryTime: 34,
				lastMileTravel: 6,
				serviceability: "SERVICEABLE",
				slaString: "34 mins",
				lastMileTravelString: "6.0 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-11-04 23:00:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹150 OFF",
				subHeader: "ABOVE ₹349",
				discountTag: "FLAT DEAL",
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {
			context: "seo-data-7c84e0ae-b80a-4248-9dce-0f414b4e7588",
		},
		cta: {
			link: "https://www.swiggy.com/restaurants/thalairaj-biryani-sadashiva-nagar-bangalore-296855",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
	{
		info: {
			id: "63048",
			name: "Sharief Bhai",
			cloudinaryImageId: "eahrfj70zhzy621zi8yq",
			locality: "Frazer Town",
			areaName: "Frazer Town",
			costForTwo: "₹400 for two",
			cuisines: [
				"Biryani",
				"Mughlai",
				"Arabian",
				"Kebabs",
				"Desserts",
				"Beverages",
			],
			avgRating: 4.2,
			feeDetails: {
				restaurantId: "63048",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 5800,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 5800,
			},
			parentId: "5734",
			avgRatingString: "4.2",
			totalRatingsString: "10K+",
			sla: {
				deliveryTime: 34,
				lastMileTravel: 5,
				serviceability: "SERVICEABLE",
				slaString: "34 mins",
				lastMileTravelString: "5.0 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-11-05 01:00:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹150 OFF",
				subHeader: "ABOVE ₹349",
				discountTag: "FLAT DEAL",
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {
			context: "seo-data-7c84e0ae-b80a-4248-9dce-0f414b4e7588",
		},
		cta: {
			link: "https://www.swiggy.com/restaurants/sharief-bhai-frazer-town-bangalore-63048",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
	{
		info: {
			id: "464509",
			name: "Leon's - Burgers & Wings (Leon Grill)",
			cloudinaryImageId: "qol6dzbjxyse0tylbznu",
			locality: "Pulkeshi Nagar",
			areaName: "Frazer Town",
			costForTwo: "₹300 for two",
			cuisines: ["American", "Snacks", "Turkish", "Portuguese", "Continental"],
			avgRating: 4.3,
			feeDetails: {
				restaurantId: "464509",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 4800,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 4800,
			},
			parentId: "371281",
			avgRatingString: "4.3",
			totalRatingsString: "5K+",
			sla: {
				deliveryTime: 35,
				lastMileTravel: 4.5,
				serviceability: "SERVICEABLE",
				slaString: "35 mins",
				lastMileTravelString: "4.5 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-11-05 01:00:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹150 OFF",
				subHeader: "ABOVE ₹349",
				discountTag: "FLAT DEAL",
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {
			context: "seo-data-7c84e0ae-b80a-4248-9dce-0f414b4e7588",
		},
		cta: {
			link: "https://www.swiggy.com/restaurants/leons-burgers-and-wings-leon-grill-pulkeshi-nagar-frazer-town-bangalore-464509",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
	{
		info: {
			id: "121603",
			name: "Kannur Food Point",
			cloudinaryImageId: "bmwn4n4bn6n1tcpc8x2h",
			locality: "SG Palya",
			areaName: "Tavarekere",
			costForTwo: "₹300 for two",
			cuisines: ["Kerala", "Chinese"],
			avgRating: 3.9,
			feeDetails: {
				restaurantId: "121603",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 7100,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 7100,
			},
			parentId: "20974",
			avgRatingString: "3.9",
			totalRatingsString: "10K+",
			sla: {
				deliveryTime: 34,
				lastMileTravel: 6.5,
				serviceability: "SERVICEABLE",
				slaString: "34 mins",
				lastMileTravelString: "6.5 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-11-05 02:50:00",
				opened: true,
			},
			badges: {
				textExtendedBadges: [
					{
						iconId: "guiltfree/GF_Logo_android_3x",
						shortDescription: "options available",
						fontColor: "#7E808C",
					},
				],
			},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {
						badgeObject: [
							{
								attributes: {
									description: "",
									fontColor: "#7E808C",
									iconId: "guiltfree/GF_Logo_android_3x",
									shortDescription: "options available",
								},
							},
						],
					},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹150 OFF",
				subHeader: "ABOVE ₹349",
				discountTag: "FLAT DEAL",
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {
			context: "seo-data-7c84e0ae-b80a-4248-9dce-0f414b4e7588",
		},
		cta: {
			link: "https://www.swiggy.com/restaurants/kannur-food-point-sg-palya-tavarekere-bangalore-121603",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
	{
		info: {
			id: "570511",
			name: "Bakingo",
			cloudinaryImageId: "qwbqggsxzw86vgk60c9c",
			locality: "MV Jayanthi Road",
			areaName: "Vasanth Nagar",
			costForTwo: "₹299 for two",
			cuisines: ["Bakery", "Desserts", "Beverages", "Snacks"],
			avgRating: 4.4,
			feeDetails: {
				restaurantId: "570511",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 5000,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 5000,
			},
			parentId: "3818",
			avgRatingString: "4.4",
			totalRatingsString: "1K+",
			sla: {
				deliveryTime: 23,
				lastMileTravel: 3,
				serviceability: "SERVICEABLE",
				slaString: "23 mins",
				lastMileTravelString: "3.0 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-11-05 01:00:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹150 OFF",
				subHeader: "ABOVE ₹349",
				discountTag: "FLAT DEAL",
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {
			context: "seo-data-7c84e0ae-b80a-4248-9dce-0f414b4e7588",
		},
		cta: {
			link: "https://www.swiggy.com/restaurants/bakingo-mv-jayanthi-road-vasanth-nagar-bangalore-570511",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
	{
		info: {
			id: "396753",
			name: "Wendy's",
			cloudinaryImageId: "f1aa621021a2826088089b89842d4e7c",
			locality: "KMK Towers",
			areaName: "Residency Road",
			costForTwo: "₹200 for two",
			cuisines: ["Burgers", "American", "Fast Food", "Snacks", "Beverages"],
			avgRating: 4.1,
			feeDetails: {
				restaurantId: "396753",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 3300,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 3300,
			},
			parentId: "972",
			avgRatingString: "4.1",
			totalRatingsString: "1K+",
			sla: {
				deliveryTime: 33,
				lastMileTravel: 2.5,
				serviceability: "SERVICEABLE",
				slaString: "33 mins",
				lastMileTravelString: "2.5 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-11-04 23:59:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹150 OFF",
				subHeader: "ABOVE ₹349",
				discountTag: "FLAT DEAL",
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {
			context: "seo-data-7c84e0ae-b80a-4248-9dce-0f414b4e7588",
		},
		cta: {
			link: "https://www.swiggy.com/restaurants/wendys-kmk-towers-residency-road-bangalore-396753",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
	{
		info: {
			id: "5247",
			name: "Corner House Ice Cream",
			cloudinaryImageId: "o2rwujynxk8vhkbtdtvb",
			locality: "Residency Road",
			areaName: "Ashok Nagar",
			costForTwo: "₹250 for two",
			cuisines: ["Ice Cream", "Desserts"],
			avgRating: 4.7,
			feeDetails: {
				restaurantId: "5247",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 3300,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 3300,
			},
			parentId: "65254",
			avgRatingString: "4.7",
			totalRatingsString: "10K+",
			sla: {
				deliveryTime: 22,
				lastMileTravel: 2.3,
				serviceability: "SERVICEABLE",
				slaString: "22 mins",
				lastMileTravelString: "2.3 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-11-04 23:00:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "D",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹150 OFF",
				subHeader: "ABOVE ₹349",
				discountTag: "FLAT DEAL",
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {
			context: "seo-data-7c84e0ae-b80a-4248-9dce-0f414b4e7588",
		},
		cta: {
			link: "https://www.swiggy.com/restaurants/corner-house-ice-cream-residency-road-ashok-nagar-bangalore-5247",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
	{
		info: {
			id: "396750",
			name: "The Biryani Life",
			cloudinaryImageId: "wvjsuvqrd6ahqqyhmnrt",
			locality: "Residency Road",
			areaName: "Shantinagar",
			costForTwo: "₹250 for two",
			cuisines: [
				"Biryani",
				"Mughlai",
				"Lucknowi",
				"Hyderabadi",
				"North Indian",
				"Kebabs",
				"Desserts",
				"Beverages",
			],
			avgRating: 3.9,
			feeDetails: {
				restaurantId: "396750",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 3300,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 3300,
			},
			parentId: "8496",
			avgRatingString: "3.9",
			totalRatingsString: "100+",
			sla: {
				deliveryTime: 32,
				lastMileTravel: 2.5,
				serviceability: "SERVICEABLE",
				slaString: "32 mins",
				lastMileTravelString: "2.5 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-11-04 23:59:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹150 OFF",
				subHeader: "ABOVE ₹349",
				discountTag: "FLAT DEAL",
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {
			context: "seo-data-7c84e0ae-b80a-4248-9dce-0f414b4e7588",
		},
		cta: {
			link: "https://www.swiggy.com/restaurants/the-biryani-life-residency-road-shantinagar-bangalore-396750",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
	{
		info: {
			id: "2914",
			name: "Bheema's",
			cloudinaryImageId: "aff0be3ebc62e299701c087b8dcd1c0d",
			locality: "Church Street",
			areaName: "Ashok Nagar",
			costForTwo: "₹550 for two",
			cuisines: ["Andhra"],
			avgRating: 4.4,
			feeDetails: {
				restaurantId: "2914",
				fees: [
					{
						name: "BASE_DISTANCE",
						fee: 4000,
					},
					{
						name: "BASE_TIME",
					},
					{
						name: "ANCILLARY_SURGE_FEE",
					},
				],
				totalFee: 4000,
			},
			parentId: "1841",
			avgRatingString: "4.4",
			totalRatingsString: "10K+",
			sla: {
				deliveryTime: 24,
				lastMileTravel: 1.5,
				serviceability: "SERVICEABLE",
				slaString: "24 mins",
				lastMileTravelString: "1.5 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2023-11-04 22:30:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹150 OFF",
				subHeader: "ABOVE ₹349",
				discountTag: "FLAT DEAL",
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {
			cotext: "seo-data-7c84e0ae-b80a-4248-9dce-0f414b4e7588",
		},
		cta: {
			link: "https://www.swiggy.com/restaurants/bheemas-church-street-ashok-nagar-bangalore-2914",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
];

const RestaurentCard = (props) => {
	const { resName } = props;
	// const { info } = resName;
	const { cloudinaryImageId, name, cuisines, avgRating, deliveryTime } =
		resName.info;

	return (
		<div className="restaurent-card">
			<img
				className="restaurent-img"
				src={
					"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
					cloudinaryImageId
				}
			></img>
			<h3 className="restaurent-name">{name}</h3>
			<h4 className="cuisine">{cuisines.join()} </h4>
			<div className="restaurent-rating">{avgRating} &#x2605;</div>
			<div className="delivery-time">{deliveryTime}mins</div>
		</div>
	);
};

// Body component
const Body = () => (
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
		</div>

		<div className="res-container">
			{/* How to add dynamic data to our componenets? -> props */}

			{/* forEach instaead of map wouldn't work, why?
             bcoz => i have written jsx inside js, so babel wouldn't recignise until it's returned */}
			{restaurents.map((restaurent) => (
				<RestaurentCard resName={restaurent} />
			))}
		</div>
	</div>
);

// App component
const App = () => (
	<div id="app">
		<Header />
		<Body />
	</div>
);
// Rendering
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
