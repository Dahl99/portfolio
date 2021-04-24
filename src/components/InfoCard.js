import "./InfoCard.css";

const InfoCard = ({ title, icon, text }) => {
	return (
		<div className="InfoCard">
			<h1 className="Card-title">{title}</h1>
			<div className="Grid-container">
				<img className="Card-image" src={icon} alt="Cannot display image" />
				<p className="Card-text">{text}</p>
			</div>
		</div>
	);
};

export default InfoCard;
