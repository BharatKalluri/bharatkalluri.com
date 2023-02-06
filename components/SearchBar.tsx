export const SearchBar = (props: { onChangeFn: (e: any) => void }) => {
	return (
		<input
			type="search"
			name="Search"
			id="search"
			className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
			placeholder="Search"
			onChange={props.onChangeFn}
		/>
	);
};
