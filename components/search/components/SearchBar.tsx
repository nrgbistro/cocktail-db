import { Formik, Field, Form } from "formik";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const SearchBar = () => {
	return (
		<Formik
			initialValues={{
				basicSearch: "",
			}}
			onSubmit={async (values) => {
				await sleep(500);
				alert(JSON.stringify(values, null, 2));
			}}
		>
			{({ isSubmitting }) => (
				<Form className="flex flex-col items-center gap-6">
					<Field
						name="basicSearch"
						placeholder="Enter search terms here..."
						className="w-full h-14 drop-shadow-md rounded-md pl-6"
					/>

					<button
						type="submit"
						disabled={isSubmitting}
						className="m-2 p-4 px-8 text-xl border-2 border-gray-700 rounded-2xl"
					>
						Submit
					</button>
				</Form>
			)}
		</Formik>
	);
};

export default SearchBar;
