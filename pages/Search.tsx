import BasicSearch from "../components/search/BasicSearch";
import Title from "../components/search/components/Title";

const Search = () => {
	return (
		<div className="w-screen h-[85vh] flex flex-col gap-16 justify-center items-center">
			<Title />
			<BasicSearch />
		</div>
	);
};

export default Search;
