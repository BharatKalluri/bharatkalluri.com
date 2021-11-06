import axios, { AxiosResponse } from "axios";
import { PocketArticleInfo, PocketRetrieveResponse, PocketRetrieveResponseValidator } from "../types";
import decodeWith from "../utils/ioTsUtils";

const { POCKET_CONSUMER_KEY, POCKET_ACCESS_TOKEN } = process.env;

const getPocketListEndpoint = "https://getpocket.com/v3/get";

export const getReadingLog = async (): Promise<Record<string, PocketArticleInfo>> => {
	if (!POCKET_CONSUMER_KEY || !POCKET_ACCESS_TOKEN) {
		throw new Error(`Pocket credentials missing`);
	}
	const postPayload = {
		consumer_key: POCKET_CONSUMER_KEY,
		access_token: POCKET_ACCESS_TOKEN,
		favorite: 1,
	};
	const response: AxiosResponse<unknown> = await axios.post(getPocketListEndpoint, postPayload);
	const jsonResponseRaw: unknown = await response.data;
	const jsonResponse: PocketRetrieveResponse = decodeWith(PocketRetrieveResponseValidator)(jsonResponseRaw);
	return jsonResponse.list;
};
