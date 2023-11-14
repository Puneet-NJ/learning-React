const MenuList = (props) => {
	const { cateogoryCard } = props;

	return (
		<div className="cateogory-cards">
			<h3>{cateogoryCard?.title}</h3>
			<ul>
				{cateogoryCard?.itemCards?.map((item) => {
					return (
						<li key={item?.card?.info?.id}>
							{item?.card?.info?.name}: Rs.
							{item?.card?.info?.price / 100 ||
								item?.card?.info?.defaultPrice / 100}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default MenuList;
