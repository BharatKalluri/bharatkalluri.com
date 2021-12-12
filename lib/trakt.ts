import { ITraktTvStats } from '../interfaces';

const { TRAKT_TV_API_KEY } = process.env;

const STATS_ENDPOINT = 'https://api.trakt.tv/users/bharatkalluri/stats';

export const getTraktTvStats = async (): Promise<ITraktTvStats> => {
	if (TRAKT_TV_API_KEY === null || TRAKT_TV_API_KEY === undefined) {
		throw new Error(`No Trakt API key found!`);
	}
	const traktTvStatsRawResponse = await fetch(STATS_ENDPOINT, {
		headers: {
			'trakt-api-key': TRAKT_TV_API_KEY,
		},
	});
	return traktTvStatsRawResponse.json();
};
