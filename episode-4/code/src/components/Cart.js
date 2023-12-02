import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
	const cartItems = useSelector((store) => store.cart.items);
	console.log(cartItems);

	const dispatch = useDispatch();
	const handleClearCart = () => {
		dispatch(clearCart());
	};

	return (
		<div className="w-6/12 text-center mx-auto my-12 p-4 bg-slate-200 rounded-lg shadow-xl">
			<h1 className="font-bold text-2xl underline">Cart</h1>

			{cartItems.map((item) => (
				<div
					key={item?.card?.info?.id}
					className="m-5 p-5 flex justify-between border-b-2 border-gray-300 items-start"
				>
					<div className="text-left w-10/12">
						<div className="font-bold text-md">
							{item?.card?.info?.name}- ₹
							{item?.card?.info?.price / 100 ||
								item?.card?.info?.defaultPrice / 100}
						</div>
						<p className="text-xs mt-3 pb-3">{item?.card?.info?.description}</p>
					</div>
					<div className="w-3/12 ml-4 ">
						<img
							src={CDN_URL + item?.card?.info?.imageId}
							className="rounded-lg w-[118px] h-[96px] mx-auto"
						></img>
					</div>
				</div>
			))}
			{cartItems.length === 0 ? (
				<h1 className="m-3 p-2 font-bold">No items in your cart😕</h1>
			) : (
				<button
					className="bg-slate-600 p-2 rounded-md text-white text-sm shadow-xl hover:scale-110 hover:bg-black duration-150"
					onClick={handleClearCart}
				>
					Clear Cart
				</button>
			)}
		</div>
	);
};

export default Cart;
