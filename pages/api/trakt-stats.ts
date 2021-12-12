import { getTraktTvStats } from '../../lib/trakt';
import { ITraktTvStats } from '../../interfaces';
import { NextApiRequest, NextApiResponse } from 'next';

const getTraktStatsController = async (_: NextApiRequest, res: NextApiResponse) => {
	const traktTvStats: ITraktTvStats = await getTraktTvStats();
	return res.status(200).json(traktTvStats);
};

export default getTraktStatsController;
