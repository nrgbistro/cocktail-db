import type { NextPage } from "next";
import ThemeChanger from "../components/ThemeChanger";
import Search from "./Search";

const Home: NextPage = () => {
	return (
		<div className="w-screen h-screen">
			<Search />
			<ThemeChanger />
		</div>
	);
};

export default Home;
