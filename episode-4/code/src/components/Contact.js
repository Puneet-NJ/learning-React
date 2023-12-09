const Contact = () => {
	return (
		<div className="contact">
			<h1 className="text-3xl m-4 p-4 font-bold">Contact Us page</h1>
			<form>
				<input placeholder="Name" className="m-3 p-2 border border-black" />
				<input placeholder="Message" className="m-3 p-2 border border-black" />
				<button className="border border-black p-2 rounded-md ">Submit</button>
			</form>
		</div>
	);
};

export default Contact;
