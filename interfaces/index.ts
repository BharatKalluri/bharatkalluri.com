export interface IProjectCardProps {
	name: string;
	description: string;
	link: string;
}

export interface ITraktTvStats {
	movies: {
		plays: number;
		watched: number;
		minutes: number;
		collected: number;
		ratings: number;
		comments: number;
	};
	shows: {
		watched: number;
		collected: number;
		ratings: number;
		comments: number;
	};
	seasons: {
		ratings: number;
		comments: number;
	};
	episodes: {
		plays: number;
		watched: number;
		minutes: number;
		collected: number;
		ratings: number;
		comments: number;
	};
	network: {
		friends: number;
		followers: number;
		following: number;
	};
}
