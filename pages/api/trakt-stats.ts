import { getTraktTvStats } from "../../lib/trakt";
import { ITraktTvStats } from "../../interfaces";
import { NextApiRequest, NextApiResponse } from "next";

export default async (_: NextApiRequest, res: NextApiResponse) => {
    const traktTvStats: ITraktTvStats = await getTraktTvStats();
    return res.status(200).json(traktTvStats);
};
