import "./InfoCard.css";

const InfoCard = () => {
	return (
		<div className="InfoCard">
			<h1 style={{ color: "white" }}>About me</h1>
			<div className="Grid-container">
				<image className="Card-image" />
				<p className="Card-text" />
			</div>
		</div>
	);
};

export default InfoCard;
