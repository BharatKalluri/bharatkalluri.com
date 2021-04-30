import { NextApiRequest, NextApiResponse } from "next";
import { getNowReading } from "../../lib/open-library";

export default async (_: NextApiRequest, res: NextApiResponse) => {
    console.log(`Fetching book details at ${new Date()}`)
    const bookDataList = await getNowReading();
    return res.status(200).json(bookDataList)
}