import "./App.css";
import ShowInfoCards from "./components/ShowInfoCards";
import InfoCardData from "./components/InfoCardData";

function App() {
	return (
		<div className="App">
			<ShowInfoCards InfoCardData={InfoCardData} />
		</div>
	);
}

export default App;
