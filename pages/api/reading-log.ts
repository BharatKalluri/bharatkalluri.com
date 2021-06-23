import { getReadingLog } from "../../lib/pocket";
import { NextApiRequest, NextApiResponse } from "next";

const getReadingLogController = async (_: NextApiRequest, res: NextApiResponse) => {
    const readingLogRecord = await getReadingLog();
    const readingLogList = Object.values(readingLogRecord);
    return res.status(200).json(readingLogList);
};

export default getReadingLogController;
