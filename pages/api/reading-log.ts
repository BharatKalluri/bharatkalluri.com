import { getReadingLog } from '../../lib/pocket';
import { NextApiRequest, NextApiResponse } from 'next';
import { PocketArticleInfo } from '../../types';

const getReadingLogController = async (_: NextApiRequest, res: NextApiResponse) => {
	const readingLogRecord: Record<string, PocketArticleInfo> = await getReadingLog();
	const readingLogList: PocketArticleInfo[] = Object.values(readingLogRecord);
	return res.status(200).json(readingLogList);
};

export default getReadingLogController;
