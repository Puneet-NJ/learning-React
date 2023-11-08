import RestaurentCard from "./RestaurentCard";
import restaurents from "../utils/mockData";

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
				<RestaurentCard key={restaurent.info.id} resName={restaurent} />
			))}
		</div>
	</div>
);

export default Body;
