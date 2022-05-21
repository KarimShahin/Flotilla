import logo from "./logo.svg";
import "./App.css";
import MainContent from "./Components/MainContent";
import Navbar from "./Components/Navbar/Navbar";

function App() {
	return (
		<div className="App">
			<Navbar />
			<MainContent />
		</div>
	);
}

export default App;
