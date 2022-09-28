import BasicSearch from "./components/BasicSearch";
import Title from "./components/search/components/Title";

function App() {
	return (
		<div className="w-screen h-[85vh] flex flex-col gap-10 justify-center items-center">
			<Title />
			<BasicSearch />
		</div>
	);
}

export default App;
