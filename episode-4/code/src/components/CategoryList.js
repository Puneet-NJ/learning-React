import { CDN_URL } from "../utils/constants";
import { useState } from "react";

const CategoryList = ({ category }) => {
	// console.log(category);
	const [showItems, setShowItems] = useState(false);

	const title = category?.title;
	const items = category?.itemCards;
	// console.log(items);

	const itemsHandler = () => {
		setShowItems(!showItems);
	};

	return (
		<div className="bg-slate-200 w-6/12 m-auto mb-5 shadow-lg">
			<div
				className="cursor-pointer flex justify-between align-middle"
				onClick={itemsHandler}
			>
				<span className="font-bold text-lg my-3 mx-5">{title}</span>
				<span className="my-3 mx-5">⬇️</span>
			</div>
			<div className="cl duration-1000">
				{items.map(
					(item) =>
						showItems && (
							<div
								key={item?.card?.info?.id}
								className="m-5 p-5 flex justify-between border-b-2 border-gray-300 items-start "
							>
								<div className="text-left w-10/12">
									<div className="font-bold text-md">
										{item?.card?.info?.name}- ₹
										{item?.card?.info?.price / 100 ||
											item?.card?.info?.defaultPrice / 100}
									</div>
									<p className="text-xs mt-3 pb-3">
										{item?.card?.info?.description}
									</p>
								</div>
								<div className="w-3/12 ml-4 ">
									<img
										src={CDN_URL + item?.card?.info?.imageId}
										className="rounded-lg w-[118px] h-[96px] mx-auto"
									></img>
									<button className="bg-white text-green-400 text-xs font-bold px-6 py-1 rounded-md shadow-lg relative bottom-5 border border-gray-300 hover:shadow-xl hover:scale-125 duration-150">
										ADD
									</button>
								</div>
							</div>
						)
				)}
			</div>
		</div>
	);
};

export default CategoryList;
