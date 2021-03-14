import { getTraktTvStats } from "../../lib/trakt";
import { ITraktTvStats } from "../../interfaces";

export default async (_: any, res: any) => {
    const traktTvStats: ITraktTvStats = await getTraktTvStats();
    return res.status(200).json(traktTvStats);
};
