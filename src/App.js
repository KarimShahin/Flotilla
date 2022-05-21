import "./App.css";
import MainContent from "./Components/MainContent";
import Layout from "./Components/Layout/Layout";

function App() {
	return (
		<div className="App">
			<Layout>
				<MainContent />
			</Layout>
		</div>
	);
}

export default App;
