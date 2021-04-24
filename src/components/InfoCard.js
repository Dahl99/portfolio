import "./InfoCard.css";

const InfoCard = ({ title, icon, text }) => {
	return (
		<div className="InfoCard">
			<div className="Grid-container">
				<img className="Card-image" src={icon} alt="Cannot display image" />
				<div>
					<h1 className="Card-title">{title}</h1>
					<p className="Card-text">{text}</p>
				</div>
			</div>
		</div>
	);
};

export default InfoCard;
