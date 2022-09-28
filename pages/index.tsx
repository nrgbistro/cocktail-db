import type { NextPage } from "next";
import BasicSearch from "../components/BasicSearch";
import Title from "../components/search/components/Title";

const Home: NextPage = () => {
	return (
		<div className="w-screen h-[85vh] flex flex-col justify-center items-center">
			<Title />
			<BasicSearch />
		</div>
	);
};

export default Home;
